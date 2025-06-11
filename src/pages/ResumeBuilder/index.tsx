import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import ResumeHeader from './components/ResumeHeader';
import ResumeEditor from './components/ResumeEditor';
import PreviewPanel from './components/ResumePreview/PreviewPanel';
import { ResumeData } from './types';
import { defaultFont } from './utils/fonts';
import { defaultColor } from './utils/colors';

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      title: '',
      summary: '',
      linkedin: ''
    },
    experience: [],
    education: [],
    skills: [],
    languages: [],
    font: defaultFont,
    color: defaultColor
  });

  const handleTestData = (data: Partial<ResumeData>) => {
    setResumeData(prev => ({
      ...prev,
      ...data
    }));
  };

  const handleFontChange = (font: ResumeData['font']) => {
    setResumeData(prev => ({ ...prev, font }));
  };

  const handleColorChange = (color: ResumeData['color']) => {
    setResumeData(prev => ({ ...prev, color }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <ResumeHeader onTestData={handleTestData} data={resumeData} />
        <main className="max-w-[1600px] mx-auto px-6 py-12">
          <div className="flex gap-12">
            <div className="w-full max-w-3xl space-y-8">
              <ResumeEditor data={resumeData} onChange={setResumeData} />
            </div>
            <PreviewPanel 
              data={resumeData} 
              onFontChange={handleFontChange}
              onColorChange={handleColorChange}
            />
          </div>
        </main>
      </div>
    </div>
  );
}