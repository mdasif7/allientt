import React, { Component } from 'react';
class ImgComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

//   generateImages = () => {
//     const {
//       props: { imageList }
//     } = this;

//     {
//       imageList.map(item => {
//         return <img src={item.user.avatar_url} alt="no" />;
//       });
//     }
//   };
  render() {
    // return <div>{this.generateImages()}</div>;
    const {
        props: { imagesList }
      } = this;
    return (
      <>
        Number of images displayed {imagesList.length ? imagesList.length : 0 }
       <div  className='image-section'>
           {  imagesList && imagesList.map(item => {
        return(
            item && (<img className='gif-images'src={item.images.downsized.url} alt="no" />)
        ) 
      })}
      {imagesList.length === 0 && (<div>No Images</div>)}  
        </div>
      </>
       
    )
  }
}

export default ImgComponent;
