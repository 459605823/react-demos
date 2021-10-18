// UI组件：只关心页面渲染，不关心逻辑

import React, { Fragment } from "react"
import "antd/dist/antd.css"
import { Input, Button, List } from "antd"
import TodoItem from "./TodoItem"

// 无状态组件
const TodoListUi = (props) => {
  const { handleInputChange, inputValue, handleBtnClick, list, handleDelete } = props
  return (
    <Fragment>
      <div style={{ margin: "20px 0 0 20px" }}>
        <Input
          placeholder="要做点什么吗？"
          style={{ width: "300px", marginRight: "10px" }}
          onChange={handleInputChange}
          value={inputValue}
        />
        <Button type="primary" onClick={handleBtnClick}>
          提交
        </Button>
      </div>
      <List
        style={{ width: "300px", margin: "10px 0 0 20px" }}
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <TodoItem
            deleteItem={handleDelete}
            content={item}
            key={index}
            index={index}
          />
        )}
      />
    </Fragment>
  )
}

export default TodoListUi;