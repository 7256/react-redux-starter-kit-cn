import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/counter'

/*  这是一个容器组件. 注意它不包含任何 JSX, 也没有引入 React.
    这个组件 **只是** 负责将 actions 和 state 连结起来
    渲染一个表现性组件 - 例如下面的计数器的情况:   */

import Counter from 'components/Counter'

/*  action 的创建器对象 (也可以是返回对象的函数).
    键值会通过 props 传给表现性组件. 这里我们实现了我们围绕增长的封装;
    组件并不关心这些   */

const mapActionCreators = {
  increment: () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

/*  注意: mapStateToProps 的部分你应该用 `reselect` 来创建选择器, 例如:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    选择器可以计算产生的数据, 允许 Redux 尽可能最小化地存储 state.
    选择器是很有效的. 除非选择器的参数变化, 它就不会重新计算.
    选择器是可组合的. 他们可以被用做其他选择器的输入.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapActionCreators)(Counter)
