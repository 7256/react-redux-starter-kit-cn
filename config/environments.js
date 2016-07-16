// 在这里你可以根据执行环境定义覆盖配置.
// 给默认导出的模块提供一个和你想要的指定的 NODE_EVN 参数匹配的关键词,
// 基础配置将在导出它自身前应用你的覆盖.
export default {
  // ======================================================
  // 当 NODE_ENV === 'development' 时覆盖的配置
  // ======================================================
  // 注意: 在开发环境, 当发布完成的资源是由 webpack 提供服务时,
  // 我们使用一个明确的公共路径以解决这个问题:
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  development: (config) => ({
    compiler_public_path: `http://${config.server_host}:${config.server_port}/`,
    proxy: {
      enabled: false,
      options: {
        host: 'http://localhost:8000',
        match: /^\/api\/.*/
      }
    }
  }),

  // ======================================================
  // 当 NODE_ENV === 'production' 时覆盖的配置
  // ======================================================
  production: (config) => ({
    compiler_public_path: '/',
    compiler_fail_on_warning: false,
    compiler_hash_type: 'chunkhash',
    compiler_devtool: null,
    compiler_stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    }
  })
}
