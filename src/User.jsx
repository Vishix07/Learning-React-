// function User () {
//     return(
//         <h1>User Component</h1>
//     )
// }


          //PROPS

    // function User (props) {
    //     console.log(props.name)
    //     return (
    //         <div>
    //             <h1>{props.name}</h1>
    //         </div>
    //     )
    // }

    // function User ({name,age,email}) {
    //     // console.log(name)
    //     return (
    //         <div>
    //             <h1>Name:{name}</h1>
    //             <h2>Age:{age}</h2>
    //             <h3>Email:{email}</h3>
    //         </div>
    //     )
    //}
  
        // function User ({user}) {
        // // console.log(name)
        // return (
        //     <div>
        //         <hr />
        //         <h1>Name:{user.name}</h1>
        //         <h2>Age:{user.age}</h2>
        //         <h3>Email:{user.email}</h3>
        //     </div>
        // )
        // }
    

                    //ADVANCED PROPS

        // function User ({name=" New User"}) {
        //     return (
        //         <div>
        //             <h1>Hi, {name}</h1>
        //         </div>
        //     )
      

        // }


               //REUSE COMPONENT IN LOOP

        // function User ({data}) {
        //     return(
        //         <div style={{
        //             border: "1",
        //             padding:"10px",
        //             margin:"10px",
        //             borderRadius:"10px",
        //             width:"600px",
        //             borderColor:"blue"
        //         }}  >

        //             <h2>Name: <span style={{color:"red"}} >{data.name}</span></h2>
        //             <h2>Age: <span style={{color:"red"}} >{data.age}</span></h2>
        //             <h2>Email: <span style={{color:"red"}} >{data.email}</span></h2>

        //         </div>
        //     )
        // }
 
       //   function User({displayName,name,onClick}) {
       //        return(
       //               <>
       //                 <div>
       //                      <button onClick={()=>displayName(name)} > Display User</button>
       //                      <button onClick={()=>onClick()}>get user</button>
       //                     </div>
       //               </>
       //        )
       //   }

         

export default User;