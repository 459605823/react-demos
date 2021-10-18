// state例子

// 当组件的state或props发生改变时,render函数就会重新执行
import React from 'react'

class LikesBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }
  render() {
    return (
      <div className="likes-btn-component">
        <button className="btn btn-outline-primary btn-lg" onClick={this.handleBtnClick}>
          <span role="img" aria-label="点赞">👍</span> {this.state.likes}
        </button>
      </div>
    )
  }
  handleBtnClick () {
    // 不要直接修改state，通过setState修改
    // 构造函数是唯一可以给this.state赋值的地方
    // 当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state
    // this.setState({
    //   likes: ++this.state.likes
    // })
    // 可以让 setState() 接收一个函数而不是一个对象。 
    // 这个函数用上一个 state 作为第一个参数， 将此次更新被应用时的 props 做为第二个参数
    // setState是一个异步执行函数，可以为其传递第二个参数作为其回调函数
    this.setState((state) => ({
      likes: ++state.likes
    }))
  }
}

export default LikesBtn