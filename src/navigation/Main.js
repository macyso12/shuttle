import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Clubs from '../pages/clubs';
import Account from '../pages/account';
import SignIn from '../pages/signIn';
export const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/account" element={<Account />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default Main;
