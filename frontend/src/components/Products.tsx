import { useContext } from 'react';
import style from './styles/Products.module.css';
import Product from './Product';
import ProductsContext from '../context/ProductsContext';

function Products() {
  const { api } = useContext(ProductsContext);
  const { products } = api;

  return (
    <ul className={ style.products }>
      {products.map((product) => (
        <Product
          key={ product.id }
          prod={ product }
        />
      ))}
    </ul>
  );
}

export default Products;
