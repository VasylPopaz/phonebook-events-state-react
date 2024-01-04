import React from 'react';
import { nanoid } from 'nanoid';

export const Contacts = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map((elem, index) => {
        return (
          <li key={nanoid()}>
            {elem.name}: {elem.number}
            <button type="button" onClick={() => onClick(elem.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
