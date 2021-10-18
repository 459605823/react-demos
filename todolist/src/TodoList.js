// 容器组件：关心逻辑，不关心页面渲染

import React, { Component } from 'react'
import { connect } from "react-redux"
// import store from './store'
import { getInputChangeAction, getAddItemAction, getDelItemAction, getTodoList } from "./store/actionCreater"
import TodoListUi from './TodoListUi'

class TodoList extends Component {
  // constructor(props) {
    // super(props)
    // 从store中获取数据
    // this.state = store.getState()
    // 订阅监听store的变化
    // store.subscribe(this.handleStoreChange)
  // }
  render() {
    const { inputValue, handleInputChange, handleBtnClick, handleDelete, list} = this.props
    return (
      <TodoListUi
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        handleBtnClick={handleBtnClick}
        list={list}
        handleDelete={handleDelete}
      />
    )
  }

  // 默认action必须为一个对象，
  // redux中间件封装了store的dispatch方法,可以使dispatch接受一个函数,解析dispatch中的内容,当dispatch中为一个函数时,会先执行该函数
  // 然后继续传递actions给下一个middleware,当middleware链中的最后一个middleware开始dispatch action时，这个action必须是一个普通对象
  componentDidMount() {
    this.props.getListData()
  }

  // 数据改变，要通过store.dispatch传递action，经过reducer处理后返回给store
  // 组件监听store变化，有变化就重新从store中获取数据，重新渲染ui
  // handleDelete(index) {
  //   const action = getDelItemAction(index)
  //   store.dispatch(action)
  // }
  
  // 组件监听store变化，有变化就重新从store中获取数据，重新渲染ui
  // handleStoreChange = () => {
  //   this.setState(store.getState())
  // }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    handleBtnClick() {
      const action = getAddItemAction()
      dispatch(action)
    },
    handleDelete(index) {
      const action = getDelItemAction(index)
      dispatch(action)
    },
    getListData() {
      const action = getTodoList()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
