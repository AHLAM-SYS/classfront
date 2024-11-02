// src/components/RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './rigestrationform.css';

const RegistrationForm = () => {
    const [student, setStudent] = useState({ name: '', age: '', grade: '', parentEmail: '' });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', student);
            alert('Registration successful!');
            setStudent({ name: '', age: '', grade: '', parentEmail: '' });
        } catch (error) {
            alert('Error registering student');
        }
    };

    return (
        <form className="registration-form" onSubmit={handleSubmit}>
            <h2>School Registration</h2>
            <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" value={student.age} onChange={handleChange} required />
            <input type="text" name="grade" placeholder="Grade" value={student.grade} onChange={handleChange} required />
            <input type="email" name="parentEmail" placeholder="Parent Email" value={student.parentEmail} onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
