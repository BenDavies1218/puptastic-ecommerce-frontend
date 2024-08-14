import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Template from "./pages/_Template";
import PrivacyPage from "./pages/PrivacyPage";
import TosPage from "./pages/TosPage";
import AllProductsPage from "./pages/AllProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />}>
          <Route path="/" element={<Template />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/tos" element={<TosPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/products/:productId" element={<SingleProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
