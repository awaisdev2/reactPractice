import React, { useState } from 'react'

export default function TextForm() {
    const [text, setText] = useState('Enter text here')

    const handleUpChange = (event)=>{
        setText(event.target.value)
    }

    const handleOnClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnClick2 = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
    }

    const handleOnClick3 = ()=>{
        let textNew = '';
        setText(textNew)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    return (
        <>
            <div className='container my-3'>
                <h1>Enter the text to analyze below</h1>
                <textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="8"></textarea>
                <button onClick={handleOnClick} className='btn btn-primary my-3'>Convert to Uppercase</button>
                <button onClick={handleOnClick2} className='btn btn-primary mx-3 my-3'>Convert to Lowercase</button>
                <button type="submit" onClick={speak} className="btn btn-primary">Speak</button>
                <button onClick={handleOnClick3} className='btn btn-primary m-3'>Clear Text</button>
            </div>
            <div className='container'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} takes minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}