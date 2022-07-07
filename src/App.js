import './App.css';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import {ContactsPage} from './containers/contactsPage';
import {AppointmentsPage} from './containers/appointmentsPage';

export default function App() {
  // This is a STATEFUL component
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // There has to be a function to be passed as a prop in order to give the ability to other components to modify the states
  const addContact = (name,phone,email) => {
    setContacts(prev => [...prev, {
      name: name,
      phone: phone,
      email: email
    }])
  }
  const addAppointment = (title,contact,date,time) => {
    setAppointments(prev => [...prev, {
      title: title,
      contact: contact,
      date: date,
      time: time
    }])
  }

  return (
    <div>
      <nav>
        {// Link is part of React Router and is used to set hyperlinks (like an <a> element)
        }
        <Link to='/contacts'>Contacts</Link>
        <Link to='/appointments'>Appointments</Link>
      </nav>
        {// Routes nesting Route sets the element that has to be displayed in the specified path
        }
      <Routes>
        <Route path='contacts' element={<ContactsPage contacts={contacts} addContact={addContact} />} />
        <Route path='appointments' element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />} />
      </Routes>
      <Outlet />  
    </div>
  )
}