import webpack from 'webpack'
import cssnano from 'cssnano'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from '../config'
import _debug from 'debug'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths
const {__DEV__, __PROD__, __TEST__} = config.globals

debug('Create configuration.')
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    root: paths.client(),
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {}
}
// ------------------------------------
// 入口点
// ------------------------------------
const APP_ENTRY_PATHS = [
  'babel-polyfill', // 译注: 使用 babel-polyfill 抹平浏览器差异, 提升兼容性
  paths.client('main.js')
]

webpackConfig.entry = {
  app: __DEV__
    ? APP_ENTRY_PATHS.concat(`webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`)
    : APP_ENTRY_PATHS,
  vendor: config.compiler_vendor
}

// ------------------------------------
// 打包输出
// ------------------------------------
webpackConfig.output = {
  filename: `[name].[${config.compiler_hash_type}].js`,
  path: paths.dist(),
  publicPath: config.compiler_public_path
}

// ------------------------------------
// 插件
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),       // 译注: 定义一些编译时使用的全局变量, 主要用于代码优化, 例如删除一些非生产环境需要的代码(waring, debug之类)
  new HtmlWebpackPlugin({                         // 译注: 使用模板生成最终的 HTML 页面
    template: paths.client('index.html'),         // 模板位置
    hash: false,                                  // 是否对文件名 hash 化, 即在文件名中包含 hash 版本号
    favicon: paths.client('static/favicon.ico'),  // 网站图片路径
    filename: 'index.html',                       // 生成的文件名
    inject: 'body',                               // 将脚本注入的位置(可填 false, 'head', 'body', 其他值将被视为 'body')
    minify: {                                     // 压缩参数
      collapseWhitespace: true                    // 清理空格
    }
  })
]

if (__DEV__) {
  debug('Enable plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),     // 模块热替换, 不影响 state
    new webpack.NoErrorsPlugin()                  // 跳过编译时出错的代码并记录
  )
} else if (__PROD__) {
  debug('Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).')
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(), // 根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小
    new webpack.optimize.DedupePlugin(),          // 打包的时候删除重复或者相似的文件
    new webpack.optimize.UglifyJsPlugin({         // 压缩js
      compress: {                                 // 压缩选项
        unused: true,                             // 是否移除未使用到变量
        dead_code: true,                          // 是否移除永远不会执行的代码
        warnings: false                           // 是否移除警告
      }
    })
  )
}

// Don't split bundles during testing, since we only want import one bundle
// 测试期间不要将打包文件分离, 因为我们只想导入一个绑定包
if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({     // 提取公共模块
      names: ['vendor']
    })
  )
}

// ------------------------------------
// 预加载器
// ------------------------------------
/*
[ 注意 ]
我们不再使用 `eslint-loader` 加载器因为它严重影响了大项目的构建时间.
`npm run lint` 脚本依然存在以帮助对编译发布进程 (比如使用 CI 进行发布),
值得推荐的是, 你应该在你的 IDE 中使用一个校验插件取代这个加载器.

如果你希望继续使用这个加载器, 你可以将取消下面代码的注释,
然后运行 `npm i --save-dev eslint-loader`. 这部分代码会在以后的发布版本中移除.

webpackConfig.module.preLoaders = [{
  test: /\.(js|jsx)$/,
  loader: 'eslint',
  exclude: /node_modules/
}]

webpackConfig.eslint = {
  configFile: paths.base('.eslintrc'),
  emitWarning: __DEV__
}
*/

// ------------------------------------
// 加载器
// ------------------------------------
// JavaScript / JSON
webpackConfig.module.loaders = [{
  test: /\.(js|jsx)$/,                            // 文件类型匹配
  exclude: /node_modules/,                        // 排除的文件夹
  loader: 'babel',                                // 使用 babel 加载器
  query: {                                        // 使用的加载器参数
    cacheDirectory: true,                         // 缓存文件夹
    plugins: ['transform-runtime'],               // babel 插件, 自动转换引入 polyfill
    presets: ['es2015', 'react', 'stage-0'],      // 预设 es2015/react/es7 语法解析
    env: {                                        // 针对不同环境的设置
      production: {                               // 生产环境
        presets: ['react-optimize']               // react 优化预设
      }
    }
  }
},
{
  test: /\.json$/,
  loader: 'json'
}]

// ------------------------------------
// 样式加载器
// ------------------------------------
// 我们使用在 `postcss` 加载器中使用 `cssnano`,
// 因此我们要告诉 `css-loader` 不要重复地压缩样式
const BASE_CSS_LOADER = 'css?sourceMap&-minimize'

// 将任意的样式需要被当做 CSS 模块的包名添加到这儿.
// 这些路径会被合并成一个单独的正则.
const PATHS_TO_TREAT_AS_CSS_MODULES = [
  // 'react-toolbox', (示例)
]

// 如果配置启用了 CSS 模块, 久将本工程内的所有样式都视为 CSS 模块
if (config.compiler_css_modules) {
  PATHS_TO_TREAT_AS_CSS_MODULES.push(
    paths.client().replace(/[\^\$\.\*\+\-\?=!:\|\\\/\(\)\[\]\{},]/g, '\\$&') // eslint-disable-line
  )
}

