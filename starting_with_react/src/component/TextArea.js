import React,{useState} from 'react';

export default function TextArea(props){
    const[text,setText] = useState("");

    const SetonClick= ()=>{
        let changeCase = text.toUpperCase();
        
        setText(changeCase);
    }
    const setOnChange= (text) =>{
        setText(text.target.value);
    }
    return(
        <div>
            <h1>{props.heading}</h1>
      <div><label htmlFor="text1">{props.text}</label></div> 
      <textarea placeholder="enter text here" type="text" id="text1" rows="10" onChange={setOnChange} value={text} /><br/>
      <button onClick={SetonClick} >Convert to UpperCase</button>
      </div>
    )
}