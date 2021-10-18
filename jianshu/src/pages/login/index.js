import React, { PureComponent } from "react"
import { LoginWrapper, LoginBox, Input, Button } from "./style"
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreater } from "./store"

class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.account = React.createRef()
    this.password = React.createRef()
  }
  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
          <LoginWrapper>
            <LoginBox>
              <Input placeholder="手机号或邮箱" ref={this.account} />
              <Input placeholder="密码" type="password" ref={this.password} />
              <Button onClick={() => this.props.login(this.account.current, this.password.current)}>
                登录
              </Button>
            </LoginBox>
          </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.get('login').get('login')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login(accountDom, passwordDom) {
      dispatch(actionCreater.login(accountDom.value, passwordDom.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)