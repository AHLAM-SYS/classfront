import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [student, setStudent] = useState({ name: '', email: '', age: '', grade: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', student);
      console.log(response.data);
      alert('Student registered successfully!');
    } catch (error) {
      console.error(error);
      alert('Error registering student');
    }
  };

  return (
    <div>
      <h1>School Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <input type="text" name="grade" placeholder="Grade" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
