import React, { useState } from 'react'

export default function TextForm() {

    const [text, setText] = useState('Enter text here');

    const handleOnClick = () => {
        console.log(text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnClick2 = () => {
        console.log(text)
        let newtext = text.toLowerCase()
        setText(newtext)
        console.log(newtext.bold())
    }

    const handleOnClick4 = () => {
        console.log(text)
        let clear = '';
        setText(clear)
    }

    const handleOnChange = (event) => {
        console.log('handleOnChange was clicked')
        setText(event.target.value)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    return (
        <>
            <div className='container my-3'>
                <h2>Enter the text to analyze below</h2>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                <div className='mt-3'>
                    <button className='btn btn-primary mx-3' onClick={handleOnClick}>Convert to uppercase</button>
                    <button className='btn btn-primary' onClick={handleOnClick2}>Convert to lowercase</button>
                    <button type="submit" onClick={speak} className="btn btn-primary mx-3">Speak</button>
                    <button className='btn btn-primary' onClick={handleOnClick4}>Clear text</button>
                </div>
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