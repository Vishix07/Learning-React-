import { useId } from "react";

function UseId() {

    const user = useId();
   

         return (
          <>
            <form action="">
              <label htmlFor={user+"name"}>Enter User name</label>
              <input id={user+"name"} type="text" placeholder="enter name"  />
              <br /><br />
              <label htmlFor={user+"password"}>Enter User Password</label>
              <input id={user+"password"} type="password" placeholder="password" />
              <br /><br />
              <label htmlFor={user+"skills"}>Enter User Skills</label>
              <input id={user+"skills"} type="text" placeholder="enter skills"  />
              <br /><br />
              <label htmlFor={user+"terms"}>Terms and Conditions</label>
              <input id={user+"terms"} type="checkbox" placeholder="enter name"  />
              <br /><br />
            </form>
          </>
         )

}

export default UseId;