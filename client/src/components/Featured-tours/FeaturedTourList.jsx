import { Col } from 'reactstrap';
import TourCard from '../../shared/TourCard/TourCard.jsx';
import useFetch from '../../../hooks/useFetch.jsx';
import { BASE_URI } from '../../utils/appUrl.js';

const FeaturedTourList = () => {
  const { data, loading, error } = useFetch(`${BASE_URI}/tours/search/getFeaturedTours`);

  return (
    <>
      {loading && <h4>Loading.....</h4>}
      {error && <h4>{error}</h4>}

      {!loading &&
        !error &&
        data?.map((tour) => (
          <Col md='6' sm='6' lg='3' className='mb-4' key={tour?._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedTourList;
