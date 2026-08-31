import {  Link,useParams } from "react-router"
        
export default function UserDetail() {
    const paramsData = useParams();
    console.log(paramsData);
    return (
        <div className="collage" >
            <h1>User Detail Page</h1>
            <h2 style={{color:"rgb(28, 175, 170)"}} >User id is :{paramsData.id}</h2>
            
            <h3>
                <Link to="/user" >Back</Link>
            </h3>
            
        </div>
    )
}