import { createGlobalStyle } from "styled-components"

// 全局样式组件
export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  @font-face {
  font-family: "iconfont";
  src: url('./static/iconfont/iconfont.eot?t=1558407805028'); /* IE9 */
  src: url('./static/iconfont/iconfont.eot?t=1558407805028#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./static/iconfont/iconfont.woff?t=1558407805028') format('woff'),
  url('./static/iconfont/iconfont.ttf?t=1558407805028') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./static/iconfont/iconfont.svg?t=1558407805028#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

