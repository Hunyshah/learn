import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


    
  

export default function CardDummy() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Last UpDated Voters
        </Typography>
        <Typography variant="h5" component="div">
           village Details
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          see all Lists
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}