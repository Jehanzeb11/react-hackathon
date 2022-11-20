import React from 'react'
import { NativeSelect, TextField,Button} from '@mui/material'


const mainScreen = () => {

const handlesubmit=(e)=>{
e.preventDefault()
   }

  return (
    <>
    
    {/* <AppbarCmp/> */}
    
    <form onSubmit={handlesubmit}>

   <NativeSelect

    defaultValue={30}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value="No of seats" disabled selected>No of seats</option>
    <option value={1}>one</option>
    <option value={4}>four</option>
    <option value={8}>eight</option>
  </NativeSelect>    


<TextField id="filled-basic" type="number" label="price" variant="filled" required /> 
    <Button type='submit' color='success' variant='outlined'>submit</Button>

    </form>
    
    </>
  )
}

export default mainScreen