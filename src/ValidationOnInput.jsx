import { useState } from "react"
import './css/validation.css';


export default function ValidationOnInput() {

  
  const [nameErr,setNameErr] = useState('');

  const handleName=(event)=>{
    console.log(event.target.value);
    if(event.target.value.length>5 ){
        setNameErr("Please enter valid username. only 5 characters allowed")
    }else{
        setNameErr('')
    }
  }

  const [passErr,setPassErr] = useState('');

  const handlePassword=(event)=>{
    let regex = /[A-Z0-9]+$/i;
    if(regex.test(event.target.value)){
         setPassErr();
        }else{
           setPassErr("Please enter valid passwords only, numbers and numbers allowed " );
        }
    }
    
  


    return (
       <div>
         <h2>Validation on input field</h2>
        <div style={{display:"flex", justifyContent:'center'}}>
            
        <div className="box" >
            <input className={nameErr?'error':''} type="text" placeholder="Enter Name" 
             onChange={handleName} />
             <br />
             <span>{nameErr && nameErr}</span>
            <br /><br />
            <input className={passErr?'error':''} type="text" placeholder="Enter Password" 
             onChange={handlePassword} />
            <br /><br />
            <span>{passErr && passErr}</span>
            <br />
            <button disabled={nameErr} >Login</button>
        </div>
            
        </div>
       </div>
    )
}