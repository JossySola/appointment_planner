import React from 'react';
import alert from '../alert.png';
import { ContactPicker } from './contactPicker';

export function AppointmentForm({
    currentTitle,
    setCurrentTitle,
    setContact,
    contacts,
    inputDate,
    setInputDate,
    inputTime,
    setInputTime,
    isDuplicate,
    isEmpty,
    handleSubmit
}) {
    // This is a STATELESS component
    return (
    <div>
        <form onSubmit={e => handleSubmit(e)}>
            <ContactPicker contacts={contacts} setContact={setContact}/>
            <input type='text' placeholder='Enter title' value={currentTitle} onChange={e => setCurrentTitle(e.target.value)} ></input>
            <input type='date' placeholder='DD/MM/YYYY' value={inputDate} onChange={e => {
                setInputDate(e.target.value)
                }}></input>
            <input type='time' placeholder='00:00' value={inputTime} onChange={e => {
                setInputTime(e.target.value)
            }}></input>

            {isDuplicate && <p style={{color:'#FC472E', fontWeight: 'bold', fontSize: 12}}>The date and time is already taken.<img src={alert} alt='Alert icon' style={{marginLeft: 5, width: 15, height: 15, verticalAlign: 'middle'}}/></p>}
            {isEmpty && <p style={{color:'#FC472E', fontWeight: 'bold', fontSize: 12}}>Please fill out all the fields.<img src={alert} alt='Alert icon' style={{marginLeft: 5, width: 15, height: 15, verticalAlign: 'middle'}}/></p>}
            <input type='submit' value='Add Appointment'></input>
        </form>
    </div>)
}