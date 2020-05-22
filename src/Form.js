import { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const input = css`
  width: 100%;
  padding: 15px 10px 15px 10px;
  margin: 0px;
  box-sizing: border-box;
  box-shadow: aqua;
`;
const button = css`
  background-color: #4caf50; /* Green */
  color: white;
  padding: 15px 32px;
  font-size: 16px;
  margin-top: 20px;
  &:hover {
    background-color: red;
    color: white;
  }
`;

/**********************Function **/

function AddTodo(props) {
  const [newItem, setNewItem] = useState('');
  const onChangeItem = (event) => {
    setNewItem(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          css={input}
          type="text"
          placeholder="add your new taks here"
          value={newItem}
          onChange={onChangeItem}
        />
        <button
          css={button}
          type="submit"
          onClick={(event) => {
            props.onSubmit(newItem);
            setNewItem('');
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
