import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import TodoList from './TodoList'
import store from "./store"

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

// React中的组件必须以大写字母开头,小写开头会被当作html标签
ReactDOM.render(App, document.getElementById("root"))

