import weatherImg from '../../assets/images/weather.png';
import guideImg from '../../assets/images/guide.png';
import customizationImg from '../../assets/images/customization.png';
import { Col } from 'reactstrap';
import ServiceCard from './ServiceCard.jsx';

const servicesData = [
  {
    imgUrl: weatherImg,
    title: 'Calculate Weather',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptas!',
  },
  {
    imgUrl: guideImg,
    title: 'Best Tour Guide',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptas!',
  },
  {
    imgUrl: customizationImg,
    title: 'Customization',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptas!',
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col md='6' sm='6' lg={3} className='mb-4' key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
