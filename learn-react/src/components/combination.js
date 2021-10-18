import React, { Component } from 'react'

// props.children类似于vue中的slot,使得别的组件可以通过 JSX 嵌套，将任意组件作为子组件传递给它们。
function FancyBorder(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

function Dialog(props) {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  );
}

// “特殊”组件可以通过 props 定制并渲染“一般”组件
function WelcomeDialog(props) {
  return (
    <Dialog title={"Welcome"} message={"hello stranger"}/>
  )
}

// 可以将任意组件通过props传递,类似于vue中的具名插槽
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function Contacts(props) {
  return (
    <h1>i am contacts</h1>
  )
}

function Chat(props) {
  return <h1>hello there</h1>
}

class App extends Component {
  render() {
    return (
      <div>
        <WelcomeDialog/>
        <SplitPane left={<Contacts/>} right={<Chat/>}/>
      </div>
    )
  }
}

export default App