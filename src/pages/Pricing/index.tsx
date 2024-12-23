import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import PricingHeader from './components/PricingHeader';
import PricingCards from './components/PricingCards';
import PricingComparison from './components/PricingComparison';
import PricingTestimonials from './components/PricingTestimonials';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <PricingHeader />
          <PricingCards />
          <PricingComparison />
          <PricingTestimonials />
        </main>
      </div>
      <Footer />
    </div>
  );
}