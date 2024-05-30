import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/MenuBar/MenuBar";
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Hotels from './Pages/Hotels';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './Pages/LoginPage';


function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/' element={<LoginPage />} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </>

  );
}

export default App;
