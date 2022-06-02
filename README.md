# cjs-vs-esm
A brief look into CJS vs ESM.

## Description
Common JS(CJS) and EcmaScript Modules (ESM) are not the only module systems in the JS ecosystem. But we can consider them the two most important ones.

CJS is the most known system. But with the arrival of ESM we need to start checking its differences.

## TL;DR

### CJS
* uses `require` and `module.exports` as API
* works synchronously
* can use ESM files if these have `.mjs` extension
* you can use `import` only as `dynamic import`

### Faux ESM
* looks like ESM
* uses `export` and `import` as API
* translates/compiles to CJS in Node.js
  * transpiled code with Babel
  * Typescript sometimes 😅

### ESM
* uses `export` and `import` as API
* works asynchronously
* can use CJS files if these have `.cjs` extension

## Resources

[What Are CJS, AMD, UMD, and ESM in Javascript?](https://irian.to/blogs/what-are-cjs-amd-umd-and-esm-in-javascript/)

[ES6 In Depth Articles](https://hacks.mozilla.org/category/es6-in-depth/)

[ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

[Dynamic import()](https://v8.dev/features/dynamic-import)
