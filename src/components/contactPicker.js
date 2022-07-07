import React from 'react';

export function ContactPicker({contacts, setContact}) {

    return (
        <div>
            <select id='contactPicker' name='contactPicker' onChange={e => setContact(e.target.value)} defaultValue='default'>
                <option value='Select a contact' key='default'>Select a contact</option>
                {
                    contacts.map((el,index) => {
                            return <option key={index} value={el.name}>{el.name}</option>
                    })
                }
            </select>
        </div>
    )
}