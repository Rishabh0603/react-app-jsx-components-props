import React,{useState} from 'react';

export default function DarkMode(){
    const[mode,setMode] = useState({
        color:"black",
        backgroundColor:"white"
    })

    const[btn,setbtn] = useState("dark mode")

    const enabledarkMode = ()=>{
    mode.backgroundColor === "white"?setMode({color:"white",
    backgroundColor:"black"}) :setMode({color:"black",
    backgroundColor:"white"})
    console.log("dark");
    

    mode.backgroundColor==="white"?setbtn("light mode"):setbtn("dark mode");
    }
    return(
        <div style={{color:mode.color,backgroundColor:mode.backgroundColor}}>
         <button onClick={enabledarkMode}>{btn}</button>
         
        </div>
    )
}