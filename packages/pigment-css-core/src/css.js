import { generateErrorMessage } from './utils';

export default function css() {
  console.error(generateErrorMessage('css'));
  return () => {
    console.error(generateErrorMessage('css'));
  };
}
