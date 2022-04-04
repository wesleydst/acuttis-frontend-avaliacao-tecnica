function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function convertMinutesToHHmm(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}