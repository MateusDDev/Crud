/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaTrash, FaEdit } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Product } from '../types/api';

type ProductsProps = {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
};

function Products({ products, setProducts }: ProductsProps) {
  const handleDelete = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost:5000/products/${id}`);
      const { message } = res.data;
      const newProducts = products.filter((prod) => prod.id !== id);

      setProducts(newProducts);
      toast.success(message);
    } catch (error: any) {
      console.log(error.message);
      toast.error('Erro ao excluir o produto.');
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Criado em</th>
          <th>Atualizado em</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {products.map((prod) => (
          <tr key={ prod.id }>
            <td>{prod.name}</td>
            <td>{prod.description}</td>
            <td>{prod.price}</td>
            <td>{prod.quantity}</td>
            <td>{prod.created_at}</td>
            <td>{prod.updated_at}</td>
            <td>
              <FaEdit />
            </td>
            <td>
              <FaTrash onClick={ () => handleDelete(prod.id) } />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Products;
