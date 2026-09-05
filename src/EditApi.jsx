import { useParams,useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";


export default function EditUser() {
    const { id } = useParams();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const url = "http://localhost:3000/users/" + id;
    const navigate = useNavigate();

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        console.log(id);

        let response = await fetch(url);
        response = await response.json();
        console.log(response);

        setName(response.name);
        setAge(response.age);
        setEmail(response.email);

    }

    const updateData = async () => {
        console.log(name, email, age);

        let response = await fetch(url,{
            method:"put",
            body:JSON.stringify({name,age,email})
        });
        response = await response.json();
        console.log(response);
        if(response){
            alert("User Updated Successfully")
        }
        navigate('/');
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Edit User</h1>

            <input type="text" value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First Name" />
            <br /><br />

            <input type="text" value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email" />
            <br /><br />

            <input type="text" value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age" />
            <br /><br />

            <button onClick={updateData} >Update User</button>
        </div>
    )
}