import React, { useState } from 'react'


export default function Hook() {
    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }
    return (
        <div className='divM'>
            <h1>{count}</h1>
            <button onClick={increment}><i class="fa-solid fa-plus"></i></button>
            <button onClick={decrement}><i class="fa-solid fa-minus"></i></button>
        </div>
    )
}






