import './ProductList.css';
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increment } from '../store/cartSlice';
import { addToCart } from '../store/cartListSlice';
import Modal from './modal/Modal';

const ProductList = ({ clickedCategory }) => {
  const dispatch = useDispatch();

  const [itemLength, setItemLenght] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    fetchData();
  }, [clickedCategory]);

  const fetchData = async () => {
    let url = '';
    if (clickedCategory === '모두') {
      url = requests.fetchAllProducts;
    } else if (clickedCategory === '전자기기') {
      url = requests.fetchSpecificCategory + 'electronics';
    } else if (clickedCategory === '쥬얼리') {
      url = requests.fetchSpecificCategory + 'jewelery';
    } else if (clickedCategory === '남성의류') {
      url = requests.fetchSpecificCategory + "men's clothing";
    } else if (clickedCategory === '여성의류') {
      url = requests.fetchSpecificCategory + "women's clothing";
    }
    const response = await axios.get(url).then((data) => {
      setItemLenght(data.data.length);
      setItemList(data.data);
    });
  };

  const onClickInBasket = (e, item) => {
    e.preventDefault();
    setModalOpen(true);
    dispatch(increment());
    setModalData(item);
    dispatch(addToCart({ ...item, number: 1 }));
  };

  return (
    <div className="whole-container container">
      <div className="item-length">Showing: {itemLength} items</div>
      <div className="item-list">
        {itemList.length !== 0 &&
          itemList.map((item, key) => {
            return (
              <Link key={key} to={`detail?id=${item.id}`} className="link">
                <div className="item">
                  <img src={item.image} width="180px" height="200px" />
                  <div className="ellipsis">{item.title}</div>
                  <div className="basket-price-container">
                    <div className="basket" onClick={(e) => onClickInBasket(e, item)}>
                      장바구니에 담기
                    </div>
                    <div>$ {item.price}</div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      {modalOpen && <Modal {...modalData} setModalOpen={setModalOpen} />}
    </div>
  );
};
export default ProductList;
