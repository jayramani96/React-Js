import React, { useState, useRef } from 'react';

export default function Todolist() {
    const [items, setItems] = useState([]);
    const inputRef = useRef();

    const Nitem = () => {
        const newitem = inputRef.current.value;
        if (newitem) {
            setItems([...items, newitem]);
        }
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    return (
        <div className="container">
            <h1>To Do List</h1>
            <input type="text" ref={inputRef} />
            <button onClick={Nitem}>Click</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
