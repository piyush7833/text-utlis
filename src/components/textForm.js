import React from 'react'
import {useState} from 'react'  


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");  //default text is Enter text here and whenever we want to acess updated state we use settext function here
    // we can not update text directly we have to use our setText function for this i.e. text="jsdjk"; is not valid, settext("bsdgd"); is valid

    // setText("New text");


    const upperCase= ()=>{
        console.log("Uppercase is clicked");
        let uptext=text.toUpperCase();
        setText(uptext);
    }
    const lowerCase= ()=>{
        console.log("Uppercase is clicked");
        let ltext=text.toLowerCase();
        setText(ltext);
    }
    const handleOnChange= (event)=>{
        // console.log("OnChange");
        setText(event.target.value);  //if we not do this then we can not change the form value
    }
  return (
    <>
<div className="mb-3">
  <h1 className="my-3">{props.heading}</h1>
  <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} placeholder={props.example}></textarea>  {/*setting text/*/}

  <button className="btn btn-primary my-3 mx-3" onClick={upperCase}>Convert to Uppercase</button>
  <button className="btn btn-primary my-3 mx-3" onClick={lowerCase}>Convert to Lowercase</button>
</div>
    </>
  )
}
//hooks are new edition in react 16.8 which let developer use state and other react features without writing class as we are using function based component

