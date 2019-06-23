import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import "./layouts.scss";
import Img from "react-image";
import Loader from "../assets/images/loader.svg";
// slider images
import Slider1 from "../assets/images/slider/slider1.jpg";
import Slider2 from "../assets/images/slider/slider2.jpg";
import Slider3 from "../assets/images/slider/slider3.jpg";
import Slider4 from "../assets/images/slider/slider4.jpg";
import Slider5 from "../assets/images/slider/slider5.jpg";
import Slider6 from "../assets/images/slider/slider6.jpg";

const items = [
  {
    src: Slider1,
    caption: [
      "Զանգահարեք վարպետին : 094-43-00-10 ",
      "Вызов мастера: 094-43-00-10",
      "Call master : 094-43-00-10"
    ],
    altText: [
      "Տնային վարպետի ծառայություններ",
      "Услуги домашнего мастера",
      " Master Services"
    ]
  },
  {
    src: Slider2,
    altText: [
      `Պատվերի ամբողջական աջակցությունը մենեջերի կողմից պայմանագրի կնքման պահից մինչեւ տեղադրման ավարտը`,
      `Полное сопровождение вашего заказа персональным менеджером с момента заключения договора на изготовление до окончания установочных работ`,
      `Full support of your order by the personal manager from the moment of the conclusion of the contract  until the end of the installation work`
    ],
    caption: []
  },
  {
    src: Slider3,
    altText: [
      "Բոլոր ապրանքները սերտիֆիկացված են եւ ապահովված են երկարատեւ ապրանքային երաշխիքով",
      "Вся продукция сертифицирована и обеспечивается длительной фирменной гарантией",
      "All products are certified and provided with a long-lasting brand warranty"
    ],
    caption: []
  },
  {
    src: Slider5,
    altText: [
      "Պատվերի գրանցում էլ-փոստի միջոցով",
      "Регистрация заказа по электронной почте",
      "Order registration by email"
    ],
    caption: [
      "ar.dav.mart@gmail.com",
      "ar.dav.mart@gmail.com",
      "ar.dav.mart@gmail.com"
    ]
  }
  // {
  //   src: Slider5,
  //   altText: "Heading",
  //   caption: "Description"
  // },
  // {
  //   src: Slider6,
  //   altText: "Heading",
  //   caption: "Description"
  // }
];

export default class Slider extends Component {
  state = { activeIndex: 0 };

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };
  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const { lang } = this.props;
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <Img
            src={item.src}
            alt={item.altText}
            className="sliderItem"
            loader={<img src={Loader} />}
          />
          <CarouselCaption
            captionText={item.caption[lang.id]}
            captionHeader={item.altText[lang.id]}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        interval={6000}
        autoPlay={true}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className="sliderItem"
        // slide={true}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}
