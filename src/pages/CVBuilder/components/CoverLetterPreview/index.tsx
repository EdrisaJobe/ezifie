import { motion } from 'framer-motion';
import { CoverLetterData } from '../../types';

interface CoverLetterPreviewProps {
  data: CoverLetterData;
}

export default function CoverLetterPreview({ data }: CoverLetterPreviewProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="sticky top-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-sm p-8 min-h-[1056px] max-h-[1056px] overflow-y-auto"
      >
        {/* Sender Information */}
        <div className="mb-8">
          <p className="font-medium">{data.sender.name}</p>
          <p>{data.sender.title}</p>
          <p>{data.sender.address}</p>
          <p>{data.sender.city}</p>
          <p>{data.sender.email}</p>
          <p>{data.sender.phone}</p>
        </div>

        {/* Date */}
        <div className="mb-8">
          <p>{formatDate(data.letter.date)}</p>
        </div>

        {/* Recipient Information */}
        <div className="mb-8">
          <p className="font-medium">{data.recipient.name}</p>
          <p>{data.recipient.title}</p>
          <p>{data.recipient.company}</p>
          <p>{data.recipient.address}</p>
          <p>{data.recipient.city}</p>
        </div>

        {/* Letter Content */}
        <div className="space-y-4">
          <p>{data.letter.greeting}</p>
          
          <p>{data.letter.opening}</p>
          
          <div className="whitespace-pre-line">
            {data.letter.body}
          </div>
          
          <p>{data.letter.closing}</p>
          
          <div className="mt-8">
            <p>{data.letter.signature}</p>
            <p>{data.sender.name}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}