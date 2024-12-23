import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import DashboardHeader from './components/DashboardHeader';
import CareerProgress from './components/CareerProgress';
import RecentApplications from './components/RecentApplications';
import UpcomingInterviews from './components/UpcomingInterviews';
import CareerResources from './components/CareerResources';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <DashboardHeader />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <CareerProgress />
              <RecentApplications />
              <UpcomingInterviews />
            </div>
            <div className="space-y-8">
              <CareerResources />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}