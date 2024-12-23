import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface AuthButtonsProps {
  mobile?: boolean;
  onLogin: () => void;
}

export default function AuthButtons({ mobile = false, onLogin }: AuthButtonsProps) {
  const navigate = useNavigate();
  const baseLoginClass = "relative overflow-hidden text-primary border-2 border-primary rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary-hover hover:text-primary-hover";
  const baseSignupClass = "relative overflow-hidden bg-primary text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:bg-primary-hover";
  
  const buttonContent = (text: string, isPrimary: boolean = false) => (
    <>
      <span className="relative z-10">{text}</span>
      <div className={`absolute inset-0 ${isPrimary ? 'bg-primary-hover' : 'bg-primary-light'} transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100`} />
    </>
  );

  if (mobile) {
    return (
      <>
        <button 
          onClick={onLogin}
          className={`w-full px-4 py-3 group ${baseLoginClass}`}
        >
          {buttonContent('Login')}
        </button>
        <button 
          onClick={() => navigate('/register')}
          className={`w-full px-4 py-3 group ${baseSignupClass}`}
        >
          {buttonContent('Sign Up', true)}
        </button>
      </>
    );
  }

  return (
    <>
      <motion.button 
        onClick={onLogin}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`px-6 py-2.5 group font-medium ${baseLoginClass}`}
      >
        {buttonContent('Login')}
      </motion.button>
      <motion.button 
        onClick={() => navigate('/register')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`px-6 py-2.5 group font-medium ${baseSignupClass}`}
      >
        {buttonContent('Sign Up', true)}
      </motion.button>
    </>
  );
}