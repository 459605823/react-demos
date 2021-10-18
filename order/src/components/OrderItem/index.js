import React, { Component } from 'react'
import './style.css'

class OrderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stars: props.data.stars || 0,
      editing: false,
      comment: props.data.comment || ''
    }
  }
  render() {
    const { shop, product, price, picture, ifCommented }  = this.props.data
    return (
      <div>
        <div className="orderItem">
          <div className="orderItem__picContainer">
            <img src={picture} alt={product} className="orderItem__pic"/>
          </div>
          <div className="orderItem__content">
            <div className="orderItem__product">{product}</div>
            <div className="orderItem__shop">{shop}</div>
            <div className="orderItem__detail">
              <div className="orderItem__price">{price}</div>
              <div>
                {
                  ifCommented ? (
                    <button className="orderItem__btn orderItem__btn--grey">
                      已评价
                    </button>
                  ) : (
                    <button className="orderItem__btn orderItem__btn--red" onClick={this.handleOpenEditArea}>
                      评价
                    </button>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        {this.state.editing ? this.renderEditArea() : null}
      </div>
    )
  }
  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea className="orderItem__comment" onChange={this.handleCommentChange} value={this.state.comment} />
        { this.renderStars() }
        <button className="orderItem__btn orderItem__btn--red" onClick={this.handleSubmit}>提交</button>
        <button className="orderItem__btn orderItem__btn--grey" onClick={this.handleCancle}>取消</button>
      </div>
    )
  }
  renderStars() {
    const { stars } = this.state
    return (
      <div>
        {
          [1,2,3,4,5].map((item, index) => {
            const light = stars >= item ? "orderItem__star--light" : ""
            return <span className={"orderItem__star " + light} key={index} onClick={this.handleStarClick.bind(this, item)}>★</span>
          })
        }
      </div>
    )
  }
  handleOpenEditArea = () => {
    this.setState({
      editing: true
    })
  }
  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  handleStarClick = (stars) => {
    this.setState({
      stars
    })
  }
  handleCancle = () => {
    this.setState({
      stars: this.props.data.stars || 0,
      editing: false,
      comment: this.props.data.comment ||  ''
    })
  }
  handleSubmit = () => {
    const { id } = this.props.data
    const { comment, stars } = this.state
    this.setState({
      editing: false
    })
    this.props.onSubmit(id, comment, stars)
  }
}

export default OrderItem