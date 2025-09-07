import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CitizenView from './pages/CitizenView';
import AdminView from './pages/AdminView';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ReportIssue from './pages/ReportIssue';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-indian-lightGreen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<CitizenView />} />
            <Route path="/admin" element={<AdminView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/report" element={<ReportIssue />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;