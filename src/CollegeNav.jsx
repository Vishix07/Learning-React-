import { Link, NavLink, Outlet } from "react-router"

export default function CollegeNav() {
    return (
        <div>
            <h1>College Page</h1>
            <div className="collage" >
                <NavLink className="link" to="students"  >Students</NavLink>
                <NavLink className="link" to="Department" >Department</NavLink>
                <NavLink className="link" to="Details" >Details</NavLink>
                <Outlet />
            </div>
        </div>
    )
}