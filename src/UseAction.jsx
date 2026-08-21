import { useActionState } from "react";

function UseAction() {

    const handleSubmit = async (previousData, formData) => {
        let name = formData.get('name');
        let password = formData.get('password');

        await new Promise(res => setTimeout(res, 2000))

        // console.log("handleSubmit called",name,password);

        if (name && password) {
            return { message: 'Data Submitted', name, password }
        } else {
            return { error: 'Fail to Submit, enter both Data', name, password }
        }

    }

    const [data, action, pending] = useActionState(handleSubmit, undefined)
    console.log(data);


    return (
        <>
            <form action={action}>
                <h1>useActionState to handle form</h1>
                <input type="text" defaultValue={data?.name} placeholder="Enter User Name" name="name" />
                <br /><br />
                <input type="password" defaultValue={data?.password} placeholder="Enter password" name="password" />
                <br /><br />
                <button disabled={pending} >Submit data</button>
            </form>
            {
                data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
            }
            {
                data?.message && <span style={{ color: 'green' }} >{data?.message}</span>
            }

            <h3>Name :{data?.name}</h3>
            <h3>Password :{data?.password}</h3>
        </>
    )
}

export default UseAction;

