import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, List, ListItem } from '@mui/material';
import { red } from '@mui/material/colors';

const DifficultyButton = styled(Box)(({ theme }) => ({
  display: 'block',
  minWidth: '220px',
  backgroundColor: 'white',
  borderRadius: '5px',
  textAlign: 'center',
  transition: '2s ease-in',
  
}));

export const StyledList = styled(List)({
  listStyleType: 'none',
  padding: 0,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center items horizontally
});


export const StyledListItem = styled(ListItem)({

  '&:hover': {
      backgroundColor: 'grey',
      transition: '0.4s ease-in',
      color: 'white',
      borderRadius: '5px',
      cursor: 'pointer',
    
  },
});

export default DifficultyButton
