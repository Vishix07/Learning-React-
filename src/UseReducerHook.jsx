 // useReducer Hook

import { useReducer } from "react"

        //it is a better alter native of useState hook 


        const emptyData={
            name:'',
            password:'',
            email:'',
            city:'',
            address:'',
        }

        const reducer=(state,action)=>{
            return{...state,[action.type]:action.val}
            
        }

export default function UseReducerHook() {
    const [state,dispatch] = useReducer(reducer,emptyData)

    console.log(state);
    
    return(
       <div>
        <h1>Validation With useActionState in React</h1>
         <div style={{border:"1px solid aqua", padding:"10px",margin:"0 400px ",borderRadius:"5px"}} >
            
            <input type="text" placeholder="Enter Name"
            onChange={(event)=>dispatch({val:event.target.value,type:'name'})} />
            <br /><br />
            <input type="text" placeholder="Enter Password" 
            onChange={(event)=>dispatch({val:event.target.value,type:'password'})} />
            <br /><br />
            <input type="text" placeholder="Enter Email" 
            onChange={(event)=>dispatch({val:event.target.value,type:'email'})} />
            <br /><br />
            <input type="text" placeholder="Enter City"
            onChange={(event)=>dispatch({val:event.target.value,type:'city'})} />
            <br /><br />
            <input type="text" placeholder="Enter Address"
            onChange={(event)=>dispatch({val:event.target.value,type:'address'})} />
            <br /><br />
            <button>Add Details</button>

            <ul>
                <li>Name :{state.name}</li>
                <li>Password :{state.password}</li>
                <li>Email :{state.email}</li>
                <li>City :{state.city}</li>
                <li>ADD :{state.address}</li>

            </ul>
        </div>
       </div>
    )
}