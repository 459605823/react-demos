import React, { PureComponent } from "react"
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style"
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Carousel from "./components/Carousel"
import { connect } from "react-redux"
import { actionCreater } from "./store"

// PureComponent内置shouldComponentUpdate, 当属于该组件的state改变才会重新渲染
// 可用于提升性能, 要与immutable.js配合使用，将数据封装成immutable对象，是PureComponent对数据进行正确的对比
class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <Carousel/>
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showBackTop ? (
          <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop>
        ) : null}
      </HomeWrapper>
    )
  }
  handleScrollTop = () => {
    window.scrollTo(0, 0)
  }
  componentDidMount() {
    this.props.initHomeData()
    window.addEventListener("scroll", this.props.changeBackTopBtnState)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeBackTopBtnState)
  }
}

const mapStateToProps = (state) => {
  return {
    showBackTop: state.get("home").get("showBackTop")
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initHomeData() {
      dispatch(actionCreater.initHomeData())
    },
    changeBackTopBtnState() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreater.getChangeBackTopBtnStateAction(true))
      } else {
        dispatch(actionCreater.getChangeBackTopBtnStateAction(false))
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)