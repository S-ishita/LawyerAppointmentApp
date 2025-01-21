export const getAvailability = (lawyers, lawyerId) => {
    // Convert lawyerId to a number to ensure the comparison is correct
    const lawyer = lawyers.find(l => l.id === Number(lawyerId));
    
    // Debug logs to check the lawyer details
    console.log("Lawyers:", lawyers);
    console.log("Lawyer ID:", lawyerId);
    console.log("Found Lawyer:", lawyer);

    // Ensure the lawyer exists and check availability
    if (!lawyer) {
        console.log("Error: Lawyer not found");
        return false;
    }

    console.log("Lawyer's Available Slots:", lawyer.availableSlots);

    // Return true if the lawyer has more than 0 available slots
    return lawyer.availableSlots > 0;
};
