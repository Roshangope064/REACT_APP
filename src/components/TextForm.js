import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        // alert("Text Transform was clicked")
        const upperCase = text.toUpperCase();
        SetText(upperCase);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLowClick = () => {
        // alert("Text Transform was clicked")
        const lowerCase = text.toLowerCase();
        SetText(lowerCase);
        props.showAlert("Converted to Lower Case","success");
    }
    const cleartext = () => {
        const clear_text = "";
        SetText(clear_text);
        props.showAlert("Text Cleared Successfully","success");
    }
    const handleOnChange = (event) => {
        console.log("Handle Change");
        SetText(event.target.value);
    }
    const ChangeRed = () => {
        setStyle({
            color: "red"
        })
    }
    const ChangeBlue = () => {
        setStyle({
            color: "blue"
        })
    }
    const [text, SetText] = useState("");
    const [myStyle, setStyle] = useState({
        color:"black"
    })
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h3>{props.heading}</h3>
                    {/* <label for="Textarea1" className="form-label">Example Text Area</label> */}
                    <textarea className="form-control" value={text} id="Textarea1" style={myStyle} placeholder="Enter Text Here" onChange={handleOnChange} rows="8"></textarea>
                </div>
                {/*Button to change the text to uppercase */}
                <button className="btn btn-primary" onClick={handleUpClick}>UPPERCASE</button>
                {/*Button to change the text to lowercase */}
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>LOWERCASE</button>
                {/*Button to clear text*/}
                <button className="btn btn-primary" onClick={cleartext}>CLEARTEXT</button>
                {/*Drop Down Button To Change The Text Color*/}
                <div className="nav-link dropdown-toggle my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ChangeTextColor
                </div>
                <ul className="dropdown-menu">
                    <button className='red_btn mx-2' onClick={ChangeRed}>Red</button>
                    <button className='blue_btn mx-2' onClick={ChangeBlue}>Blue</button>
                </ul>
            </div>
            <div className='container'>
                <p className='CountCharacter my-3'>Number of Characters : {text.length}</p>
                <p className='CountWords'>Number of Words : {text.split(" ").length}</p>
            </div>
        </>
    )
}
