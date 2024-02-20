import React, {useState} from 'react'

export default function TextForm(props) {
   
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed successfully!","success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Textfield is cleared!","success");
    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied!","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
           <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black',
                        border: `2px solid ${props.mode === 'dark' ? 'white' : 'black'}` // Optional: Add a border color based on the mode
                    }}
                    id="myBox"
                    rows="8"
                ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
                <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopyClick}>Copy</button>
                <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="cointainer my-3" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview..."}</p>
            </div>
        </>
    )
}
