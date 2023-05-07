import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import styles from 'styles/foodbutton.module.css'
import Link from 'next/link';
import { styled } from '@mui/material/styles';

export default function FoodButton({ children }) {

  const theme = createTheme({
    palette: {
      yellow: {
        main: '#262626',
        light: '#262626',
        dark: '#262626',
        contrastText: '#e60033',
      },
    },
  });

  const CustomButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      height: '80px',
      width: '170px',
      fontSize: '1rem'
    },
    [theme.breakpoints.up('sm')]: {
      height: '70px',
      width: '147px',
      fontSize: '0.9rem'
    },
    [theme.breakpoints.up('md')]: {
      height: '100px',
      width: '250px',
      fontSize: '1.8rem'
    },
  }));

  const path = '/menu/'+ children;
  const encodedPath = encodeURIComponent(path);

  return (
    <ThemeProvider theme={theme}>
      <Link as={`/menu/${children}`} href={encodedPath}>
        <a>
          <CustomButton className={styles.button} variant="contained" color="yellow" size='large'>
            {children}
          </CustomButton>
        </a>
      </Link>
      <CssBaseline />
    </ThemeProvider>
  )
}