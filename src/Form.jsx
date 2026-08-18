import { useFormStatus } from "react-dom";
function Form(){

   const handleSubmit=async()=>{
            await new Promise(res=>setTimeout(res,2000));
            console.log("submit");
        }
        function CustomerForm(){
            const {pending} = useFormStatus();
            console.log(pending);
    
            return(
                <div>
                    <input type="text" placeholder="Enter user name" />
                    <br /><br />
                    <input type="text" placeholder="Enter password" />
                    <br /><br />
                    <button disabled={pending} >{pending?'Submitting...':'Submit'}</button>
                </div>
            )
        }
    
        return(
            <div>
                <form action={handleSubmit} >
                   <CustomerForm/>
                </form>
            </div>
        )


}

export default Form;
