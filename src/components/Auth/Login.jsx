import React,{useState,useEffect} from 'react'
import { Button } from '@mui/material'
import {TextField} from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate,NavLink } from "react-router-dom";
import {auth} from "../../Firebase/Database"











const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = localStorage.getItem("uid");

    const navigate = useNavigate()

useEffect(()=>{
    if (user){
navigate("/admin")
    }
})



const handleSubmit =(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (resolve) => {
        console.log("resolve", resolve);
        localStorage.setItem("uid", resolve.user.uid);
        navigate("/admin");
      })
      .catch((err) => {
        alert(err, "error");
      });

}


  return (

    <>
    <form onSubmit={handleSubmit} style={{margin:"2rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <h3>Admin Login</h3>

      <TextField id="outlined-basic" label="Admin Email" placeholder='Admin Email' variant="outlined" type="email" required onChange={(e)=>{
setEmail(e.target.value)
      }}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" placeholder='Admin Password' type="password" required onChange={(e)=>{
setPassword(e.target.value)
      }}/>
      <Button sx={{mt : 3}} type='submit' color='error' variant='contained'>Login</Button>
    </form>
<div style={{margin:"2rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
  <NavLink to="/signup"> <p> create Admin account</p></NavLink>
  <NavLink to="/userlogin"> <p> Login User account</p></NavLink>
</div>






    </>
  )
}

export default Login