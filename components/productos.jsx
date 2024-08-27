import React, { useEffect, useState } from 'react';
import { getProductos, deleteProducto } from '../services/productoservice.jsx'; // Adjust the path as necessary
import '../styles/productos.css';
import deleteIcon from '../images/borrar.png';

// Componente Header
const HeaderP = () => {
  return (
    <header className="headerP">
      <h1>GOLD</h1>
      <h1>CLUB</h1>
    </header>
  );
};

const ProductosList = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProductos = async () => {
        try {
          const data = await getProductos();
          setProductos(data);
          setLoading(false);
        } catch (error) {
          setError('Error fetching products');
          setLoading(false);
        }
      };
  
      fetchProductos();
    }, []);
  
    const handleDelete = async (id) => {
      try {
        await deleteProducto(id); // Asumiendo que tienes una función deleteProducto
        // Filtra el producto eliminado del estado
        const productosActualizados = productos.filter(producto => producto.id_PRODUCT !== id);
        setProductos(productosActualizados);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    };
  
    return (
      <div>
        <HeaderP /> {/* El encabezado siempre se mostrará */}
        <div className="productos-list">
          {loading && <p>Loading products...</p>}
          {error && <p>{error}</p>}
          {productos.length > 0 && productos.map((producto, index) => (
            <div className='producto-cardAll' key={producto.id_PRODUCT || index}>
              <div className="producto-card">
                <div className="producto-nombre-descripcion">
                  <h2>{producto.name_PRODUCT}</h2>
                  <p>{producto.description_PRODUCT}</p>
                </div>
                <div className="producto-info">
                  <p>Cantidad: {producto.amount_PRODUCT}</p>
                  <p>Precio: ${Number(producto.price_PRODUCT)?.toFixed(2) || 'N/A'}</p>
                </div>
                <button 
                  className="delete-button"
                  onClick={() => handleDelete(producto.id_PRODUCT)}
                >
                  <img src={deleteIcon} alt="Eliminar" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
    

export default ProductosList;