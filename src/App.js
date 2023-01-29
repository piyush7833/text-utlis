import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
// import About from './components/About';
function App() {
  // let darkStyle={
  //   backgroundColour:'black',
  //   colour:'red'
  // }
  return (
    <>
 <Navbar title="Text-Utils"  about="About us"/> {/* passing props  //props are read only */}
 <div className="container">
 <TextForm heading="Enter your text to modify" example="Enter your text here"/>
 {/* <About/> */}
 </div>
</>
  );
}


//Every component have a state which changes when user interfere with that component
export default App;
