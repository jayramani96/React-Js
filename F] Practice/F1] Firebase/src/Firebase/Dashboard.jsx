import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebaseConfig';

export default function Dashboard() {

  const [user,setUser] = useState(null);
  const [userData,setUserData] = useState();

  useEffect(() => {
    onAuthStateChanged(auth,(data)=>{
      if(data){
        setUser(data.uid)
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
        <h1>Welcome {userData.name} to Dashboard</h1> 
        : 
        <div>
           <GridLoader />
          </div> 
      }
    </div>

  )
}
