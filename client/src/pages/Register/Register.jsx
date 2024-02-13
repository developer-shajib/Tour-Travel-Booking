import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import registerImg from '../../assets/images/register.png';
import userIcon from '../../assets/images/user.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import './Register.scss';
import { AuthContext } from '../../../context/AuthContext.jsx';
import { BASE_URI } from '../../utils/appUrl.js';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  // form input change
  const handleChange = (e) => {
    setCredentials((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URI}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: 'REGISTER_SUCCESS', payload: result.data });
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className='m-auto' lg='8'>
              <div className='login__container d-flex justify-content-between'>
                <div className='login__img'>
                  <img src={registerImg} alt='' />
                </div>

                <div className='login__form'>
                  <div className='user'>
                    <img src={userIcon} alt='' />
                  </div>
                  <h2>Register</h2>

                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input type='text' placeholder='Username' required id='username' onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type='text' placeholder='Email' required id='email' onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type='text' placeholder='Password' required id='password' onChange={handleChange} />
                    </FormGroup>

                    <Button className='btn secondary__btn auth__btn' type='submit'>
                      Create Account
                    </Button>
                  </Form>
                  <p>
                    Already have an account? <Link to={'/login'}>Login</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Register;
