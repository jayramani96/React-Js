import React, { useState } from 'react';

export default function Data_TABLE() {
    const [filtered, setFiltered] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const data = [
        { id: 1, name: "Apple", category: "Fruit", price: 2 },
        { id: 2, name: "Carrot", category: "Vegetable", price: 1 },
        { id: 3, name: "Banana", category: "Fruit", price: 1.5 },
        { id: 4, name: "Broccoli", category: "Vegetable", price: 3.5 },
        { id: 5, name: "Mango", category: "Fruit", price: 3 },
    ];

    
    const filteredData = filtered === "All" 
        ? data 
        : data.filter((item) => item.category === filtered);


    const searchedData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

   
    const sortedData = [...searchedData].sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    return (
        <div>
            <h1>Filter by Category</h1>
            <select onChange={(e) => setFiltered(e.target.value)}>
                <option value="All">All</option>
                <option value="Fruit">Fruit</option>
                <option value="Vegetable">Vegetable</option>
            </select>

            <h1>Search by Name</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <h1>Sort by Price</h1>
            <button onClick={() => setSortOrder("asc")}>Sort Ascending</button>
            <button onClick={() => setSortOrder("desc")}>Sort Descending</button>

            <ul>
                {sortedData.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.category} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
