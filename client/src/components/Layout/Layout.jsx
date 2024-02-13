import Router from '../../routes/Router.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default Layout;
