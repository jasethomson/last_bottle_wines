import { TechDetails } from '../../types';

interface TranslateAltKey {
  key: string;
}
const translateAltKey = ({ key }: TranslateAltKey): keyof TechDetails | null => {
  switch (key) {
    case 'winemaker':
      return 'wine_maker';
    default:
      return null;
  }
};

export default translateAltKey;
