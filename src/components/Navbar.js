import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const Navbar = () => {
    return (
        <Box sx={{ display: '' }}>
        <AppBar position="static">
            <Container maxWidth = 'xl'>
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Delivery Pay Calculator
          </Typography>
          
        </Toolbar>
        </Container>
      </AppBar>
  
      <Box sx={{ margin: '25px' }}>
      <Typography>
        The purpose of this application is to help determine your hourly pay rate for 
        requests on delivery driver apps such as Uber Eats or Doordash.
        On each request, you are shown the estimated amount of minutes it will take to
        complete, the amount of money you will receive for the order, as well as the 
        amount of mileage you will be required to drive.
        Accounting for the cost of vehicle maintenence, gas, compensation, the goal here
        is to give you an estimate of your hourly rate for each order request.
        This application currently assumes the cost of operating a car is $0.72 per mile, and
        also assumes that the average cost of gas usage per mile is $0.14
        
      </Typography>
      </Box>
      </Box >
    )
}

export default Navbar