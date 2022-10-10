import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import FormattedInputs from './idCard';

import {PartySelect} from './dropdown'
import { Link } from "react-router-dom";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Container sx={{bgcolor:' '}}>
      <Typography variant="h6"  gutterBottom>
        ADD VOTER INFO
      </Typography>
      <Grid  container spacing={3}>
        <Grid item xs={12} sm={3}>
        <TextField
            required
            id="name"
            name="Name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          />

        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="fatherName"
            name="Father name"
            label="Father name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          />
        </Grid>
        <Grid item xs={12} sm={3}>
        <TextField
            required
            id="idcard"
            type='number'
            name="ID Card"
            label="ID Card"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          />
          
          
          
        </Grid>
        <Grid item xs={12} sm={3}>
        <FormattedInputs/>
        </Grid>
        <Grid container spacing={3}></Grid>
        
        
        
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="Ward"
            name="Ward #No"
            label="Ward No"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          />
          
        </Grid>
        <Grid item xs={12} sm={6}>
        <PartySelect/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cast"
            name="Cast"
            label="Cast"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="village"
            name="Village"
            label="Village"
            fullWidth
            autoComplete="Village"
            variant="outlined"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes"  />
            }
            label="Use this address for further details"

           />
           <Button type='submit' variant='contained'><Link to='/' style={{ textDecoration: 'none',color:'white',}}>Submit</Link></Button>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
}