import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducer';
// import createSagaMiddleware from 'redux-saga';
// import todoSage from './sagas';

// const sagaMiddleware = createSagaMiddleware();

// redux中间件:提供的是位于 action 被发起之后，到达 reducer 之前的扩展点,扩展了store.dispatch方法
// 使他可以接收函数或promise,任何middleware都可以以自己的方式解析dispatch的任何内容，当dispatch一个函数时,会先执行该函数
// 并继续传递actions给下一个 middleware,当middleware链中的最后一个middleware开始dispatch action时，这个action必须是一个普通对象

// redux-thunk和redux-saga
// redux-saga在组件中触发的仍是普通对象类型的action,相应类型的action会先由saga处理,处理后再交由store处理
// redux-thunk触发函数类型的action,在该action中直接先进行异步逻辑的处理,然后交由store处理

// 配置中间件
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

// store是唯一的 单一数据源
const store = createStore(
  reducer,
  enhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// sagaMiddleware.run(todoSage);

export default store;
