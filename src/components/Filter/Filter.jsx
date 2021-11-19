import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from "../../redux/contacts/contactsSelectors";
import contactsActions from '../../redux/contacts/contactsActions';
import s from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const onChangeHandler = (e) => {
    dispatch(contactsActions.filterContacts(e.target.value))
  }
  return (
    <div>
      <p>Find contacts by name</p>
      <input className={s.filterInput}
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChangeHandler}
      />
    </div>
  )
};

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts.items,
//     filterValue: state.contacts.filter,
//   };
// };

// const mapDispatchToProps = {
//   onFilter: contactsActions.filterContacts,
// };
export default Filter;
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

