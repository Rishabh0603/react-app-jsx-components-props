import React,{useState} from 'react';

export default function TextArea(props){
    const[text,setText] = useState("");
    // const[length,setLength] =useState(0);
 
    const SettoUppercase= ()=>{
        let changeCase = text.toUpperCase();
        
        setText(changeCase);
    }
    const SettoLowerCase=()=>{
       let changeCase = text.toLowerCase();
       setText(changeCase);
    }
    const setOnChange= (text) =>{
        setText(text.target.value);
    }
    // const wordCount = ()=>{
    //    let word_count = 0;
    //    if(text==="")
    //    setLength(0);
    //    else
    //     word_count = text.split(" ").length;
    //    setLength(word_count);
        
      
    // }
    return(
        <div>
            <h1>{props.heading}</h1>
      <div><label htmlFor="text1">{props.text}</label></div> 
      <textarea placeholder="enter text here" type="text" id="text1" rows="10" onChange={setOnChange} value={text} /><br/>
      <button onClick={SettoUppercase} >Convert to UpperCase</button>
      <button onClick={SettoLowerCase}>Convert to LowerCase</button>
      <h3>Count Words and Characters</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      </div>
    )
}