import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import UserSignup from './pages/UserSignup';
import LeadsPanel from './pages/LeadsPanel';
import AddLead from './pages/AddLead';
import { ToastContainer } from 'react-toastify';

function App() {
  return (

    <>
      <ToastContainer />


      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<UserSignup />} />
          <Route path="/leads" element={<LeadsPanel />} />
          <Route path="add-lead" element={<AddLead />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
