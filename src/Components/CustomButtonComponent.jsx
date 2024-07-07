import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Styled Button using Material-UI
const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  padding: '10px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '5px',
  display: 'block',
  minWidth: '220px',
  fontSize: theme.typography.button.fontSize,
  cursor: 'pointer',
  border: '1px solid transparent',  
  transition: '0.4s ease-in',
  '&:hover': {
    backgroundColor: theme.palette.common.main,
    color: theme.palette.primary.main,
    borderRadius: '5px',
    // border: '1px solid black', // Uncomment if needed
  },
}));

// Functional component that uses the styled button
 const CustomButtonComponent = (props) => {
  return (
    // Pass all received props to CustomButton and render any children inside it
    <CustomButton {...props}>
      {props.children}
    </CustomButton>
  );
};

export default CustomButtonComponent;