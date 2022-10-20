import type { PluginContext } from "rollup"
import { existsSync } from "node:fs"

import type { Options, ESLint } from "./types"

export function parseRequest(id: string) {
  return id.split("?", 2)[0]
}

export function isVirtualModule(file: string) {
  return !existsSync(file)
}

export function pickESLintOptions(options: Options): ESLint.Options {
  const { eslintPath, lintOnStart, include, exclude, formatter, failOnError, failOnWarning, ...eslintOptions } = options
  return eslintOptions
}

export async function to<R, E = Error>(promise: Promise<R>) {
  return promise.then<[null, R]>((data) => [null, data]).catch<[E, undefined]>((error: E) => [error, undefined])
}

export async function checkModule(
  ctx: PluginContext,
  eslint: ESLint,
  files: string | string[],
  options: Options,
  formatter: ESLint.Formatter["format"],
) {
  const [error, report] = await to(eslint.lintFiles(files))
  if (error) return Promise.reject(error)

  const message = await formatter(report)
  if (report?.length) console.log(message)

  // Throw warning message
  const hasWarning = report.some((item) => item.warningCount > 0)
  if (hasWarning && options.failOnWarning) ctx.error(message)

  // Throw error message
  const hasError = report.some((item) => item.errorCount > 0)
  if (hasError && options.failOnError) ctx.error(message)

  return Promise.resolve()
}
