import styled from "styled-components"
// import Header,{Login,Logout, userKey} from "./Header";
// import { useState } from "react";
// import Todo from "./TODO";
import { useState, useEffect } from "react";
// import Counter from "./Counter";
// import User from "./User";
//  import Collage from "./Collage";
//  import Students from "./Students";
// import Wrapper from "./Wrapper";
// import Skills from "./Skills";
// import Clock from "./Clock";
// import CollageNames from "./CollageNames";
// import './css/style.css'
// import UserProfile from "./UserProfile";
// import Bootstrapinfo from "./Bootstrapinfo"
import { useRef } from "react"
import { Button } from "bootstrap";
import Userinput from "./UserInput";
import Form from "./Form";
import { useFormStatus } from "react-dom";
import Transition from "./Transition";
import Lifting from "./Lifting";
import UpdateObj from "./UpdateObj";
import UpdateArr from "./UpdateArr";
import UseAction from "./UseAction";
import { useId } from "react";
import UseId from "./UseId";
import Fragments from "./Fragments";
import useToggle from "./useToggle";
import CollageContext from "./CollageContext";
import { SubjectContext } from "./ContextData";
import ContextApi from "./ContextApi";
import { BrowserRouter, Routes } from "react-router";
import ReactRouter from "./ReactRouter";
import Home from "./Home";
import BasicPgRR from "./BasicPgRR";





