import React, { useState, useEffect } from "react"

// Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用

function Example() {
  // 声明一个叫 "count" 的 state 变量
  // useState返回为一个有两个值的数组，第一个值为当前state，第二个为更新state的函数
  // [count, setCount]数组解构赋值
  const [count, setCount] = useState(0)
  
  // Effect Hook 相当于生命周期函数（componentDidMount和componentDidUpdate)
  // 默认情况下，它在第一次渲染之后和每次更新之后都会执行
  // 如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可
  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count]) // 仅在count改变时更新

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Example