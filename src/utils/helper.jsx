// Check if currentPath is a string and has an includes method
export const isLinkActive = (url, currentPath) => typeof currentPath === 'string' && currentPath.includes(url);

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbol = '!@#$%^&*()_+';

export const generateCoupon = ({ prefix, size, includeCharacters, includeNumbers, includeSymbols }) => {
  if (!includeNumbers && !includeCharacters && !includeSymbols) {
    return ''; 
  }
  
  let result = prefix || "";

  const entireString = ((includeCharacters ? allLetters : "") +
                                (includeNumbers ? allNumbers : "") +
                                (includeSymbols ? allSymbol : ""));

  const loopLength = size - result.length;

  for (let i = 0; i < loopLength; i++) {
    const randomNum = Math.floor(Math.random() * entireString.length);
    result += entireString[randomNum];
  }

  return result;
}


export const formatTime = (timeInSeconds) => {
  const SECONDS_PER_HOUR = 3600;
  const MINUTES_PER_HOUR = 60;

  const hours = Math.floor(timeInSeconds / SECONDS_PER_HOUR);
  const minutes = Math.floor((timeInSeconds % SECONDS_PER_HOUR) / MINUTES_PER_HOUR);
  const seconds = timeInSeconds % MINUTES_PER_HOUR;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
};

