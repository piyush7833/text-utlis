import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import { useState } from 'react';
import About from './components/About';
import Alerts from './components/Alerts';
// import Switch from "react-router-dom";/
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#26273a';
      showAlert("Dark mode has been enable", "success");
      document.title = "Text-Utils | Home | Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = "Text-Utils | Home | Light Mode";
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {  //set interval can be used to create animations too
      setAlert(null);
    }, 2000);
  }


  return (
    <>
      <BrowserRouter>
        <Navbar title="Text-Utils" about="About us" mode={Mode} toggleMode={toggleMode} /> {/* passing props  //props are read only */}
        <Alerts alert={alert} />
        <div className="container">
        <Routes>
          <Route exact path="/about" element={<About mode={Mode}/>} />

          < Route exact path="/"  //{use exact path so that it matches exact path
            element={<TextForm heading="Enter your text to modify" example="Enter your text here" mode={Mode} showAlert={showAlert} />} />
        </Routes>
        </div>

        


      </BrowserRouter>



    </>
  );
}


//Every component have a state which changes when user interfere with that component
export default App;
