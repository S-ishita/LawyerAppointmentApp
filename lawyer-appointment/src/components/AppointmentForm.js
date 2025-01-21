import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment, updateLawyerSlots } from '../redux/actions';
import { getAvailability } from '../utils/utils';

const AppointmentForm = () => {
    const [form, setForm] = useState({ lawyer: '', date: '', time: '' });
    const dispatch = useDispatch();
    const lawyers = useSelector((state) => state.lawyers);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Form Data:", form);
        console.log("All Lawyers:", lawyers);

        const isAvailable = getAvailability(lawyers, form.lawyer);
        
        if (!isAvailable) {
            alert('Appointment not available');
            return;
        }

        dispatch(addAppointment(form));
        dispatch(updateLawyerSlots(Number(form.lawyer)));

        setForm({ lawyer: '', date: '', time: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book Appointment</h2>
            <select name="lawyer" value={form.lawyer} onChange={handleChange} required>
                <option value="">Select Lawyer</option>
                {lawyers.map((lawyer) => (
                    <option key={lawyer.id} value={lawyer.id}>
                        {lawyer.name} - {lawyer.specialty} - ${lawyer.cost} ({lawyer.availableSlots} slots available)
                    </option>
                ))}
            </select>
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
            <input type="time" name="time" value={form.time} onChange={handleChange} required />
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default AppointmentForm;
