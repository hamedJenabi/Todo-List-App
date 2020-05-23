/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import Form from './Form';

/**************** CSS Styling ***********************/

const main = css`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;

  margin: 0px;
`;
const heading = css`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
  text-transform: uppercase;
  color: #272727;
  text-align: center !important;
  letter-spacing: 1px;
  h1 {
    font-size: 4em;
    margin: 0px;
  }
  h3 {
    font-size: 2em;
    margin: 0px;
  }
`;
const inputSection = css`
  padding-top: 20px;
  height: 10em;
  justify-content: center;
  display: grid;
`;
const button = css`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  &:hover {
    background-color: darkblue;
    color: white;
  }
`;
const buttonleft = css`
  background-color: #4caf50; /* Green */
  color: white;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  justify-content: left;
  align-items: left;
  margin-right: 10px;
  border-radius: 8px;
  &:hover {
    background-color: darkblue;
    color: white;
  }
`;
const buttonright = css`
  background-color: tomato; /* Green */
  color: white;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  justify-items: right;
  margin: 5px;
  &:hover {
    background-color: darkblue;
    color: white;
  }
`;
const buttonDown = css`
  border-radius: 5%;
  background-color: blue;
  border: none;
  color: white;
  padding: 10px 20px 10px 20px;

  align-self: center;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin-top: 35px;

  cursor: pointer;
  &:hover {
    background-color: darkblue;
    color: white;
  }
`;

const todoList = css`
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  /* position: relative; */
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 1.6em;
  display: flex;
  margin: 10px;
  border-radius: 8px;
  justify-content: space-between;
`;
const footer = css`
  color: #777;
  height: 20px;
  margin-top: 20px;

  text-align: center;
  border-top: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

/****************** Main App ********************/
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [display, setDisplay] = useState(0);
  // Delete the task

  const deleteTodo = (index) => {
    const newTodos = [...todoItems];
    newTodos.splice(index, 1);

    setTodoItems(newTodos);
  };

  const deleteDone = () => {
    const onlyComplete = todoItems.filter((done) => {
      return done.isDone === false;
    });
    setTodoItems(onlyComplete);
  };
  const hideClosed = () => {
    // const onlyIncomplete = todoItems.filter((notDone) => {
    //   return notDone.isDone === false;
    // });
    setDisplay(display === 0 ? 1 : 0);
  };

  const deleteAll = () => {
    const newTodos = [...todoItems];
    newTodos.splice(0);
    setTodoItems(newTodos);
  };

  // Done tasks
  const checkTodo = (index) => {
    let newTodos = [...todoItems];
    newTodos[index].isDone = !todoItems[index].isDone;
    setTodoItems(newTodos);
  };

  // add item
  const addTodo = (text) => {
    const newTodos = [...todoItems, { text: text, isDone: false }];
    setTodoItems(newTodos);
  };

  /******************Return ********************/

  return (
    <div css={main}>
      <header css={heading}>
        <h1>Hamed's to-do App</h1>
      </header>
      <div css={inputSection}>
        <Form
          onSubmit={function onSubmit(newItem) {
            addTodo(newItem);
          }}
        ></Form>

        <div>
          <div>
            {todoItems.map(function mapping(item, index) {
              return (
                <ul
                  value={index}
                  css={css`
                    ${todoList};
                    background-color: ${todoItems[index].isDone
                      ? '#4caf50; /* Green */d'
                      : ''};

                    display: ${display === 1 && todoItems[index].isDone
                      ? 'none'
                      : 'block'};
                  `}
                >
                  <button
                    css={buttonleft}
                    onClick={() => {
                      checkTodo(index);
                    }}
                  >
                    {todoItems[index].isDone ? 'Reopen!' : 'Done'}
                  </button>
                  {item.text}
                  <button
                    css={buttonright}
                    onClick={() => {
                      deleteTodo(index);
                      alert('Your task will be deleted.');
                    }}
                  >
                    Delete
                  </button>
                </ul>
              );
            })}
          </div>
        </div>
        <footer>
          <ul css={footer}>
            <div
              css={css`
                ${buttonDown};
                justify-items: left;
              `}
              onClick={() => {
                alert('Your tasks will be deleted.');

                deleteAll();
              }}
            >
              delete all
            </div>
            <div
              css={buttonDown}
              onClick={() => {
                alert('Your closed tasks will be deleted.');

                deleteDone();
              }}
            >
              delete closed tasks
            </div>
            <div
              css={buttonDown}
              onClick={() => {
                hideClosed();
              }}
            >
              {' '}
              {display === 0 ? 'Hide' : 'Show'} closed tasks
            </div>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
