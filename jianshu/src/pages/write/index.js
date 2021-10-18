import React, { PureComponent } from "react"
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props
    if (loginStatus) {
      return (
        <div>写文章页面</div>
      )
    } else {
      return <Redirect to='/login' />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.get('login').get('login')
  }
}

export default connect(mapStateToProps, null)(Write)