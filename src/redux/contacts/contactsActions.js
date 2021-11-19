import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', (data) => ({
  payload: {
    id: uuidv4(),
    ...data
  },
}))

const filterContacts = createAction('contacts/filter')

const deleteContact = createAction('contacts/delete')

const contactActions =  { addContact, deleteContact, filterContacts };
export default contactActions;