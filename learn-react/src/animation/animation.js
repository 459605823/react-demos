import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './style.css'

class animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  render() {
    return (
      <div>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  // 开始执行动画时机
                  // in={this.state.show}
                  timeout={500}
                  // 类名前缀 类似vue transition的name属性
                  classNames="fade"
                  // 动画执行完毕自动移除dom元素
                  unmountOnExit
                  // 入场动画执行完毕后执行的钩子函数
                  onEntered={el => {
                    el.style.color = "blue";
                  }}
                  // 初次渲染也会执行动画 类似vue transition的appear特性
                  appear={true}
                  key={index}
                >
                  <h1>{item}</h1>
                </CSSTransition>
              );
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>add</button>
      </div>
    );
  }
  handleAddItem = () => {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    });
  };
}

export default animation;