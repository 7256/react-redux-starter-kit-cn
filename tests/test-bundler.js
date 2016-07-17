// ---------------------------------------
// 测试环境设置
// ---------------------------------------
import 'babel-polyfill'
import sinon from 'sinon'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiEnzyme from 'chai-enzyme'

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiEnzyme())

global.chai = chai
global.sinon = sinon
global.expect = chai.expect
global.should = chai.should()

// ---------------------------------------
// 需要测试的模块
// ---------------------------------------
// 对于使用 karma-webpack-with-fast-source-maps
// 注意: 使用 `new Array()` 而不是一个数组字面量, 因为由于某种原因
// 一个不以 `;` 结尾的数组字面量会引发某些环境的编译失败.
const __karmaWebpackManifest__ = new Array() // eslint-disable-line
const inManifest = (path) => ~__karmaWebpackManifest__.indexOf(path)

// 载入所有的 `tests/**/*.spec.js`
const testsContext = require.context('./', true, /\.spec\.js$/)

// 当初次校验通过后只对修改过的文件运行测试.
const testsToRun = testsContext.keys().filter(inManifest)
;(testsToRun.length ? testsToRun : testsContext.keys()).forEach(testsContext)

// 载入所有的 `src/**/*.js`, 不包括 `main.js` (为了 isparta 覆盖率包裹 reporting)
if (__COVERAGE__) {
  const componentsContext = require.context('../src/', true, /^((?!main).)*\.js$/)
  componentsContext.keys().forEach(componentsContext)
}
