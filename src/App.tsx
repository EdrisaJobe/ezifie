import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import Footer from './components/layout/Footer';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ResumeBuilder from './pages/ResumeBuilder';
import PricingPage from './pages/Pricing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <About />
            <TestimonialsSection />
            <FAQSection />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;