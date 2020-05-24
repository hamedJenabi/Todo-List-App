import { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const formStyle = css`
  justify-content: space-between;
  padding: 2px;
  display: flex;
`;

const input = css`
  width: 100%;
  padding: 15px 10px 15px 10px;
  margin-right: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: red;
  &:hover {
    transition: 0.2s;
    box-shadow: 1px 1px 0px 0 rgba(0, 0, 0, 0.1),
      1px 0px 2px 0 rgba(0, 0, 0, 0.1);
  }
`;
const button = css`
  padding: 15px 32px;
  background: lightgrey;
  font-size: 14px;
  border-radius: 8px;
  justify-items: right;
  &:hover {
    transition: 0.2s;

    border-color: rgba(175, 47, 47, 0.1);
    box-shadow: 0px 2px 2px grey;
  }
  /* background-color: blue;
  color: white;
  border-radius: 8px;

  padding: 15px 32px;
  font-size: 16px;
  &:hover {
    transition: 0.2s;
    background-color: darkblue;
    color: white;
  } */
`;

/**********************Function **/

function AddTodo(props) {
  const [newItem, setNewItem] = useState('');
  const onChangeItem = (event) => {
    setNewItem(event.target.value);
  };

  return (
    <form css={formStyle}>
      <input
        css={input}
        type="text"
        placeholder="Add your new tasks here"
        value={newItem}
        onChange={onChangeItem}
      />
      <button
        css={button}
        type="submit"
        onClick={(event) => {
          newItem === ''
            ? alert('please type your task')
            : props.onSubmit(newItem);
          setNewItem('');
          event.preventDefault();
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
