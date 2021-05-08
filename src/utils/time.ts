export const calculateTime = (initial: Date, finished: Date): string => {
  let difTime = finished.getTime() - initial.getTime();
  difTime /= 1000;
  const seconds = ('0' + Math.floor(difTime % 60)).slice(-2);
  const minuts = ('0' + Math.floor((difTime / 60) % 60)).slice(-2);
  const hours = ('0' + Math.floor((difTime / 3600) % 24)).slice(-2);
  return `${hours}:${minuts}:${seconds}`;
};
