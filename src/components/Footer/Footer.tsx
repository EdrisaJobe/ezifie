import { motion } from 'framer-motion';
import FooterNav from './FooterNav';
import LegalLinks from './LegalLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="p-2 border-2 border-white/20 rounded-lg">
                <img src="/logo.png" alt="Ezifie Logo" className="w-8 h-8" />
              </div>
              <span className="text-2xl font-bold">Ezifie</span>
            </div>
            <p className="text-white/80 max-w-md">
              Empowering job seekers worldwide with professional resume building tools and career resources.
            </p>
          </div>

          {/* Right column */}
          <FooterNav />
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © {currentYear} Ezifie. All rights reserved.
            </div>
            <LegalLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}