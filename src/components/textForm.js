import React from 'react'
import {useState} from 'react'  


export default function TextForm(props) {
    const [text, setText] = useState("");  //default text is Enter text here and whenever we want to acess updated state we use settext function here
    // we can not update text directly we have to use our setText function for this i.e. text="jsdjk"; is not valid, settext("bsdgd"); is valid

    // setText("New text");


    const upperCase= ()=>{
        // console.log("Uppercase is clicked");
        let uptext=text.toUpperCase();
        setText(uptext);
    }
    const clear= ()=>{
        // console.log("Lowercase is clicked");
        let ltext="";
        setText(ltext);
    }
    const lowerCase= ()=>{
        // console.log("Lowercase is clicked");
        let ltext=text.toLowerCase();
        setText(ltext);
    }

    const Copy= ()=>{
        let copy=document.getElementById('myBox');
        copy.select();
        // copy.setSelectionRange(0,text.length);    //not needed
        navigator.clipboard.writeText(copy.value);
    }
    const extraSpace= ()=>{
        let newText=text.split(/[ ]+/);  //wherever there is a space convert it into array and give it to newText
        setText(newText.join(" "));     //join newtext values with a single space
    }
    const handleOnChange= (event)=>{
        // console.log("OnChange");
        setText(event.target.value);  //if we not do this then we can not change the form value
    }
    
  return (
    <>
<div className="container">
  <h1 className="my-3">{props.heading}</h1>
  <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} placeholder={props.example}></textarea>  {/*setting text/*/}

  <button className="btn btn-primary my-3 mx-1" onClick={clear}>Clear</button>
  <button className="btn btn-primary my-3 mx-1" onClick={upperCase}>Convert to Upper case</button>
  <button className="btn btn-primary my-3 mx-1" onClick={lowerCase}>Convert to Lower case</button>
  {/* <button className="btn btn-primary my-3 mx-1" onClick={capitalCase}>Convert to capitalized case</button> */}
  <button className="btn btn-primary my-3 mx-1" onClick={extraSpace}>Remove extra paces</button>
  <button className="btn btn-primary my-3 mx-1" onClick={Copy}>Copy</button>
</div>

<div className="container my-2">
    <h1>Your text summary </h1>
    <p>Word Count ={text.split(" ").length} </p>  {/*text.split(" ") returns array separated with gap and length counts array size*/}
    <p>Charecter Count including spaces ={text.length} </p>      {/*text.length count charecters in text including space*/}
    <p>Charecter Count excluding space ={text.length - text.split(" ").length+1} </p>      {/*text.length count charecters in text including space*/}
    
    <p>Read time = {0.004*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
    </>
  )
}
//hooks are new edition in react 16.8 which let developer use state and other react features without writing class as we are using function based component  //there are much more than use state

