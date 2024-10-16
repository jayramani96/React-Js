import React,{useState,useEffect} from 'react'

export default function Width() {

    const [widthCount,setWidthCount] = useState(window.screen.width);

    const currentScreenWidth = () => {
        setWidthCount( () => window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize",currentScreenWidth);

        return() => {
               window.removeEventListener("resize",currentScreenWidth);
        };
    });

  return (
    <div>
        <h1>The Size Of The Window is <span>{widthCount}</span> </h1>
    </div>
  )
}
