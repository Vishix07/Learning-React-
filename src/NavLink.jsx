import { Link } from "react-router"
import './css/header.css'

export default function NavLink() {

    return (
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
                        <Link className="link" to="/about" >ABOUT</Link>
                    </li>
                    <li>
                        <Link className="link" to="/login" >LOGIN</Link>
                    </li>
                    <li>
                        <Link className="link" to="/college" >COLLEGE</Link>
                    </li>
                </ul>
            </div>
        </div>
    )



}