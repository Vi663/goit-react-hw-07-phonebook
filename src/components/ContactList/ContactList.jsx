import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from "../../redux/contacts/contactsSelectors";
import contactsActions from '../../redux/contacts/contactsActions';
import ContactListItem from "./ContactListItem";
import s from './ContactList.module.css'


export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const deleteContact = id => dispatch(contactsActions.deleteContact(id));
  const isShowContacts = contacts.length > 0
  return (
    <div>
      {isShowContacts && (
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              remove={() => deleteContact(id)}
            />
          ))}
        </ul>
      )}
    </div>
  )
};