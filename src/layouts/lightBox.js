import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

export default class LightBoxOverlay extends React.Component {
  state = {
    images: [],
    photoIndex: 0
  };
  componentDidMount = () => {
    const { images, photoIndex } = this.props;
    if (images) {
      this.setState({ images, photoIndex });
    }
  };

  render() {
    const { onClose } = this.props;
    const { images, photoIndex } = this.state;
    if (!images) {
      return <h1>Loading..</h1>;
    }
    
    return (
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={onClose}
        onMovePrevRequest={() =>
          this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length
          })
        }
        onMoveNextRequest={() =>
          this.setState({
            photoIndex: (photoIndex + 1) % images.length
          })
        }
      />
    );
  }
}
