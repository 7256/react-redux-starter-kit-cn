import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'counter',
  /*  异步的 getComponent 方法只有在路由匹配时才会调用   */
  getComponent (nextState, cb) {
    /*  Webpack 使用 'require.ensure' 来创建一个分割点,
        并在构建时嵌入一个异步模块加载器(jsonp 方式)   */
    require.ensure([], (require) => {
      /*  Webpack 使用 require 回调来定义绑定依赖   */
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default

      /*  以键值 'counter' 添加 reducer 到 store  */
      injectReducer(store, { key: 'counter', reducer })

      /*  返回 getComponent   */
      cb(null, Counter)

    /* Webpack 命名绑定包   */
    }, 'counter')
  }
})
