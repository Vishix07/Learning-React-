import Studentsname from "./Studentsname"

const CollageNames=({collage})=>{
    return(
        <div>
            <h1>
              Name : {collage.name}
            </h1>
            <ul>
              <li>
                <h2>City :{collage.city}</h2>
              </li>
              <li>
                <h2>Email :{collage.email}</h2>
              </li>
              <li>
               <Studentsname student={collage.students} />
              </li>
            </ul>

        </div>
    )

}

export default CollageNames