import { useState } from 'react';
import Navbar from '../../components/Navbar';
import CoverLetterHeader from './components/CoverLetterHeader';
import CoverLetterEditor from './components/CoverLetterEditor';
import CoverLetterPreview from './components/CoverLetterPreview';
import { CoverLetterData } from './types';

export default function CoverLetterBuilder() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <CoverLetterHeader />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center min-h-[500px]">
            <h3 className="text-5xl font-bold text-gray-800">Coming Soon</h3>
          </div>
        </main>
      </div>
    </div>
  );
}