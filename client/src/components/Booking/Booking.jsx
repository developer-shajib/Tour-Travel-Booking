import { AiFillStar } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import './Booking.scss';
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext.jsx';
import { BASE_URI } from '../../utils/appUrl.js';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user?._id,
    userEmail: user?.email,
    tourName: '',
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  });

  // form input change
  const handleChange = (e) => {
    setBooking((prevState) => ({ ...prevState, tourName: tour?.title, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  // send data to the server
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (!user) return alert('Please sign it');

      const res = await fetch(`${BASE_URI}/booking`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(booking),
      });

      const result = await res.json();
      if (!res.ok) return alert(result.message);
      navigate('/thank-you');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className='booking'>
        <div className='booking__top d-flex align-items-center justify-content-between'>
          <h3>
            ${price} <span>/per person</span>
          </h3>

          <span className='tour__rating d-flex align-items-center '>
            <AiFillStar />
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
          </span>
        </div>

        {/* ============== Booking Form Start ================ */}
        <div className='booking__form'>
          <h5>Information</h5>
          <Form className='booking__info-form' onSubmit={handleClick}>
            <FormGroup>
              <input type='text' id='fullName' onChange={handleChange} placeholder='Full Name' name='' required />
            </FormGroup>
            <FormGroup>
              <input type='number' id='phone' onChange={handleChange} placeholder='Phone' name='' required />
            </FormGroup>
            <FormGroup className='d-flex align-content-center gap-3'>
              <input type='date' id='bookAt' onChange={handleChange} placeholder='' name='' required />
              <input type='number' id='guestSize' onChange={handleChange} placeholder='Guest' name='' required />
            </FormGroup>
          </Form>
        </div>
        {/* ============== Booking Form End ================ */}

        {/* ============== Booking Bottom Start ================ */}
        <div className='booking__bottom'>
          <ListGroup>
            <ListGroupItem className='border-0 px-0 '>
              <h5 className='d-flex align-items-center gap-1'>${price} x 1 person</h5>
              <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 '>
              <h5>Service charge</h5>
              <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
              <h5>Total</h5>
              <span>${totalAmount}</span>
            </ListGroupItem>
            <Button onClick={handleClick} className='btn primary__btn w-100 mt-4'>
              Book Now
            </Button>
          </ListGroup>
        </div>
        {/* ============== Booking Botton End ================ */}
      </div>
    </>
  );
};

export default Booking;
