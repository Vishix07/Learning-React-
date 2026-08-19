import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import { useState } from "react";

function Lifting () {
    const [user,setUser]= useState('');
    return (
        <>
          <AddUser setUser={setUser} />
          <DisplayUser user={user} />
        </>
    )
}

export default Lifting;