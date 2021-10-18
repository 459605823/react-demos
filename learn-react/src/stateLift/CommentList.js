import React from 'react'

const CommentList = (props) => {
  const comments = props.comments
  return (
    <div className="commentList">
      <label>评论列表</label>
      <ul className="list-group mb-3">
        {
          comments.map((item, index) => {
            return <li key={index} className="list-group-item">{item}</li>
          })
        }
      </ul>
    </div>
  )
}

export default CommentList