import React , { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Alert from './Component/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Component/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#010728';
      showAlert('Dark mode is enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'danger');
    }
  };

  useEffect(() => {
    // Reset the background color when the mode changes
    document.body.style.backgroundColor = mode === 'light' ? 'white' : '#010728';
  }, [mode]);

  return (
    <Router>
      <Navbar
        title="Text-Editor"
        mode={mode}
        toggleMode={toggleMode}
      />
     <Alert alert={alert} /> 
      <div className="container my-4">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<Hero heading="Enter the text to Analyse below:" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
