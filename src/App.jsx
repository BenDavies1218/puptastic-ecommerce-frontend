import { Routes, Route } from "react-router-dom";
import Template from "./pages/_Template";
import Homepage from "./pages/Homepage";
import PrivacyPage from "./pages/PrivacyPage";
import TosPage from "./pages/TosPage";
import AllProductsPage from "./pages/AllProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Homepage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms-&-conditions" element={<TosPage />} />
        <Route path="shop" element={<AllProductsPage />} />
        <Route path="shop/:productId" element={<SingleProductPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
