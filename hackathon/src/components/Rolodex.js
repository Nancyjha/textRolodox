import React,{useState} from 'react'; 

function Rolodex(props){
    
    const handleUpCase=()=>{
        console.log('eheh');
        let newText=text.toLocaleUpperCase();
        setText(newText);
        
    }
    const handleOnChange=(event)=>{
        console.log('hehe')
         setText(event.target.value);
        
    }
    const handleLoCase=()=>{
        let newText =text.toLocaleLowerCase();
        setText(newText);
    }
    const[text,setText]= useState('');
     return(
         <div className="cotainer" style={{color:props.mode==="dark"?"white":"black"}}>
         <h1>{props.heading}</h1>
<div className="mb-3" >
  <textarea onChange={handleOnChange} style={{backgroundColor:props.mode==="light" ? "white" : "grey", color:props.mode==="dark"?"white": "black"}} className="form-control" value={text} id=" mybox" rows="8"></textarea>
  <button type="button" className="btn btn-dark my-3 " onClick={handleUpCase}> convert to uppercase</button>

  <button type="button" className="btn btn-dark my-3 mx-3 " onClick={handleLoCase}> convert to uppercase</button>

</div>
<div className="container my-3">
    <h1>your text summary</h1>
    <p>number of words and characters in above paragraph is {text.split('').length} and {text.length} respectively</p>
    <p>you can read it in {0.008*text.split('').length} minutes</p>
   
    
</div>
       </div>
         );}

export default Rolodex;
