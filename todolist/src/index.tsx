import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoList from './pages/TodoList';
import store from './store';
import '@/styles/index.css';
import '@/styles/index.tailwind.css';

const App = (
  <Provider store={store}>
    <React.StrictMode>
      <TodoList />
    </React.StrictMode>
  </Provider>
);

// React中的组件必须以大写字母开头,小写开头会被当作html标签
ReactDOM.render(App, document.getElementById('root'));
