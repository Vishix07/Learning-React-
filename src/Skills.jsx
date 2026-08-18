import { useState } from "react";

function Skills () {
 
     const [skills,setSkills] = useState([])
     const handleskills=(event)=>{
        console.log(event.target.value,event.target.checked);
            if(event.target.checked){
                setSkills([...skills,event.target.value])
            }else{
                setSkills([...skills.filter((item)=>item!=event.target.value)])
            }
     }
    // const[]=useState()

   return (
    <div>
        <h1>Select your skills</h1>
        <input onChange={handleskills} type="checkbox" value="php" />
        <label htmlfor="PHP" id="php" >PHP</label>
        <br />
        <br />
        <input onChange={handleskills} type="checkbox" value="js" />
        <label htmlfor="js" id="js">JS</label>
        <br/>
        <br />
        <input onChange={handleskills} type="checkbox" value="node" />
        <label htmlfor="node" id="node" >NODE</label>
        <br />
        <br />
        <input onChange={handleskills} type="checkbox" value="java" />
        <label htmlfor="java" id="java" >JAVA</label>
        <br />
        <br />
        <h2>{skills.toString()}</h2>

    </div>



   )

}

export default Skills;