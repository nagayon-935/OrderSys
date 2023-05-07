
import { createContext, useState, useContext, useRef} from 'react';
import axios from 'axios';

export const dialogState = createContext({
  open: false,
  setOpen: () => { },
});

export function UseDialogContext() {
  return useContext(dialogState);
}


export function DialogStateProvider({ children }) {

  const [open, setOpen] = useState(false);

  function handleDialog() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <dialogState.Provider value={{ open, setOpen: handleDialog }}>{children}</dialogState.Provider>
  );
}

export const orderInfoState = createContext({
  type: '',
  name: '',
  size: '',
  noddle: '',
  soup: '',
  rich: '',
  beanSprouts: '',
  onion: '',
  egg: '',
  kimchi: '',
  setOrderInfo: () => {},
});

export function UseOrderInfoContext() {
  return useContext(orderInfoState);
}

export function OrderInfoStateProvider({ children }) {

  const [orderInfo, setOrderInfo] = useState({
    type: '',
    name: '',
    size: '',
    noddle: '',
    soup: '',
    rich: '',
    beanSprouts: '',
    onion: '',
    egg: '',
    kimchi: '',
  });

  return (
    <orderInfoState.Provider value={{ orderInfo, setOrderInfo }}>{children}</orderInfoState.Provider>
  );
}