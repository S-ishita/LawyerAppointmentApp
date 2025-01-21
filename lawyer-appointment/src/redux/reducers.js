import { ADD_APPOINTMENT, UPDATE_LAWYER_SLOTS } from './actions';
import lawyers from '../data/lawyers';

const initialState = {
    appointments: [],
    lawyers: lawyers
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_APPOINTMENT:
            return {
                ...state,
                appointments: [...state.appointments, { ...action.payload, lawyer: Number(action.payload.lawyer) }]
            };
        case UPDATE_LAWYER_SLOTS:
            console.log("Updating lawyer slots for ID:", action.payload);
            const updatedLawyers = state.lawyers.map(lawyer =>
                lawyer.id === action.payload
                    ? { ...lawyer, availableSlots: lawyer.availableSlots - 1 }
                    : lawyer
            );
            return {
                ...state,
                lawyers: updatedLawyers
            };
        default:
            return state;
    }
};

export default reducer;
