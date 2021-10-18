import React, { Component } from 'react'
import OrderItem from '../OrderItem'

class OrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div>
        {
          this.state.data.map(item => {
            return <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit} />
          })
        }
      </div>
    )
  }
  componentDidMount() {
    fetch('/mock/order.json').then(res => {
      res.json().then(data => {
        this.setState({
          data
        })
      })
    })
  }
  handleSubmit = (id, comment, stars) => {
    const newData = this.state.data.map(item => {
      return item.id === id 
      ? {
          ...item,
          comment,
          stars,
          ifCommented: true
        } : item
    })
    this.setState({
      data: newData
    })
  }
}

export default OrderList