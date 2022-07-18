import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import EditUser from "./pages/EditUser";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Home />} path="/home" />
          <Route element={<EditUser />} path="/AddEditUser/" />
          <Route element={<EditUser />} path="/AddEditUser/:id" />
          <Route element={<Info />} path="/userInfo/:id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
