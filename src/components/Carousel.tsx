import Carousel from 'react-material-ui-carousel';

interface CustomCarouselProps {
  items: JSX.Element[];
}

const CustomCarousel = ({ items }: CustomCarouselProps) => {
  return (
    <Carousel
      sx={{
        marginTop: '2em',
        border: '2px solid #086',
        borderRadius: '4px',
      }}
      animation="slide"
      duration={2000}
      // interval={4000}
    >
      {items.map(item => (
        <>{item}</>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
