import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeForm = ({ employee, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        profilePicture: null,
        employeeType: '',
    });

    useEffect(() => {
        if (employee) {
            setFormData({
                name: employee.name,
                email: employee.email,
                profilePicture: null,
                employeeType: employee.employeeType,
            });
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            profilePicture: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('name', formData.name);
        formDataToSubmit.append('email', formData.email);
        formDataToSubmit.append('profilePicture', formData.profilePicture);
        formDataToSubmit.append('employeeType', formData.employeeType);

        await onSubmit(formDataToSubmit);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Profile Picture:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
            <div>
                <label>Employee Type:</label>
                <select
                    name="employeeType"
                    value={formData.employeeType}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Type</option>
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="contract">Contract</option>
                </select>
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EmployeeForm;