import { menuInfo } from "lib/constants";
import FoodCard from "./foodcard";
import CardList from "./cardlist";
import { DialogStateProvider } from "lib/context";
import OptionSlide from "./optionSlide";
import {OrderInfoStateProvider} from 'lib/context'



export default function Menu({ attribute }) {

  let cards = [];
  menuInfo.map((post, index) => {
    if (attribute === '') {
      cards.push(<div key={index}><FoodCard type={post.menuType} name={post.menuName} path={post.menuImgPath} /></div>);
    }
    if (post.menuType === attribute) {
      cards.push(<div key={index}><FoodCard type={post.menuType} name={post.menuName} path={post.menuImgPath} /></div>);
    }
  });

  return (
    <DialogStateProvider>
      <OrderInfoStateProvider>
        <CardList>
          {
            cards
          }
        </CardList>
        <OptionSlide />
      </OrderInfoStateProvider>
    </DialogStateProvider>
  );

}