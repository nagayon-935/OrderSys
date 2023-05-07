//import styles from 'styles/optionform.module.css'
import { menuOptions } from 'lib/constants'
import OptionLayout from './optionLayout'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';


export default function OptionForm({ type }) {
  let options = [];
  if (menuOptions && menuOptions[type]) {
    options = menuOptions[type];
  }

  const Container = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '80%',
      padding: 'auto',
      margin: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: 'auto',
      margin: 'auto',
    },
  }));

  return (
    <Container>
      {options.map((option, index) => (
        <OptionLayout key={index}>{option}</OptionLayout>
      ))}
    </Container>
  );
}