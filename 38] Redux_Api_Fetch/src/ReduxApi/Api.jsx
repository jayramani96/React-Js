import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, fetchApi, updateData } from '../fetures/ApiSlice';

export default function Api() {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const record = useSelector((state) => {
    return state.ApiKey;
  });

  const addRecord = () => {
    if (editId ===  null) {
      let obj = { id: String(record.record.length + 1), image, title, price, category };
      dispatch(addData(obj));
    } else {
      let updateObj = { id: editId, image, title, price, category };
      dispatch(updateData({ editId, updData: updateObj }));
      setEditId(null);
    }

    setImage('');
    setTitle('');
    setPrice('');
    setCategory('');
  };

  const deleteRecord = (i) => {
    dispatch(deleteData(i));
  };

  const updateRecord = (e) => {
    setEditId(e.id);
    setImage(e.image);
    setTitle(e.title);
    setPrice(e.price);
    setCategory(e.category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container py-5 bg-light min-vh-100">
      <div className="py-3 mb-4 text-center text-white" style={{ background: 'linear-gradient(to right, #1E263A, #1E263A)' }}>
        <h1 className="fw-bold">API CRUD Operation</h1>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-md-2 mb-2">
          <input
            type="text"
            placeholder="Enter Image Url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-control shadow-sm rounded"
          />
        </div>
        <div className="col-md-2 mb-2">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control shadow-sm rounded"
          />
        </div>
        <div className="col-md-2 mb-2">
          <input
            type="number"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control shadow-sm rounded"
          />
        </div>
        <div className="col-md-2 mb-2">
          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control shadow-sm rounded"
          />
        </div>
        <div className="col-md-2 mb-2">
          <button
            onClick={addRecord}
            className={`btn ${editId ? 'btn-warning' : 'btn-primary'} w-100 shadow-sm rounded`}
          >
            {editId ? 'Update Data' : 'Add Data'}
          </button>
        </div>
      </div>

      <div className="row justify-content-center g-4">
        {record.loading === false &&
          record.record.map((e, i) => (
            <div key={i} className="col-md-4 col-lg-3">
              <div className="card shadow-sm h-100 border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <img
                  src={e.image}
                  alt={e.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-truncate">{e.title}</h5>
                  <p className="text-primary fw-bold fs-5">${e.price}</p>
                  <p className="text-secondary">{e.category}</p>
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <button
                      onClick={() => updateRecord(e)}
                      className="btn btn-success btn-sm text-white shadow-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteRecord(e.id)}
                      className="btn btn-danger btn-sm shadow-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
