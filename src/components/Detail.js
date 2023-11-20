import requests from '../api/requests';
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './Detail.css';
import Modal from './modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/cartSlice';
import { addToCart, duplicate } from '../store/cartListSlice';

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const id = location.search.split('?id=')[1];

  const [item, setItem] = useState({});
  const [inBasket, setInBasket] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get(requests.fetchAllProducts + '/' + id).then((data) => {
      setItem(data.data);
    });
  };

  const onClickInBasket = () => {
    setInBasket(true);
    setModalOpen(true);
    dispatch(increment());
    dispatch(addToCart({ ...item, number: 1 }));
  };

  const onClickMoveCart = () => {
    navigate('/cart');
  };

  return (
    <div>
      <div className="whole-container item-container">
        <div>
          <img src={item.image} width="440px" height="560px" />
        </div>
        <div className="text-container">
          <div className="category-text">{item.category}</div>
          <div className="item-title">{item.title}</div>
          <div className="item-price">$ {item.price}</div>
          <div className="item-description">{item.description}</div>
          <div className="basket-price-container">
            {inBasket ? (
              <div className="basket-move">장바구니에 담긴 제품</div>
            ) : (
              <div className="basket-in" onClick={onClickInBasket}>
                장바구니에 담기
              </div>
            )}
            <div className="basket-move" onClick={onClickMoveCart}>
              장바구니로 이동
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <Modal {...item} setModalOpen={setModalOpen} />}
    </div>
  );
};
export default Detail;
