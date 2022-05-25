import React,{useState} from 'react';
import Welcome from './components/Welcome';  
import Rolodex from './components/Rolodex';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter ,
  Routes,
  Route,
}
from "react-router-dom";
 function App(){ 
   const toggleMode=()=>{
    if(mode==="light") {
     setMode("dark")
 document.body.style.backgroundColor="grey"
 showAlert("dark mode has been enabled","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("light mode has been enabled","success");
    }
   }
   const[mode, setMode]=useState('light');
   const showAlert=(message,type)=>{
setAlert({msg: message,
type:type
})
   }
    const[alert,setAlert]=useState('')
  return (
    <div>
      <BrowserRouter>
     <Welcome title="monsterRolodex" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} showAlert={showAlert}/>
     <div className='container' my-3>
       < Routes>
         <Route exact path='/about' element={<About/>}/>
            <Route exact path='/'element={<Rolodex heading="enter the text to analyse" mode={mode}/> }/>
      </Routes>
      </div>
     </BrowserRouter>
   </div>
  );
   }


export default App;
/*git version control
git init
git add .
git commit -m "initial commit"
git 
added side branch nancy
*/ 