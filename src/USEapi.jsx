import { Suspense,use } from "react";

const fetchData =()=>fetch("https://dummyjson.com/users").then((response)=>response.json())

const userResource = fetchData();
export default function USEapi() {

    return(
        <div>
            <h1>use API in React js</h1>
            <Suspense fallback={<p>Loading....</p>} >
                <User userResource={userResource} />
            </Suspense>
        </div>
    )
}

const User=({userResource})=>{
    
    const userData = use(userResource);

    
    return(
        <div>
            <h1>User LIST</h1>
            {
                userData?.users?.map((user)=>(
                    <ul style={{display:"flex",flexFlow:"row wrap"}} >
                        <li>{user.firstName}</li>
                        <li>{user.lastName}</li>
                    </ul>
                ))
            }
        </div>
    )
}