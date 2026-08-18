import {useState} from "react";
import {useEffect} from "react";

// const Counter=() =>{
//     const [count, setCount] = useState(0);
//     const [rCounter, setRCounter] = useState(10);
  
//        return (
             
//             <div>
//                 <h1>Counter: {count}</h1>
//                 <h2>R Counter : {rCounter}</h2>
//                 <button onClick={() => setCount(count + 1)}>Update Counter </button>
//                 <button onClick={() => setRCounter(rCounter - 1)}>update R Counter</button>
//             </div>

//        )

// }
// const Counter = ({count,data}) => {

//     useEffect (()=>{
//         console.log("mounting phase only")
//     },[]);

//     useEffect=(()=>{
//         console.log("update phase only")
//     },[count]);

//     return(
//         <div>
//             <h1>Counter Value{count}</h1>
//             <h1>Data Value{data}</h1>
//         </div>
//     )
// }

  
  

const Counter = ({ count, data }) => {

  useEffect(() => {
    console.log("mounting phase only");
  }, []);

  useEffect(() => {
    console.log("update phase only");
  }, [count]);
   
  useEffect(()=>{
    return ()=>{
        console.log("umount phase only");
    }
    
  },[])


  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <h1>Data Value: {data}</h1>
    </div>

  );
};






export default Counter;