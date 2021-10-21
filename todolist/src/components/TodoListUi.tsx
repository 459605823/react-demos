// UI组件：只关心页面渲染，不关心逻辑
import React, {FC} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import TodoItem from './TodoItem';

type IProps = {
  inputValue: string;
  handleInputChange: (e: any) => any;
  handleBtnClick: () => void;
  handleDelete: (index: number) => void;
  list: string[];
};

// 无状态组件
const TodoListUi: FC<IProps> = (props: IProps) => {
  const {handleInputChange, inputValue, handleBtnClick, list, handleDelete} =
    props;
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="my-4">
        <Input
          placeholder="要做点什么吗？"
          style={{width: '300px', marginRight: '10px'}}
          onChange={handleInputChange}
          value={inputValue}
        />
        <Button type="primary" onClick={handleBtnClick}>
          提交
        </Button>
      </div>
      <List
        style={{width: '374px'}}
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
    </div>
  );
};

export default TodoListUi;
