# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.9.1](https://github.com/sagarpanchal/vite-eslint-plugin/compare/v1.9.0...v1.9.1) (2022-10-20)

## 1.9.0 (2022-10-20)


### Features

* add `emitError` replace `throwOnError` ([063109e](https://github.com/sagarpanchal/vite-eslint-plugin/commit/063109e94275da0af28a1eb908a944c35d1860b3))
* add `emitWarning` replace `throwOnWarning` ([2f1b643](https://github.com/sagarpanchal/vite-eslint-plugin/commit/2f1b6438bab42be06d1c37ebb650ca7a802f3314))
* add `eslintPath` option to customize eslint instance ([128fc9a](https://github.com/sagarpanchal/vite-eslint-plugin/commit/128fc9a66e70f99b3cc47056b46dbcd5ca35b73e)), closes [#23](https://github.com/sagarpanchal/vite-eslint-plugin/issues/23)
* add `failOnError`, if there are any errors to make module build fails ([cc72a01](https://github.com/sagarpanchal/vite-eslint-plugin/commit/cc72a01565f46a727de7eff526b71dfecf2c2424)), closes [#24](https://github.com/sagarpanchal/vite-eslint-plugin/issues/24)
* add `failOnWarning`, if there are any warnings when the module build fails ([f2e800f](https://github.com/sagarpanchal/vite-eslint-plugin/commit/f2e800f74fcea34af176a6d82e8867d2f58a9459))
* add `lintOnStart` option ([851be59](https://github.com/sagarpanchal/vite-eslint-plugin/commit/851be59e637a87eed0c687b45349fc69b302a178))
* add `throwOnWarning` and `throwOnError` config options ([0dc6386](https://github.com/sagarpanchal/vite-eslint-plugin/commit/0dc6386f12becc41b7d0c9dc5379d47a6abaf4a8)), closes [#6](https://github.com/sagarpanchal/vite-eslint-plugin/issues/6)
* add cacheLocation settings, remove .eslintcache file ([0df9bd8](https://github.com/sagarpanchal/vite-eslint-plugin/commit/0df9bd888a8c59ee772922193ce47ba96481a865))
* add fix prop, auto fix source code ([b97c77f](https://github.com/sagarpanchal/vite-eslint-plugin/commit/b97c77f57c69ff5d593c355193edf0d03e9af877))
* can pass eslint options ([e19147a](https://github.com/sagarpanchal/vite-eslint-plugin/commit/e19147afb98d381002343a04744595b880d1c803))
* export options types ([82ae866](https://github.com/sagarpanchal/vite-eslint-plugin/commit/82ae866960cb9221dd7f62b3954d7724ed22629a))
* set default options cache: false, include: src/**/*, exclude: /node_modules/ ([99fa887](https://github.com/sagarpanchal/vite-eslint-plugin/commit/99fa887313d1ab2281d4ad2931fb37e28cc7dee1))
* support eslint cache ([33c451c](https://github.com/sagarpanchal/vite-eslint-plugin/commit/33c451c20a7864eda82ea0cc3e3106ebdcbf57f6))
* support vite3 ([3365c24](https://github.com/sagarpanchal/vite-eslint-plugin/commit/3365c24fa0029f2c6ce7eb93707cb3c361131acc))


### Bug Fixes

* add @types/eslint dependency to resolve property type incompleteness ([b73285f](https://github.com/sagarpanchal/vite-eslint-plugin/commit/b73285f40c95bd6387b8e26d5e75d43056f10043)), closes [#31](https://github.com/sagarpanchal/vite-eslint-plugin/issues/31)
* default exclude match ([4892478](https://github.com/sagarpanchal/vite-eslint-plugin/commit/4892478410aa24664f89b24920d4dbd5ee139ee8))
* fix example build error ([143c773](https://github.com/sagarpanchal/vite-eslint-plugin/commit/143c773775aebf804ca25a165584fc8565c34873))
* fix png file emit error ([fa105d6](https://github.com/sagarpanchal/vite-eslint-plugin/commit/fa105d68f1d7d5623c2a87b0b462400842ebc692))
* ignore virtual modules ([f9aa112](https://github.com/sagarpanchal/vite-eslint-plugin/commit/f9aa1124f8fb271779f73eec1d959bcb3d5d5106)), closes [#29](https://github.com/sagarpanchal/vite-eslint-plugin/issues/29) [#32](https://github.com/sagarpanchal/vite-eslint-plugin/issues/32)
* install eslint8 warning ([1c9ced4](https://github.com/sagarpanchal/vite-eslint-plugin/commit/1c9ced434b9a46fc1e40e8954f1430b19c1cd551))
* make sure to export eslint parameter types ([7d7d3b8](https://github.com/sagarpanchal/vite-eslint-plugin/commit/7d7d3b8b9220ec05543ae027cce9076774e49ac6))
* set `include` default value to `/\.(jsx?|tsx?|vue|svelte)$/` ([6d09b28](https://github.com/sagarpanchal/vite-eslint-plugin/commit/6d09b28382a7a3295a1d51bb69589c46bcfe31af))
* set the default value of include with `src/**/*` to prevent errors during build ([babe97e](https://github.com/sagarpanchal/vite-eslint-plugin/commit/babe97ed9ede36d4a8e23c18415928d58dee8cc8)), closes [#3](https://github.com/sagarpanchal/vite-eslint-plugin/issues/3)
* when cache is true, some file change will not trigger cache file update ([f196bab](https://github.com/sagarpanchal/vite-eslint-plugin/commit/f196babd6acd98c0530cd9d4b5f68e61ad2fe0d5))

### [1.8.1](https://github.com/sagarpanchal/vite-eslint/compare/v1.8.0...v1.8.1) (2022-08-16)

### Bug Fixes

- default exclude match ([4892478](https://github.com/sagarpanchal/vite-eslint/commit/4892478410aa24664f89b24920d4dbd5ee139ee8))
  vite-eslint-plugin

## [1.8.0](https://github.com/sagarpanchal/vite-eslint/compare/v1.7.0...v1.8.0) (2022-08vite-eslint-plugin

vite-eslint-pluginvite-eslint-plugin

### Featuresvite-eslint-pluginvite-eslint-plugin

vite-eslint-plugin

- add `eslintPath` option to customize eslint instance ([128fc9a](httpvite-eslint-plugincom/sagarpanchal/vite-eslint/commit/128fc9a66e70f99b3cc47056b46dbcd5ca35b73e)), closes [#23](https://github.com/sagarpanchal/vite-eslint/issues/23)
- add `lintOnStart` option ([851be59](https://github.com/sagarpanchal/vite-eslint/commit/851be59e637vite-eslint-pluginb45349fc69b302a178))vite-eslint-plugin
  vite-eslint-plugin

### Bug Fixesvite-eslint-plugin

vite-eslint-plugin

- ignore virtual modules ([f9aa112](https://github.com/sagarpanchavite-eslint-pluginnt/commit/f9aa1124f8fb271779f73eec1d959bcb3d5d5106)), closes [#29](https://github.com/sagarpanchal/vite-eslint/issues/29) [#32](https://github.com/sagarpanchal/vite-eslint/issues/32)
  vite-eslint-plugin

## [1.7.0](https://github.com/sagarpanchal/vite-eslint/compare/v1.vite-eslint-plugin0) (2022-07-19)

vite-eslint-plugin

### Features

- support vite3 ([3365c24](https://github.com/sagarpanchal/vite-eslint/commit/3365c24fa0029f2c6ce7eb93707cb3c361131acc))

### [1.6.1](https://github.com/sagarpanchal/vite-eslint/compare/v1.6.0...v1.6.1) (2022-05-19)vite-eslint-pluginvite-eslint-plugin

vite-eslint-plugin

### Bug Fixesvite-eslint-plugin

vite-eslint-plugin

- add @types/eslint dependency to resolve property type incompletenevite-eslint-pluginf](https://github.com/sagarpanchal/vite-eslint/commit/b73285f40c95bd6387b8e26d5e75d43056f10043)),vite-eslint-plugin1](https://github.com/sagarpanchal/vite-eslint/issvite-eslint-plugin
- make sure to export eslint parameter types ([7d7d3b8](https://githuvite-eslint-pluginpanchal/vite-eslint/commit/7d7d3b8b9220ec05543ae027cce9076774e49ac6))
  vite-eslint-plugin

## [1.6.0](https://github.com/sagarpanchal/vite-eslint/compare/v1.5.2...v1.6.0) (2022-04-25)vite-eslint-plugin

vite-eslint-pluginvite-eslint-plugin

### Featuresvite-eslint-plugin

- add `emitError` replace `throwOnError` ([0vite-eslint-pluginps://github.com/sagarpanchal/vite-eslint/commit/063109e94275da0af28a1eb908a944c35d1860b3))
- add `emitWarning` replace `throwOnWarning` ([2f1b643](https://github.com/sagarpanchal/vite-eslint/commit/2f1b6438bab42be06d1c37ebb650ca7a802f3314))
- add `failOnError`, if there are any errors to make module build fails ([cc72a01](https://github.com/sagarpanchal/vite-eslint/commit/cc72a01565f46a727de7eff526b71dfecf2c2424)), closes [#24](https://github.com/sagarpanchal/vite-eslint/issues/24)
- add `failOnWarning`, if there are any warnings when the module build fails ([f2e800f](https://github.com/sagarpanchal/vite-eslint/commit/f2e800f74fcea34af176a6d82e8867d2f58a9459))
  vite-eslint-plugin

### Bug Fixes

vite-eslint-plugin

- when cache is true, some file change will not trigger cache file update ([f196bab](https://github.com/sagarpanchal/vite-eslint/commit/f196babd6acd98c0530cd9d4b5f68e61ad2fe0d5))

### [1.5.2](https://github.com/sagarpanchal/vite-eslint/compare/v1.5.1...v1.5.2) (2022-04-21)

vite-eslint-pluginvite-eslint-plugin

### Bug Fixesvite-eslint-plugin

- install eslint8 warning ([1c9ced4](https://github.com/sagarpanchal/vite-eslint/commit/1c9ced434b9a46fc1e40e8954f1430b19c1cd551))

### [1.5.1](https://github.com/sagarpanchal/vite-eslint/compare/v1.5vite-eslint-plugin) (2022-04-20)vite-eslint-pluginvite-eslint-plugin

### Bug Fixesvite-eslint-plugin

- set `include` default value to `/\.(jsx?|tsx?|vue|svelte)$/` ([6d09b28](https://github.com/sagarpanchal/vite-eslint/commit/6d09b28382a7a3295a1d51bb69589c46bcfe31af))

## [1.5.0](https://github.com/sagarpanchal/vite-eslint/compvite-eslint-plugin..v1.5.0) (2022-04-20)

### Featuresvite-eslint-plugin

- can pass eslint options ([e19147a](https://github.com/sagarpanchal/vite-eslint/commit/e19147afb98d381002343a04744595b880d1c803))
- set default options cache: false, include: src/\*_/_, exclude: /node_modules/ ([99fa887](https://github.com/sagarpanchal/vite-eslint/commit/99fa887313d1ab2281d4ad2931fb37e28cc7dee1))
  vite-eslint-pluginvite-eslint-plugin

## [1.4.0](https://github.com/sagarpanchal/vite-eslint/compare/v1.3.0...v1.4.0) (2022-04vite-eslint-plugin

### Featuresvite-eslint-plugin

- export options types ([82ae866](https://github.com/sagarpanchal/vite-eslint/commit/82ae866960cb9221dd7f62b3954d7724ed22629a))

## [1.3.0](https://github.com/sagarpanchal/vite-eslint/compare/v1.2.0...v1.3.0) (202vite-eslint-plugin

vite-eslint-plugin

### Featuresvite-eslint-pluginvite-eslint-plugin

vite-eslint-plugin

- add `throwOnWarning` and `throwOnError` config options ([0dc6386](https://github.com/sagarpanchal/vite-eslint/commit/0dc6386f12becc41b7d0c9dc5379d47a6abaf4a8)), closes [#6](https://github.com/sagarpanchal/vite-eslint/issues/6)

## [1.2.0](https://github.com/sagarpanchal/vite-eslint/compare/v1.1.3...v1.2.0) (2021-06-22)

vite-eslint-plugin

### Features

vite-eslint-plugin

- add cacheLocation settings, remove .eslintcache file ([0df9bd8](https://github.com/sagarpanchal/vite-eslint/commit/0df9bd888a8c59ee772922193ce47ba96481a865))

### [1.1.3](https://github.com/sagarpanchal/vite-eslint/compare/v1.1.2...v1.1.3) (2021-06-17)

vite-eslint-plugin

### Bug Fixes

vite-eslint-plugin

- fix png file emit error ([fa105d6](https://github.com/sagarpanchal/vite-eslint/commit/fa105d68f1d7d5623c2a87b0b462400842ebc692))

### [1.1.2](https://github.com/sagarpanchal/vite-eslint/compare/v1.1.1...v1.1.2) (2021-06-10)

vite-eslint-plugin

### Bug Fixes

vite-eslint-plugin

- set the default value of include with `src/**/*` to prevent errors during build ([babe97e](https://github.com/sagarpanchal/vite-eslint/commit/babe97ed9ede36d4a8e23c18415928d58dee8cc8)), closes [#3](https://github.com/sagarpanchal/vite-eslint/issues/3)

### [1.1.1](https://github.com/sagarpanchal/vite-eslint/compare/v1.1.0...v1.1.1) (2021-05-27)

vite-eslint-plugin

## [1.1.0](https://github.com/sagarpanchal/vite-eslint/compare/v1.0.5...v1.1.0) (2021-02-22)vite-eslint-plugin

### Featuresvite-eslint-plugin

- add fix prop, auto fix source code ([b97c77f](https://github.com/sagarpanchal/vite-eslint/commit/b97c77f57c69ff5d593c355193edf0d03e9af877))
- support eslint cache ([33c451c](https://github.com/sagarpanchal/vite-eslint/commit/33c451c20a7864eda82ea0cc3e3106ebdcbf57f6))
  vite-eslint-plugin

### [1.0.5](https://github.com/sagarpanchal/vite-eslint/compare/v1.0.4...v1.0.5) (2021-02-19)

vite-eslint-plugin

### [1.0.4](https://github.com/sagarpanchal/vite-eslint/compare/v1.0.3...v1.0.4) (2021-02-19)

vite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-pluginvite-eslint-plugin
