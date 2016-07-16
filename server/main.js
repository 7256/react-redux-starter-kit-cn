import Koa from 'koa'
import convert from 'koa-convert'
import webpack from 'webpack'
import webpackConfig from '../build/webpack.config'
import historyApiFallback from 'koa-connect-history-api-fallback'
import serve from 'koa-static'
import proxy from 'koa-proxy'
import _debug from 'debug'
import config from '../config'
import webpackDevMiddleware from './middleware/webpack-dev'
import webpackHMRMiddleware from './middleware/webpack-hmr'

const debug = _debug('app:server')
const paths = config.utils_paths
const app = new Koa()

// 如果 koa-proxy 在配置中被启用的话就启用它.
if (config.proxy && config.proxy.enabled) {
  app.use(convert(proxy(config.proxy.options)))
}

// 这将复写所有的路由请求到根文件 /index.html (忽略文件请求).
// 如果你想要实现同构渲染, 你可能会想移除这个中间件.
app.use(convert(historyApiFallback({
  verbose: false
})))

// ------------------------------------
// 应用 Webpack 热模块替换中间件
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  // 启用 webpack-dev 和 webpack-hot 中间件
  const { publicPath } = webpackConfig.output

  app.use(webpackDevMiddleware(compiler, publicPath))
  app.use(webpackHMRMiddleware(compiler))

  // 为来自 ~/src/static 的静态资源提供服务, 因为 Webpack 不知道这些文件.
  // 这个中间件不需要在开发环境以外启用, 因为这个目录在应用编译时将被复制到 ~/dist.
  app.use(serve(paths.client('static')))
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // 默认为 ~/dist 提供服务. 理想情况下这些文件应该被 web 服务器提供服务而不是此应用服务, 但是这将帮助在生产环境演示此服务.
  app.use(serve(paths.dist()))
}

export default app
