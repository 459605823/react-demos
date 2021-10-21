import React, { Component, PureComponent } from 'react';

// 当组件的state或props发生改变时,render函数就会重新执行
// 父组件的render函数重新执行后,子组件的render函数也会重新执行
class Test extends PureComponent {
  render() {
    console.log('test render')
    return (
      <div>
        {this.props.content}
      </div>
    )
  }
}

class render extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {
    console.log('render')
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleInput}/>
        <Test content={this.state.value} />
      </div>
    );
  }
  handleInput = (e) => {
    this.setState({
      value: e.target.value
    })
  }
}

export default render;