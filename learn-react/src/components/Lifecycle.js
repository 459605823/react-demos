import React from 'react'

// 生命周期函数指某一时刻组件会自动调用执行的函数

// 1. 挂载：constructor -> render -> componentDidMount
// 2. 更新：shouldComponentUpdate -> render -> componentDidUpdate
// 3. 卸载: componentWillUnmount

class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { date: new Date() };
  }

  // 当组件（ 虚拟DOM） 挂载到页面之后， 会进入这个生命周期函数(mounted)
  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // 在组件更新之前执行, 默认行为是 state 每次发生变化组件都会重新渲染, 可以通过组织重新渲染来提升性能
  // 当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  // 此时，组件完成更新，页面被重新渲染。此时，state、虚拟DOM 和 页面已经完全保持同步。
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // 组件将要被卸载。此时组件还可以正常使用
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  // render是class组件中必须提供的方法
  // React.Component内置了其他生命周期函数，唯独没有内置render
  render() {
    console.log("render");
    return (
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock