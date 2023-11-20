import { useState } from 'react';
import './Login.css';
import { signUpEmail } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
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
        <div className="login-title">회원가입</div>
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
            signUpEmail(email, password);
            navigate('/login');
          }}
        >
          가입하기
        </div>
      </div>
    </div>
  );
};
export default SignUp;
