import { useEffect, useState } from "react";

export default function ApiAndLoader() {

    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        getUserData();
    }, []);

    const getUserData = async() => {
        const url = "http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUserData(response);
        setLoading(false);
        

    }

    return (
        <div>
            <h1>Integrate JSON Server API and Loader</h1>
             <ul style={{display: "flex", justifyContent: "space-between", fontWeight: "bold",}}>
                        <li>First Name</li>
                        <li>Last Name</li>
                        <li>Email</li>
                    </ul>
            {
                !loading ?
                    userData.map((user) => (
                       <div>
                            
                        <ul key={user.name} style={{display: "flex", justifyContent: "space-between",border: "1px solid #251f1f"}} > 
                            <li>{user.name}</li>
                            <li>{user.age}</li>
                            <li>{user.email}</li>
                        </ul>
                       </div>
                    )):<h1>Loading...</h1>
            }
        </div>
    )
} 