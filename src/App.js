/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import AddTodo from './AddTodo';

function App() {
  const [todoItems, setTodoItems] = useState([
    { text: 'Your todo comes here' },
    { text: 'you can check done/remove and filter' },
    { text: 'have fun!!' },
  ]);

  const [newItem, setNewItem] = useState('');

  const addTodo = (text) => {
    const newTodos = [...todoItems, { text }];
    setTodoItems(newTodos);
  };
  // setTodoItems([...todoItems, { newItem }]);

  // const todoItemmm = [
  //   'Your todo comes here',
  //   'you can check done/remove and filter',
  //   'have fun!!',
  // ];
  //   { text: 'Your tYodo comes here'
  //       isDone: false,
  // },
  //   { text: 'you can check done/remove and filter'
  //   isDone: false,},
  //   { text: 'have fun!!'
  //   isDone: false,},

  // const [todoStatus, setTodoStatus] = useState('');
  // const [isDone, setIsDone] = useState('');
  // const onChangeClick = (event) => {
  //   setTodoStatus(event.target.checked);
  // };

  // todoList.push(todoItems);

  return (
    <div>
      <header>
        <h1>Hamed's todos-App</h1>
        <h3>you can add your new task here</h3>
      </header>

      <AddTodo newItem={newItem} setNewItem={setNewItem}></AddTodo>
      <button
        type="submit"
        onClick={() => {
          addTodo(newItem);
          alert('you added a task to your todo list');
          setNewItem('');
        }}
      >
        Submit
      </button>

      <div>
        <ul>
          {todoItems.map(function mapping(item) {
            return <li>{item.text}</li>;
          })}
        </ul>
      </div>
      {/* {console.log(todoItemmm)} */}
    </div>
  );
}

export default App;
