import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newPage/NewUser.jsx";
import ProductList from "./pages/productList/ProductList.jsx";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/Newproduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
