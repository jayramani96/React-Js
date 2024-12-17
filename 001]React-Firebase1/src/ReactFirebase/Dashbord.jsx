import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig';
import { GridLoader } from 'react-spinners';

export default function Dashbord() {

  const [user,setUser] = useState(null);
  const [userData,setUserData] = useState();

  useEffect(() => {
    onAuthStateChanged(auth,(data)=>{
      if(data){
        setUser(data.uid);
      }
    })
  },[]);

  useEffect(() => { 
    fetchUser();
  },[user]);

  const fetchUser = async () => {
    if(user){
      await getDoc(doc(db,"Users",user)).then((data) => {
        console.log(data.data());
        
        setUserData(data.data());
      })
    }
  }

  return (
    <div>
        {
          userData ?
          <h1>Welcome {userData.name} to Dashbord</h1>
          :
          <div>
            <GridLoader />
          </div>
        }
    </div>
  )
}
