import { useNavigate } from 'react-router-dom';
import './Modal.css';
import { RiDeleteBin7Line } from 'react-icons/ri';

const Modal = ({ image, category, title, price, setModalOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="first-block">
        <div>
          <img src={image} width="100px" height="120px" />
        </div>
        <div className="modal-container">
          <div className="modal-category">{category}</div>
          <div className="modal-title">{title}</div>
          <div className="modal-price">
            {price} x 1 = $ {price}
          </div>
        </div>
        <div onClick={() => setModalOpen(false)} className="delete">
          <RiDeleteBin7Line width="16px" height="16px" />
        </div>
      </div>
      <div className="second-block">합계: $ {price}</div>
      <div className="third-block" onClick={() => navigate('/cart')}>
        장바구니로 이동
      </div>
    </div>
  );
};
export default Modal;
