import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { UseCardContext } from 'lib/context';
import OptionForm from './optionform';
import OptionSlide from './optionSlide';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({//openのところ
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({//ボックス自体
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({ //丸いところ
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export default function SwipeableEdgeDrawer() {

  const { state, setState } = UseCardContext();
  const toggleDrawer = (newOpen, type, size) => () => {
    setState({ ...state, open: newOpen, fType: type, fSize: size });
};

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(60% - ${drawerBleeding}px)`,
            overflow: 'scroll',
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={state.open}
        onClose={toggleDrawer(false, '','')}
        onOpen={toggleDrawer(true, '','')}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'relation',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: state.open ? 'visible' : 'hidden',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>{state.fType}</Typography>
        </StyledBox>
          {/* <OptionForm type={state.fType}/> */}
          <OptionSlide type={state.fType}/>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}