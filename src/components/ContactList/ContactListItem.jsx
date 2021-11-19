import React from 'react';
import s from './ContactList.module.css';

export default function ContactListItem ({ name, number, remove, id }) {

  return (
    <li key={id} className={s.contactItem}>
      <span className={s.contactItemName}>{name}</span>
      <span className={s.contactItemNumber}>{number}</span>
      <button
        className={s.contactBtn}
        type="button"
        onClick={remove}>
        Delete
      </button>
    </li>
  )
}