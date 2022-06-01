module.exports = () => new Date().toISOString()

// if (require.main === module) {
//     console.log(`I was called as main module: ${new Date().toDateString()}`)
// } else {
//     module.exports = () => `I was called as a dependency: ${new Date().toISOString()}`
// }
