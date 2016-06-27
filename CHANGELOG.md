变更记录
====

3.0.0-alpha.0
-------------

### 改进
* 迁移到分形项目结构, 非常感谢 [justingreenberg](https://github.com/justingreenberg). 查看 https://github.com/davezuko/react-redux-starter-kit/pull/684 获取更多细节和讨论.

2.0.0
-----

### 特性
* 升级 `eslint-plugin-react` 至 `^5.0.0`
* 升级 `fs-extra` 至 `^0.28.0`

### 改进
* 更新 `createStore` 的使用语法以匹配 `redux@^3.1.0`
* 清理 `HomeView` 中的 `connect` 装饰器
* 清理 `HomeView` 中的 flow 预设类型

2.0.0-alpha.5
-------------

### 特性
* 升级 `flow-bin` 至 `0.23.0`
* 升级 `fs-extra` 至 `^0.27.0`

### 改进
* Karma 配置项小幅清理
* 在蓝图中新增缺失的节点风格索引文件

### 修复
* 调整 webpack 初始化清单防止某些环境中语法错误 (https://github.com/davezuko/react-redux-starter-kit/issues/572)

2.0.0-alpha.4
-------------

### 特性
* 升级 `react` 至 `^15.0.0`
* 升级 `react-dom` 至 `^15.0.0`
* 升级 `react-addons-test-utils` 至 `^15.0.0`
* 升级 `eslint-plugin-flow-vars` 至 `^0.3.0`

### 改进
* 更新 `npm run deploy` 为环境无关 (不再强制为 `production`)
* 添加 `npm run deploy:prod` (强制为 `production`, 与以前的 `npm run deploy` 表现一致)
* 添加 `npm run deploy:dev` (强制为 `development`)

### 修复
* 移除 Flow 中的 `strip_root` 选项以支持 Nuclide
* 更新 webpack 开发配置使用正确的 `public_path`


2.0.0-alpha.3
-------------

### 特性
* 升级 `flow-interfaces` 至 `^0.6.0`

### 改进
* 把生产环境构建也需要的依赖从 devDependencies 移动到正常的 dependencies
### 修复
* 生产环境配置现在生成绝对路径而不是相对路径的资源

### 淘汰
* 由于性能原因移除 `eslint-loader`

2.0.0-alpha.2
-------------

### 特性
* 升级 `eslint` 至 `^2.4.0`
* 升级 `babel-eslint` 至 `^6.0.0-beta.6`
* 升级 `better-npm-run` 至 `0.0.8`
* 升级 `phantomjs-polyfill` 至 `0.0.2`
* 升级 `karma-mocha-reporter` 至 `^2.0.0`
* 升级 `webpack` 至 `^1.12.14`
* 升级 `redux-thunk` 至 `^2.0.0`

### 改进
* 为蓝图更方便地导入添加 `index.js` 文件

### 修复
* 移除一些 `cssnano` 可能会引起 css 模块冲突的选项
* 更新流程以更好地理解全局 webpack 定义值

2.0.0-alpha.1
-------------

### 特性
* 升级 `react-router-redux` 从 `^4.0.0-beta` 至 `^4.0.0`

2.0.0-alpha.0
-------------

### 特性
* 集成 [redux-cli](https://github.com/SpencerCDixon/redux-cli)
* 添加 [Flowtype](http://flowtype.org/) 支持
* 添加 `npm run flow:check` 脚本
* 添加 [chai-enzyme](https://github.com/producthunt/chai-enzyme)
* 生产环境添加 `babel-plugin-transform-react-constant-elements`
* 生产环境添加 `babel-plugin-transform-react-remove-prop-types`
* 添加 `eslint-plugin-flowvars`
* 添加 `better-npm-run`
* 添加 `.otf` 文件的加载器
* 为本地开发环境添加 `nodemon` 服务器
* 添加占位网站图标, `humans.txt`, and `robots.txt`
* 替换 `express` 为 `koa@^2.0.0-alpha`
* 添加 `koa-proxy` 配置支持
* 添加 `koa-conntect-history-api-fallback`
* 升级 `eslint` 至 `^2.0.0`
* 升级 `babel-eslint` 至 `^5.0.0`
* 升级 `eslint-plugin-react` 至 `^4.0.0`
* 升级 `yargs` 至 `^4.0.0`
* 升级 `html-webpack-plugin` 从 `^1.6.1` 至 `^2.7.1`
* 升级 `react-router` 至 `^2.0.0`
* 替换 `redux-simple-router` 为 `react-router-redux`
* 替换 `phantomjs` 为 `phantomjs-prebuilt`
* 替换 Karma 规范报告器 为 mocha 报告器

### 改进
* Webpack 优化插件现在只在生产环境正确使用
* 添加同时使用 CSS 模块和正常 CSS 的能力
* 为有选择性的、更快的测试重建添加 `karma-webpack-with-fast-source-maps`
* 简化基于环境的 webpack 配置项
* 修复 CSS 被 `cssnano` 和 `css-loader` 二次压缩的问题
* 更新 `cssnano` 默认不使用不安全的选项
* Redux 开发工具现在查找可用的浏览器插件
* 添加 webpack 测试替换 Karma 中文件匹配替换的入口点
* 使 Webpack 编译脚本更通用以接受任何 webpack 配置文件
* 添加简单的计数器 redux 模块的测试
* 替换 `react-hmre` 为 `redbox-react` 和 `react-transform-hmr`
* 禁用编译过程中多余的压缩警告
* 更新路由定义文件以访问 redux store
* 更细服务器启动信息使链接可点击
* `ExtractTextPlugin` 现在无论 HMR 是否禁用都可以正确使用
* `npm run deploy` 现在回清空 `~/dist` 文件夹
* 其他的文件夹结构改善
* 删除不必要的 Karma `bin` 文件
* 删除不必要的 `NotFoundView`
* 重新启用 `.jsx` 文件类型支持
* 指定兼容的 Node 和 NPM 引擎

### 修复
* 修复一些只有开发环境使用的代码没有在生产环境打包中剥离
* 为支持 Windows 用户添加 rimraf 以清理 `~/dist` 目录
* 为 Windows 用户修复其他路径相关问题
* 为 Sass 文件修复 source maps 功能问题
* 更新服务器启动调试信息显示正确的主机地址

### 淘汰
* 移除 `redux-actions`
* 移除 `dotenv`
* 移除 `add-module-exports` babel 插件

1.0.0
-----

### 特性
* 升级 Babel 5 到 Babel 6 哈哈
* 添加脚本编译过程中将静态资源从 `~src/assets` 复制到 `~/dist`
* 添加 CSS 模块 (可以在配置文件中切换启用/禁用)
* 为 CSS 启用 source maps 功能
* 添加 `postcss-loader`
* 添加 `debug` 模块替代 `console.log`
* 添加 `json-loader`
* 为 `(png|jpg)` 文件添加 `url-loader`
* 添加 `redux-actions` 和演示
* 升级 `redux-devtools` 从 `^3.0.0-beta` 至 `^3.0.0`
* 升级 `redux-simple-router` 从 `^0.0.10` 至 `^1.0.0`
* 升级 `isparta` 从 `^2.0.0` 至 `^3.0.0`
* 替换 `karma-sinon-chai` 为 `karma-chai-sinon` 修复同类依赖问题
* 添加异步操作样板
* 添加例如 `composes` 风格在 `HomeView` 演示 CSS 模块
* 添加 `lint:fix` npm 脚本
* 添加 CONTRIBUTING 文档
* 添加预占网站图标

### 改进
* 重构应用遵循鸭式结构
* 改进配置是如何决定什么时候应用特定的模块热替换 Babel 转换插件的
* 替换特定的别名为 `resolve.root`
* 重命名 karma 配置文件为更广为人知的 `karma.conf`
* 使 `CoreLayout` 变成一个纯粹的 (无状态) 组件
* 重命名调试命名空间 `kit:*` 为 `app:*`
* 标准化编码规范
* 添加更方便地指定环境相关的配置覆盖的能力
* 扩展可用的配置选项
* 改进冗余的文档
* 重构分离 express 服务中 webpack 中间件为不同的文件

### 修复
* 修复开发工具导入使生产环境构建时不再引入
* 在根标签、节点和 `core.scss` 文件中添加 CSS 最佳实践
* 由于在生产环境构建失败禁用清单提取
* 更新 Webpack 开发服务器，在实时开发过程中使用明确的 publicPath 配置
* 修复 Karma 在监听模式中文件变化后将允许测试两次的问题

### 淘汰
* 移除 `eslint-config-airbnb`
* 停止支持 Node `^4.0.0`

0.18.0
-----

### 特性
* 替换 `webpack-dev-server` 为 `Express` 和 webpack 中间件
* 替换 `redux-router` 为 `redux-simple-router`
* 使用 `postcss-loader` 用于自动添加前缀而不是 `autoprefixer-loader`
* 配置项现在会警告你缺失公共绑定依赖包
* 升级 `react-router` 从 `1.0.0-rc1` 至 `^1.0.0`
* 升级 `css-loader` 从 `0.21.0` 至 `0.23.0`
* 升级 `eslint-config-airbnb` 从 `0.1.0` 至 `^1.0.0`
* 升级 `karma-spec-reporter` 从 `0.0.21` 至 `0.0.22`
* 升级 `extract-text-webpack-plugin` 从 `^0.8.0` 至 `^0.9.0`

### 改进
* 编译 `index.html` 现在被压缩了
* 内容哈希值现在被直接注入到文件名中而不是追加为查询字符串
* 更好地报告 webpack 构建状态
* 使用对象风格的 `sass-loader` 配置而不是行内查询字符串
* 重命名 `test:lint` 任务为 `lint:tests`
* 部分文档改进

### 修复
* 内容哈希值现在在 CSS 绑定包中更深入地去重
* Karma 插件现在可以自动载入，而不是要明确地定义
* 移除 `Root` 容器中多余的 div 包装
* 修复笨拙的命名参数为 `createReducer` 工具
* 添加缺失的别名为 `~/src/store`

0.17.0
------

### 特性
* Karma 覆盖率测试现在生成正确的覆盖率报告、
* 添加 `chai-as-promised`
* 添加 `npm run lint` 脚本以检验所有的 `~/src` 代码
* 添加 `npm run test:lint` 脚本以校验 `~/tests` 目录下所有的 `*.spec.js` 文件
* 更新 `npm run deploy` to 以明确地在源码上运行校验
* 更新 `dotenv` (感谢 [dougvk](https://github.com/dougvk))

### 改进
* 重命名应用程序入口点 `index.js` 为 `app.js` (明确意图并帮助覆盖率报告)
* 重构示例计数器中的常量和操作到他们适当的位置 (感谢 [kyleect](https://github.com/kyleect))
* 运行 `npm run dev:nw` 时的开发工具现在占满整个屏幕 (感谢 [jhgg](https://github.com/jhgg))
* Webpack 不再运行一个 eslint pre-loader (开发时清理控制台信息)
* 移动测试用例到他们自己的目录Moved tests into their own directory (缓和代码校验和组织问题)
* 重命名 `stores` 为更直观的 `store`
* Webpack-dev-server 现在使用一个可配置的主机名 (感谢 [waynelkh](https://github.com/waynelkh))
* Sass-loader 现在被它的加载器定义单独配置
* 升级 `redux-devtools` 从 `^2.0.0` 至 `^3.0.0`
* 升级 `react-transform-catch-errors` 从 `^0.1.0` 至 `^1.0.0`

### 修复
* 修复 .editorconfig 缺失一个导致的它在所有 IDE 中都不生效的设置
* 清理冗余的代码校验错误


0.16.0
------

### 特性
* 添加 `redux-router` (感谢 [dougvk](https://github.com/dougvk))
* 添加 `redux-thunk` 中间件
* 添加字体文件加载器 (感谢 [nodkz](https://github.com/nodkz))
* 添加链接加载器
* 升级 React 依赖至稳定版本 `^0.14.0`
* 升级 `react-redux` 至 `^4.0.0`

### 改进
* 清理未使用的配置设置
* configureStore 配置项不再依赖于一个全局变量来决定是否启用开发工具中间件
* 移除未使用的不变 和 ImmutableJS 公共绑定依赖包
* 移除未使用的 `webpack-clean` 插件
* 调整 `.js` 加载器配置是它更容易地添加 `json-loader`
* 更新计数器示例演示 `mapDispatchToProps`
* 强制包含 `components` 文件夹
* 文档改进

0.15.2
------

### 修复
* 移除未使用和损坏的提供给 `HtmlWebpackPlugin` 配置项的 "minify" 属性

0.15.1
------

### 修复
* 开发服务器现在使用模块热替换载入正确的 Webpack 配置
* Redbox-React 错误捕获现在在开发环境正确加载

0.15.0
------

### 修复
* 模块热替换现在在简单编译后一直启用. 你现在可以编译开发环境构建，这将不会再经常去 ping 一个不存在的开发服务器
* `react-transform-hmr` 现在只在模块热替换启用时运行

### 改进
* 单元测试现在只会在监听模式下明确请求时运行. 这使在任何环境中运行测试用例更方便而不必在 Karma 中痛苦地使用 `singleRun` 标识
* 现在只有一份 webpack 配置 (而不是一份客户端配置和一份服务端配置). 因此配置被再次分隔为一个基于当前 `NODE_ENV` 的基础配置

### 淘汰
* 移除 Koa 服务器 (难过的日子)

0.14.0
------

#### 特性
* 替换 `react-transform-webpack-hmr` 为它的替代品 `react-transform-hmr`. 感谢 [daviferreira](https://github.com/daviferreira).
* 替换 `delicate-error-reporter` 为 `redbox-react`. 感谢 [bulby97](https://github.com/bulby97).
* 创建一个 `no-server` 分支 [here](https://github.com/davezuko/react-redux-starter-kit/tree/no-server) 用于让不在乎 Koa 的用户使用更容易

#### 改进
* 重命名 `client` 文件夹为`src` 更加直观
* `inline-source-map` 被替换为 `source-map` 用来作为默认 webpack 开发工具用来减少构建尺寸
* 重构配置文件以关注于通用性配置选项而不是使用内部配置混合它们
* 互换 `dev` 和 `dev:debug` 脚本因此调试工具现在默认启用同时可以使用 `dev:no-debug` 禁用
* 重新定位 Redux 开发工具让它们不再阻断 `redbox-react` 显示的错误
* 添加明确的文件夹引用部分 `import` 语句以分清来自 `npm` 和本地的代码

#### 修复
* 修复 `HomeView` 中的命名，之前 `mapStateToProps` 被错误地写成了 `mapDispatchToProps`.

#### 淘汰
* 移除本地测试工具集 (在 `~/src/utils/test` 目录中).

0.13.0
------

#### 特性
* 添加 `react-transform-catch-errors` 为 `delicate-error-reporter`. 为此感谢 [bulby97](https://github.com/bulby97).

#### 修复
* `ExtractTextPlugin` 只在生产环境使用. 这修复了一个样式未被 Webpack 热重载的问题

0.12.0
------

#### 特性
* 升级 `react-router` 至 `^3.0.0`. 这是使用次级版本的唯一原因
* Webpack 现在使用 `OccurrenceOrderPlugin` 产生一致性打包哈希值

#### 修复
* 添加 `history` 至公共依赖包已修复由于升级到 `react-router` 至 `1.0.0-rc` 版本引起的模块热替换问题

#### 改进
* 服务端不再默认修改初始计数器状态值
* 在路由渲染时添加不变的错误强制通过 props 传递 state

0.11.0
------

#### 特性
* 升级所有 React 依赖至 `0.14.0-rc1`
* 升级 `react-router` 至 `1.0.0-rc`
  * 更新客户端和服务端针对性渲染
* 为改进断言和函数探测添加 `Sinon-Chai`
* 在开发环境添加禁用 `eslint` 的可选项

#### 改进
* 使用`react-addons-test-utils` 和 `Sinon Chai` 改进示例单元测试

0.10.0
------

#### 特性
* 初始化 state 现在可以从服务器端注入 (依然处于 WIP 阶段).
* 添加 `react-addons-test-utils` 为开发依赖.

#### 改进
* 在开发模式中如果出现错误，Eslint 不再阻止 webpack 打包
  * 查看: https://github.com/MoOx/eslint-loader/issues/23
* 更新所有的 `.jsx` 类型文件为 `.js` 类型. (https://github.com/davezuko/react-redux-starter-kit/issues/37)
* 更新所有的 React 组件文件名称为正确大小写的

0.9.0
-----

#### 特性
* Koa 服务器现在使用 gzip 中间件

#### 特性
* 关闭 `react-hot-loader` 赞同 [react-transform-webpack-hmr](https://github.com/gaearon/react-transform-webpack-hmr).
* Eslint 配置现在使用 Airbnb 式配置 (略有差异).
* 迁移 `package.json` 中所有的实际上的开发依赖到 `devDependencies`
* 示例 store 和视图现在更加直观 (展示简单的计数器).
* CSS-loader 依赖从 `0.16.0` 升级至 `0.17.0`.

#### 淘汰
* 移除不必要的对象依赖

0.8.0
-----

#### 改进
* 所有的编译、服务端和科幻端相关代码现在都使用 ES6
* 显著地重构客户端和服务端 webpack 配置如何构建
* `reducers/index.js` 现在导出已结合的根 reducer.
* 客户端应用程序代码现在处于 `~/client` 目录而不是 `~/src` 以遵从 Redux 标准

#### 修复
* Redux store 现在明确地处理模块热替换

#### 更改
* Webpack 编译配置现在不再基于默认配置之上合并. 这可能变得笨拙，同时明确书写每个配置文件更详细，但是它最终变得更易维护.

#### 淘汰
* 安静模式被移除 (`npm run dev:quiet`).

0.7.0
-----
#### 新特性
* 使用 `dev:debugnw` 让 `redux-devtools` 支持分窗口
  - 感谢 [mlusetti](https://github.com/mlusetti)

#### 改进
* 升级 `react` 至 `0.14.0-beta3`
* 升级 `react` 至 `0.14.0-beta3`
* 升级 `redux` 至 `^2.0.0`
* 升级 `redux-devtools` 至 `^2.0.0`
* 升级 `react-redux` 至 `^2.0.0`

#### 修复
* 在 Windows 机器上配置文件名去首位空白字符
  - 感谢 [nuragic](https://github.com/nuragic)

0.6.0
-----

#### 修复
* 修复 Webpack 尝试载入配置文件时潜在的间距问题
  - 感谢 [nuragic](https://github.com/nuragic) for his [PR](https://github.com/davezuko/react-redux-starter-kit/pull/32)

#### 改进
* 升级 `koa` 至 `1.0.0`
* 升级 `react-redux` 至 `1.0.0`
* 升级 `object-assign` 至 `0.4.0`

0.5.0
-----

#### 改进
* 重组 `src` 文件夹使文件名更加可识别.

#### 重大更改
* 移除 `action-creators` 别名因为它不太可能被用到

0.4.0
-----

#### 改进
* 清理移除示例代码，查阅 https://github.com/davezuko/react-redux-starter-kit/issues/20

0.3.1
-----

#### 修复
* https://github.com/davezuko/react-redux-starter-kit/issues/19
  - 来自服务端路由无效的初始化状态现在将传递到下一个中间件

0.3.0
-----

#### 改进
* 大版本升级 Redux 至最新发布版本
* 大版本升级 Redux-devtools 至最新发布版本

#### 修复
* 修复在 `:debug` 模式下的热重载失败
  - 暂时性通过移除绑定 `redux-devtools` 到公共包中进行修复

0.2.0
-----

#### 改进
* 弱化各个曾经过于苛刻的 eslint 规则
  - 值得注意的: `one-var` 和 `key-spacing`.

感谢 [StevenLangbroek](https://github.com/StevenLangbroek) 如下变动:
* 添加 `~/src/utils` 的别名 `utils`
* 添加 `createConstants` 工具.
* 添加 `createReducer` 工具.
* 重构 `todos` reducer 使用函数映射而不是 switch 语句

#### 修复
* 现在当使用 `BrowserHistory` 时在 `react-router` 中正确载入嵌套的路由
* 现在如果 eslint 在运行生产环境构建时遇到错误时打包编译将失败
  - 感谢 [clearjs](https://github.com/clearjs)
* 升级所有过时的依赖
  - Karma, eslint, babel, sass-loader, 以及其他等等
