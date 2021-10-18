import React, { Component } from 'react'
import { CSSTransition } from "react-transition-group"
import { connect } from 'react-redux'
import { actionCreater } from './store'
import { actionCreater as LoginActionCreater } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  HeaderContent,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
} from "./style"

class Header extends Component {
  render() {
    const { focused, handleInputFocus, handleInputBlur, login, logout } = this.props
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <Link to="/">
              <NavItem className="left active">
                <i className="iconfont">&#xe627;</i>
                首页
              </NavItem>
            </Link>
            <NavItem className="left">
              <i className="iconfont">&#xe784;</i>
              下载APP
            </NavItem>
            {login ? (
              <NavItem className="right" onClick={logout}>
                退出
              </NavItem>
            ) : (
              <Link to="/login">
                <NavItem className="right">登录</NavItem>
              </Link>
            )}
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition timeout={200} in={focused} classNames="slide">
                <NavSearch
                  className={focused ? "focused" : ""}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </CSSTransition>
              <i
                className={
                  focused ? "focused iconfont zoom" : "iconfont zoom"
                }
              >
                &#xe615;
              </i>
              {/* {数据改变会触发render函数，从而触发该函数，根据参数返回最终渲染结果} */}
              {this.getSearchList()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write">
              <Button className="writting">
                <i className="iconfont">&#xe69b;</i>
                写文章
              </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderContent>
      </HeaderWrapper>
    )
  }
  getSearchList = () => {
    const {
      focused,
      list,
      mouseIn,
      page,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
      totalPage,
    } = this.props
    const newList = []
    const size = list.size
    if (size > 0) {
      const pageLength = page * 10 < size ? 10 : size - (page - 1) * 10
      for (let i = (page - 1) * 10; i < (page - 1) * 10 + pageLength; i++) {
        newList.push(list.get(i))
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
            <div>
              {newList.map(item => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })}
            </div>
          </SearchInfoTitle>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  componentDidMount() {
    this.props.initList()
  }
}

const mapStateToProps = (state) => {
  return {
    // immutable对象获取属性值
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    mouseIn: state.get('header').get('mouseIn'),
    totalPage: state.get('header').get('totalPage'),
    login: state.get('login').get('login')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreater.getFocusAction())
    },
    handleInputBlur() {
      dispatch(actionCreater.getBlurAction())
    },
    initList() {
      dispatch(actionCreater.initList())
    },
    handleMouseEnter() {
      dispatch(actionCreater.getMouseEnterAction())
    },
    handleMouseLeave() {
      dispatch(actionCreater.getMouseLeaveAction())
    },
    handleChangePage(page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/gi, "")
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spinIcon.style.transform = "rotate(" + (originAngle + 360) + "deg)"
      if (page < totalPage) {
        dispatch(actionCreater.getChangePageAction(page + 1))
      } else {
        dispatch(actionCreater.getChangePageAction(1))
      }
    },
    logout() {
      dispatch(LoginActionCreater.changeLoginStatus(false))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)