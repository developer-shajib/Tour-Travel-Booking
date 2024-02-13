import { useParams } from 'react-router-dom';
import { Col, Container, Form, ListGroup, Row } from 'reactstrap';
import { AiFillStar } from 'react-icons/ai';
import { HiCurrencyDollar } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { RiPinDistanceFill } from 'react-icons/ri';
import { MdGroup } from 'react-icons/md';
import { calculateAvgRating } from '../../utils/avgRating.jsx';
import avatar from '../../assets/images/avatar.jpg';
import { useContext, useEffect, useRef, useState } from 'react';
import Booking from '../../components/Booking/Booking.jsx';
import Newsletter from '../../shared/Newsletter/Newsletter.jsx';
import useFetch from '../../../hooks/useFetch.jsx';
import { BASE_URI } from '../../utils/appUrl.js';
import { AuthContext } from '../../../context/AuthContext.jsx';
import './TourDetals.scss';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // fetch data from database
  const { data: tour } = useFetch(`${BASE_URI}/tours/${id}`);

  const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour;

  // Rating Calculate
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // format date
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  // Submit request to the server
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        return alert('Please sign in');
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URI}/review/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }

      alert(result.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className='tour__content'>
                <img src={photo} alt='' />

                <div className='tour__info'>
                  <h2>{title}</h2>

                  <div className='d-flex align-items-center gap-5'>
                    <span className='tour__rating d-flex align-items-center gap-1'>
                      <AiFillStar style={{ color: 'var(--secondary-color)' }} />
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? 'Not rated' : <span> ({reviews?.length}) </span>}
                    </span>

                    <span>
                      <FaMapMarkerAlt /> {address}
                    </span>
                  </div>

                  <div className='tour__extra-details'>
                    <span>
                      <LuMapPin /> {city}
                    </span>
                    <span>
                      <HiCurrencyDollar /> ${price} per person
                    </span>
                    <span>
                      <RiPinDistanceFill /> {distance} k/m
                    </span>
                    <span>
                      <MdGroup /> {maxGroupSize} people
                    </span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* ============ Tour reviews section Start ============= */}
                <div className='tour__reviews mt-4'>
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                      <span onClick={() => setTourRating(1)}>
                        1 <AiFillStar />
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <AiFillStar />
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <AiFillStar />
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <AiFillStar />
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <AiFillStar />
                      </span>
                    </div>

                    <div className='review__input'>
                      <input ref={reviewMsgRef} type='text' placeholder='Share your thoughts' required />
                      <button className='btn primary__btn text-white ' type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                    {reviews?.map((review, index) => (
                      <div key={index} className='review__item'>
                        <img src={avatar} alt='' />

                        <div className='w-100'>
                          <div className='d-flex align-item-center justify-content-between'>
                            <div>
                              <h5>{review?.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString('en-us', options)}</p>
                            </div>
                            <span className='d-flex align-items-center'>
                              {review.rating} <AiFillStar />
                            </span>
                          </div>
                          <h6>{review?.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* ============ Tour reviews section End ============= */}
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
