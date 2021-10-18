import React from 'react'

// 使用JSX语法就必须引入react
class JsxDemo extends React.Component {
  render () {
    const todoList = ['learn react', 'learn redux']
    let isLogin = true
    return (
      // jsx javascript + xml 遇到 < 当作html解析 遇到 {} 当作js解析
      <div>
        {/* jsx多行注释 */}
        {
          // jsx单行注释 单行注释需要换行
        }
        {/* jsx -> React.createElement -> js对象(虚拟DOM) -> 真实DOM */}
        {/* React.createElement('div', {className: 'jsxClass'}, 'HELLO REACT') */}
        <h1 className="jsxClass">HELLO REACT</h1>
        <ul>
          {
            todoList.map((item, index) => { // 先通过map将数组中的每一项转换为li标签 todoList: [<li></li>, <li></li>]
              return (
                <li key={index}>{item}</li> // jsx中的数组的每一项都会被渲染出来
              )
            })
          }
        </ul>
        { isLogin ? <p>登出</p> : <p>登录</p> }
      </div>
    )
  }
}

export default JsxDemo