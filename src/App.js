import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="/order-review" element={<OrderReview />} />
        <Route path="/manage-inventory" element={<ManageInventory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
