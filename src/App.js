import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import UserSignup from './pages/UserSignup';
import LeadsPanel from './pages/LeadsPanel';
import AddLead from './pages/AddLead';
import { isAuthenticated } from './utils/auth'

import './App.css';

const PrivateRoute = ({ children, redirectTo }) => {
  return isAuthenticated() ? children : <Navigate to={redirectTo} />
}


function App() {
  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<UserSignup />} />

          <Route path="/leads" element={<PrivateRoute redirectTo="/">
            <LeadsPanel />
          </PrivateRoute>} />

          <Route path="/add-lead" element={<PrivateRoute redirectTo="/">
            <AddLead />
          </PrivateRoute>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
