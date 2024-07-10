import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/carouselImg1.jpg'
import './carousel-style.css'

function CarouselStart() {
  return (
    <div className="custom-carousel-container">
      <Carousel  className="custom-carousel">
        <Carousel.Item interval={2000}>
          <img
            className='d-block w-100 custom-carousel-image'
            src={logo}
            alt="Image One"

          />
          <Carousel.Caption>
            <h2>Explore a variety of different recipes</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} style={{ height: '100%' }}>
          <img
            className='d-block w-100 custom-carousel-image'
            src={logo}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h2>Check out our most popular ones</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} style={{ height: '100%' }}>
          <img
            className='d-block w-100 custom-carousel-image'
            src={logo}
            alt="Image One"
          />
          <Carousel.Caption>
            <h2>Label for first slide</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselStart;