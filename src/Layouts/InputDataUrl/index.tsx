import React from 'react';
import { TextField } from '@mui/material';

export default function InputDataUrlLayout() {
  return (
    <TextField
      fullWidth
      sx={{ mt: 4, mb: 4 }}
      label="Json Data Url"
      placeholder="Json Data Url"
      defaultValue="https://data.nasa.gov/resource/y77d-th95.json"
      disabled={false}
      error={false}
      helperText="Insert data url. Returning data MUST be an array json with each element is key/value pair."
      // onChange={}
    />
  );
}
