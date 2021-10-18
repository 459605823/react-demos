import { combineReducers } from 'redux-immutable'
import { headerReducer } from '../common/header/store'
import { homeReducer } from '../pages/home/store'
import { detailReducer } from '../pages/detail/store'
import { loginReducer } from '../pages/login/store'

// 使用combineReducers将分离各个组件的reducer合并为一个reducer
// redux-immutable的combineReducers方法会将所有reducer封装成一个immutable对象
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
})

export default reducer