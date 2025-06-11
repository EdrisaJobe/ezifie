import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  // TODO: Replace with actual auth state
  const isAuthenticated = false;

  const handleResumeClick = () => {
    if (isAuthenticated) {
      navigate('/resume-builder');
    } else {
      navigate('/login', { state: { from: '/resume-builder' } });
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary-light to-white pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
          Ezifie
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Build Professional Resumes in Minutes
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Simple, clean, and effective resume builder. No complicated features, just what you need to land your next job.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={handleResumeClick}
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-hover transition-colors text-lg"
          >
            Create Resume
          </button>
          <button 
            onClick={() => navigate('/pricing')}
            className="px-8 py-4 bg-white text-primary rounded-lg font-semibold border-2 border-primary hover:bg-primary-light transition-colors text-lg"
          >
            View Pricing
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto text-center text-sm text-gray-600">
          <div>
            <div className="font-semibold text-gray-900">✓ Free to use</div>
            <div>Basic templates</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">✓ ATS-friendly</div>
            <div>Works everywhere</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">✓ Quick export</div>
            <div>PDF download</div>
          </div>
        </div>
      </div>
    </div>
  );
}