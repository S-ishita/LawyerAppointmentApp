import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AppointmentList = ({ lawyers, appointments }) => {
    const [nameFilter, setNameFilter] = useState('');
    const [idFilter, setIdFilter] = useState('');
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    useEffect(() => {
        setFilteredAppointments(appointments);
    }, [appointments]);

    const handleNameFilterChange = (e) => {
        setNameFilter(e.target.value);
    };

    const handleIdFilterChange = (e) => {
        setIdFilter(e.target.value);
    };

    const handleFilter = () => {
        const filtered = appointments.filter(appointment => {
            const lawyer = lawyers.find(l => l.id === appointment.lawyer);
            return (
                (nameFilter === '' || (lawyer && lawyer.name.toLowerCase().includes(nameFilter.toLowerCase()))) &&
                (idFilter === '' || (lawyer && lawyer.id.toString().includes(idFilter)))
            );
        });
        setFilteredAppointments(filtered);
    };

    const handleResetFilter = () => {
        setFilteredAppointments(appointments);
        setNameFilter('');
        setIdFilter('');
    };

    return (
        <div>
            <h2>Appointment History</h2>
            <div className="filter-container">
                <input
                    type="text"
                    value={nameFilter}
                    onChange={handleNameFilterChange}
                    placeholder="Filter by lawyer name"
                />
                <input
                    type="text"
                    value={idFilter}
                    onChange={handleIdFilterChange}
                    placeholder="Filter by lawyer ID"
                />
                <button onClick={handleFilter}>Filter</button>
                <button onClick={handleResetFilter}>Reset</button>
            </div>
            {filteredAppointments.map((appointment, index) => {
                const lawyer = lawyers.find(l => l.id === appointment.lawyer);
                if (!lawyer) {
                    console.log("Error: Lawyer not found for appointment:", appointment);
                    return null;
                }
                return (
                    <div key={index} className="appointment-card">
                        <p><strong>Lawyer Name:</strong> {lawyer.name}</p>
                        <p><strong>Specialty:</strong> {lawyer.specialty}</p>
                        <p><strong>Date:</strong> {appointment.date}</p>
                        <p><strong>Time:</strong> {appointment.time}</p>
                        <p><strong>Cost:</strong> ${lawyer.cost}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default AppointmentList;
