import React from 'react'
// , { useState }
export default function About(props) {
    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color: 'black',
    //         backgroundColor: 'white'
    //     }
    // )
    // const [buttonStyle, setMybuttonStyle] = useState(
    //     {
    //         color: 'while',
    //         backgroundColor: 'black'
    //     }
    // )
    // const [btntext, setButtonText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setButtonText("Enable Light Mode")
    //         setMybuttonStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setButtonText("Enable Dark Mode")
    //         setMybuttonStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //     }
    // }
    
  return (
    // style={myStyle}
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='my-3'>About Me</h1>
        <p>
            Hi, I'm Rajiv Bhandari, currently in my final semester at Islington College, pursuing a BA (Hons) in Computing. At 21 years old, I am enthusiastic about learning and have recently embarked on my journey with React. This project marks my first experience with React, and I've previously gained proficiency in Laravel. Excited about the endless possibilities in the world of web development!
        </p>
        {/* <button type="button" onClick={toggleStyle} className="btn btn-dark" style={buttonStyle}>{btntext}</button> */}
    </div>
  )
}
