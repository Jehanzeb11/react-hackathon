import React from 'react'
import {TextField} from '@mui/material'
import {NativeSelect} from '@mui/material'
import {Button} from '@mui/material'
import AppbarCmp from './muiComponents/AppbarCmp'
import {useSelector} from "react-redux"


const AdminPanel = () => {
 
  const price = useSelector(state=>state)
  console.log(price ,"price")



const handlesubmit = (e)=>{
e.preventDefault()

}
  return (
    <>
    <AppbarCmp/>
    <form onSubmit={handlesubmit} style={{display:"flex",flexDirection:"column",margin:"2rem",justifyContent:"center",alignItems:"center"}}>


  <NativeSelect
sx={{my:3}}
    defaultValue={30}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value="No of seats" disabled>No of seats</option>
    <option value={1}>one</option>
    <option value={4}>four</option>
    <option value={8}>eight</option>
  </NativeSelect>    
  
  <TextField id="filled-basic" label="time" variant="standard" required />
  <NativeSelect
  sx={{my:3}}

defaultValue={30}
inputProps={{
  name: 'age',
  id: 'uncontrolled-native',
}}
>
<option value="Service of transport" disabled>Service of transport</option>
<option value="car">car</option>
<option value="bike">bike</option>
<option value="van">van</option>
</NativeSelect>     
<TextField id="filled-basic" type="number" label="price" variant="standard" required />
   <Button type='submit' color='success' variant='contained' sx={{mt:2}}>submit</Button>


    </form>

<form onSubmit={handlesubmit} style={{display : "flex",justifyContent:"center" }}>
<div style={{margin:"1rem"}} >
<h6>from</h6>  
 <TextField id="filled-basic" type="text" label="Pick up point" variant="standard" required />
</div>


<div style={{margin:"1rem"}}>
  <h6>where </h6>
 <TextField id="filled-basic" type="text" label="Destination" variant="standard" required />


</div>




</form>









    
    </>
  )
}

export default AdminPanel