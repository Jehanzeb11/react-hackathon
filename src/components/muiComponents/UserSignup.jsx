import React ,{ useEffect, useState }from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection,  setDoc,addDoc, doc } from "firebase/firestore";
import { Button } from '@mui/material'
import {TextField} from '@mui/material'
import { useNavigate,Link } from "react-router-dom";
import {auth,db} from "../../Firebase/Database"




const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [lastName, setlastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const user = localStorage.getItem("uid");

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/admin");
    }
  }, []);


const handleSignup = (e)=>{

  e.preventDefault();
  console.log("submit form");
  const dbCollection = collection(db, "users");


  createUserWithEmailAndPassword(auth, email, password)
      .then(async (resolve) => {
        console.log("resolve", resolve);
        const obj = {
          firstName,
          lastName,
          email,
          uid: resolve.user.uid,
        };
        // await addDoc(dbCollection, obj);
        await setDoc(doc(db, "users", resolve.user.uid), obj);
        navigate("/");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  return (
    <>
    
     <form onSubmit={handleSignup} style={{margin:"2rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
<h3>User Signup</h3>
<TextField id="outlined-basic" label="User Email" variant="outlined" type="email" required onChange={(e)=>{
setEmail(e.target.value)
}}/>
<TextField id="outlined-basic" label="User Password should be 6 letters" variant="outlined" type="password" required onChange={(e)=>{
setPassword(e.target.value)}}/>

<TextField id="outlined-basic" label=" UserFrist Name" variant="outlined" type="text" required onChange={(e)=>{
setfirstName(e.target.value)
}}/>
<TextField id="outlined-basic" label=" UserLast Name" variant="outlined" type="tect" required onChange={(e)=>{
setlastName(e.target.value)
}}/>
<Button type='submit' color='error' variant='contained' sx={{mt : 3}}>Signup</Button>
</form>
<div style={{margin:"2rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
<Link to="/userlogin"> <p>login as User</p></Link>
<Link to="/signupUser"> <p>login as Admin</p></Link>
</div>
    </>
  )
}







export default UserSignup