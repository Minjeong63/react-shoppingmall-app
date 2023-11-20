import Categories from './Categories';
import Title from './Title';
import ProductList from './ProductList';

const Main = ({ clickedCategory, setClickedCategory }) => {
  return (
    <>
      <Title>Products</Title>
      <Categories clickedCategory={clickedCategory} setClickedCategory={setClickedCategory} />
      <ProductList clickedCategory={clickedCategory} />
    </>
  );
};
export default Main;
