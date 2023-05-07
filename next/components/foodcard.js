// import styles from 'styles/foodcard.module.css'
import Card from '@mui/material/Card';
import { Button, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { UseDialogContext } from 'lib/context';
import { styled } from '@mui/material/styles';
import useOrder from 'api/useOrder';
import { useState, useEffect } from 'react';

export default function FoodCard({ type, name, path }) {

    const [isPost, setPost] = useState(false);

    const { setOpen } = UseDialogContext();
    
    const { orderInfo , setOrderInfo, postOrderInfo} = useOrder();

    function handleClick() {
        setOpen();
    }

    useEffect(() => {
        if(isPost){
            postOrderInfo(orderInfo);
            setPost(!isPost);
        }
    }, [isPost]);

    const handleData = (data, canPost) => {
        setOrderInfo({...orderInfo, ...data});
        if (canPost) {
            setPost(!isPost);
        }
    }


    const Media = styled(CardMedia)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            height: '180px',
        },
        [theme.breakpoints.up('sm')]: {
            height: '180px',
        },
        [theme.breakpoints.up('md')]: {
            height: '230px',
        },
    }));

    const CustomButton = styled(Button)({
        '&:hover': {
            backgroundColor: 'gray',
        },
    });

    const isJuice = name === 'ジュース';
    const isKimchi = name === 'キムチ';
    const isBottleBeer = name === '瓶ビール';
    const isSideMenu = type === 'サイドメニュー' && !isJuice && !isKimchi && !isBottleBeer;
    const isNoodle = !isJuice && !isKimchi && !isBottleBeer && !isSideMenu;

    return (
        <Card>
            <Media
                component="img"
                image={path}
                draggable="false"
                alt=''
                sx={{
                    objectFit: 'contain',
                }}
            />
            <CardContent sx={{ background: '#FBFBFB' }}>
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'ヒラギノ丸ゴ ProN',
                            fontWeight: '800',
                        }}>
                            {name}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'space-evenly', alignItems: 'center', marginTop: '5%' }}>
                    {isJuice && (
                        <>
                            <Grid item>
                                <CustomButton onClick={() => {
                                    handleData({
                                        type:type,
                                        name:'オレンジ',
                                    },true);
                                }} variant='text' color='error' size='large' sx={{ background: '#DDDDDD', color: 'black' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>オレンジ</Typography>
                                </CustomButton>
                            </Grid>
                            <Grid item>
                                <CustomButton onClick={() => {
                                    handleData({
                                        type:type,
                                        name:'コーラ',
                                    },true);
                                }} variant='text' color='info' size='large' sx={{ background: '#DDDDDD', color: 'black' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>コーラ</Typography>
                                </CustomButton>
                            </Grid>
                        </>
                    )}
                    {isKimchi && (
                        <Grid item>
                            <CustomButton onClick={() => {
                                    handleData({
                                        type:type,
                                        name:name,
                                    },true);
                                }}variant='text' color='error' size='large' sx={{ background: '#DDDDDD', color: 'black' }}>
                                <Typography sx={{ fontWeight: 'bold' }}>キムチ</Typography>
                            </CustomButton>
                        </Grid>
                    )}
                    {isBottleBeer && (
                        <Grid item>
                            <CustomButton onClick={() => {
                                    handleData({
                                        type:type,
                                        name:name,
                                        size:'並',
                                    },true);
                                }} variant='text' color='error' size='large' sx={{ background: '#DDDDDD', color: 'black' }}>
                                <Typography sx={{ fontWeight: 'bold' }}>瓶ビール</Typography>
                            </CustomButton>
                        </Grid>
                    )}
                    {isSideMenu && (
                        <>
                            <Grid item>
                                <CustomButton onClick={() => {
                                    handleData({
                                        type:type,
                                        name:name,
                                        size:'並',
                                    },true);
                                }} variant='text' color='error' size='large' sx={{ background: '#DDDDDD', color: 'black' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>並</Typography>
                                </CustomButton>
                            </Grid>
                            <Grid item>
                                <CustomButton onClick={() => {
                                    handleData({
                                        type:type,
                                        name:name,
                                        size:'大',
                                    },true);
                                }} variant='text' color='info' size='large' sx={{ background: '#DDDDDD', color: 'black' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>大</Typography>
                                </CustomButton>
                            </Grid>
                        </>
                    )}
                    {isNoodle && (
                        <>
                            <Grid item>
                                <CustomButton onClick={() => {
                                    handleClick();
                                    handleData({
                                        type: type,
                                        name: name,
                                        size: '並'
                                    }, false)
                                }} variant='text' color='error' size='large' sx={{ background: '#DDDDDD', color: 'black' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>並</Typography>
                                </CustomButton>
                            </Grid>
                            <Grid item>
                                <CustomButton onClick={() => {
                                    handleClick();
                                    handleData({
                                        type: type,
                                        name: name,
                                        size: '大'
                                    }, false);
                                }} variant='text' color='info' size='large' sx={{ background: '#DDDDDD', color: 'black' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>大</Typography>
                                </CustomButton>
                            </Grid>
                        </>
                    )}
                </Grid>
            </CardContent>
        </Card >
    );
}