import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setdarkMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const changeColor = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' +cls)
  }
  
  const toggleMode = (cls) => {
    removeBodyClasses();
    
    if (mode === 'light') {
      setdarkMode('dark');
      document.body.style.backgroundColor = 'grey';
      // showAlert('Dark mode has been enabled', 'success');
      // document.title = 'Text Editor - Dark Mode';
      // to get user attention show title message in every sec
      // setInterval(() => {
      //   document.title = "Install Text Editor now"
      // }, 4000);
      // setInterval(() => {
      //   document.title = "Get 15% off"
      // }, 1900);
    } else {
      setdarkMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert('Light mode has been enabled', 'warning');
      // document.title = 'Text Editor - Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextEditor" home="Home" aboutUs="About" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
