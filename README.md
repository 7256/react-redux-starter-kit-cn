# [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit) (中文翻译版)

[![Join the chat at https://gitter.im/davezuko/react-redux-starter-kit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/davezuko/react-redux-starter-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/davezuko/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/davezuko/react-redux-starter-kit?branch=master)
[![dependencies](https://david-dm.org/davezuko/react-redux-starter-kit.svg)](https://david-dm.org/davezuko/react-redux-starter-kit)
[![devDependency Status](https://david-dm.org/davezuko/react-redux-starter-kit/dev-status.svg)](https://david-dm.org/davezuko/react-redux-starter-kit#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

这个启动包设计用于帮助你运用一整套酷炫的最新前端技术, 基于一个可配置的、功能丰富的构建系统 webpack, 它已经被设置为提供热重载、基于 SASS 的 CSS 模块、单元测试、代码覆盖率报告、打包分割, 以及等等等等.

此项目的主要目标是尽可能地保留 **通用性**. 它的目的不是限定你的项目结构或展示一个完整的示例应用, 而是提供一系列的工具集合旨在使前端开发功能强大、易用, 以及更重要的是更愉悦地开发. 向下查阅所有的功能特性列表!

最后, 这个项目离不开那么多贡献者的帮助, 所以[谢谢你们](#致谢)所有人的帮助.

## 目录
1. [特性](#特性)
1. [依赖](#依赖)
1. [起步](#起步)
1. [应用结构](#应用结构)
1. [开发](#开发)
  1. [开发者工具](#开发者工具)
  1. [路由](#路由)
1. [测试](#测试)
1. [发布](#发布)
1. [构建系统](#构建系统)
  1. [配置](#配置)
  1. [根目录解析](#根目录解析)
  1. [全局变量](#全局变量)
  1. [样式](#样式)
  1. [服务器](#服务器)
  1. [生产优化](#生产优化)
1. [学习资源](#学习资源)
1. [常见问题](#常见问题)
1. [致谢](#致谢)

## 特性
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [koa](https://github.com/koajs/koa)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org)

## 依赖
* node `^4.2.0`
* npm `^3.0.0`

## 起步

确认好你的开发环境符合指定的 [依赖](#依赖) 后, 你就可以按照以下步骤进行项目启动与运行了:

```bash
$ git clone https://github.com/JounQin/react-redux-starter-kit-cn.git
$ cd react-redux-starter-kit
$ npm install                   # 安装项目依赖(译注: 可使用 cnpm 进行替代提高安装速度)
$ npm start                     # 编译并启动服务
```

如果一切正常, 你应该能看到如下信息:

<img src="http://i.imgur.com/zR7VRG6.png?2" />

开发过程中, 你可能主要使用 `npm start`; 但是, 在你的处理文件中还有其他的脚本:

|`npm run <script>`|描述|
|------------------|-----------|
|`start`|在 `localhost:3000` 启动你的应用服务. 模块热替换将在开发环境启用.|
|`compile`|编译应用程序到目录 (默认为 `~/dist`).|
|`dev`|与 `npm run start` 相同, 但同时为服务器启用 nodemon.|
|`dev:no-debug`|与 `npm run dev` 相同但禁用开发工具视图.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|运行 Karma 测试并监听变化进行二次测试; 不生成代码覆盖率报告.|
|`deploy`|运行代码校验、测试, 成功时编译你的应用程序到目录.|
|`deploy:dev`|与 `deploy` 任务相同但覆盖 `NODE_ENV` 值为 "development".|
|`deploy:prod`|与 `deploy` 任务相同但覆盖 `NODE_ENV` 值为 "production".|
|`lint`|校验所有的 `.js` 文件.|
|`lint:fix`|校验并修复所有的 `.js` 文件. [了解更多](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## 应用结构

在本样板示例中应用程序的结构是 **fractal(分形)**, 也就是说功能主要按照特性而不是文件类型划分. 但是, 请记住此结构只是做为一份指导, 而不是一份强制性规定. 也就是说它的目的是展示被普遍认可的用来构建可伸缩的应用程序的准则和模式.

```
.
├── bin                      # 构建/启动脚本
├── blueprints               # redux-cli 蓝图文件
├── build                    # 所有构建相关的配置
│   └── webpack              # 指定环境下的 webpack 配置
├── config                   # 项目配置设置
├── server                   # Koa 应用 (使用 webpack 中间件)
│   └── main.js              # 服务端应用入口
├── src                      # 应用源码
│   ├── main.js              # 应用初始化和渲染
│   ├── components           # 可复用的视图组件
│   ├── containers           # 可复用的容器组件
│   ├── layouts              # 决定主要页面结构的组件
│   ├── static               # 静态资源 (未在源码中任何地方引入)
│   ├── styles               # 应用通用性样式 (通用设置)
│   ├── store                # Redux 指定的分片
│   │   ├── createStore.js   # 创建并启用 redux store
│   │   └── reducers.js      # Reducer 声明和注入
│   └── routes               # 主路由定义和异步分割点
│       ├── index.js         # 使用 store 启动主应用程序路由
│       ├── Root.js          # 为上下文组件 providers 包装组件
│       └── Home             # 分形路由
│           ├── index.js     # 路由定义和异步分割点
│           ├── assets       # 渲染组件需要的资源
│           ├── components   # React 视图组件
│           ├── container    # 将组件与 actions 和 store 连接起来
│           ├── modules      # reducers/actions/常量等的集合
│           └── routes **    # 分形子路由 (** 可选)
└── tests                    # 单元测试
```

## 开发

#### 开发者工具

**我们推荐使用 [Redux 开发工具 Chrome 插件](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
使用 Chrome 插件可以让你的窗口在一个单独的线程中运行, 并提供更好的表现和功能. 它带来一系列最流行的窗口, 易于配置、过滤 actions, 且不需要安装任何包.

但是添加开发工具组件到你的工程中很简单. 首先从 npm 载入包:

```bash
npm i --save-dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

然后按照 [手动集成攻略](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

### 路由
我们使用 `react-router` [路由定义](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute) (`<route>/index.js`) 在我们的应用程序中定义逻辑单元. 查看 [应用结构](#应用结构) 部分浏览更多信息.

## 测试
添加一个单元测试时, 简单地在 `~/tests` 目录任意位置创建一个 `.spec.js` 文件. Karma 将自动手机这些文件, 同时 Mocha 和 Chai 将在你的测试中可用而不需要引入他们. 如果你在使用 `redux-cli`, 测试文件应该是在你创建一个组件或 redux 模块时自动生成的.

代码覆盖率报告将默认编译到 `~/coverage`. 如果你希望改变使用的报告模块和报告编译的位置, 你可以修改 `~/config/index.js` 中的 `coverage_reporters`.

## 发布
此启动包开箱即用, 通过在 `npm run deploy` 生成的 `~/dist` 目录启动服务进行部署(请同时确认指定你的目标环境 `NODE_ENV`). 此项目自身不关注服务器端渲染或 API 结构细节, 因为这需要一个固化的结构, 这将使这份启动包难以扩展. 但是, 如果你需要更先进的部署策略方面的帮助, 这里有几个小技巧:

### 静态发布
如果你正在使用一个诸如 nginx 的 Web 服务器启动应用程序, 请确保引导接收到的路由至根文件 `~/dist/index.html` 并让 react-router 处理其余部分. 启动包附带的 Koa 服务可以被扩展为提供 API 的服务器或其他任何你需要的东西, 但那完全取决于你.

### Heroku

Heroku 拥有 `nodejs buildpack` 脚本, 这将在你发布你的应用到 Heroku 时做如下几件事:

1. 在根目录查找 `packages.json`.
2. 安装 `nodejs` 和 `npm` 包.
3. 运行 `npm postinstall script`
4. 运行 `npm start`

因此, 你需要在发布到 Heroku 前修改 `package.json`. 在 `package.json` 文件中的 `scripts` 部分进行如下调整.

```
...
"start": "better-npm-run start:prod",
"serve": "better-npm-run start",
"postinstall": "npm run deploy:prod",
"betterScripts": {
  ...
  "start:prod": {
    "command": "babel-node bin/server",
    "env": {
      "NODE_ENV": "production"
    }
  }
  ...
},
```

告诉 Heroku 安装所有的 `devDependencies` 对在 Heroku 环境上成功编译你的应用也很重要. 在你的终端中运行如下脚本.

```bash
$ heroku config:set NPM_CONFIG_PRODUCTION=false
```

进行完这个步骤后, 你讲安装所有必需的包, 然后构建你的应用, 并在每次你推送你的应用到 Heroku 后启动 Web 服务器 (比如 koa). 尝试运行以下命令发布到 Heroku.

```bash
$ git add .
$ git commit -m 'My awesome commit'
$ git push heroku master
```

如果你由于未知的原因发布失败, 尝试看看 [DonHansDampf](https://github.com/DonHansDampf) 发表的 [这条有用的评论](https://github.com/davezuko/react-redux-starter-kit/issues/730#issuecomment-213997120) 以解决 Heroku 部署问题.

还有更多问题? 随时提交问题或加入 Gitter 交流!

## 构建系统

### 配置

默认的项目配置在 `~/config/index.js`. 你可以重新定义你的 `src` 和 `dist` 文件夹, 调整编译设置, 微调你的公共依赖, 以及其他更多. 大部分内容你都可以在这里调整 **甚至不必修改最终的 webpack 构建配置**.

如果你需要针对不同环境覆盖配置 (例如对动态设置 API 端点很有用), 你可以编辑 `~/config/environments.js` 并定义覆盖每一个 NODE_EVN 基础配置. 那里有些针对 `development` 和 `production` 环境的示例, 所以你可以将那些作为指南. 这里有一些通用的配置选项:

|关键字|描述|
|---|-----------|
|`dir_src`|应用程序源码基目录|
|`dir_dist`|编译应用程序目标路径|
|`server_host`|Koa 服务器主机名|
|`server_port`|Koa 服务器运行端口|
|`compiler_css_modules`|是否启用 CSS 模块|
|`compiler_devtool`|sourcemaps 生成类型 (设置为 `false`/`null` 时禁用)|
|`compiler_vendor`|需要分开打包绑定的公共库包|


### 根目录解析
Webpack 被配置为使用 [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), 这将允许你直接引入本地包就像你相对你的 `~/src` 根文件夹引入一样. 下面是一个示例:

```js
// 当前文件: ~/src/views/some/nested/View.js
// 引用其他包时可能是这样:
import SomeComponent from '../../../components/SomeComponent'

// 现在可以这样写:
import SomeComponent from 'components/SomeComponent' // 万岁!
```

### 全局变量

有些全局变量在你的源码中任何地方都可以使用. 如果你希望修改它们, 可以在 `~/config/index.js` 中的 `globals` 关键字调整. 当添加新的全局变量时, 请确保你通用将它们添加到了  `~/.eslintrc` (译注: `globals` 字段).

|变量|描述|
|---|---|
|`process.env.NODE_ENV`|构建开始时当前的 `NODE_ENV`|
|`__DEV__`|当 `process.env.NODE_ENV` 是 `development` 时值为真|
|`__PROD__`|当 `process.env.NODE_ENV` 是 `production` 时值为真|
|`__TEST__`|当 `process.env.NODE_ENV` 是 `test` 时值为真|
|`__DEBUG__`|当 `process.env.NODE_ENV` 是 `development` 且命令行参数 `--no_debug` 未设置时为真 (`npm run dev:no-debug`)|
|`__BASENAME__`|[历史记录基名选项](https://github.com/rackt/history/blob/master/docs/BasenameSupport.md)|

### 样式

`.scss` 和 `.css` 文件类型都已支持开箱即用, 并被配置使用 [CSS 模块](https://github.com/css-modules/css-modules). 被引入后, 样式会被 [PostCSS](https://github.com/postcss/postcss) 进行压缩和自动添加浏览器前缀处理, 并将被在生产构建时提取到一个 `.css` 文件.

### 服务器

此启动包附带一个 Koa 服务器. 很重要的一点是, 需要注意这个服务器的唯一目的是为模块热替换提供 `webpack-dev-middleware` 和 `webpack-hot-middleware`. 使用一个自定义的 Koa 应用取代 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 是为了更容易地扩展这个启动包引入功能, 例如提供 API 接口、统一渲染以及更多 —— 这些都不必调整基础样板.

### 生产优化

Babel 被配置使用 [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) 所以转换不是内联的. 另外, 在生产环境, 我们使用 [react-optimize](https://github.com/thejameskyle/babel-react-optimize) 来进一步优化你的 React 代码.

在生产环境中, webpack 将导出样式到一个 '.css' 文件、压缩你的 JavaScript 并进行其他优化, 例如模块去重.

## 学习资源

* [开始使用 react-redux-starter-kit](https://suspicious.website/2016/04/29/starting-out-with-react-redux-starter-kit/) 是一份关于本启动包中使用的组件的介绍, 并且在最后还有一些小例子.

## 常见问题

有问题? 查阅我们的 [常见问题](https://github.com/davezuko/react-redux-starter-kit/wiki/FAQ:-Frequently-Asked-Questions) 或者提交问题. 请谨记只提交与此项目直接相关的问题; 关于如何实现某些 React 或 Redux 特性的问题最好在 StackOverflow 或者他们各自的仓库中提交.

## 致谢

此项目的诞生离不开社区的帮助, 所以我想重点指出它最大的贡献者们. 感谢你们的辛苦工作, 你们使我的工作生活轻松了许多, 也在项目过程中教会了我许多.

* [Justin Greenberg](https://github.com/justingreenberg) - 为你所有的提交请求, 给我们带来了 [Babel](https://babeljs.io/) 6, 以及一直帮助改进我们的代码模式.
* [Roman Pearah](https://github.com/neverfox) - 为你提交的代码漏洞, 帮我们归纳问题, 以及提交请求的贡献.
* [Spencer Dixin](https://github.com/SpencerCDixon) - 为你创造的 [redux-cli](https://github.com/SpencerCDixon/redux-cli).
* [Jonas Matser](https://github.com/mtsr) - 为你帮我们归纳问题并在我们的 Gitter 频道里无限地支持.

以及其他那些也做过贡献的人们, 你们的工作也是值得赞赏的即使你没有被列在这里.
