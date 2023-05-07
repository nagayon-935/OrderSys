import { Button, Dialog, DialogTitle, Paper, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { InputLabel, Input } from '@mui/material'
import { useSpring, animated } from 'react-spring'
import { React } from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container } from '@mui/system'
import OptionForm from './optionform'
import DemoLayout from './demoLayout'


function Step1({ register, errors, style }) {
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
    <animated.div style={{ ...style, ...animationProps }}>
      <InputLabel>Name:</InputLabel>
      <Input type="text" {...register('name', { required: true })} />
      {errors.name && <Typography>This field is required</Typography>}
    </animated.div>
  )
}

function Step2({ register, errors, style }) {
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
    <animated.div style={{ ...style, ...animationProps }}>
      <InputLabel>Email:</InputLabel>
      <Input type="text" {...register('email', { required: true })} />
      {errors.email && <Typography>This field is required</Typography>}
    </animated.div>
  )
}

function Step3({ register, errors, style }) {
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
    <animated.div style={{ ...style, ...animationProps }}>
      <InputLabel>Password:</InputLabel>
      <Input type="password" {...register('password', { required: true })} />
      {errors.password && <Typography>This field is required</Typography>}
    </animated.div>
  )
}

export default function MultiStepForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({ mode: 'onBlur' })

  const currentStep = watch('step', 1)

  const handleNextStep = () => {
    setValue('step', currentStep + 1)
  }

  const handlePrevStep = () => {
    setValue('step', currentStep - 1)
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Dialog open={true} maxWidth="md" fullWidth={true}
      PaperProps={{
        style: {
          width: '850px',
          height: '600px',
        },
      }}>
      <DialogTitle>Choose option</DialogTitle>
      <CarouselProvider
        naturalSlideWidth={800}
        naturalSlideHeight={500}
        totalSlides={3}
        currentSlide={currentStep - 1}
        isPlaying={false}
        interval={1000}
        dragEnabled={false}
        touchEnabled={false}
      >
        <Container>
          <Slider>
            <Slide index={0}>
              <Paper elevation={10} sx={{ width: '96%', height: '90%', p: 2, margin: '2%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input type="hidden" {...register('step', { value: 1 })} />
                  {currentStep === 1 &&
                    <>
                      <Step1 register={register} errors={errors} />
                      <Button onClick={() => handleNextStep()}>Next</Button>
                      <Button type="submit">Submit</Button>
                    </>
                  }
                </form>
              </Paper>
            </Slide>
            <Slide index={1}>
              <Paper elevation={10} sx={{ width: '96%', height: '90%', p: 2, margin: '2%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input type="hidden" {...register('step', { value: 2 })} />
                  {currentStep === 2 &&
                    <>
                      <Step2 register={register} errors={errors} />
                      <Button onClick={() => handlePrevStep()}>Back</Button>
                      <Button onClick={() => handleNextStep()}>Next</Button>
                      <Button type="submit">Submit</Button>
                    </>
                  }
                </form>
              </Paper>
            </Slide>
            <Slide index={2}>
              <Paper elevation={10} sx={{ width: '96%', height: '90%', p: 2, margin: '2%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input type="hidden" {...register('step', { value: 3 })} />
                  {currentStep === 3 &&
                    <>
                      <Step3 register={register} errors={errors} />
                      <Button onClick={() => setValue('step', currentStep - 1)}>Back</Button>
                      <Button type="submit">Submit</Button>
                    </>
                  }
                </form>
              </Paper>
            </Slide>
          </Slider>
        </Container>
      </CarouselProvider>
    </Dialog >
  )
}
