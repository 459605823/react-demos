import React, { Component } from 'react'
import {
  CarouselWrapper,
  CarouselInner,
  CarouselItem,
  CarouselBtns,
  BtnItem,
  CarouselControl
} from "../style"

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgList: [
        {
          id: 1,
          imgUrl:
            "https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
        },
        {
          id: 2,
          imgUrl:
            "https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
        },
      ],
      index: 1,
      showControls: false
    }
    this.listDom = React.createRef()
    this.timer = null
  }
  render() {
    return (
      <CarouselWrapper
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <CarouselInner ref={this.listDom} style={{ "left": "0" }}>
          {this.state.imgList.map(item => {
            return (
              <CarouselItem key={item.id}>
                <img
                  src={item.imgUrl}
                  alt={item.id}
                  className="banner-img"
                />
              </CarouselItem>
            )
          })}
        </CarouselInner>
        <CarouselBtns>
          <BtnItem className={this.state.index === 1 ? "active" : ""} />
          <BtnItem className={this.state.index === 2 ? "active" : ""} />
        </CarouselBtns>
        <CarouselControl
          className={this.state.showControls ? "show right" : "hide right"}
          onClick={this.next}
        >
          →
        </CarouselControl>
        <CarouselControl
          className={this.state.showControls ? "show left" : "hide left"}
          onClick={this.pre}
        >
          ←
        </CarouselControl>
      </CarouselWrapper>
    )
  }
  next = () => {
    const len = this.state.imgList.length
    let index = this.state.index
    if (index === len) {
      this.setState({
        index: 1
      })
    } else {
      this.setState({
        index: ++index
      })
    }
    this.animate(-625)
  }
  pre = () => {
    const len = this.state.imgList.length
    let index = this.state.index
    if (index === 1) {
      this.setState({
        index: len
      })
    } else {
      this.setState({
        index: --index
      })
    }
    this.animate(625)
  }
  animate = offset => {
    let list = this.listDom.current
    let left = parseInt(list.style.left) + offset
    if (left <= -1250) {
      list.style.left = 0 + "px"
      return
    }
    if (left > 0) {
      list.style.left = -625 + "px"
      return 
    }
    list.style.left = left + "px"
  }
  handleMouseEnter = () => {
    // this.stop()
    this.setState({
      showControls: true
    })
  }
  handleMouseLeave = () => {
    // this.autoPlay()
    this.setState({
      showControls: false
    })
  }
  // autoPlay = () => {
  //   this.timer = setInterval(() => {
  //     this.next()
  //   }, 2000)
  // }
  // stop = () => {
  //   console.log(111)
  //   clearInterval(this.timer)
  // }
  // componentDidMount() {
  //   this.autoPlay()
  // }
  // componentWillUnmount() {
  //   this.stop()
  // }
}

export default Carousel