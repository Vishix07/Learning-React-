import { useState } from "react";

function UpdateArr() {
   const[data,setData] = useState([
    'VISH','TOM','PETER','tony'
   ])

   const handleName=(name)=>{
    data[data.length-1]=name
    console.log(data);
    
    setData([...data])
   }

   const[dataDetails,setdataDetails] = useState([
    { name:'vish',age:'21' },
    { name:'vison',age:'22' },
    { name:'ishvi',age:'23' },
   ])

   const handleAge=(age)=>{
     dataDetails[dataDetails.length-1].age=age;
     setdataDetails([...dataDetails])

   }

    return(
        <>
          <h2>Updating Array in State</h2>
          <input type="text" placeholder="Update name" 
          onChange={(e)=>handleName(e.target.value)} />
          {
                data.map((item,index)=>(
                    <h3 key={index}>{item}</h3>
                ))
          }

          <hr />

          <input type="text" placeholder="Update last user Age" 
          onChange={(e)=>handleAge(e.target.value)}/>
          {
            dataDetails.map((item,index)=>(
                <h2 key={index} >{item.name},{item.age}</h2>
            ))
          }

        </>
    )
}

export default UpdateArr;