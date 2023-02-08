import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auhentication from "./components/Authentication";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />

            <Route path="auth" element={<Auhentication />} />
            <Route path="add-book" element={<AddBook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
