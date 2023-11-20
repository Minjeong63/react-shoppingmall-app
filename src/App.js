import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './components/Login';
import Main from './components/Main';
import SignUp from './components/SignUp';
import Detail from './components/Detail';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [clickedCategory, setClickedCategory] = useState('모두');

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <Main clickedCategory={clickedCategory} setClickedCategory={setClickedCategory} />
              }
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
