import React from 'react';

const EmployeeDetailsPopup = ({ employee, onClose }) => {
    if (!employee) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Employee Details</h2>
                <button className="close-button" onClick={onClose}>Close</button>
                <div className="employee-info">
                    <img src={employee.profilePicture} alt={`${employee.name}'s profile`} className="profile-picture" />
                    <p><strong>Name:</strong> {employee.name}</p>
                    <p><strong>Email:</strong> {employee.email}</p>
                    <p><strong>Employee Type:</strong> {employee.employeeType}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetailsPopup;