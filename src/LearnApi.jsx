                     
                             //API
  
      //API is a set of functions and procedures 
      // that allow the creation of applications 
      // which access the features or data of an operating system, application, or other service. 
      // In this example we are using API to fetch data from dummyjson.com and display it in our react app.

import { useEffect,useState } from "react";  

export default function LearnApi() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getUserData();
    }, []);

   async function getUserData() {
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUserData(response.users);
    }

    return (
        <div>
            <h1>Learn API</h1>
            {
             userData && userData.map((item,index)=>(
                
                <div key={index} >
                    <ul style={{display: "flex", justifyContent: "space-between", fontWeight: "bold",}}>
                        <li>First Name</li>
                        <li>Last Name</li>
                        <li>Email</li>
                    </ul>
                    <ul style={{display: "flex", justifyContent: "space-between",}} >
                         <li>{item.firstName}</li>
                         <li>{item.lastName}</li>
                         <li>{item.age}</li>
                    </ul>
                </div>
            ))
            }

        </div>
    )       
}