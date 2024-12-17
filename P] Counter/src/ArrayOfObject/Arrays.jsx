import React from 'react'

export default function Arrays() {

  let arr = [1,2, "jay"]

  let arr2 = [...arr,"spread"]
  console.log(arr2);
  
  return (
    <div>
        <h1>Arrays</h1>
        {
          arr.map((e,i)=> {
            <div key={i}>
              <p>{e}</p>
            </div>
          })
        }
        {
          arr2.map((e,i)=> {
            <div key={i}>
              <p>{e}</p>
            </div>
          })
        }
    </div>
  )
}
