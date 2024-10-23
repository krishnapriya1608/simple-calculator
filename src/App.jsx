import React, { useState } from 'react';
import './App.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function App() {
 const[principle,setPriniciple]=useState(0)
 const[rate,setRate]=useState(0)
 const[year,setYear]=useState(0)

  return (
    <div>
      <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-primary'>
        <div className=' box bg-info p-5 rounded'>
          <h5 className='text-danger fw-bolder' style={{textDecoration:"underline", color:"pink"}}>Simple-Interest calculator</h5>
          <p>Calculate your simple interest with you</p>
          <div className='d-flex justify-content-center align-items-center p-5 rounded bg-warning'>
            <h1 className='text-dnger'>&#8377; 0</h1>
          </div>
          <div className='mt-5'>
       <form className='border rounded p-3 d-flex flex-column p-3'>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
       <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
</form>
          </div>
          <div className="mt-5 d-flex justify-content-between ">
          <Button variant="text">calculate</Button>
<Button variant="contained">Reset</Button>

          </div>
        </div>
      </div>




     
</div>
  )
}

export default App
