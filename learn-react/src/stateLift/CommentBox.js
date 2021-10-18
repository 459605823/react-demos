import React from 'react'

class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment">留言内容</label>
          <input 
            type="text" 
            id="comment" 
            className="form-control" 
            placeholder="请输入内容" 
            value={this.state.value}
            onChange={this.handleInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">留言</button>
        <p>已有{this.props.commentsLength}条留言</p>
      </form>
    )
  }
  handleInput(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit(e) {
    this.props.addComment(this.state.value)
    this.setState({
      value: ''
    })
    e.preventDefault()
  }
}

export default CommentBox