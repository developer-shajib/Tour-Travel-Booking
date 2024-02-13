import { Col, Container, Row } from 'reactstrap';
import CommonSection from '../../shared/CommonSection/CommonSection.jsx';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import TourCard from '../../shared/TourCard/TourCard.jsx';
import Newsletter from '../../shared/Newsletter/Newsletter.jsx';

const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title='Tour Search Result' />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className='text-center'>No tour found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg={3} className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default SearchResultList;