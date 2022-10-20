import type { Plugin } from "vite"
import { resolve } from "node:path"
import { createFilter } from "@rollup/pluginutils"

import type { Options, ESLint } from "./types"
import { name } from "../package.json"
import { checkModule, isVirtualModule, parseRequest, pickESLintOptions, to } from "./utils"

export { Options }

export default function eslintPlugin(rawOptions: Options = {}): Plugin {
  let eslint: ESLint
  let filter: ReturnType<typeof createFilter>
  let formatter: ESLint.Formatter["format"]
  let options: Options
  // If cache is true, it will save all path.
  const fileCache = new Set<string>()

  return {
    name,
    async configResolved(config) {
      options = {
        lintOnStart: false,
        include: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "**/*.vue", "**/*.svelte"],
        exclude: ["**/node_modules/**"],
        // Use vite cacheDir as default
        cacheLocation: resolve(config.cacheDir, ".eslintcache"),
        formatter: "stylish",
        errorOnUnmatchedPattern: false,
        failOnWarning: false,
        failOnError: true,
        ...rawOptions,
      }
    },
    async buildStart() {
      const [error, module] = await to(import(options.eslintPath ?? "eslint"))

      if (error) {
        this.error("Failed to import eslint")
      }

      eslint = new module.ESLint(pickESLintOptions(options))

      filter = createFilter(options.include, options.exclude)

      switch (typeof options.formatter) {
        case "string":
          formatter = (await eslint.loadFormatter(options.formatter)).format
          break
        case "function":
          formatter = options.formatter
          break
        default:
          break
      }

      if (options.lintOnStart && options.include) {
        this.warn("LintOnStart is turned on, and it will check for all matching files.")

        const [error] = await to(checkModule(this, eslint, options.include, options, formatter))
        if (error) this.error(error.message)
      }
    },
    async transform(_, id) {
      const filePath = parseRequest(id)
      const isVirtual = isVirtualModule(filePath)

      if (isVirtual && fileCache.has(filePath)) fileCache.delete(filePath)

      if (!filter(filePath) || (await eslint.isPathIgnored(filePath)) || isVirtual) return null

      if (options.cache) fileCache.add(filePath)

      const [error] = await to(
        checkModule(this, eslint, options.cache ? Array.from(fileCache) : filePath, options, formatter),
      )
      if (error) this.error(error.message)

      return null
    },
  }
}
