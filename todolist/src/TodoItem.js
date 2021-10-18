import React, { Component } from 'react'
import PropTypes from "prop-types"

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  
  // 当父组件state改变时，会重新渲染，执行父组件的render函数，导致子组件也重新渲染，会造成性能浪费
  // 通过shouldComponentUpdate来控制何时重新进行渲染，来提升性能
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { content, test } = this.props;
    return (
      <div onClick={this.handleItemClick} style={{padding: "10px", borderBottom: "1px solid #aaa"}}>
        {test} - {content}
      </div>
    );
  }
  handleItemClick() {
    const { index, deleteItem } = this.props;
    // 子组件修改父组件中的公共数据时，要使用父组件提供的方法
    // 子组件向父组件传值，需要调用父组件传递过来的方法
    deleteItem(index);
  }
}

// 设定接受props的类型
TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  test: PropTypes.string.isRequired
}

// 设定props的默认值
TodoItem.defaultProps = {
  test: 'sail'
}

export default TodoItem