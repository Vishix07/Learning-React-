import { useState } from "react";


export default function AddUserToAPI() {
   const [name, setName] = useState('');
   const [age,setAge] = useState('');
   const [email,setEmail] = useState('');

   const addUser = async () => {
    console.log("User name:", name,age,email);
    const url = "http://localhost:3000/users";
    let response = await fetch(url,{
        method: "POST",
        body:JSON.stringify({name,age,email})
    })
    response = await response.json()
    if(response){
        alert("User added successfully");
    }
   }
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Add New User to API</h1>
            <input type="text" placeholder="Enter user name" 
            onChange={(event)=>setName(event.target.value)}/>
            <br /><br />
            <input type="number" placeholder="Enter user age" 
            onChange={(event)=>setAge(event.target.value)}/>
            <br /><br />
            <input type="email" placeholder="Enter user email" 
            onChange={(event)=>setEmail(event.target.value)}/>
            <br /><br />
            <button onClick={addUser} >Submit</button>
        </div>
    )
}