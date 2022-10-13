import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">N-A 96 P-P 100 P-P 99</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>N-A  96</MenuItem>
          <MenuItem value={20}>P-P  100</MenuItem>
          <MenuItem value={30}>P-P  99</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}



export  function PartySelect() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Party</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>PMLN</MenuItem>
            <MenuItem value={20}>PTI</MenuItem>
            <MenuItem value={30}>PPP</MenuItem>
            <MenuItem value={40}>TLP</MenuItem>
            <MenuItem value={40}>Other</MenuItem>
            
          </Select>
        </FormControl>
      </Box>
    );
  }
  