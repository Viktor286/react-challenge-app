import React from 'react';
import { TextField } from '@mui/material';
import { IUrlValidation } from '../../Features/isUrlValid';

interface IInputDataUrlLayoutProps {
  url: string;
  urlValidation: IUrlValidation;
  onInputDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputDataUrlLayout({
  url,
  urlValidation,
  onInputDataChange,
}: IInputDataUrlLayoutProps) {
  return (
    <TextField
      fullWidth
      sx={{ mt: 4, mb: 4 }}
      label="Json Data Url"
      placeholder="Json Data Url"
      defaultValue={url}
      disabled={false}
      error={!urlValidation.isValid}
      helperText={
        urlValidation.errorMsg.length > 1
          ? urlValidation.errorMsg
          : 'Insert data url. Returning data MUST be an array json with each element is key/value pair.'
      }
      onChange={onInputDataChange}
    />
  );
}
