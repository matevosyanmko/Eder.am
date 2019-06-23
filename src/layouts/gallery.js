import React, { Component } from "react";
import SecondaryMenu from "./secondaryMenu";
import LightBoxOverlay from "./lightBox";
// secondary menu list
import { GalleryArray, PerGolasGalleryBig } from "../imagesArray";
import Img from "react-image";
import LoaderSmall from "../assets/images/loader-small.svg";

// const ImagesInColumn = Math.round(Kitchen.length / 4);
let initialIndex = 0;
export default class Gallery extends Component {
  state = {
    // active index secondary menu
    activeIndex: initialIndex,
    // active gallery
    activeGallery: GalleryArray[initialIndex],
    // active gallery -active number index
    photoIndex: 0,
    // gallery open/close
    isOpen: false
  };

  setActiveindex = index => {
    // photogallery parent
    let photoGallery = document.getElementsByClassName("gallery")[0];
    // set active gallery and scroll to gallery

    this.setState(
      {
        activeIndex: index,
        activeGallery: GalleryArray[index]
      },
      () =>
        window.setTimeout(
          () =>
            photoGallery.scrollIntoView({
              block: "start",
              behavior: "smooth"
            }),
          500
        )
    );
  };
  onOverlayClose = () => {
    this.setState({ isOpen: false });
  };
  onOverlayOpen = (photoIndex, photoIndex1) => {
    let num = photoIndex;
    if (photoIndex1 !== null) {
      switch (photoIndex) {
        case 0:
          num = photoIndex1;
          break;
        case 1:
          num = GalleryArray[3][photoIndex - 1].thumbnails.length + photoIndex1;
          break;
        case 2:
          num =
            GalleryArray[3][photoIndex - 1].thumbnails.length +
            GalleryArray[3][photoIndex - 2].thumbnails.length +
            photoIndex1;
          break;
        case 3:
          num =
            GalleryArray[3][photoIndex - 1].thumbnails.length +
            GalleryArray[3][photoIndex - 2].thumbnails.length +
            GalleryArray[3][photoIndex - 3].thumbnails.length +
            photoIndex1;
          break;
      }
    }
    this.setState({
      photoIndex: num,
      isOpen: true
    });
  };
  render() {
    const { activeIndex, activeGallery, photoIndex, isOpen } = this.state;

    const { lang } = this.props;
    return (
      <div className="main">
        <SecondaryMenu
          setActiveindex={this.setActiveindex}
          activeIndex={activeIndex}
          lang={lang}
        />
        <div className="gallery">
          {activeIndex !== 3
            ? activeGallery.thumbnails.map((img, index) => (
                <div
                  key={index}
                  className="innerImage"
                  onClick={() => this.onOverlayOpen(index, null)}
                >
                  <Img
                    src={img}
                    alt="ardavmart"
                    style={{ backgrond: "white" }}
                  />
                  <div className="overlayImage" />
                </div>
              ))
            : activeGallery.map((item, index) => (
                <React.Fragment key={index}>
                  <h1 children={item.header[lang.id]} />
                  <div className="gallery">
                    {item.thumbnails.map((img, index1) => (
                      <React.Fragment key={index1} className="imgs">
                        <div
                          key={index}
                          className="innerImage"
                          onClick={() => this.onOverlayOpen(index, index1)}
                        >
                          <Img
                            src={img}
                            alt="ardavmart"
                            style={{ backgrond: "white" }}
                            className="zoom-cursor"
                          />
                        </div>
                        <div className="overlayImage" />
                      </React.Fragment>
                    ))}
                  </div>
                </React.Fragment>
              ))}
        </div>

        {isOpen && (
          <LightBoxOverlay
            images={activeIndex !== 3 ? activeGallery.big : PerGolasGalleryBig}
            photoIndex={photoIndex}
            onClose={this.onOverlayClose}
          />
        )}
      </div>
    );
  }
}
