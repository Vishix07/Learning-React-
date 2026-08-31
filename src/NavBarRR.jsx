import { Link,Outlet } from "react-router"
import './css/header.css'
import { NavLink } from "react-router"

//CSS FONT



export default function NavBarRR() {

    return (
    //     <div>
    //         <div className="header" >
    //         <div>
    //             <Link className="link " to="/" >Logo</Link>
    //         </div>
    //         <div>
    //             <ul>
    //                 <li>
    //                     <Link className="link" to="/" >HOME</Link>
    //                 </li>
    //                 <li>
    //                     <Link className="link" to="/about" >ABOUT</Link>
    //                 </li>
    //                 <li>
    //                     <Link className="link" to="/login" >LOGIN</Link>
    //                 </li>
    //                 <li>
    //                     <Link className="link" to="/college" >COLLEGE</Link>
    //                 </li>
    //             </ul>
    //         </div>
            
    //     </div>
    //     <Outlet />
    //     </div>
    // )
             
              //Route Prefixes


    <div>
            <div className="header" >
            <div>
                
       <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
       <link href="https://fonts.googleapis.com/css2?family=Geo:ital@0;1&display=swap" rel="stylesheet" />

                <NavLink className="link " to="/" style={{fontFamily:"Geo", fontSize:"35px" }} >Logo</NavLink>
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink  className="link" to="/" >HOME</NavLink>
                        {/* <NavLink className={({isActive})=>(isActive?'custom-active link':'link') }  to="/" >HOME</NavLink> */}
                    </li>
                    <li>
                        <NavLink className="link" to="/in/user/about" >ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/in/user/login" >LOGIN</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/college" >COLLEGE</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/user" >USER</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/user/list" >LIST</NavLink>
                    </li>
                </ul>
            </div>
            
          </div>
         <Outlet />
        </div>
    )


}