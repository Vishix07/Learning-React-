export default function EditUser() {

    return(
        <div style={{ textAlign: "center" }}>
            <h1>Edit User</h1>

            <input type="text" placeholder="First Name"/>
            <br /><br />
           
            <input type="text" placeholder="email"/>
            <br /><br />
            
            <input type="text" placeholder="Age"/>
            <br /><br />

            <button>Update User</button>
        </div>
    )
}