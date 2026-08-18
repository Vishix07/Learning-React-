const Studentsname=({student})=>{
    return(
        <div>
            
             <h3>Students</h3>
                {
                    student.map((student)=>(
                        <ul>
                            <li>Names :{student.name}</li>
                        </ul>
                    ))
                }
        </div>
    )
}

export default Studentsname