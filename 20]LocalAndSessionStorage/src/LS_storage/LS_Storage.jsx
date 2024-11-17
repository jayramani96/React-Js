import React from 'react'

export default function LS_Storage() {

    localStorage.setItem("Student","Harsh");
    sessionStorage.setItem("Student","Raj")

  return (
    <div>LS_Storage</div>
  )
}
