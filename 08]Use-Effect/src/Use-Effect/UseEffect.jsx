import React,{useEffect,useState} from 'react'

export default function UseEffect() {

    const [num,setNum] = useState(0)

    // const countUpdate = (val) => {
    //   if (val === "inc")return setNum(num+1);
    //   if (val === "dec")return setNum(num-1);

    // };

    useEffect(()=>{
        //mounting

        return console.log('mounting');
        // document.title = num;
        
    })
  return (
    <div className='divM'>
        <h1>UseEffect</h1>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num-1)}><i className="fa-solid fa-minus"></i></button>
        <button onClick={()=>setNum(num+1)}><i className="fa-solid fa-plus"></i></button>
    </div>
  )
}
