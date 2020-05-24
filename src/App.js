/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import Form from './Form';

/**************** CSS Styling ***********************/

const main = css`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  max-width: 2200px;
  margin: 0px;
  height: 100vh;
  width: 100vew;
  p {
    font-size: 1.4em;
    margin: 0px;
    overflow-wrap: break-word;
  }
`;
const heading = css`
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center !important;
  letter-spacing: 1px;
  width: 100%;
  font-weight: 100;
  margin-bottom: 30px;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
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
  justify-content: center;
  display: grid;
  max-height: 20px;
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
    transition: 0.2s;

    background-color: darkblue;
    color: white;
  }
  //
`;
// const buttonleft = css`
//   padding: 10px;
//   background: none;
//   font-size: 14px;
//   border-radius: 8px;
//   justify-items: right;
//   &:hover {
//     transition: 0.2s;

//     border-color: rgba(175, 47, 47, 0.1);
//     box-shadow: 0px 2px 2px grey;
//   }
// `;
const buttonright = css`
  background-color: red;
  color: white;
  padding: 10px;
  font-size: 14px;
  border-radius: 8px;
  justify-items: right;
  &:hover {
    transition: 0.2s;

    background-color: darkred;
    border-color: rgba(175, 47, 47, 0.1);
    box-shadow: 0px 2px 2px darkred;

    color: white;
  }
`;
const buttonDown = css`
  border-radius: 5%;
  padding: 10px 20px 10px 20px;
  align-self: center;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  margin-top: 40px;
  color: inherit;
  margin-top: 30px;
  padding: 3px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    transition: 0.2s;

    border-color: rgba(175, 47, 47, 0.1);
    box-shadow: 0px 1px 1px grey;
  }
`;

const todoList = css`
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  /* position: relative; */
  padding: 12px 8px 12px 40px;
  background: #eee;
  display: flex;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    transition: 0.2s;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  }
`;
const footer = css`
  color: #778;
  height: 20px;
  margin-top: 40px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  // const onChangeItem = (event) => {
  //   setNewItem(event.target.value);
  // };
  const completeLenght = () => {
    const lenght = todoItems.filter((done) => {
      return done.isDone === false;
    });

    return lenght.length;
  };
  // const handeChange = (index) => {
  //   // setTodoItems({
  //   //   ...todoItems.isDone,
  //   //   [event.target.index]: !event.target.index,
  //   // });
  //   let newTodos = [...todoItems];
  //   newTodos[index].isDone = !todoItems[index].isDone;
  //   setTodoItems(newTodos);

  //   console.log(todoItems.isDone);
  // };
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
                      : 'flex'};
                  `}
                >
                  {/* <button
                    css={buttonleft}
                    onClick={() => {
                      checkTodo(index);
                    }}
                  >
                    {todoItems[index].isDone ? 'Undone' : 'Done'}
                  </button> */}
                  <input
                    type="checkbox"
                    onClick={() => {
                      checkTodo(index);
                    }}
                  ></input>
                  <p>{item.text}</p>
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
                margin-top: 30px;
              `}
            >
              {completeLenght()} {completeLenght() > 1 ? 'todos' : 'todo'} left
            </div>
            <div
              css={buttonDown}
              onClick={() => {
                alert('Your closed tasks will be deleted.');

                deleteDone();
              }}
            >
              Delete completed tasks
            </div>
            <div
              css={buttonDown}
              onClick={() => {
                hideClosed();
              }}
            >
              {' '}
              {display === 0 ? 'Hide' : 'Show'} completed tasks
            </div>
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
              Delete all tasks
            </div>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
