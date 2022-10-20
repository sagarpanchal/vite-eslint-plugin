import type { PluginContext } from "rollup"
import { existsSync } from "node:fs"

import type { Options, ESLint, OutputFixes } from "./types"

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
  outputFixes: OutputFixes,
) {
  const [error, lintResult] = await to(eslint.lintFiles(files))
  if (error) return Promise.reject(error)

  // Auto fix error
  if (options.fix && lintResult) {
    const [error] = await to(outputFixes(lintResult))
    if (error) return Promise.reject(error)
  }

  const hasWarnings = lintResult.some((item) => item.warningCount > 0)
  const hasErrors = lintResult.some((item) => item.errorCount > 0)
  const stdout = await formatter(lintResult)

  // Print formatted lint result
  if (stdout?.length) {
    console.log("")
    ctx.warn("📃 ESLint problems")
    console.log(stdout)
  }

  // Throw warning message
  if (hasWarnings && options.failOnWarning) {
    return ctx.error("🚨 Check console for ESLint warning(s) 👆")
  }

  // // Throw error message
  if (hasErrors && options.failOnError) {
    return ctx.error("🚨 Check console for ESLint error(s) 👆")
  }

  // if (hasWarning && options.failOnWarning) {
  //   const warnings = await (async () => {
  //     const warningReport = lintResult.map((item) => ({
  //       ...item,
  //       messages: item.messages.filter((message) => message.severity === 1),
  //     }))
  //     return formatter(warningReport)
  //   })()

  //   console.log("")
  //   ctx.error(warnings)
  // }

  // if (hasError && options.failOnError) {
  //   const errors = await (async () => {
  //     const errorReport = lintResult.map((item) => ({
  //       ...item,
  //       messages: item.messages.filter((message) => message.severity === 2),
  //     }))
  //     return formatter(errorReport)
  //   })()

  //   console.log("")
  //   ctx.error(errors)
  // }

  return Promise.resolve()
}
