import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Calculator from "./components/Calculator";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";


function App() {
  const [data, setData] = useState({
    compensation: '',
    minutes: '',
    mileage: '',
    hourlyRate: ''
  });
  return (
    <div className="App">
    <Navbar />
    <Container maxWidth="xl" sx={{marginTop:4}}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Calculator data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
           
          </Grid>
        </Grid>
      </Container>
    

    </div>
  );
}

export default App;
