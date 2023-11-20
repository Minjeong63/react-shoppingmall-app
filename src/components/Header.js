import React from 'react';
import { FiShoppingCart, FiLogIn, FiLogOut } from 'react-icons/fi';
import { LuUser } from 'react-icons/lu';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/loginSlice';

const Header = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const isLogin = useSelector((state) => state.login);

  const dispatch = useDispatch();

  return (
    <div className="header whole-container">
      <div className="title">
        <Link to="/" className="link">
          Shop
        </Link>
      </div>

      <div className="icon-container">
        <div
          className="icon icon-cart"
          onClick={() => {
            navigate('/cart');
          }}
        >
          <FiShoppingCart />
          {cart > 0 && <div className="item-number">{cart}</div>}
        </div>
        <div className="icon">
          <LuUser />
        </div>

        <Link to="/login">
          <div className="icon">
            {isLogin ? (
              <FiLogOut
                width="28px"
                height={28}
                onClick={() => {
                  logOut();
                  dispatch(login());
                }}
              />
            ) : (
              <FiLogIn width="28px" height={28} />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
