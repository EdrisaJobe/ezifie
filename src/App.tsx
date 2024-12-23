import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Features from './components/Features';
import Banner from './components/Banner';
import CVBuilder from './components/CVBuilder';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import FAQSection from './components/FAQ/FAQSection';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ResumeBuilder from './pages/ResumeBuilder';
import ResumeTemplates from './pages/ResumeTemplates';
import CVBuilderPage from './pages/CVBuilder';
import PricingPage from './pages/Pricing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resume-templates" element={<ResumeTemplates />} />
        <Route path="/cv-builder" element={<CVBuilderPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <div className="space-y-20">
              <Values />
              <TestimonialsSection />
              <Features />
              <Banner />
              <CVBuilder />
              <div className="pb-20">
                <FAQSection />
              </div>
            </div>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;