import { useState } from 'react';
import './Login.css';
import { logInEmail } from '../firebaseConfig';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/loginSlice';

const LogIn = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="inner-container">
        <div className="login-title">로그인</div>
        <div className="input-container">
          <input
            className="input"
            type="text"
            value={email}
            placeholder="E-mail"
            onChange={(e) => onChangeEmail(e)}
          />
          <input
            className="input"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => onChangePassword(e)}
          />
        </div>
        <div
          className="login-button"
          onClick={() => {
            logInEmail(email, password);
            dispatch(login());
            navigate('/');
          }}
        >
          로그인
        </div>
        <div className="account">
          계정이 없습니까?{' '}
          <span className="sign-up">
            <Link to="/signup" className="link">
              가입하기
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
