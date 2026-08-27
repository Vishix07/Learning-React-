import { Route, Routes, Link, Navigate } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import CollegeNav from "./CollegeNav"
import NavLink from "./NavLink"
import PageNotFound from "./PageNotFound"
import StudentsNav from "./StudentsNav"
import DetailsNav from "./DetailsNav"
import DepartmentNav from "./DepartmentNav"

// Basic Pages with React-Router 

export default function BasicPgRR() {

  return (

    <div >

      <NavLink />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/college" element={<CollegeNav />}>
          <Route path="students" element={<StudentsNav />} />
          <Route path="Department" element={<DepartmentNav />} />
          <Route path="Details" element={<DetailsNav />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path="/*" element={<Navigate to={/Login} } /> */}

      </Routes>

    </div>

  )
}