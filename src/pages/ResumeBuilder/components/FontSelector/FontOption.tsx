import { Font } from '../../types';

interface FontOptionProps {
  font: Font;
}

export default function FontOption({ font }: FontOptionProps) {
  return (
    <div className="flex items-center gap-3 py-2">
      <span style={{ fontFamily: font.family }} className="text-base">
        {font.name}
      </span>
      <span className="text-xs text-gray-500">
        ({font.category})
      </span>
    </div>
  );
}