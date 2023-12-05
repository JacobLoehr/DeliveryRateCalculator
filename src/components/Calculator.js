import React from 'react'
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import { Button, Paper, Typography } from '@mui/material';

const Calculator = ({data, setData}) => {
  var { compensation, minutes, mileage, hourlyRate } = data;
  const calculateHourlyRate = () => {
    // Assuming a simple calculation for hourly rate
    var totalCost = mileage * 0.85;
    hourlyRate = compensation / (minutes / 60) - totalCost;
    setData({hourlyRate: hourlyRate.toFixed(2),
            compensation: '', minutes: '', mileage: ''});
    
  };
    return (
       
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField 
          id="outlined" 
          label="Compensation ($)" 
          variant="outlined" 
          helperText = "Enter the numerical price you will receive for this order"
          value={compensation}
          onChange={(e) => setData({...data, compensation: e.target.value})}/>
        <TextField 
          id="outlined-basic" 
          label="Time to Complete (min)" 
          variant="outlined" 
          helperText = "Enter the time in minutes it will take to complete the order"
          value={minutes}
          onChange={(e) => setData({...data, minutes: e.target.value})}/>
        <TextField 
          id="outlined-basic" 
          label="Total Miles (mi)" 
          variant="outlined" 
          helperText = "Enter the number of miles you need to drive for this order"
          value={mileage}
          onChange={(e) => setData({...data, mileage: e.target.value})}/>
      <Button variant="contained" color="primary" onClick={calculateHourlyRate}>
        Calculate Hourly Rate
      </Button>
      {hourlyRate !== null && (
        <Typography style={{ marginTop: '10px' }} variant="h6">
          Estimated Hourly Rate: ${hourlyRate} per hour
        </Typography>
      )}
      </Box>
      
  
    )
}

export default Calculator