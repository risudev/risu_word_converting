import { useState } from "react";
import React from "react";
import "./App.css";
// import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  // const[alert, setAlert] = useState('null');

  const toggleMode = function () {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#28527b';
      // showAlert("Dark mode has been enable","success");
      document.title = 'RisuTextutils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enable", "success");
      document.title = 'RisuTextutils - Light Mode';
    }
  };

  // const showAlert = (message, type) =>{
  //   setAlert({
  //     msg: message,
  //     Type: type
  //   })
  // }

  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" about="About" search="Search" mode={Mode} toggleMode={toggleMode} />
      
      {/* <Alert alert={alert}/> */}

      <div className="container my-3">
        {/* <Switch>
          <Route path="/"> */}
            <Textform heading="Enter the text Analyze" mode={Mode} />
          {/* </Route> */}

          {/* <Route path="/About"> */}
          {/* <About/> */}
          {/* </Route> */}

          {/* </Switch> */}
      </div>
      {/* </Router> */}
        
    
    </>

  );
}

export default App;
