import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { TopicWrapper, TopicItem } from "../style"

class Topic extends PureComponent {
  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {topicList.map(item => {
          return (
            <TopicItem key={item.get("id")}>
              <img src={item.get("imgUrl")} alt={item.get("title")} />
              {item.get("title")}
            </TopicItem>
          )
        })}
      </TopicWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    topicList: state.get("home").get("topicList"),
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)