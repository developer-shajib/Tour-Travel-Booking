import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsFillTelephonePlusFill } from "react-icons/bs";
import { MdLocationOn, MdEmail } from "react-icons/md";
import "./Footer.scss";

const quick_links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className='footer'>
        <Container>
          <Row>
            <Col
              md='12'
              sm='12'
              lg={3}
              className='mb-5'>
              <div className='logo'>
                <img
                  src={logo}
                  alt=''
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  <br /> Consectetur, totam.
                </p>
                <div className='social__links d-flex align-content-center gap-4'>
                  <span>
                    {" "}
                    <Link to='#'>
                      <BsFacebook />
                    </Link>
                  </span>
                  <span>
                    <Link to='#'>
                      <BsGithub />
                    </Link>
                  </span>
                  <span>
                    <Link to='#'>
                      <BsInstagram />
                    </Link>
                  </span>
                  <span>
                    <Link to='#'>
                      <BsLinkedin />
                    </Link>
                  </span>
                </div>
              </div>
            </Col>
            <Col
              md='4'
              sm='4'
              lg='3'>
              <h5 className='footer__link-title'>Discover</h5>

              <ListGroup className='footer__quick-links'>
                {quick_links.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col
              md='4'
              sm='4'
              lg='3'>
              <h5 className='footer__link-title'>Quick Links</h5>

              <ListGroup className='footer__quick-links'>
                {quick_links2.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col
              md='4'
              sm='4'
              lg='3'>
              <h5 className='footer__link-title'>Contact</h5>

              <ListGroup className='footer__quick-links'>
                <ListGroupItem className='ps-0 border-0 d-flex align-content-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <MdLocationOn />
                    </span>
                    Address:
                  </h6>
                  <p className='mb-0'>Cumilla, Bangladesh</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-content-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <MdEmail />
                    </span>
                    Email:
                  </h6>
                  <p className='mb-0'>sunhailshajib1@gmail.com</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-content-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <BsFillTelephonePlusFill />
                    </span>
                    Phone:
                  </h6>
                  <p className='mb-0'>+880-1709-82134</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col
              lg={12}
              className='text-center pt-5'>
              <p className='copyright'>&copy;Copyright {year}, design & developer by Shajib. All rights reserved </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
