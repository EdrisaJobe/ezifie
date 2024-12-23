import { CoverLetterData } from '../../types';
import RecipientForm from './forms/RecipientForm';
import SenderForm from './forms/SenderForm';
import LetterForm from './forms/LetterForm';

interface CoverLetterEditorProps {
  data: CoverLetterData;
  onChange: (data: CoverLetterData) => void;
}

export default function CoverLetterEditor({ data, onChange }: CoverLetterEditorProps) {
  return (
    <div className="space-y-6">
      <RecipientForm
        data={data.recipient}
        onChange={(recipient) => onChange({ ...data, recipient })}
      />
      <SenderForm
        data={data.sender}
        onChange={(sender) => onChange({ ...data, sender })}
      />
      <LetterForm
        data={data.letter}
        onChange={(letter) => onChange({ ...data, letter })}
      />
    </div>
  );
}