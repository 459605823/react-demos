import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 30px;
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.a`
  cursor: pointer;
  display: block;
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  margin: 0 0 18px 18px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px; 
  img {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  padding: 20px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
  img {
    width: 150px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
    cursor: pointer;
  }
`

export const ListInfo = styled.div`
  width: 458px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .title:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  p {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 100%;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  width: 280px;
  font-size: 13px;
  text-align: center;
  .title {
    text-align: left;
    font-size: 14px;
    color: #969696;
    .pageToggle {
      float: right;
      display: inline-block;
      cursor: pointer;
      .spin {
        font-size: 12px;
        transition: all .2s ease-in;
        float: left;
        display: block;
        transform-origin: center center;
        margin-top: 1px;
      }
    }
    .pageToggle:hover {
      color: #2f2f2f;
    }
  }
  .more {
    padding: 7px 7px 7px 12px;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
  }
`

export const WriterList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
`

export const WriterItem = styled.li`
  margin-top: 15px;
  line-height: 20px;
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    display: block;
    cursor: pointer;
    text-decoration: none;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
  .follow {
    float: right;
    margin-top: 5px;
    color: #42c02e;
    cursor: pointer;
    font-size: 13px;
  }
  .username {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    cursor: pointer;
  }
  .userdesc {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`

export const LoadMore = styled.div`
  width:100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  margin: 30px 0;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  width: 60px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  right: 40px;
  bottom: 40px;
  border: 1px solid #dcdcdc;
  font-size: 12px;
  padding: 0 5px;
  box-sizing: border-box;
  cursor: pointer;
`

export const CarouselWrapper = styled.div`
  margin-bottom: 35px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 270px;
`

export const CarouselInner = styled.div`
  position: absolute;
  width: 1250px;
  transition: left .5s ease-in;
`

export const CarouselItem = styled.div`
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
    cursor: pointer;
  }
`

export const CarouselBtns = styled.ol`
  margin-bottom: 8px;
  width: 80%;
  left: 40%;
  position: absolute;
  list-style: none;
  text-align: center;
  bottom: 0;
  margin-left: -30%;
`

export const BtnItem = styled.li`
  width: 25px;
  height: 2px;
  background: hsla(0,0%,47%,.4);
  display: inline-block;
  margin: 2px;
  cursor: pointer;
  border-radius: 10px;
  &.active {
    background: #fff;
  }
`

export const CarouselControl = styled.div`
  height: 50px;
  line-height: 50px;
  width: 40px;
  top: 40%;
  position: absolute;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0,0,0,.6);
  background-color: rgba(0,0,0,.4);
  cursor: pointer;
  transition: opacity .2s ease-in;
  &.left {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    float: left;
  }
  &.right {
    right: 0
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  &.show {
    opacity: 1;
  }
  &.hide {
    opacity: 0;
  }
`