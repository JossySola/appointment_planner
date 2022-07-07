import React, { useEffect, useState } from 'react';
import { ContactForm } from '../components/contactForm';
import { TileList } from '../components/tileList';


export function ContactsPage({contacts,addContact}) {
    // This is the parent component that will CONTROL the Form component
    // This is a STATEFUL component
    // Component for handling logic for adding contacts and listing current contacts
    const [nameInput, setNameInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [isDuplicate, setIsDuplicate] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        let exist = false;
        for(let i=0; i < contacts.length; i++) {
            if(contacts[i].name.toLowerCase() === nameInput.toLowerCase()) {
                exist = true;
            }
        }
        setIsDuplicate(exist);
    }, [contacts, nameInput])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isDuplicate && phoneInput && emailInput) {
            addContact(nameInput,phoneInput,emailInput);
            setNameInput('');
            setPhoneInput('');
            setEmailInput('');
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    }

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm 
                nameInput={nameInput}
                setNameInput={setNameInput}
                phoneInput={phoneInput}
                setPhoneInput={setPhoneInput}
                emailInput={emailInput}
                setEmailInput={setEmailInput}
                handleSubmit={handleSubmit}
                isDuplicate={isDuplicate}
                isEmpty={isEmpty}
                />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList
                array={contacts}
                />
            </section>
            
        </div>
    );
}