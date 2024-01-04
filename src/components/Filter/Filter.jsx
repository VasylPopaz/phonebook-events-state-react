import React from 'react';

export const Filter = ({ onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={onChange} />
    </label>
  );
};
