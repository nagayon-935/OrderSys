import axios from "axios";
import { UseOrderInfoContext } from "lib/context";
import { useRef } from "react";

export default function useOrder() {
  const { orderInfo, setOrderInfo} = UseOrderInfoContext();
  const initOrderInfo = useRef(orderInfo).current;

  async function resgistOrderInfo(data) {
    await setOrderInfo(prevState => ({ ...prevState, ...data }));
  }

  async function postOrderInfo(data) {
    try {
      const response = await axios.post('http://localhost:3000/order',data);
    } catch (error) {
      console.error(error);
    }
    finally{
      resetOrderInfo();
    }
  };

  function resetOrderInfo(){
    setOrderInfo(initOrderInfo);
  }

  return (
    { orderInfo, setOrderInfo: resgistOrderInfo, postOrderInfo}
  )

}