import { RiDeleteBin7Line } from 'react-icons/ri';
import './Cart.css';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNumber,
  initializeCartList,
  removeFromCart,
  removeNumber,
} from '../store/cartListSlice';
import { decrement, initialize } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';

const Cart = () => {
  const cartList = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  const total = cartList.reduce((acc, cur) => acc + cur.price * cur.number, 0);

  return (
    <>
      {cartList.length === 0 && <Title>장바구니</Title>}
      {cartList.map((el) => {
        return (
          <div key={el.id} className="whole-container">
            <div className="cart">
              <div className="cart-first-block">
                <div>
                  <img src={el.image} width="100px" height="120px" />
                </div>
                <div className="cart-container">
                  <div className="cart-category">{el.category}</div>
                  <div className="cart-title">{el.title}</div>
                  <div className="cart-price">
                    {el.price} x {el.number} = $ {el.price * el.number}
                  </div>
                </div>
              </div>
              <div className="cart-increase-decrease">
                <div
                  className="increase-decrease-container"
                  onClick={() => {
                    if (el.number > 1) dispatch(removeNumber(el.id));
                  }}
                >
                  -
                </div>
                <div className="increase-decrease-container">{el.number}</div>
                <div
                  className="increase-decrease-container"
                  onClick={() => {
                    dispatch(addNumber(el.id));
                  }}
                >
                  +
                </div>
              </div>
              <div
                className="cart-delete"
                onClick={() => {
                  dispatch(removeFromCart(el.id));
                  dispatch(decrement());
                }}
              >
                <RiDeleteBin7Line width="16px" height="16px" />
              </div>
            </div>
          </div>
        );
      })}
      {cartList.length !== 0 && (
        <div className="cart-last-block whole-container">
          <div className="total">합계: $ {total}</div>
          <div
            className="calculate"
            onClick={() => {
              dispatch(initializeCartList());
              dispatch(initialize());
            }}
          >
            계산하기
          </div>
        </div>
      )}
      {cartList.length === 0 && (
        <div className="no-container">
          <div>
            <GiShoppingCart className="no-item-icon" />
          </div>
          <div className="no-text1">Cart가 비어있습니다.</div>
          <div className="no-text2">Cart에 상품을 넣어주세요.</div>
          <div className="continue-link">
            <Link to="/" className="continue-link">
              계속 쇼핑하기
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
