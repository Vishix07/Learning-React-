import { Route,Routes,Link, Navigate } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavLink from "./NavLink"
import PageNotFound from "./PageNotFound"

                 // Basic Pages with React-Router 

export default function BasicPgRR() {
       
         return (

          <div >

           <NavLink />   
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<PageNotFound />} />
            {/* <Route path="/*" element={<Navigate to={/Login} } /> */}
          </Routes>

          </div>

         )
}