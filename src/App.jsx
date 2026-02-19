import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import Navbar from './components/Navbar'
import AllDoctors from './components/All_doctor';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ flex: 1, paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/doctors" element={<AllDoctors />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
