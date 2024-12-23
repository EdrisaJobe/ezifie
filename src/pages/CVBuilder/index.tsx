import { useState } from 'react';
import Navbar from '../../components/Navbar';
import CoverLetterHeader from './components/CoverLetterHeader';
import CoverLetterEditor from './components/CoverLetterEditor';
import CoverLetterPreview from './components/CoverLetterPreview';
import { CoverLetterData } from './types';

export default function CoverLetterBuilder() {
  const [coverLetterData, setCoverLetterData] = useState<CoverLetterData>({
    recipient: {
      name: '',
      title: '',
      company: '',
      address: '',
      city: '',
      email: '',
    },
    sender: {
      name: '',
      title: '',
      address: '',
      city: '',
      email: '',
      phone: '',
    },
    letter: {
      date: new Date().toISOString().split('T')[0],
      greeting: '',
      opening: '',
      body: '',
      closing: '',
      signature: '',
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <CoverLetterHeader />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <CoverLetterEditor data={coverLetterData} onChange={setCoverLetterData} />
            <CoverLetterPreview data={coverLetterData} />
          </div>
        </main>
      </div>
    </div>
  );
}