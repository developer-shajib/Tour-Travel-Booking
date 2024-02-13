import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import loginImg from '../../assets/images/login.png';
import userIcon from '../../assets/images/user.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import './Login.scss';
import { AuthContext } from '../../../context/AuthContext.jsx';
import { BASE_URI } from '../../utils/appUrl.js';
import Cookies from 'js-cookie';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  // form input change
  const handleChange = async (e) => {
    setCredentials((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_PENDING' });

    const res = await fetch(`${BASE_URI}/auth/login`, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(credentials)
    });

    const result = await res.json();

    if (!res.ok) return dispatch({ type: 'LOGIN_REJECTED', payload: result.message });

    if (result) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
      Cookies.set('accessToken', result?.token, { expires: 15, path: '/', secure: true });
    }

    navigate('/');
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col
              className='m-auto'
              lg='8'>
              <div className='login__container d-flex justify-content-between'>
                <div className='login__img'>
                  <img
                    src={loginImg}
                    alt=''
                  />
                </div>

                <div className='login__form'>
                  <div className='user'>
                    <img
                      src={userIcon}
                      alt=''
                    />
                  </div>
                  <h2>Login</h2>

                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type='text'
                        placeholder='Email'
                        required
                        id='email'
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type='text'
                        placeholder='Password'
                        required
                        id='password'
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <Button
                      className='btn secondary__btn auth__btn'
                      type='submit'>
                      Login
                    </Button>
                  </Form>
                  <p>
                    {`Don't have an account? `}
                    <Link to={'/register'}>Create</Link>
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

export default Login;
