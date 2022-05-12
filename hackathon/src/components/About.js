
import React,{useState} from 'react'

export default function About() {
  const[myStyle,setMyStyle]= useState({
      color:'white',
      backgroundColor:' black',
  }) 
  const[btnText,setBtnText]= useState("Enable Dark Mode")
 const toggleStyle=()=>{
if(myStyle.color === 'white'){
  setMyStyle({color:'black',
             backgroundColor:'white'})
             setBtnText('Enable Dark Mode')
}
else {
  setMyStyle({color:'white',backgroundColor:'black'})
  setBtnText('Enable light Mode')
}

 };

  return (
    <div className='container' >
         <div className="accordion container"  id="accordionExample">
  <div style={myStyle}  className="accordion-item">
    
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Easy to use
      </button>
    </h2>
    <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Why to waste hours and hours at work if only <strong>One click</strong> can get it done for you 
        plus it is free of cost.
         Isn't it amazing 
        </p></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button " type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
       smooth functioning
      </button>
    </h2>
    <div style={myStyle}  id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>this website is made with the help of react framework that makes it smooth plus my involvement.
        mention not.
        tehe..</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button " style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        useful in day to day life
      </button>
    </h2>
    <div style={myStyle}  id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"><p>One day when you'll need to alter your text within minutes this will be your best friend at work.
        <strong>Text-Rolodex will get it done.</strong>
         </p>
         </div>
    </div>
  </div>
</div>
 <button type="button" onClick={toggleStyle} class="btn btn-dark my-3">{btnText}</button>
   

    </div>
     
  )}