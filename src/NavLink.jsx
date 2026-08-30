import { Link,Outlet } from "react-router"
import './css/header.css'

export default function NavLink() {

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
                <Link className="link " to="/" >Logo</Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li>
                        <Link className="link" to="/in/user/about" >ABOUT</Link>
                    </li>
                    <li>
                        <Link className="link" to="/in/user/login" >LOGIN</Link>
                    </li>
                    <li>
                        <Link className="link" to="/college" >COLLEGE</Link>
                    </li>
                    <li>
                        <Link className="link" to="/user" >USER</Link>
                    </li>
                </ul>
            </div>
            
        </div>
        <Outlet />
        </div>
    )


}