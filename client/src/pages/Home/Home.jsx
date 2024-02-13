import { Col, Container, Row } from 'reactstrap';
import heroImg from '../../assets/images/hero-img01.jpg';
import heroImg2 from '../../assets/images/hero-img02.jpg';
import heroVideo from '../../assets/images/hero-video.mp4';
import worldImg from '../../assets/images/world.png';
import experienceImg from '../../assets/images/experience.png';
import Subtitle from '../../shared/Subtitle/Subtitle.jsx';
import SearchBar from '../../shared/SearchBar/SearchBar.jsx';
import ServiceList from '../../components/Service/ServiceList.jsx';
import FeaturedTourList from '../../components/Featured-tours/FeaturedTourList.jsx';
import { MasonryImagesGallery } from '../../components/Image-gallery/MasonryImagesGallery.jsx';
import Testimonial from '../../components/Testimonial/Testimonial.jsx';
import Newsletter from '../../shared/Newsletter/Newsletter.jsx';
import './Home.scss';

const Home = () => {
  return (
    <>
      {/* ================= Hero Section Start ====================== */}
      <section className='hero-section'>
        <Container>
          <Row>
            <Col lg={6}>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center animate__animated animate__headShake'>
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt='' />
                </div>
                <h1>
                  Traveling opens the door to creating <span className='heighlight'>memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est culpa rerum accusamus blanditiis sequi
                  aliquam mollitia amet aperiam vero et ea quo, necessitatibus sunt omnis maxime veniam. Eaque, labore
                  unde.
                </p>
              </div>
            </Col>

            <Col lg={2}>
              <div className='hero__img-box animate__animated animate__fadeInDownBig'>
                <img src={heroImg} alt='' />
              </div>
            </Col>
            <Col lg={2}>
              <div className='hero__img-box hero__video_box mt-4 animate__animated animate__fadeInDownBig'>
                <video muted loop autoPlay src={heroVideo} alt='' />
              </div>
            </Col>
            <Col lg={2}>
              <div className='hero__img-box mt-5 animate__animated animate__fadeInDownBig'>
                <img src={heroImg2} alt='' />
              </div>
            </Col>
            <SearchBar animate_name='animate__fadeInLeftBig' />
          </Row>
        </Container>
      </section>
      {/* ================ Hero Section End ================= */}

      {/* ================ Service Section Start ================= */}
      <section className='service-section'>
        <Container>
          <Row>
            <Col lg={3}>
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ================ Service Section End ================= */}

      {/* ================ Featured tour Section Start ================= */}
      <section className='feature-section'>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>Our featured tour</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ================ Featured tour Section End ================= */}

      {/* ================ experience Section Start ================= */}
      <section className='experience'>
        <Container>
          <Row>
            <Col lg={6}>
              <div className='experience__content'>
                <Subtitle subtitle={'Experience'} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur Illum. <br /> Lorem ipsum dolor sit amet placeat!
                </p>
              </div>

              <div className='counter__wrapper d-flex align-items-center gap-5'>
                <div className='counter__box'>
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className='counter__box'>
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className='counter__box'>
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className='experience__img'>
                <img src={experienceImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ================ experience Section End ================= */}

      {/* ================ gallery Section Start ================= */}

      <section className='gallery_section'>
        <Container>
          <Row>
            <Col lg={12}>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery__title'>Visit our customers tour gallery</h2>
            </Col>
            <Col lg={12}>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ================ gallery Section End ================= */}

      {/* ================ testimonial Section Start ================= */}
      <section className='testimonial_section'>
        <Container>
          <Row>
            <Col lg={12}>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className='testimonial__title'>What are fans says about us</h2>
            </Col>

            <Col lg={12}>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ================ testimonial Section End ================= */}

      <Newsletter />
    </>
  );
};

export default Home;
