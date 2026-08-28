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
                 //Nested Nav
  // return (

  //   <div >

  //     <NavLink />

  //     <Routes>

  //     <Route element={<NavLink />} >
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/login" element={<Login />} />
  //     </Route>

  //       <Route path="/college" element={<CollegeNav />}>
  //         <Route path="students" element={<StudentsNav />} />
  //         <Route path="Department" element={<DepartmentNav />} />
  //         <Route path="Details" element={<DetailsNav />} />
  //       </Route>

  //       <Route path="/*" element={<PageNotFound />} />
  //       {/* <Route path="/*" element={<Navigate to={/Login} } /> */}

  //     </Routes>

  //   </div>

  // )
                     //Layout and Index Routes

  //             return (

  //   <div >

      

  //     <Routes>

  //     <Route element={<NavLink />} >
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/login" element={<Login />} />
  //     </Route>

  //       <Route path="/college" element={<CollegeNav />}>
  //         <Route index element={<StudentsNav />} />
  //         <Route path="Department" element={<DepartmentNav />} />
  //         <Route path="Details" element={<DetailsNav />} />
  //       </Route>

  //       <Route path="/*" element={<PageNotFound />} />
  //       {/* <Route path="/*" element={<Navigate to={/Login} } /> */}

  //     </Routes>

  //   </div>

  // )

              // Prefix Route

                 return (

    <div >

      

      <Routes>

      <Route element={<NavLink />} >
        <Route path="/" element={<Home />} />
          <Route path="/in">
            <Route path="/in/user">
             <Route path="/in/user/about" element={<About />} />
             <Route path="/in/user/login" element={<Login />} />
          </Route>
          </Route>
      </Route>

        <Route path="/college" element={<CollegeNav />}>
          <Route index element={<StudentsNav />} />
          <Route path="Department" element={<DepartmentNav />} />
          <Route path="Details" element={<DetailsNav />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path="/*" element={<Navigate to={/Login} } /> */}

      </Routes>

    </div>

  )











}