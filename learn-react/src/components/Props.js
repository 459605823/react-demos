import React from 'react'

// 组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props
// 当组件的state或props发生改变时,render函数就会重新执行
function NameCard(props) {
  const { name, number, isHuman, tags } = props
  return (
    <div className="alert alert-success">
      <h4 className="alert-heading">{name}</h4>
      <ul>
        <li>电话：{number}</li>
        <li>{ isHuman ? '人类' : '外星生物' }</li>
        <hr/>
        <p>
          {
            tags.map((item, index) => {
              return (
                <span className="badge badge-pill badge-primary" key={index}>{item}</span>
              )
            })
          }
        </p>
      </ul>
    </div>
  )
}

class Props extends React.Component {
  render () {
    const tags = ['足球', 'coder', '前端']
    return (
      <NameCard name="beast" number="123" isHuman tags={tags} />
    )
  }
}

export default Props