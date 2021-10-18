import React from 'react'
import CommentList from './CommentList'
import CommentBox from './CommentBox'

// 在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。
// 在 React 中，将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。这就是所谓的“状态提升”。

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['nmsl']
    }
    this.addComment = this.addComment.bind(this)
  }
  render() {
    const { comments } = this.state
    return (
      <div className="App">
        <CommentList comments={comments} />
        <CommentBox commentsLength={comments.length} addComment={this.addComment}/>
      </div>
    )
  }
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
}

export default App