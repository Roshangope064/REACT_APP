import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
// import { Discription } from './components/Discription';
// import Heading from './components/Heading';
// const data = {
//   fname:"ROshan",
//   lname:"Gope",
//   course:"bca"
// }
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const[mode,SetMode]=useState("light");
  const [dark_light,setdark_light]=useState("Enable Dark Mode");
  const [color,setcolor]=useState({
    color:"black"
  })
  const toggle=()=>{
    if(mode ==="light" ){
      SetMode("dark")
      setdark_light("Enable Light Mode");
      setcolor({
        color:"white"
      })
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      SetMode("light");
      setdark_light("Enable Dark Mode");
      setcolor({
        color:"black"
      })
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been Enabled","success"); 
    }
  }
  return (
    <>
      <Navbar title="Amazon" about="About" mode={mode} toggle={toggle} dark_light={dark_light} color={color.color}></Navbar>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter Text"/>
        {/* <Discription/> */}
      </div>
    </>
  )
}
export default App;
