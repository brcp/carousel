import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

interface CustomCarouselProps {
  items: JSX.Element[];
}

const CustomCarousel = ({ items }: CustomCarouselProps) => {
  return (
    <Carousel
      sx={{
        marginTop: '2em',
        // border: '2px solid #086',
        borderRadius: '4px',
        // minHeight: '22em',
      }}
      animation="slide"
      interval={5000}
      changeOnFirstRender={true}
      stopAutoPlayOnHover={true}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          color: '#086',
          backgroundColor: 'transparent',
          opacity: 0.4,
        },
      }}
    >
      {items.map((item, index) => (
        <Box key={index} sx={{ border: '3px solid transparent' }}>
          {item}
        </Box>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
