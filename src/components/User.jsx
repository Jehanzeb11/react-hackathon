import React from 'react'
import { NativeSelect,Button,Alert,Stack } from '@mui/material'
import AppbarCmp from './muiComponents/AppbarCmp';
import {useSelector} from "react-redux"

const User = () => {

const price = useSelector(state=>state.transportPost)

console.log(price , 'user')


const ride = ()=>{
 confirm("Your Travel Bug partner will arrive soon");
}

  return (
    <>
<AppbarCmp/>

<div style={{marginTop:"3rem",display : "flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
No of Seats
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
  Travel Services
  <NativeSelect

defaultValue={30}
inputProps={{
  name: 'age',
  id: 'uncontrolled-native',
}}
sx={{my:3}}



><option value="No of seats" disabled>Service of transport</option>
<option value="car">car</option>
<option value="bike">bike</option>
<option value="van">van</option>
</NativeSelect>


<Button variant="contained" sx={{mt: 3}} color='success' onClick={ride}> RideNow</Button>
    </div>
    </>
  )
}

export default User