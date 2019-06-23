import React from "react";
// images
import KitchenImg from "../assets/images/button images/kitchen.jpg";
import BeedroomImg from "../assets/images/button images/bedrooms.jpg";
import LivingRoomsImg from "../assets/images/button images/living room.jpg";
import PergolasImg from "../assets/images/button images/pegolas.jpg";
import DoorsImg from "../assets/images/button images/doors.jpg";
import OtherImg from "../assets/images/button images/other.jpg";

// secondary menu data
const array = [
  { id: 0, text: ["Խոհանոցներ", "Кухни", "Kitchen"], img: KitchenImg },
  { id: 1, text: ["Ննջարաններ", "Спальни", "Bedrooms"], img: BeedroomImg },
  {
    id: 2,
    text: ["Հյուրասենյակներ", "Прихожие и гостиные", "Living rooms"],
    img: LivingRoomsImg
  },
  { id: 3, text: ["Տաղավարներ", "Беседки", "Pergolas"], img: PergolasImg },
  { id: 4, text: ["Դռներ", "Двери", "Doors"], img: DoorsImg },
  { id: 5, text: ["Այլ", "Другой", "Other"], img: OtherImg }
];

export default class SecondaryMenu extends React.Component {
  render() {
    const { setActiveindex, activeIndex, lang } = this.props;
    return (
      <div className="menuSecondary">
        {array.map(item => (
          <div className="button-block" key={item.id}>
            <div className="layer background-image">
              <img src={item.img} alt={item.text} />
            </div>
            <div
              className={`layer button-text ${
                activeIndex === item.id ? "active" : null
              } `}
              children={<span>{item.text[lang.id]} </span>}
              onClick={() => setActiveindex(item.id)}
            />
          </div>
        ))}
      </div>
    );
  }
}
