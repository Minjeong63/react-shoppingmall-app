import './Categories.css';
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';
import styled from 'styled-components';

const Categories = ({ clickedCategory, setClickedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(requests.fetchAllCategories).then((data) => {
      const changeData = data.data.map((el) => {
        if (el === 'electronics') {
          return '전자기기';
        } else if (el === 'jewelery') {
          return '쥬얼리';
        } else if (el === "men's clothing") {
          return '남성의류';
        } else if (el === "women's clothing") {
          return '여성의류';
        }
      });
      setCategories(changeData);
    });
  };

  const onClickCategory = (category) => {
    setClickedCategory(category);
  };

  return (
    <div className="category-container">
      {categories.length !== 0 && (
        <Icon selected={clickedCategory === '모두'} onClick={() => onClickCategory('모두')}>
          모두
        </Icon>
      )}
      {categories.length !== 0 &&
        categories.map((el, key) => {
          return (
            <Icon key={key} selected={clickedCategory === el} onClick={() => onClickCategory(el)}>
              {el}
            </Icon>
          );
        })}
    </div>
  );
};

const Icon = styled.div`
  padding: 20px 60px;
  background-color: ${(props) => (props.selected ? '#6c7281' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border: ${(props) => (props.selected ? 'none' : '1px solid #6c7281')};
  font-weight: 600;
  border-radius: 3px;
  margin-left: 20px;
  cursor: pointer;
`;

export default Categories;
