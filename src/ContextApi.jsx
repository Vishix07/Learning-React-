import CollageContext from "./CollageContext";
import { SubjectContext } from "./ContextData";
import { useState } from "react";

  // Context API
     
     //  createContext : To initiate Context APL.
     //  Provider : use for update or provide data.
     //  useContext : get data from context api.

function ContextApi () {

    const [subject,setSubject] = useState('');

  return (
    <div style={{backgroundColor:"yellow", padding:"10px"}} >
      
      <SubjectContext.Provider value={subject}>
        
        <select defaultValue={subject} onChange={(event)=>setSubject(event.target.value)} id="">
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="History">History</option>
          <option value="">Choose subject</option>
        </select>
         
        <h1>Context API</h1>
        <button onClick={()=>setSubject('')} >Clear Subject</button>
        <CollageContext />
      </SubjectContext.Provider>
    </div>
  )
}

export default ContextApi;