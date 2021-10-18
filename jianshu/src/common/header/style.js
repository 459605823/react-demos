import styled from 'styled-components'
import logo from '../../static/nav-log.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const HeaderContent = styled.nav`
  position: relative;
  height: 100%;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
`

export const Logo = styled.div`
  position: absolute;
  height: 58px;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logo});
  background-size: contain;
`

export const Nav = styled.nav`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.span`
  display: block;
  cursor: pointer;
  padding: 0 15px;
  font-size: 20px;
  color: #333;
  line-height: 56px;
  .iconfont {
    font-size: 20px;
    margin-right: 5px;
  }
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    cursor: pointer;
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: white;
    }
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0
  top: 58px;
  width: 240px;
  padding: 10px 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
  z-index: 3;
  &::after {
    content: '';
    width: 14px;
    height: 14px;
    background: white;
    display: block;
    position: absolute;
    top: -7px;
    transform: rotate(45deg);
  }
`

export const SearchInfoSwitch = styled.div`
  display: block;
  float: right;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: #2f2f2f;
  }
  .spin {
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    float: left;
    display: block;
    transform-origin: center center;
  }
`

export const SearchInfoTitle = styled.div`
  margin: 10px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoItem = styled.a`
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #969696;
  border-radius: 3px;
  display: block;
  float: left;
  margin: 10px 10px 0 0;
  cursor: pointer;
  &:hover {
    color: #333;
    border-color: #b4b4b4;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  margin-top: 9px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 15px;
  margin-left: 10px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.span`
  display: block;
  cursor: pointer;
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
    &:hover {
      background: rgba(236,97,73,.05)
    }
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`