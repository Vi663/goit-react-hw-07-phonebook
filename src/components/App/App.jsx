import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import MainContainer from "../MainContainer/MainContainer";
import { ContactForm } from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import {ContactList} from "../ContactList/ContactList";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
      {/* <ToastContainer theme="colored" autoClose={3000} /> */}
    </MainContainer>
  )
}