import { Link } from "react-router"

export default function NavLink() {

    return(
        <div>
           <Link to="/" ><h1>HOME</h1></Link>
           <Link to="/about" ><h1>ABOUT</h1></Link>
           <Link to="/login" ><h1>LOGIN</h1></Link>
        </div>
    )
}