import React, { useState } from 'react'

export default function Textform(props){
    const riswan = function () {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase(); 
        setText(newText);
    }
    const handleLoClick = function(){
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = function(){
        let newText = '';
        setText(newText);
    }
    
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy = function(){
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace = function(){
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState("");
    // text = "new text"; // wrong way change the state
    // setText("new Text"); // Correct way to change the state

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'? '#28527b': 'white', color:props.mode=== 'dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={riswan}>Convert UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear All</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy} id="myBox">Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the above"}</p>
            </div>
        </>
    )
}

