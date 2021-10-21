import * as actionTypes from './actionType';
import type {Actions} from './actionCreater';

export type initState = {
  inputValue: string;
  list: string[];
};

const defalutState: initState = {
  inputValue: '',
  list: [],
};

// reducer可以接收state，但绝不能修改state
// 只有store可以改变自身的数据，reducer生成新的state便返回给store，由store改变自身数据、
// reducer必须是一个纯函数
// 纯函数：给定固定的输入，就一定会有固定的输出，不会改变参数的值，且不会有任何副作用
// 不要在reducer中: 修改传入参数、执行有副作用的操作（API请求和路由跳转等）、调用非纯函数（Date.now()、Math.random()等)
export const reducer = (state = defalutState, action: Actions) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUTVALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    case actionTypes.INIT_LIST:
      return {
        ...state,
        list: action.data,
      };
    case actionTypes.ADD_ITEM:
      return {
        inputValue: '',
        list: state.list.concat([state.inputValue]),
      };
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        list: state.list.splice(action.index, 1),
      };
    default:
      return state;
  }
};
