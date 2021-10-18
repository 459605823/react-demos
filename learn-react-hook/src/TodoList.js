import React, { useRef } from 'react';
import TodoItem from './TodoItem'
import { useTodo } from './hooks';

function App() {
  const [todo, setTodo, todos, handleAddTodo, handleDelTodo] = useTodo()
  const inputEl = useRef(null)
  const focus = () => {
    inputEl.current.focus()
  }
  return (
    <div className="App">
      <p>TodoList</p>
      <input ref={inputEl} type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleAddTodo}>add todo</button>
      <button onClick={focus}>focus</button>
      <ul>
        {
          todos.map((todo, index) => 
            <TodoItem key={todo + index} index={index} todo={todo} handleDelTodo={handleDelTodo} />
          )
        }
      </ul>
    </div>
  );
}

export default App;
