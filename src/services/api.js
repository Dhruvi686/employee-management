import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees';

export const getAllEmployees = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getEmployeeById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createEmployee = async (employeeData) => {
    try {
        const response = await axios.post(API_URL, employeeData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateEmployee = async (id, employeeData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, employeeData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteEmployee = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchEmployees = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};