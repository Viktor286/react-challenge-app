import React from 'react';
import { TextField } from '@mui/material';
import { IUrlValidation } from '../../Features/Validation/inputDataTableUrl';

interface IInputDataUrlLayoutProps {
  url: string;
  validation: IUrlValidation;
  onInputDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputDataUrlLayout({ url, validation, onInputDataChange }: IInputDataUrlLayoutProps) {
  return (
    <TextField
      fullWidth
      sx={{ mt: 4, mb: 4 }}
      label="Json Data Url"
      placeholder="Json Data Url"
      defaultValue={url}
      disabled={false}
      error={!validation.isValid}
      helperText={
        validation.errorMsg.length > 1
          ? validation.errorMsg
          : 'Insert data url. Returning data MUST be an array json with each element is key/value pair.'
      }
      onChange={onInputDataChange}
    />
  );
}
