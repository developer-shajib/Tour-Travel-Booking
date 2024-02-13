import { Col, Form, FormGroup } from 'reactstrap';
import { useRef } from 'react';
import { BiMap } from 'react-icons/bi';
import { MdOutlineNotListedLocation } from 'react-icons/md';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import './SearchBar.scss';
import { useNavigate } from 'react-router-dom';
import { BASE_URI } from '../../utils/appUrl.js';

const SearchBar = ({ animate_name }) => {
  const locationRef = useRef('');
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === '' || distance === '' || maxGroupSize === '') {
      return alert('All fields are required!');
    }

    const res = await fetch(
      `${BASE_URI}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) return alert('Something went wrong');

    const result = await res.json();

    navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {
      state: result.data,
    });
  };

  return (
    <>
      <Col lg={12}>
        <div className={`search__bar animate__animated ${animate_name}`}>
          <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
              <span>
                <BiMap />
              </span>
              <div>
                <h6>Location</h6>
                <input ref={locationRef} type='text' placeholder='Where are you going?' />
              </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
              <span>
                <MdOutlineNotListedLocation />
              </span>
              <div>
                <h6>Distance</h6>
                <input ref={distanceRef} type='number' placeholder='Distance k/m' />
              </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form__group form__group-last'>
              <span>
                <AiOutlineUsergroupAdd />
              </span>
              <div>
                <h6>Max People</h6>
                <input ref={maxGroupSizeRef} type='number' placeholder='0' />
              </div>
            </FormGroup>

            <span className='search__icon' type='submit' onClick={searchHandler}>
              <BiSearchAlt />
            </span>
          </Form>
        </div>
      </Col>
    </>
  );
};

export default SearchBar;
