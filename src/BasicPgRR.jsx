import { Route,Routes,Link } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavLink from "./NavLink"

                 // Basic Pages with React-Router 

export default function BasicPgRR() {
       
         return (

          <>

           <NavLink />   
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          </>

         )
}