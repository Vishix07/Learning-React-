import { Link, NavLink, Outlet } from "react-router"

export default function CollegeNav() {
    return (
        <div>
            <h1>College Page</h1>
            
            <div className="collage" >
                <h3><Link to="/" className="link" >Go Back To Home</Link></h3>
                <Link className="link" to=""  >Students</Link>
                <Link className="link" to="Department" >Department</Link>
                <Link className="link" to="Details" >Details</Link>
                <Outlet />
            </div>
        </div>
    )
}