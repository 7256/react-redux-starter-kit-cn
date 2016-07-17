// ------------------------------------
// 常量
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

/*  这个是一个 thunk 函数, 意思是它是一个立即执行函数, 并返回一个延迟测试的函数.
    这在创建异步 actions 时非常有用, 特别是使用 redux-thunk 绑定时!

    注意: 这完全是为了演示目的. 在实际的应用中,
    你可能想要发送一个 COUNTER_DOUBLE 的 action,
    让 reducer 处理好这块儿逻辑.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action 处理器
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
