import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { DetailWrapper, Header, Content } from "./style"
import { actionCreater } from './store'

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.initDetailData(this.props.match.params.id)
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.get('detail').get('title'),
    content: state.get('detail').get('content')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initDetailData(id) {
      dispatch(actionCreater.initDetailData(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))