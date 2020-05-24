import React, { Component } from "react";
class ImgComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  imageClicked = (value) => {
    this.props.imageClick(value);
  };
  render() {
    // return <div>{this.generateImages()}</div>;
    const {
      props: { imagesList },
    } = this;
    return (
      <>
        Number of images displayed {imagesList.length ? imagesList.length : 0}
        <div className="image-section">
          {imagesList &&
            imagesList.length > 0 &&
            imagesList.map((item) => {
              return (
                item && (
                  <img
                    className="gif-images"
                    src={item.images.downsized.url}
                    alt="no"
                    onClick={() => this.imageClicked(item)}
                  />
                )
              );
            })}
          {imagesList.length === 0 && <div>No Images</div>}
        </div>
      </>
    );
  }
}
ImgComponent.defaultProps = {
  imageClick: () => {},
};
export default ImgComponent;
