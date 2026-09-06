import { useActionState } from "react"

export default function ValidationActionState() {

    const handleLogin=(prevData,formData)=>{
        let name = formData.get('name')
        let password = formData.get('password')
        let regex = /^[A-Z0-9]+$/i;

        if( !name || name.length>5){
            return{ error:"Please Do not leave empty and Name should contain 5 letters",name,password}
        }else if(!regex.test(password)) {
            return{ error:"Please enter Numbers and Alphabets only ",name,password
            }
        }else{
            return{ message:"Login Successful",name,password}
        }

        
    }
    const [data,action,pending]=useActionState(handleLogin);

    
    return(
        <div>
            <h1>Validations Using Action State</h1>
            {
                data?.message && <span style={{color:"green"}} >{data?.message}</span>
            }
            {
                data?.error && <span style={{color:"red"}} >{data?.error}</span>
            }
            <br />
            <form action={action}>
                <input defaultValue={data?.name} type="text" name="name" placeholder="Enter User Name" />
                <br />
                <br />
                <input defaultValue={data?.password} type="text" name="password" placeholder="Enter User Password" />
                
                <br /><br />
                <button>Login</button>
            </form>
        </div>
    )
}