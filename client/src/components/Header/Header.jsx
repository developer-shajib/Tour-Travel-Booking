import { Button, Container, Row } from 'reactstrap';
import logo from '../../assets/images/logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RiMenu2Line } from 'react-icons/ri';
import './Header.scss';
import { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../../context/AuthContext.jsx';
import Cookies from 'js-cookie';

const nav_links = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    Cookies.remove('accessToken');
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  const stickyHeaderFun = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  const handleMenuToggle = () => menuRef.current.classList.toggle('show__menu');

  useEffect(() => {
    stickyHeaderFun();

    return window.removeEventListener('scroll', stickyHeaderFun);
  });

  return (
    <>
      <header
        className='header'
        ref={headerRef}>
        <Container>
          <Row>
            <div className='nav_wrapper d-flex align-items-center justify-content-between'>
              {/* ============== logo Start ============== */}
              <div className='logo'>
                <img
                  src={logo}
                  alt=''
                />
              </div>
              {/* ==============  logo End ============== */}
              {/* ==============  Menu Start ============== */}
              <div
                className='navigation'
                ref={menuRef}
                onClick={handleMenuToggle}>
                <ul className='menu d-flex align-items-center gap-5'>
                  {nav_links.map((item, index) => {
                    return (
                      <li
                        className='nav_item'
                        key={index}>
                        <NavLink to={item.path}>{item.display}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* ==============  Menu End ============== */}
              <div className='nav_right d-flex align-items-center gap-4'>
                <div className='nav_btns d-flex align-items-center gap-4'>
                  {user ? (
                    <>
                      <p className='mb-0 '>{user.username}</p>
                      <Button
                        className='btn btn-dark'
                        onClick={handleLogout}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button className='btn login_btn secondary__btn '>
                        <Link to='/login'>Login</Link>
                      </Button>
                      <Button className='btn primary__btn '>
                        <Link to='/register'>Register</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
              <span
                onClick={handleMenuToggle}
                className='mobile__menu'>
                <RiMenu2Line />
              </span>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
