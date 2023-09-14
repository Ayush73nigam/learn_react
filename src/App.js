import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode]=useState('light');

  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      document.getElementById("mybox").style.backgroundColor='gray';
      document.getElementById("mybox").style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      document.getElementById("mybox").style.backgroundColor='white';
      document.getElementById("mybox").style.color='black';
    }
  }
  return (
    <>
   <Navbar title="TextUtils" abouttext="About" mode={mode}  changemode={togglemode}/>
   <div className="container">
   <Textform heading="Enter The Text To Analyse"/>
   </div>
   </>
  );
}

export default App;
