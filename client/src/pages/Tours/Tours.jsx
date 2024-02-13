import CommonSection from '../../shared/CommonSection/CommonSection.jsx';
import TourCard from '../../shared/TourCard/TourCard.jsx';
import SearchBar from '../../shared/SearchBar/SearchBar.jsx';
import Newsletter from '../../shared/Newsletter/Newsletter.jsx';
import './Tours.scss';
import { Col, Container, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch.jsx';
import { BASE_URI } from '../../utils/appUrl.js';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { data: tours, loading, error } = useFetch(`${BASE_URI}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URI}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <>
      <CommonSection title='All Tours' />
      <section>
        <Container>
          <Row>
            <SearchBar animate_name='animate__fadeInLeftBig' />
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}

          {!loading && !error && (
            <Row>
              {tours?.map((tour) => (
                <Col className='mb-4' md='6' sm='6' lg='3' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}

              {/* =============== Pagination Start ================ */}
              <Col lg='12'>
                <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? 'active__page' : ''}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
              {/* =============== Pagination End ================ */}
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