function App() {
  // const [count, setCounter] = useState(0);
  // return <>
  // <h1>Counter Val :{count}</h1>
  // <Login />
  // <Logout />
  // <h1>{userKey}</h1>
  // <button onClick={() => setCounter(count +1)}>
  //   Increment </button>
  // </>;
  // return(
  //   <Todo />
  // )

  // const name = "Vansh Kumar";
  // const userObj = {
  //   name: "Vansh Kumar",
  //   age : 20,
  //   email: "vanshf@gmail.com"
  // }

  // const userArray = ["vansh","guhf","wop",]

  // let path = "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"

  // let x = 10;
  // let y = 20;
  // function sum(a,b){
  //   return a+b;
  // }

  // function fruit(){
  //   return "Mango";
  // }

  // function operation(a,b,op) {

  //   if (op=="+"){
  //     return a+b;
  //   }
  //   else if (op=="-"){
  //     return a-b;
  //   }
  //   else{
  //     return a*b;
  //   }


  // }

  // return (
  //   <div>
  //     <h1>{name?name:"user not found"}</h1>
  //     <h1>{x+y}</h1>
  //     <h1>{fruit()}</h1>
  //     <h1>{sum(14,190)}</h1>
  //     <h1>{operation(2,8,"")}</h1>
  //     <h1>{userObj.email}</h1>
  //     <h1>{userArray[2]}</h1>
  //     <input type="text" value={name} id="name" />
  //     <img src={path} alt="Image" />  

  //   </div>
  // )

  // Click Event and Fuction call


  // function callFun() {
  //   alert("function called")

  // }

  // const fruit= (name) => {
  //   alert(name)
  // }

  // return (
  //   <div>
  //     <h1>Event and function</h1>
  //     <button onClick={() =>fruit("APPLE")} > apple </button>
  //     <button onClick={() =>fruit("BANANA")} > banana </button>

  //   </div>
  // )

  //STATE AND HOOKS


  // const [fruit,setFruit] = useState("äpple")
  // const handleFruit = () => {
  //   setFruit("banana")
  // }

  //  return(
  //   <div>
  //       <h1>state in React js</h1>
  //       <h1>{fruit}</h1>
  //       <button onClick={handleFruit} >Change Fruit</button>

  //   </div>
  //  )

  // return(
  //   <Counter />
  // )

  //    TOGGLE OR HIDE AND SHOW ELEMENTS

  // const [display,setDisplay] = useState(true)

  //      return(
  //         <>
  //           <h1>Toggle in React js</h1>
  //           {/* {
  //             display ? <h1>Vansh Kumar</h1>:null
  //           } */}

  //           <button onClick={() => setDisplay(!display)}>Toggle</button>

  //           {
  //             display? <User />:null
  //           }

  //         </>

  //      )

  //CONDITIONS AND MULTIPAL CONDITIONS IN REACT

  // const [count,setCount] = useState(1);
  // return(
  //   <div>
  //     <h1>Count:{count}</h1>
  //     <button onClick={()=> setCount(count+1)}>increase</button>
  //     {
  //       count==0?<h1>Condition 0</h1>
  //       :count==1?<h1>Condition 1</h1>
  //       :count==2?<h1>Condition 2</h1>
  //       :count==3?<h1>condition 3</h1>
  //       :count==4?<h1>condition 4</h1>
  //       :<h1>other conditions</h1>
  //     }
  //   </div>
  // )

  // PROPS IN REACT JS

  // let userName = "Vansh Kumar";
  // let age = 29;
  // let email = "vanshf@gmail.com";

  // let userObject = {
  //   name: "Vansh Kumar",
  //   age : 21,
  //   email: "vanshf@gmail.com"
  // };
  //   let user2Object = {
  //   name: "PEET",
  //   age : 21,
  //   email: "PEETf@gmail.com"
  // };

  // let user3Object = {
  //   name: "PEET",
  //   age : 21,
  //   email: "PEETf@gmail.com"
  // };

  // let userArray = []

  // let collageArray = ['ÍIT',' NIT','IIM','IISc' ]

  // const [students,setStudents] = useState();

  // return(
  //   <div>
  //     <h1>Props in React js</h1>
  //     {/* <User name ={userName} age = {age} email = {email} /> */}
  //     <User user={userObject}/>
  //     <User user={user2Object}/>
  //     <User user={user3Object}/>
  //     <Collage name = {collageArray} />
  //     <Students name= {students} />
  //     <button onClick={()=> setStudents("Vansh Kumar")}>Change Student Name</button>

  //   </div>
  // )


  // ADVANCED PROPS IN REACT JS



  // return (
  //   <div>
  //     {/* <h1>Props in React js</h1>
  //     <User name="Vansh Kumar" />
  //     <User name="Peet" />  
  //     <User /> */}
  //     <Wrapper color="orange"  > 
  //       <h1>Hi everyone</h1>
  //     </Wrapper >

  //     <Wrapper color="blue" > 
  //       <h1>Hi one</h1>
  //     </Wrapper >

  //     <Wrapper > 
  //       <h1>Hi every</h1>
  //       <h2 style={{color:"red"}} > Please login</h2>
  //     </Wrapper >

  //   </div>
  // )                  // css kam nahi kar rahi text color ki vo check karna hai


  // GET VALUE FROM INPUT FIELD IN REACT JS


  // const [val,setVal] = useState("VISHI")
  // return(
  //   <div>
  //       <h1>Get input field value </h1>
  //       <input type="text" value={val} onChange={(event)=> setVal(event.target.value)} placeholder="enter your value" />
  //       <h1>{val}</h1>
  //       <button onClick={()=> setVal("")}> Clear value</button>
  //   </div>
  // )

  //CANTROLLED COMPONENTS

  //  const[name,setName] = useState("")
  //  const[password,setPassword] = useState("")
  //  const[email,setEmail] = useState("")

  // return(
  //   <div>
  //       <h1>CANTROLLED COMPONENTS</h1>

  //       <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
  //       <br /><br/>
  //       <input type="text" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Passowrd" />
  //       <br/><br />
  //       <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" />
  //       <br /><br />
  //       <button >Submit</button>
  //       <br/><br/>
  //       <button onClick={()=>{setEmail(''),setName(''),setPassword('')}}>Clear</button>

  //       <h3>{name}</h3>
  //       <h3>{password}</h3>
  //       <h3>{email}</h3>

  //   </div>
  // )


  //HANDLE CHECKBOX

  // return (
  //   <div>
  //     <h1>Handle your skills</h1>
  //     <Skills />
  //   </div>
  // )


  //HANDLE RADIO AND DROPDOWN

  // const [gender,setGender] = useState("female");
  // const [city,setCity] = useState("meerut");

  // return (
  //   <div style={ {flex:1} }>
  //     <h1>Handle Radio and Dropdown</h1>
  //     <h2>Select your gander</h2>
  //     <input type="radio" checked={gender=="male"} onChange={(event)=>setGender(event.target.value)} 
  //     value={"male"} name="gender" id="male" />
  //     <label htmlfor="male">Male</label> 


  //     <input type="radio" checked={gender=="female"} onChange={(event)=>setGender(event.target.value)}
  //     value={"female"} name="gender" id="female" />  
  //     <label htmlFor="female">Female</label>

  //     <h2>Selected Gender :{gender}</h2>
  //     <br/><br/>
  //     <h3>Select City</h3>
  //         <select onChange={(event)=>setCity(event.target.value)} defaultValue={"meerut"}>
  //           <option value="meerut" >Meerut</option>
  //           <option value="noida">Noida</option>
  //           <option value="delhi">Delhi</option>
  //         </select>
  //       <h3>Selected City :{city}</h3>
  //   </div>
  // )

  //LOOP JSX WITH MAP AND FUNCTION

  //  const userName = ['Tom', 'Herry', 'Peter', 'Kin']
  //   const userData = [
  //     {
  //       id: 1,
  //       name: "tom",
  //       age: "24",
  //       email: "tom@test.com"
  //     },
  //     {
  //       id: 2,
  //       name: "Herry",
  //       age: "23",
  //       email: "Herry@test.com"
  //     },
  //     {
  //       id: 3,
  //       name: "Peter",
  //       age: "27",
  //       email: "peter@test.com"
  //     },
  //     {
  //       id: 4,
  //       name: "Kin",
  //       age: "25",
  //       email: "kin@test.com"
  //     }

  //   ]

  //   return (
  //     <div>
  //       <h1>LOOPS IN JSX</h1>

  //       <table border={1} >
  //         <thead>
  //           <td>Id</td>
  //           <td>Name</td>
  //           <td>Age</td>
  //           <td>Email</td>
  //         </thead>
  //         <tbody>
  //           { 
  //             userData.map((user)=>(
  //             <tr key={user.id} >
  //             <td>{user.id}</td>
  //             <td>{user.name}</td>
  //             <td>{user.age}</td>
  //             <td>{user.email}</td>
  //           </tr>
  //            )) 
  //           } 
  //         </tbody>
  //       </table>

  //               <h1>Dummy Data</h1>

  //       <table border={1} >
  //         <thead>
  //           <td>Id</td>
  //           <td>Name</td>
  //           <td>Age</td>
  //           <td>Email</td>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>1</td>
  //             <td>Tom</td>
  //             <td>24</td>
  //             <td>tom@test.com</td>
  //           </tr>

  //           <tr> <td>2</td>
  //             <td>Herry</td>
  //             <td>24</td>
  //             <td>herry@test.com</td></tr>

  //           <tr>
  //             <td>3</td>
  //             <td>Peter</td>
  //             <td>24</td>
  //             <td>peter@test.com</td>
  //           </tr>

  //           <tr>
  //             <td>4</td>
  //             <td>Kim</td>
  //             <td>24</td>
  //             <td>kim@test.com</td>
  //           </tr>

  //         </tbody>
  //       </table>

  //     </div>

  //   )


  //Reuse Component in Loop

  // const userName = ['Tom', 'Herry', 'Peter', 'Kin']
  // const userData = [
  //   {
  //     id: 1,
  //     name: "tom",
  //     age: "24",
  //     email: "tom@test.com"
  //   },
  //   {
  //     id: 2,
  //     name: "Herry",
  //     age: "23",
  //     email: "Herry@test.com"
  //   },
  //   {
  //     id: 3,
  //     name: "Peter",
  //     age: "27",
  //     email: "peter@test.com"
  //   },
  //   {
  //     id: 4,
  //     name: "Kin",
  //     age: "25",
  //     email: "kin@test.com"
  //   }

  // ]

  //   return (
  //     <div>
  //        <h1>Reuse Component in Loop</h1>
  //         {
  //           userData.map ((user)=>(
  //           <div key={user.id} >
  //             <User data={user} />
  //           </div>
  //           ))
  //         }
  //     </div>
  //   )

  // MAKING FULLY WORKING CLOCK 


  //   const [color,setColor]=useState('red')
  // return (
  //   <div>
  //     <h1>Digital Clock in React Js</h1>
  //     <select onChange={(event)=>setColor(event.target.value)} >
  //       <option value={'red'} >RED</option>
  //       <option value={'blue'}>BLUE</option>
  //       <option value={'yellow'}>YELLOW</option>
  //       <option value={'orange'}>ORANGE</option>
  //     </select>

  //     <Clock color={color} />
  //   </div>
  // )

  //NESTED LOOPING IN JSX

  // const collageData = [
  //   {
  //     name: "IIMT",
  //     city: "Meerut",
  //     web: "iimt.com.in",
  //     students:[
  //       {
  //         name:"Vansh",
  //         age:"21",
  //         email:"vansh@test.com"

  //       },
  //       {
  //         name:"Utkarsh",
  //         age:"21",
  //         email:"utkarsh.iitd.in"
  //       },
  //       {
  //         name:"ankit",
  //         age:"21",
  //         email:"ankit@gl.in"
  //       }
  //     ]
  //   },
  //   {
  //     name: "IIT",
  //     city: "Delhi",
  //     web: "iitd.com.in",
  //     students:[
  //       {
  //         name:"Vansh",
  //         age:"21",
  //         email:"vansh@test.com"

  //       },
  //       {
  //         name:"Utkarsh",
  //         age:"21",
  //         email:"utkarsh.iitd.in"
  //       },
  //       {
  //         name:"ankit",
  //         age:"21",
  //         email:"ankit@gl.in"
  //       }
  //     ]
  //   },
  //   {
  //     name: "IIIT",
  //     city: "kannur",
  //     web: "iiitk.com.in",
  //     students:[
  //       {
  //         name:"Vansh",
  //         age:"21",
  //         email:"vansh@test.com"

  //       },
  //       {
  //         name:"Utkarsh",
  //         age:"21",
  //         email:"utkarsh.iitd.in"
  //       },
  //       {
  //         name:"ankit",
  //         age:"21",
  //         email:"ankit@gl.in"
  //       }
  //     ]
  //   },
  //   {
  //     name: "NIT",
  //     city: "kerala",
  //     web: "nitkerala.com.in",
  //     students:[
  //       {
  //         name:"Vansh",
  //         age:"21",
  //         email:"vansh@test.com"

  //       },
  //       {
  //         name:"Utkarsh",
  //         age:"21",
  //         email:"utkarsh.iitd.in"
  //       },
  //       {
  //         name:"ankit",
  //         age:"21",
  //         email:"ankit@gl.in"
  //       }
  //     ]
  //   },
  // ]

  // return (
  //   <div 
  //     style={{
  //       backgroundColor:"#ccc",
  //       padding:"20px",
  //       borderBottom:"2px solid #000",
  //       borderRadius:"5px",
  //       margin:"20px",
  //       Color:"#000"
  //     }}>
  //     <h1>
  //       Nested Looping with Component
  //     </h1>
  //     {
  //       collageData.map((collage,index)=>(
  //         <div key={index} >
  //           <CollageNames collage={collage} />
  //         </div>
  //       ))
  //     }

  //   </div>
  // )



  //USE EFFECT HOOKS


  // mostly used to mange side effects

  // const [count, setCounter] = useState(0)
  // const [data, setData] = useState(0)
  // const [display, setdisplay] = useState(true)

  //  function counterFunction(){
  //   console.log("counterFunction",counter);
  //  }
  // useEffect(()=>{
  //       //callOnce()
  //       counterFunction();
  // },[count])

  // function counterFunction (){
  //     console.log("counter function called",count)
  // }
  //  function callOnce(){
  //   console.log("callOnce function called")
  //  }

  // return (

  //   <div>
  //     <h1>useEFFECT hook</h1>
  //     {
  //       display?  <Counter count={count} data={data} />:null
  //     }

  //       <button onClick={()=>setCounter(count+1)} >counter:{count}</button> <br />
  //       <button onClick={()=>setData(data+1)} >data:{data}</button>
  //       <button onClick={()=>setdisplay(!display)}> toggle </button>

  //   </div>
  // )

  //CSS

  //INLINE CSS


  //   const [cardStyle,setCardStyle]=useState(
  //         {
  //           border:"1px solid #652525",
  //           boxShadow:"2px 4px 3px 2px #cd4c4c",
  //           width:"201px",
  //           margin:"10px"
  //   }
  //   )
  //   const [textColor,setTextColor]=useState("orange")

  //   const updateTheme=(bgColor,textColor)=>{
  //      setCardStyle({...cardStyle,backgroundColor:bgColor})
  //      setTextColor(textColor)

  //   }
  //   const [grid,setGrid]=useState(true)

  // return(
  //   <>
  //       {/* <h1 style={{color:"red",
  //                   backgroundColor:"#3d2323"

  //       }} >inline Style in React js</h1> */}
  //         <h1>ID Card</h1>
  //         <button onClick={()=>updateTheme('#ccc','green') } style={{width:"80px" }} >grey color</button>
  //         <button onClick={()=>updateTheme('white','orange')} style={{width:"80px" }} >Default</button>
  //         <button onClick={()=>setGrid(!grid)} style={{width:"100px" }} >Toggle Grid</button>

  //       <div style={{display:grid?'flex':null,flexWrap:"wrap" , color:textColor }}>
  //         <div style={cardStyle}>
  //           <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" style={{width:"200px"}} alt="" />
  //           <div style={{padding:"5px", color:textColor }}>
  //              <h3>Ganesh Shivputr </h3>
  //              <p>Software Devloper</p>
  //             </div> 
  //         </div>
  //         <div style={cardStyle}>
  //           <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" style={{width:"200px"}} alt="" />
  //           <div style={{padding:"5px",}}>
  //              <h3>Ganesh Shivputr </h3>
  //              <p>Software Devloper</p>
  //             </div> 
  //         </div>
  //         <div style={cardStyle}>
  //           <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" style={{width:"200px"}} alt="" />
  //           <div style={{padding:"5px",}}>
  //              <h3>Ganesh Shivputr </h3>
  //              <p>Software Devloper</p>
  //             </div> 
  //         </div>
  //         <div style={cardStyle}>
  //           <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" style={{width:"200px"}} alt="" />
  //           <div style={{padding:"5px",}}>
  //              <h3>Ganesh Shivputr </h3>
  //              <p>Software Devloper</p>
  //             </div> 
  //         </div>
  //         <div style={cardStyle}>
  //           <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" style={{width:"200px"}} alt="" />
  //           <div style={{padding:"5px",}}>
  //              <h3>Ganesh Shivputr </h3>
  //              <p>Software Devloper</p>
  //             </div> 
  //         </div>
  //         <div style={cardStyle}>
  //           <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" style={{width:"200px"}} alt="" />
  //           <div style={{padding:"5px",}}>
  //              <h3>Ganesh Shivputr </h3>
  //              <p>Software Devloper</p>
  //             </div> 
  //         </div>
  //         <div style={cardStyle}>
  //           <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" style={{width:"200px"}} alt="" />
  //           <div style={{padding:"5px",}}>
  //              <h3>Ganesh Shivputr </h3>
  //              <p>Software Devloper</p>
  //             </div> 
  //         </div>
  //         <div style={cardStyle}>
  //           <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" style={{width:"200px"}} alt="" />
  //           <div style={{padding:"5px",}}>
  //              <h3>Ganesh Shivputr </h3>
  //              <p>Software Devloper</p>
  //             </div> 
  //         </div>
  //         <div style={cardStyle}>
  //           <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" style={{width:"200px"}} alt="" />
  //           <div style={{padding:"5px",}}>
  //              <h3>Ganesh Shivputr </h3>
  //              <p>Software Devloper</p>
  //             </div> 
  //         </div>
  //         <div style={cardStyle}>
  //           <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" style={{width:"200px"}} alt="" />
  //           <div style={{padding:"5px",}}>
  //              <h3>Ganesh Shivputr </h3>
  //              <p>Software Devloper</p>
  //             </div> 
  //         </div>



  //       </div>
  //   </>
  // )


  // return (
  //   <>
  //     <h className="heading" >External Style</h>
  //     <div className="container">
  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>


  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>

  //     <div className="user-card">
  //       <div>
  //         <img className="img-style" src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />
  //         </div>
  //         <div className="text-wrap" >  
  //           <h3>Ganesh Shiv</h3>
  //           <p>Software Devloper</p>
  //         </div>  
  //     </div>
  //   </div>
  //   </>
  // )

  //  return(
  //    <>
  //        <h1>Style with CSS Module in React js</h1>
  //        <div className='container' >
  //         <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        <UserProfile />
  //        </div>

  //    </>

  //  )
  //STYLED COMPONENTS

  // const Heading = styled.h1`
  //  color:aqua;
  //  border: 2px solid yellow;
  //  border-radius:5px;
  //  margin:20px;
  //  padding:20px;
  //  box-shadow:1px 2px 3px 1px;
  // `
  // const Heading = styled.h1({
  //   color:'aqua',
  //   border:'2px solid yellow' ,
  //   borderRadius:'5px',
  //   margin:'20px',
  //   padding:'20px',
  //   boxShadow:'1px 2px 3px 1px',
  // })

  // const Stylebtn = styled.button`
  //  color:aqua;
  //  width:130px;
  //  hegith:30px;
  //  margin:20px;
  //  padding:2px;
  // `


  //   return(
  //     <>
  //       <h1>Styled Components with React js</h1>
  //       <Heading>hellow heading 1</Heading>
  //       <Heading>hellow heading 2</Heading>
  //       {/* <Heading>hellow heading 3</Heading>
  //       <Heading>hellow heading 4</Heading>
  //       <Heading>hellow heading 5</Heading>
  //       <Heading>hellow heading 6</Heading>
  //       <Heading>hellow heading 7</Heading> */}
  //       <Stylebtn>login</Stylebtn>
  //       <Stylebtn>Sign up</Stylebtn>
  //       <Stylebtn>bkc</Stylebtn>
  //       <Stylebtn>new</Stylebtn>
  //     </>
  //   )     

  //BOOT STRAP IN REACT CSS

  //  return(
  //   <>
  //     <Bootstrapinfo />
  //   </>
  //  )

  //useREF HOOK IN REACT

  //   const inputRef = useRef(null);
  //   const inputHandler=()=>{
  //     console.log(inputRef);
  //     inputRef.current.focus();
  //     inputRef.current.style.color='aqua'
  //     inputRef.current.placeholder="enter password"
  //     inputRef.current.value='Vishi'
  //   }
  //    const toggleHandler=()=>{

  //     if(inputRef.current.style.display!='none'){
  //       inputRef.current.style.display='none'
  //     }else{
  //       inputRef.current.style.display='inline'
  //     }
  //    }
  //  return(
  //   <>
  //     <h1>useRef</h1>
  //     <button onClick={toggleHandler} >Toggle</button>
  //     <input ref={inputRef} type="text" placeholder="User Name" />
  //     <button onClick={inputHandler} >Focus on input field </button>
  //    </>
  //  )


  //UNCONTROLLED STATEMENTS



  // const handleForm=(event)=>{
  //     event.preventDefault();
  //     const user= document.querySelector("#user").value;
  //     const password = document.querySelector("#password").value;
  //     console.log(user,password);

  // }

  // const userRef=useRef();
  // const passwordRef=useRef();

  // const handleformRef=(event)=>{
  //   event.preventDefault();

  //   const user = userRef.current.value
  //   const password = passwordRef.current.value
  //   console.log("handleformRef",user,password)
  // } 

  // return(
  //  <>
  //   <h1>Uncontrolled Component</h1>
  //     <form method="post" onSubmit={handleForm} >
  //         <input type="text" id="user" placeholder="enter user name" />
  //         <br />
  //         <br />
  //         <input type="password" id="password" placeholder="enter user password" />
  //         <br />
  //         <br />
  //         <button  >Submit</button>
  //     </form>
  //       <hr />
  //        <h1>Using REF</h1>
  //        <form onSubmit={handleformRef} >
  //           <input type="text" ref={userRef} id="userRef" placeholder="Emter user name" />
  //           <br /><br />
  //           <input type="password" ref={passwordRef} id="passwordRef" placeholder="Enter user password" />
  //           <br /><br />
  //           <button >submit with Ref</button>
  //        </form>
  //   </>
  // )


  //Pass Function in Comonent as props

  // const displayName = (name) => {
  //   alert(name)
  // }

  // const getUser=()=>{
  //   alert("get user function call")
  // }

  // return (
  //   <>

  //     <h1>Call parent component function from Child component </h1>
  //     <User displayName={displayName} name="Vish" onClick={getUser} />
  //     <User displayName={displayName} name="sizu" onClick={getUser}/>
  //     <User displayName={displayName} name="anna" onClick={getUser}/>
  //     <User displayName={displayName} name="sam" onClick={getUser}/>
  //     <User displayName={displayName} name="tom" onClick={getUser}/>
  //     <User displayName={displayName} name="peter" onClick={getUser}/>

  //   </>
  // )

  //ForwardRef in React

  //      const inputRef = useRef(null)

  //      const updateInput=()=>{
  //       inputRef.current.value=1000;
  //       inputRef.current.focus();

  //      }

  //      return (
  //       <> 
  //           <h1>Forward Ref</h1>
  //          <Userinput ref={inputRef} />
  //          <button onClick={updateInput} >Update Input field</button>
  //        </>
  //      )

  // useFormStatus Hook in React js 

  // it wont work without form


  // const handleSubmit=async()=>{
  //         await new Promise(res=>setTimeout(res,2000));
  //         console.log("submit");
  //     }
  //     function CustomerForm(){
  //         const {pending} = useFormStatus();
  //         console.log(pending);

  //         return(
  //             <div>
  //                 <input type="text" placeholder="Enter user name" />
  //                 <br /><br />
  //                 <input type="text" placeholder="Enter password" />
  //                 <br /><br />
  //                 <button disabled={pending} >{pending?'Submitting...':'Submit'}</button>
  //             </div>
  //         )
  //     }

  //     return(
  //         <div>
  //             <form action={handleSubmit} >
  //                <CustomerForm/>
  //             </form>
  //         </div>
  //     )

  // useTransition Hook in React js

  // it can work without form


  //  return (
  //   <>
  //     <Transition />
  //   </>
  //  )

  // Derived State in React js

  // State that is caluclated or derived from other state values or 
  // props within your component, Drived state can be variable

  // const [users,setUsers]=useState([]);
  // const [user,setUser]=useState('');
  // const handleAddUser=()=>{
  //   setUsers([...users,user])
  // }
  //   const total=users.length;
  //   const last=users[users.length-1];
  //   const unique=[...new Set(users)].length

  // return (
  //   <div>
  //     <h2>Total User:{total}</h2>
  //     <h2>last User:{last}</h2>
  //     <h2>Unique User:{unique}</h2>

  //      <input type="text" onChange={(event)=>setUser(event.target.value)} />
  //      <button onClick={handleAddUser} >  Add User</button>

  //      {
  //       users.map((item,index)=>(
  //         <h4 key={index}>{item}</h4>

  //       ))
  //      }

  //     </div>
  // )

  //  Lifting State Up in React js

  // return (
  //     <>
  //       <Lifting />
  //     </>
  // )

  // Update Objects in State

  // return (

  //     <>
  //       <UpdateObj />
  //     </>
  // )
  // Updating Array in State

  //         return(
  //             <>
  //                <UpdateArr />
  //             </>
  //         )

  // useActionState Hook

  // it is uesd to handle froms , it update state based on the result of a form action.

  //  return (
  //     <>
  //       <UseAction />
  //     </>
  //  )

  // useId 

  // it gives a unique id , mostly used in form | avoid using it in list.

  //  return (
  //   <>
  //     <UseId />
  //     <hr />
  //     <UseId />
  //   </>
  //  )

  // Fragment in React Js

  //   return (
  //     <Fragments />
  //   )

  //  How to make Custom hooks 
   
  //   const [value,toggleValue] = useToggle(true);
  //  const [data,setdata] = useToggle(true);

  //  return (
  //   <>
  //     <div>
  //    <button onClick={toggleValue} >Toggle Heading</button>
  //    <button onClick={()=>toggleValue(false)} >Hide Heading</button>
  //    <button onClick={()=>toggleValue(true)} >Show Heading</button>

  //   { 
  //     value?<h2>Custom Hooks in React js</h2>:null
  //     }

  //   </div>
  //   <hr />
  //   <div>
  //    <button onClick={setdata} >Toggle Heading</button>
  //    <button onClick={()=>setdata(false)} >Hide Heading</button>
  //    <button onClick={()=>setdata(true)} >Show Heading</button>

  //   { 
  //     data?<h2>HELL YEAH</h2>:null
  //     }

  //   </div>
  //   </>
    
  //  )
    

       // Context API
     
     //  createContext : To initiate Context APL.
     //  Provider : use for update or provide data.
     //  useContext : get data from context api.
  
    

  // return (
    
  //   <ContextApi />
  // )

        // React Router 
      
      // return(

      //   <ReactRouter />
        
      // )

         // Basic Pages with React-Router


        //  return (

        //   <>
           
        //    <BasicPgRR />

        //   </>

        //  )

           //Header using React Router

        //  return (

        //   <div>
           
        //    <BasicPgRR />

        //   </div>

        //  )

           // 404 Page and Redirection

        //  return (

        //   <div>
           
        //    <BasicPgRR />

        //   </div>

        //  )
           

         //Nested Navigation With React Router

      // return (

      //     <div>
           
      //      <BasicPgRR />

      //     </div>

      //    )
   
               //Layout and Index Routes

         return (

          <div>
           
           <BasicPgRR />

          </div>

         )
        
  
}

export default App;

