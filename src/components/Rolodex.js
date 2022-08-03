import React,{useState} from 'react'; 
const axios = require("axios");

function Rolodex(props){

    const spellCheck=()=>{
        const url="https://jspell-checker.p.rapidapi.com/check"
        const headers ={
            'content-type': 'application/json',
            'X-RapidAPI-Host': 'jspell-checker.p.rapidapi.com',
            'X-RapidAPI-Key': '2ee909b39dmsh0bc45c14e13b7a6p14bbbbjsndfbd08c39b9c'
        }
        const data= {"language":"enUS","fieldvalues":text,"config":{"forceUpperCase":false,"ignoreIrregularCaps":false,"ignoreFirstCaps":true,"ignoreNumbers":true,"ignoreUpper":false,"ignoreDouble":false,"ignoreWordsWithNumbers":true}}

axios.post(url,JSON.stringify(data) ,{
    headers:headers
}).then(response => {response.data.elements[0].errors.forEach(ele=>{alert(`word:${ele.word}\nposition:${ele.position}\nsuggestions:${ele.suggestions.map(suggestion=>{return `\n${suggestion}`})}\n`)})}).catch(function (error) {
    console.error(error);
});
    }
    
    const handleUpCase=()=>{
        let newText=text.toLocaleUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
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
  <button type="button" className="btn btn-dark my-3 mx-3 " onClick={spellCheck}> Check for spell</button>

</div>
<div className="container my-3">
    <h1>your text summary</h1>
    <p>number of words and characters in above paragraph is {text.split('').length} and {text.length} respectively</p>
    <p>you can read it in {0.008*text.split('').length} minutes</p>
   
    
</div>
       </div>
         );}

export default Rolodex;
