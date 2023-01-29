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
        props.showAlert("Converted to upper case ","success");   //function is get by props and used here
    }
    const clear= ()=>{
        // console.log("Lowercase is clicked");
        let ltext="";
        setText(ltext);
        props.showAlert("Text is cleared ","success");
    }
    const lowerCase= ()=>{
        // console.log("Lowercase is clicked");
        let ltext=text.toLowerCase();
        setText(ltext);
        props.showAlert("Converted to lower case ","success");
    }

    const Copy= ()=>{
        let copy=document.getElementById('myBox');
        copy.select();
        // copy.setSelectionRange(0,text.length);    //not needed
        navigator.clipboard.writeText(copy.value);
        props.showAlert("Text is copied ","success");
    }
    const extraSpace= ()=>{
        let newText=text.split(/[ ]+/);  //wherever there is a space convert it into array and give it to newText
        setText(newText.join(" "));     //join newtext values with a single space
        props.showAlert("Extra space is removed ","success");
    }
    const wordcnt=()=>{
        let newText=text.split(/[ ]+/);  //wherever there is a space convert it into array and give it to newText
        newText=newText.join(" ");
        return newText.split(" ").length ;
    }
    const handleOnChange= (event)=>{
        // console.log("OnChange");
        setText(event.target.value);  //if we not do this then we can not change the form value
    }

  
    
  return (
    <>
<div className="container">
  <h1 className="my-3" style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>  {/*one curly braces is for writing js and another for passing object*/}
  <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} placeholder={props.example} style={{color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#26273a'}}></textarea>  {/*setting text/*/}

  <button className="btn btn-primary my-3 mx-1" onClick={clear}>Clear</button>
  <button className="btn btn-primary my-3 mx-1" onClick={upperCase}>Convert to Upper case</button>
  <button className="btn btn-primary my-3 mx-1" onClick={lowerCase}>Convert to Lower case</button>
  {/* <button className="btn btn-primary my-3 mx-1" onClick={capitalCase}>Convert to capitalized case</button> */}
  <button className="btn btn-primary my-3 mx-1" onClick={extraSpace}>Remove extra spaces</button>
  <button className="btn btn-primary my-3 mx-1" onClick={Copy}>Copy</button>
</div>

<div className="container my-2">
    <h1 style={{color: props.mode==='light'?'black':'white'}}>Your text summary </h1>
    <p style={{color: props.mode==='light'?'black':'white'}}>Word Count ={text.split(" ").length} </p>  {/*text.split(" ") returns array separated with gap and length counts array size*/}
    <p style={{color: props.mode==='light'?'black':'white'}}>Charecter Count including spaces ={text.length} </p>      {/*text.length count charecters in text including space*/}
    <p style={{color: props.mode==='light'?'black':'white'}}>Charecter Count excluding space ={text.length - text.split(" ").length+1} </p>      {/*text.length count charecters in text including space*/}
    
    <p style={{color: props.mode==='light'?'black':'white'}}>Read time = {0.004*text.split(" ").length} Minutes read</p>
    <h2 style={{color: props.mode==='light'?'black':'white'}}>{text.length===0?'Enter text to preview':'Preview'}</h2>
    <p style={{color: props.mode==='light'?'black':'white'}}>{text.length===0?'Enter text in above text area to preview it here':'Preview'}</p>
</div>
    </>
  )
}
//hooks are new edition in react 16.8 which let developer use state and other react features without writing class as we are using function based component  //there are much more than use state

