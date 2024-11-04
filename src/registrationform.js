import React, { useState } from 'react';
import axios from 'axios';
import './rigestrationform.css'; // Import CSS file

const Registration = () => {
    const [formData, setFormData] = useState({ name: '', email: '', grade: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            setMessage('Registration successful!');
            setFormData({ name: '', email: '', grade: '', age: '', password: '' }); // Reset form
        } catch (error) {
            console.error('Error registering:', error.response ? error.response.data : error.message);
            setMessage('Error registering: ' + (error.response ? error.response.data.message : error.message));
        }
    };

    return (
        <div className="registration-container">
            <h2>School Registration</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit} className="registration-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="grade"
                    placeholder="Grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="age"
                    placeholder="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="family password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;
