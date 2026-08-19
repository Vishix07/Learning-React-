import { useState } from "react";

function UpdateObj () {

    const [data,setData] = useState({
        name:'Vishi',
        address:{
            city:'Meerut',
            countary:'india'
        }
    })

    const handleName=(val)=>{
       data.name=val;
        console.log(val);
       

       setData({...data})
    }

    const handleCity=(city)=>{
        data.address.city=city

        setData({...data,address:{...data.address,city}})

    }

    return(
        <div>
            <h1>Updating objects using useState</h1>
            <input type="text" placeholder="Up dating user Name "
            onChange={(event)=>handleName(event.target.value)} />
            <br /><br />
            <input type="text" placeholder="Up daring city Name"
            onChange={(event)=>handleCity(event.target.value)} />
            <br /><br />

            <h2>Name :{data.name}</h2>
            <h2>City :{data.address.city}</h2>
            <h2>Countary :{data.address.countary}</h2>

        </div>
    )
}

export default UpdateObj;