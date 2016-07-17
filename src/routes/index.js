// 我们只需要为初始化渲染导入必要的模块
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import CounterRoute from './Counter'

/*  注意: 我们推荐使用 react-router 普通路由对象
    而不是 JSX 的方式来构建路由定义.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    CounterRoute(store)
  ]
})

/*  注意: 子路由可以使用下面签名的 getChildRoutes 方法后
    被单独分块或以其他编程的方式载入:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    但是, 这里并没有使用代码分隔的必要! 它简单地提供了一个异步路由定义的 API.
    你的代码分隔应该出现在路由的 `getComponent` 函数里,
    因为它只会在路由存在且匹配时调用.
*/

export default createRoutes
