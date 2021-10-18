import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { WriterWrapper, WriterList, WriterItem } from "../style"
import { actionCreater } from "../store"

class Writer extends PureComponent {
  render() {
    const { writerList, page, totalPage, handleChangePage } = this.props
    const newList = []
    const size = writerList.size
    if (size > 0) {
      const pageLength = page * 5 < size ? 5 : size - (page - 1) * 5
      for (let i = (page - 1) * 5; i < (page - 1) * 5 + pageLength; i++) {
        newList.push(writerList.get(i))
      }
    }
    return (
      <div>
        <WriterWrapper>
          <div className="title">
            <span>推荐作者</span>
            <span className="pageToggle" onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
              <i
                ref={icon => {
                  this.spinIcon = icon
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </span>
          </div>
          <WriterList>
            {newList.map(item => {
              return (
                <WriterItem key={item.get("id")}>
                  <a href={"/user" + item.get("id")} className="avatar">
                    <img src={item.get("avatar")} alt="userAvatar" />
                  </a>
                  <span className="follow">+ 关注</span>
                  <p className="username">{item.get("name")}</p>
                  <p className="userdesc">{item.get("desc")}</p>
                </WriterItem>
              )
            })}
          </WriterList>
          <button className="more">查看全部 ></button>
        </WriterWrapper>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    writerList: state.get("home").get("writerList"),
    page: state.get("home").get("writerPage"),
    totalPage: state.get("home").get("writerTotalPage")
  }
}

const mapDispatchToProps = dispatch => {
  return {
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)