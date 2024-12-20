import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { GridLoader } from 'react-spinners';
import { data } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState();
  const [record, setRecord] = useState();
  const [name, setName] = useState('');
  const [sub, setSub] = useState('');
  const [editIndex,setEditIndex] = useState(null);

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
      await getDoc(doc(db, 'Users', user)).then((data) => {
        console.log(data.data());
        setUserData(data.data());
      });
    }
  };

  const fetchData = async () => {
    await getDocs(collection(db, 'data')).then((data) => {
      let details = data.docs.map((item) => ({
        docId: item.id,
        ...item.data(),
      }));
      setRecord(details);
    });
  };

  const handleSubmit = async () => {
    if(editIndex == null){
      await addDoc(collection(db,"data"),{name,sub,userId:user}).then((data)=>{
        setRecord([...record,{name,sub,user}]);
      })
    }else{
      await updateDoc(doc(db,"data",editIndex),{
        name,sub,userId:user,
      });
      fetchData();
    }
    setName("");
    setSub("");
    setEditIndex(null);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db,"data",id))
    .then((data)=>{
      let remainingRecord = record.filter((item) => item.docId != id);
      setRecord(remainingRecord);
    });
  };

  const handleEdit = async (id) => {
    let singleData = record.find((item) => item.docId == id);
    setEditIndex(id)
    setName(singleData.name);
    setSub(singleData.sub);
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        {userData ? (
          <h1 className="text-primary">Welcome {userData.name} to Dashboard</h1>
        ) : (
          <div>
            <GridLoader />
          </div>
        )}
      </div>

      <div className="card shadow-sm p-4 mb-5">
        <h4 className="text-secondary text-center mb-3">Add New Record</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Subject"
              value={sub}
              onChange={(e) => setSub(e.target.value)}
            />
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-primary w-50" onClick={handleSubmit}>
            {editIndex ? "Update" : "Add Data"}
          </button>
        </div>
      </div>

      <div className="card shadow-sm p-4">
        <h4 className="text-secondary text-center mb-3">User Detail</h4>
        {record ? (
          <ul className="list-group">
            {record.map((e, i) => (
              <li key={i} className="list-group-item">
                <strong>User ID:</strong> {e.userId} <br />
                <strong>Name:</strong> {e.name} <br />
                <strong>Subject:</strong> {e.sub} <br />
                <strong>Doc ID:</strong> {e.docId}
                <button onClick={()=>handleDelete(e.docId)}>Delete</button>
                <button onClick={()=>handleEdit(e.docId)}>Edit</button> 
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
