import style from './css/UserProfile.module.css'
function UserProfile(){
   return(
    
      
    <div>
         {/* <h1 className={style.heading} >User Profile</h1> */}
        <div className={style.card}>
            <img className={style.img} src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" alt="" />      
           
            <div className={style.textWrap}>
                <h3>Ganesh Shiv</h3>
                 <p>Software Devloper</p>
            </div>
        </div>
    </div>
    

   )
    
}

export default UserProfile;