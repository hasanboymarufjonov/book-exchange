import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Account from "./components/Account";
import Modal from "./components/Modal";
import Home from "./components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />

            <Route path="sign-up" element={<Account />} />
            <Route path="modal" element={<Modal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
