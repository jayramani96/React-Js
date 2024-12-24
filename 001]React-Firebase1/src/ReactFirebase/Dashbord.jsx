import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { GridLoader } from "react-spinners";
import { data } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState();
  const [record, setRecord] = useState();
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
      }
    });
  }, []);

  useEffect(() => {
    fetchUser();
    fetchData();
  }, [user]);

  const fetchUser = async () => {
    if (user) {
      await getDoc(doc(db, "Users", user)).then((data) => {
        console.log(data.data());
        setUserData(data.data());
      });
    }
  };

  const fetchData = async () => {
    await getDocs(collection(db, "data")).then((data) => {
      let details = data.docs.map((item) => ({
        docId: item.id,
        ...item.data(),
      }));
      setRecord(details);
    });
  };

  const handleSubmit = async () => {
    if (editIndex == null) {
      await addDoc(collection(db, "data"), { name, sub, userId: user }).then(
        (data) => {
          setRecord([...record, { name, sub, user }]);
        }
      );
    } else {
      await updateDoc(doc(db, "data", editIndex), {
        name,
        sub,
        userId: user,
      });
      fetchData();
    }
    setName("");
    setSub("");
    setEditIndex(null);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "data", id)).then((data) => {
      let remainingRecord = record.filter((item) => item.docId != id);
      setRecord(remainingRecord);
    });
  };

  const handleEdit = async (id) => {
    let singleData = record.find((item) => item.docId == id);
    setEditIndex(id);
    setName(singleData.name);
    setSub(singleData.sub);
  };

  return (
    <div className="" style={{ backgroundColor: '#1a1a2e', color: '#f0f0f0' }}>
  <div className="text-center">
    {userData ? (
      <div>
        <h1 className="text-warning">Welcome to Dashboard</h1>
        <img
          width={50}
          height={50}
          src={userData?.imgUrl ? userData.imgUrl : "/user.jpg"}
          alt="User Avatar"
          style={{
            borderRadius: '50%',
            border: '2px solid #f0f0f0',
            margin: '10px',
          }}
        />
        <h2 className="text-light">{userData.name}</h2>
        <h2 className="text-light">{userData.email}</h2>
        <h2 className="text-light">{userData.age}</h2>
        <h2 className="text-light">{userData.city}</h2>
      </div>
    ) : (
      <div>
        <GridLoader color="#ffcc00" />
      </div>
    )}
  </div>

  <div className="card shadow-sm p-4 mb-5" style={{ backgroundColor: '#2a2a3d', borderRadius: '15px' }}>
    <h4 className="text-warning text-center mb-3">Add New Record</h4>
    <div className="row g-3">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            backgroundColor: '#1f1f30',
            color: '#fff',
            border: '1px solid #444',
            borderRadius: '8px',
          }}
        />
      </div>
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Subject"
          value={sub}
          onChange={(e) => setSub(e.target.value)}
          style={{
            backgroundColor: '#1f1f30',
            color: '#fff',
            border: '1px solid #444',
            borderRadius: '8px',
          }}
        />
      </div>
    </div>
    <div className="text-center mt-3">
      <button
        className="btn btn-warning w-50"
        onClick={handleSubmit}
        style={{
          fontWeight: 'bold',
          fontSize: '16px',
          padding: '10px',
        }}
      >
        {editIndex ? 'Update' : 'Add Data'}
      </button>
    </div>
  </div>

  <div className="card shadow-sm p-4" style={{ backgroundColor: '#2a2a3d', borderRadius: '15px' }}>
    <h4 className="text-warning text-center mb-3">User Detail</h4>
    {record ? (
      <ul className="list-group" style={{ backgroundColor: '#2a2a3d', border: 'none' }}>
        {record.map((e, i) => (
          <li
            key={i}
            className="list-group-item"
            style={{
              backgroundColor: '#1f1f30',
              color: '#f0f0f0',
              border: '1px solid #444',
              marginBottom: '10px',
              borderRadius: '8px',
            }}
          >
            <strong>User ID:</strong> {e.userId} <br />
            <strong>Name:</strong> {e.name} <br />
            <strong>Subject:</strong> {e.sub} <br />
            <strong>Doc ID:</strong> {e.docId}
            <div className="mt-2">
              <button
                onClick={() => handleDelete(e.docId)}
                className="btn btn-danger me-2"
                style={{
                  padding: '5px 10px',
                  borderRadius: '5px',
                }}
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(e.docId)}
                className="btn btn-success"
                style={{
                  padding: '5px 10px',
                  borderRadius: '5px',
                }}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-muted text-center">No records found.</p>
    )}
  </div>
</div>

  );
}
