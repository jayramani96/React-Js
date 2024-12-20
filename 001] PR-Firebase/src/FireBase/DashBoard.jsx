import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import "./FireBase.css"; 

export default function DashBoard() {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState();
    const [name, setName] = useState("");
    const [sub, setSub] = useState("");
    const [record, setRecord] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const navigate = useNavigate();

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
            let sameData = data.docs.filter((item) => item.data().userId === user);
            let details = sameData.map((item) => ({
                docId: item.id,
                ...item.data(),
            }));
            setRecord(details);
        });
    };

    const handleSubmit = async () => {
        if (editIndex === null) {
            await addDoc(collection(db, "data"), { name, sub, userId: user }).then((data) => {
                setRecord([...record, { name, sub, user }]);
            });
        } else {
            await updateDoc(doc(db, "data", editIndex), {
                name, sub, userId: user,
            });
            fetchData();
        }
        setName("");
        setSub("");
        setEditIndex(null);
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "data", id))
            .then((data) => {
                let remainingRecord = record.filter((item) => item.docId !== id);
                setRecord(remainingRecord);
            });
    };

    const handleEdit = async (id) => {
        let singleData = record.find((item) => item.docId === id);
        setEditIndex(id);
        setName(singleData.name);
        setSub(singleData.sub);
    };

    const signOut = () => {
        auth.signOut();
        navigate("/login");
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-box">
                <h1>Dashboard</h1>
                <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Enter Your Subject" value={sub} onChange={(e) => setSub(e.target.value)} /><br />
                <button onClick={handleSubmit}>{editIndex ? "Update" : "Add Data"}</button><br />
                <button onClick={signOut}>Sign Out</button>
                <div>
                    <h4>User Detail</h4>
                    {record ? (
                        <ul>
                            {record.map((e, i) => (
                                <li key={i} className="list-group-item" style={{color: 'white',}}>
                                    <strong>User ID:</strong> {e.userId} <br />
                                    <strong>Name:</strong> {e.name} <br />
                                    <strong>Subject:</strong> {e.sub} <br />
                                    <strong>Doc ID:</strong> {e.docId}
                                    <button className='dlt' onClick={() => handleDelete(e.docId)}  style={{background: 'red',}}>Delete</button><br />
                                    <button className='edt' onClick={() => handleEdit(e.docId)} style={{background: 'green',}} >Edit</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-muted text-center">No records found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
