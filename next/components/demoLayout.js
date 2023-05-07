import styles from 'styles/optionLayout.module.css'
import { Button, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { topping } from 'lib/constants';
import MultiLineText from './MultiLineText';
import { styled } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring'

export default function DemoLayout({ children, style }) {

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

    const CustomTypography = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.1rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
        },
    }));

    const CustomButton = styled(Button)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            height: '80px',
            width: '170px',
            fontSize: '1rem'
        },
        [theme.breakpoints.up('sm')]: {
            height: '65px',
            width: '160px',
            fontSize: '0.9rem'
        },
        [theme.breakpoints.up('md')]: {
            height: '80px',
            width: '230px',
            fontSize: '1.5rem'
        },
    }));

    const animationProps = useSpring({
        to: {
            opacity: 1,
            transform: 'translateX(0%)'
        },
        from: {
            opacity: 0,
            transform: 'translateX(-100%)'
        }
    })

    return (
        <animate.div style={{...style, ...animationProps}}>
            <ThemeProvider theme={theme}>
                <div className={styles.option}>
                    <CustomTypography sx={{ fontWeight: 'bold' }}>{children}</CustomTypography>
                    <span>
                        {Object.keys(topping[children]).map((key, index) => (
                            <CustomButton className={styles.button} variant="contained" color="yellow" size='large' key={index}>
                                <MultiLineText>{topping[children][key]}</MultiLineText>
                            </CustomButton>
                        ))}
                    </span>
                </div>
                <CssBaseline />
            </ThemeProvider>
        </animate.div>
    )
}

// 項目ごとに配列に格納して渡す。