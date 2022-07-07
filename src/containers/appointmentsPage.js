import React, { useState, useEffect } from 'react';
import { AppointmentForm } from '../components/appointmentForm';
import { TileList } from '../components/tileList';

export function AppointmentsPage({appointments,addAppointment,contacts}) {
    const [currentTitle, setCurrentTitle] = useState('');
    const [contact, setContact] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputTime, setInputTime] = useState('');
    const [isDuplicate, setIsDuplicate] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        let exist = false;
        for(let i=0; i < appointments.length; i++) {
            if(appointments[i].date === inputDate && appointments[i].time === inputTime ) {
                exist = true;
            }
        }
        setIsDuplicate(exist);
    }, [appointments, inputTime, inputDate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isDuplicate && currentTitle && contact && inputDate && inputTime) {
            addAppointment(currentTitle,contact,inputDate,inputTime);
            setCurrentTitle('');
            setContact('');
            setInputDate('');
            setInputTime('');
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    }

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                currentTitle={currentTitle}
                setCurrentTitle={setCurrentTitle}
                contact={contact}
                setContact={setContact}
                inputDate={inputDate}
                setInputDate={setInputDate}
                inputTime={inputTime}
                setInputTime={setInputTime}
                isDuplicate={isDuplicate}
                isEmpty={isEmpty}
                contacts={contacts}
                handleSubmit={handleSubmit} />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList array={appointments}/>
            </section>
        </div>
    );
}