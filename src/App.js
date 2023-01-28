import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
function App() {
  return (
    <>
 <Navbar title="Text-Utils"  about="About us"/> {/* passing props  //props are read only */}
 <div className="container">
 <TextForm heading="Enter your text to modify" example="Hello Piyush"/>
 </div>
</>
  );
}


//Every component have a state which changes when user interfere with that component
export default App;
