export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
export const UPDATE_LAWYER_SLOTS = 'UPDATE_LAWYER_SLOTS';

export const addAppointment = (appointment) => ({
    type: ADD_APPOINTMENT,
    payload: appointment
});

export const updateLawyerSlots = (lawyerId) => ({
    type: UPDATE_LAWYER_SLOTS,
    payload: lawyerId
});
