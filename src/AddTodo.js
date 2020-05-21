import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const input = css`
  width: 30%;
  align-self: center;
  padding: 15px 10px;
  margin: 0px;
  box-sizing: border-box;
  box-shadow: aqua;
`;

function AddTodo(props) {
  const onChangeItem = (event) => {
    // Step 2: Update the value with whatever the user types in the box
    props.setNewItem(event.target.value);
  };

  return (
    <div>
      <input
        css={input}
        type="text"
        placeholder="add your new taks here"
        value={props.newItem}
        onChange={onChangeItem}
      />
      {/* <button type="submit" onClick={() => props.onSubmit(props.newItem)}>
        Submit
      </button> */}
    </div>
  );
}
export default AddTodo;
