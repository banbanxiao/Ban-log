import React from 'react';
import Button from '@mui/material/Button';
import { styled, Theme } from '@mui/material/styles';

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.common.black}`,
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  fontSize: theme.typography.pxToRem(14),
  transition: theme.transitions.create(['box-shadow'], {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    boxShadow: '4px 4px 0px 0px rgba(0,0,0)',
  },
  marginRight: theme.spacing(2),
}));

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;