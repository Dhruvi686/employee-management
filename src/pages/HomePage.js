import React, { useEffect, useState } from 'react';
import EmployeeList from '../components/EmployeeList';
import { fetchEmployees } from '../services/api';

const HomePage = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getEmployees = async () => {
            try {
                const data = await fetchEmployees();
                setEmployees(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getEmployees();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Employee Management</h1>
            <EmployeeList employees={employees} />
        </div>
    );
};

export default HomePage;