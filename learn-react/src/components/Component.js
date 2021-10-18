// 创建组件两种方式
// 方式一：通过 function构造函数 创建组件。内部没有 state 私有数据，只有 一个 props 来接收外界传递过来的数据。
// 方式二：通过 class 创建子组件。内部除了有 this.props 这个只读属性之外，还有一个专门用于 存放自己私有数据的 this.state 属性，
// 这个 state 是可读可写的。

// 用 function 创建的组件，叫做【无状态组件】；使用 class 创建的组件，叫做【有状态组件】。
// 有状态组件和无状态组件，最本质的区别，就是有无 state 属性。
// 同时， class 创建的组件，有自己的生命周期函数，但是，function 创建的 组件，没有自己的生命周期函数。

// 如果一个组件需要存放自己的私有数据， 或者需要在组件的不同阶段执行不同的业务逻辑， 此时， 非常适合用 class 创建出来的有状态组件
// 如果一个组件，只需要根据外界传递过来的 props，渲染固定的页面结构即可的话，此时，非常适合使用 function 创建出来的无状态组件

import React from 'react'

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}


export default LoginControl
