import React from "react";
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/header/Header';
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { DetailsPage } from "./Components/Details/DetailsPage";
import { Cart } from "./Components/Cart/Cart";
import OrderHistory from "./Components/OrderHistory/OrderHistory";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<DetailsPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<OrderHistory />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
