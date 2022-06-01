import hello from './another-file.js'

console.log(hello('Antonio'))

// import.meta.resolve('./another-file.js')
// node --experimental-import-meta-resolve .

// import {createRequire} from 'module'
// const require = createRequire(import.meta.url)
// console.log(require.resolve('./another-file.js'))
