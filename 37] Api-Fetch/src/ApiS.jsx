import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ApiS() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [record, setRecord] = useState([]);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let data = await axios.get("http://localhost:1728/product");
    setRecord(data.data);
  };

  const addData = async () => {
    if (editId) {
      let updateData = {
        id: editId,
        title,
        price,
        category,
      };

      await axios.put(`http://localhost:1728/product/${editId}`, updateData);
      setRecord(record.map((e) => e.id === editId ? updateData: e))
      setEditId(null);
    } else {
      let obj = { id: String(record.length + 1), title, price, category };
      await axios.post("http://localhost:1728/product", obj);
      setRecord([...record, obj]);
    }
    setTitle("");
    setPrice("");
    setCategory("");
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:1728/product/${id}`);
    fetchApi();
  };

  const editData = (id) => {
    let item = record.find((item) => item.id == id);
    if (item) {
      setTitle(item.title);
      setPrice(item.price);
      setCategory(item.category);
      setEditId(id);
    }
  };

  return (
    <div className="container">
      <h1>API Json Server</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="number"
          placeholder="Enter Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          type="text"
          placeholder="Enter Category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <button onClick={addData} className="btn">
          {editId ? "Update" : "Add Data"}
        </button>
      </div>

      <div className="card-container">
        {record &&
          record.map((e, i) => {
            return (
              <div key={i} className="card">
                <h3>Title: {e.title}</h3>
                <p>Category: {e.category}</p>
                <p>Price: ${e.price}</p>
                <button onClick={() => editData(e.id)} className="btn">
                  Edit
                </button>
                <button onClick={() => deleteData(e.id)} className="btn delete">
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
