import { useEffect, useState } from "react";

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Effect is running');
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data = await response.json();
        console.log('Data fetched:', data);
        setProducts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchProducts();
  }, []);

  console.log('Products state:', products);

  return <div>AllProductsPage</div>;
};

export default AllProductsPage;