import React from 'react'

// React 的 state 成为“ 唯一数据源”。 渲染表单的 React 组件还控制着用户输入过程中表单发生的操作
// 被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

// 不想使用受控组件时，可以使用非受控组件，将数据绑定在dom节点上
// <input ref={(input) => {this.input = input}}

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    // 由于在表单元素上设置了 value 属性， 因此显示的值将始终为 this.state.value， 这使得 React 的 state 成为唯一数据源。 
    // 由于 handleInput 在每次按键时都会执行并更新 React 的 state，state发生改变就会触发render函数, 因此显示的值将随着用户输入而更新。
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment">留言内容</label>
          <input 
            type="text" 
            id="comment" 
            className="form-control" 
            placeholder="请输入内容" 
            value={this.state.value}
            onChange={this.handleInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">留言</button>
      </form>
    )
  }
  // 对于受控组件来说，每个 state 突变都有一个相关的处理函数
  // 不能直接修改state中的值，所以要为受控组件绑定处理函数，通过setState来改变state
  handleInput(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit(e) {
    alert(this.state.value)
    this.setState({
      value: ''
    })
    e.preventDefault()
  }
}

export default Comment