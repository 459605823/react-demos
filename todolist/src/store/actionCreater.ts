import * as ActionTypes from './actionType';
import axios from 'axios';
import type {Dispatch} from 'redux';

export const getInputChangeAction = (value: string) => {
  return {
    type: ActionTypes.CHANGE_INPUTVALUE as ActionTypes.CHANGE_ITEM_TYPE,
    value,
  };
};

export const getAddItemAction = () => {
  return {
    type: ActionTypes.ADD_ITEM as ActionTypes.ADD_ITEM_TYPE,
  };
};

export const getDelItemAction = (index: number) => {
  return {
    type: ActionTypes.DELETE_ITEM as ActionTypes.DELETE_ITEM_TYPE,
    index,
  };
};

export const getInitListAction = (data: string[]) => {
  return {
    type: ActionTypes.INIT_LIST as ActionTypes.INIT_LIST_TYPE,
    data,
  };
};

// export const getTodoList = () => {
//   return {
//     type: ActionTypes.GET_TODOLIST as ActionTypes.GET_ITEM_TYPE,
//   };
// };

// redux-thunk中间件解析action
// 可以将异步操作分从组件生命周期函数中分离出来
export const getTodoList = () => {
  return (dispatch: Dispatch) => {
    axios.get('/list.json').then((res) => {
      const action = getInitListAction(res.data);
      dispatch(action);
    });
  };
};

export type Actions =
  | ReturnType<typeof getInputChangeAction>
  | ReturnType<typeof getAddItemAction>
  | ReturnType<typeof getDelItemAction>
  | ReturnType<typeof getInitListAction>;
