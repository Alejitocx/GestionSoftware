import axios from 'axios';

export const getProductos = async () => {
  try {
      const response = await axios.get('http://localhost:8090/ver/Produc/Productos');
      return response.data;
  } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
  }
};


export const deleteProducto = async (id_PRODUCT) => {
  await axios.delete(`http://localhost:8090/ver/Produc/ProductE/${id_PRODUCT}`);
};