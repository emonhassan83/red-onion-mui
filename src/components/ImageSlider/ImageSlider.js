import { Box } from '@mui/material';
import React from 'react';
import Slider from "react-slick";

const ImageSlider = ({images}) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <Box style={{width: '450px', margin: '0 auto'}}>
        <h2> Responsive </h2>
        <Slider {...settings}>
        {images.map((image) => (
               <div style={{ width: '100%', height: '100%' }}>
                  <img
                     src={image}
                     alt='meal'
                     style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                     }}
                  />
               </div>
            ))}
        </Slider>
      </Box>

    );
};

export default ImageSlider;