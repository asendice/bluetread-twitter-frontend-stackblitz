// rounds number up to single digit excluding decimals
const roundToSingleDigit = (num) => {
  if (num && num.toString().length > 2) {
    return Math.round(num * 1) / 1;
  } else return num;
};

// converts a number from miliseconds to seconds, minutes, hours, days by
// returning a templated string, with a number rounded up to the nearst digit excluding decimals and the corresponding letter

export const convertMilisecondsToReadableTime = (num) => {
  switch (num > 0) {
    case num > 1000 && num < 60000:
      const seconds = num / 1000;
      return `${roundToSingleDigit(seconds)}s`;
    case num >= 60000 && num < 3600000:
      const minutes = num / 60000;
      return `${roundToSingleDigit(minutes)}m`;
    case num >= 3600000 && num < 86400000:
      const hours = num / 3600000;
      return `${roundToSingleDigit(hours)}h`;
    case num >= 86400000:
      const days = num / 86400000;
      return `${roundToSingleDigit(days)}d`;
    default:
      return `Now`;
  }
};
