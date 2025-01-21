import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import Dashboard from './components/Dashboard';
import './styles.css';

const App = () => {
    const appointments = useSelector((state) => state.appointments);
    const lawyers = useSelector((state) => state.lawyers);

    useEffect(() => {
        console.log("Appointments:", appointments);
    }, [appointments]);

    const totalAppointments = appointments.length;
    const unavailableLawyers = lawyers.filter(lawyer => appointments.filter(app => app.lawyer === lawyer.id).length >= lawyer.availableSlots).map(lawyer => lawyer.name);

    return (
        <div className="container">
            <header className="header">
                <h1>
                    <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Law Firm Logo" className="logo" />
                    Lawyer Appointment Management System
                </h1>
                <img className="img-banner" src={`${process.env.PUBLIC_URL}/banner.jpg`} alt="Law Office" />
            </header>
            <div className="two-column-layout">
                <div className="column">
                    <Dashboard totalAppointments={totalAppointments} unavailableLawyers={unavailableLawyers} />
                </div>
                <div className="column">
                    <AppointmentList lawyers={lawyers} appointments={appointments} />
                </div>
            </div>
            <AppointmentForm />
            <footer className="footer">
                © 2025 Law Firm. All rights reserved.
            </footer>
        </div>
    );
};

export default App;
