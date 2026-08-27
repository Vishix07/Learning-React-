import { Link, NavLink, Outlet } from "react-router"

export default function CollegeNav() {
    return (
        <div>
            <h1>College Page</h1>
            
            <div className="collage" >
                <h3><Link to="/" className="link" >Go Back To Home</Link></h3>
                <NavLink className="link" to=""  >Students</NavLink>
                <NavLink className="link" to="Department" >Department</NavLink>
                <NavLink className="link" to="Details" >Details</NavLink>
                <Outlet />
            </div>
        </div>
    )
}