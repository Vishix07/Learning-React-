import {useParams} from "react-router";
import { useEffect } from "react";
import { useState } from "react";

export default function EditUser() {
        const { id } = useParams();
        
         const [name, setName] = useState('');
           const [age,setAge] = useState('');
           const [email,setEmail] = useState('');
        
    useEffect(()=>{
        getUserData()
    },[])

    const getUserData = async () => {
      console.log(id);
      const url = "http://localhost:3000/users/" + id;
      let response = await fetch(url);
      response = await response.json();
      console.log(response);

      setName(response.name);
      setAge(response.age);
      setEmail(response.email);
      
    }

    return(
        <div style={{ textAlign: "center" }}>
            <h1>Edit User</h1>

            <input type="text" value={name} placeholder="First Name"/>
            <br /><br />
           
            <input type="text" value={email} placeholder="email"/>
            <br /><br />
            
            <input type="text" value={age} placeholder="Age"/>
            <br /><br />

            <button>Update User</button>
        </div>
    )
}