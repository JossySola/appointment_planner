import React from 'react';
import alert from '../alert.png';

export function ContactForm({
    nameInput,
    setNameInput,
    phoneInput,
    setPhoneInput,
    emailInput,
    setEmailInput,
    handleSubmit,
    isDuplicate,
    isEmpty
}) {
    // This is a STATELESS component
    return (
    <div>
        <form onSubmit={e => handleSubmit(e)}>
            <input type='text' placeholder='Enter name' value={nameInput} onChange={e => setNameInput(e.target.value)} ></input>
            {isDuplicate && <p style={{color:'#FC472E', fontWeight: 'bold', fontSize: 12}}>This name has already been registered.<img src={alert} alt='Alert icon' style={{marginLeft: 5, width: 15, height: 15, verticalAlign: 'middle'}}/></p>}
            <input type='tel' placeholder='Enter phone number (10 digits)' pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={phoneInput} onChange={e => setPhoneInput(e.target.value)}></input>
            <input type='email' placeholder='Enter e-mail' value={emailInput} onChange={e => setEmailInput(e.target.value)}></input>
            {isEmpty && <p style={{color:'#FC472E', fontWeight: 'bold', fontSize: 12}}>Please fill out all the fields.<img src={alert} alt='Alert icon' style={{marginLeft: 5, width: 15, height: 15, verticalAlign: 'middle'}}/></p>}
            <input type='submit' value='Add Contact'></input>
        </form>
    </div>)
}