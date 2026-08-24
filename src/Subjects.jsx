import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject() {
  
    const subject = useContext(SubjectContext)

    return (

    <div style={{backgroundColor:"pink" , padding:"10px"}} >
      <h1>Class Component</h1>
      <h2>Subject is {subject} </h2>
    </div>
  )

  
}

export default Subject;