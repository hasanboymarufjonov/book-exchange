import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Account from "./components/Account";
import Layout from "./components/Layout";
import SignIn from "./components/SignIn";
import Modal from "./components/Modal";
import Card from "./components/Card";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navbar />} />
            <Route path="sign-up" element={<Account />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="modal" element={<Modal />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;
