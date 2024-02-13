import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Tours from "../pages/Tours/Tours.jsx";
import TourDetails from "../pages/TourDetails/TourDetails.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import SearchResultList from "../pages/SearchResultList/SearchResultList.jsx";
import ThankYou from "../pages/ThankYou/ThankYou.jsx";

const Router = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Navigate to='/home' />} /> */}
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/tours'
        element={<Tours />}
      />
      <Route
        path='/tours/search'
        element={<SearchResultList />}
      />
      <Route
        path='/tours/:id'
        element={<TourDetails />}
      />
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/register'
        element={<Register />}
      />
      <Route
        path='/thank-you'
        element={<ThankYou />}
      />
    </Routes>
  );
};

export default Router;