const isUsingCSSModules = !!PATHS_TO_TREAT_AS_CSS_MODULES.length
const cssModulesRegex = new RegExp(`(${PATHS_TO_TREAT_AS_CSS_MODULES.join('|')})`)

// 需要被视为 CSS 模块的样式的加载器.
if (isUsingCSSModules) {
  const cssModulesLoader = [                            // 定义 CSS 模块加载器
    BASE_CSS_LOADER,                                    // CSS 基础加载器, 已经由 postcss 的 cssnano 插件进行压缩
    'modules',                                          // 定义 CSS 模块
    'importLoaders=1',                                  // 载入其他加载器
    'localIdentName=[name]__[local]___[hash:base64:5]'  // CSS 模块名称转换规则: 原名称 + 模块名 + hash 值
  ].join('&')

  webpackConfig.module.loaders.push({
    test: /\.scss$/,                                     // 匹配 .scss 后缀文件
    include: cssModulesRegex,                            // 匹配是否符合 CSS 模块正则
    loaders: [
      'style',                                           // 将 CSS 转换为内部样式
      cssModulesLoader,
      'postcss',                                         // postcss 加载器
      'sass?sourceMap'                                   // sass 加载器, 并启用 soureMap 功能
    ]
  })

  webpackConfig.module.loaders.push({
    test: /\.css$/,
    include: cssModulesRegex,
    loaders: [
      'style',
      cssModulesLoader,
      'postcss'
    ]
  })
}

// 不应该被视为 CSS 模块的样式的加载器.
const excludeCSSModules = isUsingCSSModules ? cssModulesRegex : false   // 是否需要排除 CSS 模块
webpackConfig.module.loaders.push({
  test: /\.scss$/,
  exclude: excludeCSSModules,
  loaders: [
    'style',
    BASE_CSS_LOADER,
    'postcss',
    'sass?sourceMap'
  ]
})
webpackConfig.module.loaders.push({
  test: /\.css$/,
  exclude: excludeCSSModules,
  loaders: [
    'style',
    BASE_CSS_LOADER,
    'postcss'
  ]
})

// ------------------------------------
// 样式配置
// ------------------------------------
webpackConfig.sassLoader = {                              // sass 加载器设置, 也可以在 loader 中定义 query 项
  includePaths: paths.client('styles')                    // 需要默认引入的样式目录
}

webpackConfig.postcss = [                                 // postcss 加载器插件定义
  cssnano({                                               // cssnano 插件配置项
    autoprefixer: {                                       // 自动添加浏览器前缀
      add: true,                                          // 是否插入缺少的前缀
      remove: true,                                       // 是否删除多余的前缀
      browsers: ['last 2 versions']                       // 浏览器列表, [browser-list](https://github.com/ai/browserslist)
    },
    discardComments: {                                    // 删除注释
      removeAll: true                                     // 是否删除所有注释
    },
    discardUnused: false,                                 // 是否删除未在页面中使用的样式 (不安全)
    mergeIdents: false,                                   // 是否清理一些样式相同但选择器不同的样式 (不安全)
    reduceIdents: false,                                  // 是否缩短样式名称 (不安全)
    safe: true,                                           // 是否只开启默认安全的设置
    sourcemap: true                                       // 是否启用 sourcemap 功能
  })
]

// 文件加载器, 主要用于加载字体和图片等资源
/* eslint-disable */
webpackConfig.module.loaders.push(
  { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
  { test: /\.otf(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
  { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
  { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' }
)
/* eslint-enable */

// ------------------------------------
// 最终配置
// ------------------------------------
// 当我们不知道公共路径时 (译注: 即发布到站点后需要访问资源的路径前缀, 类似服务器端 CONTEXT PATH 的概念),
// (我们只能在开发环境启用 HMR 时才知道, 也就是根目录 '/')
// 我们需要使用 `extractTextPlugin` 插件来解决这个问题:
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
if (!__DEV__) {
  debug('Apply ExtractTextPlugin to CSS loaders.')
  webpackConfig.module.loaders.filter((loader) =>
    // 译注: 查找使用了 css 加载器的加载器 (听着有点儿绕, 但 webpack 中的确是在 loaders 配置中定义子 loaders)
    loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[0]))
  ).forEach((loader) => {
    const [first, ...rest] = loader.loaders
    // 译注: 查阅代码, 实际运行时 first 应为 'style', 未提取的 CSS 在第一个参数处理, 第二个参数为实际处理并导出文本的加载器
    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
    // 译注: 由于使用了 ExtractTextPlugin 插件, 因此删除所有原始的加载器
    Reflect.deleteProperty(loader, 'loaders')
  })

  webpackConfig.plugins.push(
    // 定义打包的样式文件名
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true                                     // 整合整合所有的样式到一个文件中, 否则只整合初始组件需要的样式
    })
  )
}

export default webpackConfig
