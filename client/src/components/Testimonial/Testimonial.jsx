import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {
  const settings = {
    dots: true,
    Infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    reponsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className='testimonial py-4 px-3'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum
            sapiente assumenda commodi voluptas! Quibusdam accusantium
            voluptatum dolorum consequuntur alias error quos fuga modi
            voluptatibus cum? Sequi ipsum est culpa?
          </p>

          <div className='d-flex align-items-center gap-4 mt-3'>
            <img className='w-25 h-25 rounded-2' src={ava01} alt='' />
            <div>
              <h6 className='mb-0 mt-3'>John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <div className='testimonial py-4 px-3'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum
            sapiente assumenda commodi voluptas! Quibusdam accusantium
            voluptatum dolorum consequuntur alias error quos fuga modi
            voluptatibus cum? Sequi ipsum est culpa?
          </p>

          <div className='d-flex align-items-center gap-4 mt-3'>
            <img className='w-25 h-25 rounded-2' src={ava02} alt='' />
            <div>
              <h6 className='mb-0 mt-3'>Lia Frankin</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <div className='testimonial py-4 px-3'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum
            sapiente assumenda commodi voluptas! Quibusdam accusantium
            voluptatum dolorum consequuntur alias error quos fuga modi
            voluptatibus cum? Sequi ipsum est culpa?
          </p>

          <div className='d-flex align-items-center gap-4 mt-3'>
            <img className='w-25 h-25 rounded-2' src={ava03} alt='' />
            <div>
              <h6 className='mb-0 mt-3'>John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <div className='testimonial py-4 px-3'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum
            sapiente assumenda commodi voluptas! Quibusdam accusantium
            voluptatum dolorum consequuntur alias error quos fuga modi
            voluptatibus cum? Sequi ipsum est culpa?
          </p>

          <div className='d-flex align-items-center gap-4 mt-3'>
            <img className='w-25 h-25 rounded-2' src={ava02} alt='' />
            <div>
              <h6 className='mb-0 mt-3'>Lia Frankin</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Testimonial;
