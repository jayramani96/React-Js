import React, { useEffect, useState } from 'react';

export default function CrudLocalStorage() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState([]);
    const [city, setCity] = useState('');
    const [record, setRecord] = useState([]);
    const [editId, setEditId] = useState(null); 


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('employee')) || [];
        setRecord(data);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = { id: editId || Date.now(), name, age, gender, hobbies, city };

        let updatedRecord;
        if (editId) {
            updatedRecord = record.map((item) =>
                item.id === editId ? obj : item
            );
            setEditId(null); 
        } else {
            updatedRecord = [...record, obj];
        }

        setRecord(updatedRecord);
        localStorage.setItem('employee', JSON.stringify(updatedRecord));

        setName('');
        setAge('');
        setGender('');
        setHobbies([]);
        setCity('');
    };

    const handleDelete = (id) => {
        const updatedRecord = record.filter((item) => item.id !== id);
        setRecord(updatedRecord);
        localStorage.setItem('employee', JSON.stringify(updatedRecord));
    };

    const handleEdit = (id) => {
        const item = record.find((item) => item.id === id);
        if (item) {
            setName(item.name);
            setAge(item.age);
            setGender(item.gender);
            setHobbies(item.hobbies);
            setCity(item.city);
            setEditId(id);
        }
    };

    const handleHobbyChange = (e) => {
        const { value, checked } = e.target;
        setHobbies((prev) => 
            checked ? [...prev, value] : prev.filter((hobby) => hobby !== value)
        );
    };

    return (
        <div className="crud-container">
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="input-field"
                />

                <input
                    type="number"
                    placeholder="Enter Your Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    className="input-field"
                />

                <label className="label-text">Select Gender</label>
                <div className="radio-container">
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === 'male'}
                        onChange={(e) => setGender(e.target.value)}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === 'female'}
                        onChange={(e) => setGender(e.target.value)}
                    /> Female
                </div>

                <label className="label-text">Select Hobby</label>
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        name="hobby"
                        value="Cricket"
                        checked={hobbies.includes('Cricket')}
                        onChange={handleHobbyChange}
                    /> Cricket
                    <input
                        type="checkbox"
                        name="hobby"
                        value="Drive"
                        checked={hobbies.includes('Drive')}
                        onChange={handleHobbyChange}
                    /> Drive
                    <input
                        type="checkbox"
                        name="hobby"
                        value="Travelling"
                        checked={hobbies.includes('Travelling')}
                        onChange={handleHobbyChange}
                    /> Travelling
                    <input
                        type="checkbox"
                        name="hobby"
                        value="Music"
                        checked={hobbies.includes('Music')}
                        onChange={handleHobbyChange}
                    /> Music
                </div>

                <select value={city} onChange={(e) => setCity(e.target.value)} required className="input-field">
                    <option value="" disabled>Select City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                    <option value="Maharashtra">Maharashtra</option>
                </select>
                
                <button type="submit" className="submit-btn">{editId ? 'Update' : 'Submit'}</button>
            </form>

            {/* Display data in a table */}
            {record.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Hobbies</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>{item.hobbies.join(', ')}</td>
                                <td>{item.city}</td>
                                <td>
                                    <button onClick={() => handleEdit(item.id)} className="action-btn">Edit</button>
                                    <button onClick={() => handleDelete(item.id)} className="action-btn">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}