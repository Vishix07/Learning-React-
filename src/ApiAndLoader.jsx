import { useEffect, useState } from "react";

export default function ApiAndLoader() {

    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    const url = "http://localhost:3000/users";
    useEffect(() => {
        setLoading(true);
        getUserData();
    }, []);

    const getUserData = async () => {
        
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUserData(response);
        setLoading(false);

    }

    const deleteUser = async( id) => {
        let response = await fetch(url+"/"+id,{
            method: "delete"
        })
            getUserData();
            response = await response.json();
            if(response){
                alert("record deleted")
            }
    }

    return (
        <div>

            <ul style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", }}>
                <li>First Name</li>
                <li>Last Name</li>
                <li>Email</li>
                <li>Action</li>
            </ul>
            {
                !loading ?
                    userData.map((user,index) => (
                        

                            <ul key={index} style={{
                                display: "flex",
                                justifyContent: "space-between", border: "1px solid #251f1f",
                                width: "100%", padding: "10px", margin: "10px 0px"
                            }} >
                                <li>{user.name}</li>
                                <li>{user.age}</li>
                                <li>{user.email}</li>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </ul>
                        
                    )) : <h1>Loading...</h1>
            }
        </div>
    )
} 