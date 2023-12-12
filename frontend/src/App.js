import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import PublicRoute from "./pages/routes/PublicRoute";
import ProtectedRoute from "./pages/routes/ProtectedRoute";
import AllProducts from "./pages/Home/AllProducts.js";
import AddProduct from "./pages/Home/AddProduct.js";

function App() {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route
          path=""
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<AllProducts />} />
          <Route path="addProduct" element={<AddProduct />} />
        </Route>
        <Route
          path="/auth/register"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
