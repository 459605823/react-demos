import React, { PureComponent } from "react"
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from "../style"
import { actionCreater } from "../store"
import { Link } from "react-router-dom"

class List extends PureComponent {
  render() {
    const { articleList, loadMore, page } = this.props
    return (
      <div>
        {articleList.map((item, index) => {
          return (
            <Link to={"/detail/" + item.get("id")} key={index}>
              <ListItem>
                <img
                  src={item.get("imgUrl")}
                  alt={item.get("title")}
                />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p>{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })}
        <LoadMore onClick={() => {loadMore(page)}}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleList: state.get("home").get("articleList"),
    page: state.get("home").get("articlePage")
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMore(page) {
      dispatch(actionCreater.loadMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)