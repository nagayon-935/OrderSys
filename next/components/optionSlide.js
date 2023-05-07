import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from 'styles/optionSlide.module.css'
import React from 'react';
import { menuOptions, topping } from 'lib/constants';
import { Typography, Button, Dialog, DialogTitle, Grid, DialogContent, DialogActions } from '@mui/material';
import { UseDialogContext } from 'lib/context';
import useOrder from 'api/useOrder';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function OptionSlide() {

    const [index, setIndex] = useState(0);

    const [isPost, setPost] = useState(false);

    const { open, setOpen } = UseDialogContext();

    const { orderInfo, setOrderInfo, postOrderInfo } = useOrder();

    function handleClick() {
        setOpen();
        setIndex(0);
    }

    useEffect(() => {
        if(isPost){
            postOrderInfo(orderInfo);
            setPost(!isPost);
        }
    }, [isPost]);

    const handleOptionSelect = (data, LastSlide) => {
        setOrderInfo({ ...orderInfo, ...data });
        if (LastSlide) {
            setPost(!isPost);
        }
    };

    const handleNextStep = (newIndex, lastSlide) => {
        setIndex(newIndex + 1);
        lastSlide && handleClick()
    }

    const handlePreStep = () => {
        index === 0 ? handleClick() : setIndex(index - 1);
    }

    const CustomButton = styled(Button)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            height: '56px',
            width: '170px',
            fontSize: '0.9rem'
        },
        [theme.breakpoints.up('sm')]: {
            height: '65px',
            width: '220px',
            fontSize: '1.2rem',
        },
        [theme.breakpoints.up('md')]: {
            height: '80px',
            width: '230px',
            fontSize: '1.5rem'
        },
    }));

    let options = [];
    if (menuOptions && menuOptions[orderInfo.type]) {
        options = menuOptions[orderInfo.type];
    }

    const orderKeys = {
        '麺の硬さ':'noddle',
        'スープの種類':'soup',
        '味の濃さ':'rich',
        'もやしの量':'beanSprouts',
        'ネギの量':'onion',
        '温泉卵':'egg',
        'キムチ':'kimchi',
    };

    function Slide({ slide, index, currentIndex }) {
        const animationProps = useSpring({
            to: {
                opacity: 1,
                transform: 'translateX(0%)'
            },
            from: {
                opacity: 0,
                transform: index < currentIndex ? 'translateX(-100%)' : 'translateX(100%)'
            }
        })

        return (
            <animated.div style={{ ...styles.slide, ...animationProps }}>
                {slide}
            </animated.div>
        )
    }

    const slides = options.map((option, slideIndex) => {
        const isLastSlide = slideIndex === options.length - 1;
        const orderKey = orderKeys[option]
        if (!topping[option]) {
            return null;
        }
        return (
            <div key={option}>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>{option}</Typography>
                <Grid container justifyContent="center" alignItems="center" >
                    {Object.keys(topping[option]).map((key, index) => (
                        <Grid item key={index}>
                            <CustomButton className={styles.button} variant="contained" key={index} onClick={() => {
                                handleOptionSelect({ [orderKey]: topping[option][key] }, isLastSlide);
                                handleNextStep(slideIndex, isLastSlide);
                            }} >
                                {topping[option][key]}
                            </CustomButton>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    });

    const slideComponents = slides.map((slide, i) => (
        <Slide key={i} slide={slide} index={i} currentIndex={index} />
    ))

    const slideAnimationProps = useSpring({
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
        <Dialog open={open} maxWidth="md" fullWidth={true}
            PaperProps={{
                style: {
                    width: '75%',
                    height: '45%',
                },
            }}>
            <DialogTitle sx={{ fontSize: '14px' }}>Choose option</DialogTitle>
            <DialogContent>
                <animated.div style={{ ...styles.container, ...slideAnimationProps }}>
                    {slideComponents[index]}
                </animated.div>
            </DialogContent>
            <DialogActions>
                <Button className={styles.closeButton} onClick={handlePreStep}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#000000", }} />Return
                </Button>
                <Button className={styles.closeButton} color='error' onClick={handleClick}>
                    <FontAwesomeIcon icon={faXmark} style={{ color: "#000000", }} /> Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

//hoverの色変更