import React from 'react';

const Dashboard = ({ totalAppointments, unavailableLawyers }) => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="dashboard-stats">
                <div className="stat-item">
                    <h3>Total Appointments</h3>
                    <p className="stat-value">{totalAppointments}</p>
                </div>
                <div className="stat-item">
                    <h3>Unavailable Lawyers</h3>
                    <p className="stat-value">{unavailableLawyers.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
