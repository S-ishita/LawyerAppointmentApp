import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import Dashboard from './components/Dashboard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
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
        <Container>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Law Firm Logo" style={{ maxWidth: '50px', marginRight: '20px' }} />
                    <Typography variant="h6" component="div">
                        Lawyer Appointment Management System
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box component="img" src={`${process.env.PUBLIC_URL}/banner.jpg`} alt="Law Office" sx={{ width: '100%', height: 200, objectFit: 'cover', marginTop: 2, borderRadius: 1 }} />
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
        </Container>
    );
};

export default App;
