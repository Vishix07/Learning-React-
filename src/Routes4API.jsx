import ApiAndLoader from "./ApiAndLoader";
import AddUserToAPI from "./AddUserToAPI";
import { Routes, Route,NavLink } from "react-router";
import  './app.css'

export default function Routes4API() {
    // Routes for Server API and User UI

    return (
        <div>
            <ul className='nav-list'>
                <li >
                    <NavLink  to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/add"> Add New User </NavLink>
                </li>
            </ul>
            <h1>Routes for Server API and User UI</h1>
            <h2>Make Router and Pages for Add User and User List UI</h2>
            
            <Routes>
                <Route path="/" element={<ApiAndLoader/>} />
                <Route path="/add" element={<AddUserToAPI/>} />
            </Routes>
            
        </div>
    )
}
