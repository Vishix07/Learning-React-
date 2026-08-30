import { Link, NavLink } from "react-router"
        
export default function UserList() {
    const userData = [
        { id:1,name:'Vishi' },
        { id:2,name:'Vision' },
        { id:3,name:'Pirx' },
        { id:4,name:'Max' },
        { id:5,name:'Gorge' },
        { id:6,name:'Kimi' },
    ]
    return (
        <div className="collage" >
            <h1>User List</h1>
            {
                userData.map((item,index)=>(
                  <div key={index} >
                    <h4><Link to={"/user/"+item.id} >{item.name}</Link></h4>
                  </div>  
                ))
            }

        </div>
    )
}