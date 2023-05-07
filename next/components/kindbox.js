import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { buttonList } from 'lib/constants';
import FoodButton from './foodbutton';
//import styles from 'styles/kindbox.module.css'
import { Box } from '@mui/system';

export default function Kindbox({ kind }) {

    let buttons = [];
    if (kind === 'ラーメン') {
        Object.keys(buttonList.Ramen).map((key, index) => (
            buttons.push(<FoodButton key={index}>{buttonList.Ramen[key]}</FoodButton>)
        ),)
    } else {
        Object.keys(buttonList.SideMenu).map((key, index) => (
            buttons.push(<FoodButton key={index}>{buttonList.SideMenu[key]}</FoodButton>)
        ),)
    }

    const CustomTypography = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    }));

    const CustomBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
        },
    }));

    return (
        <>
            <CustomTypography sx={{ fontWeight: '800', fontSize:'2rem'}}>{kind}</CustomTypography>
            <CustomBox>
                {buttons}
            </CustomBox>
        </>
    )
}