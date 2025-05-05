import React, { useEffect, useState } from 'react';
import { getAllEmployees, deleteEmployee } from '../services/api';
import EmployeeDetailsPopup from './EmployeeDetailsPopup';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const data = await getAllEmployees();
        setEmployees(data);
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        fetchEmployees();
    };

    const handleViewDetails = (employee) => {
        setSelectedEmployee(employee);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
        setSelectedEmployee(null);
    };

    return (
        <div>
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Employee Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee._id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.employeeType}</td>
                            <td>
                                <button onClick={() => handleViewDetails(employee)}>View</button>
                                <button onClick={() => handleDelete(employee._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {popupVisible && (
                <EmployeeDetailsPopup employee={selectedEmployee} onClose={closePopup} />
            )}
        </div>
    );
};

export default EmployeeList;