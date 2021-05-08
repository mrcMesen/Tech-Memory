export const calculateTime = (initial: Date, finished: Date) => {
  let difTime = finished.getTime() - initial.getTime();
  difTime /= 1000;
  const seconds = ('0' + Math.floor(difTime % 60)).slice(-2);
  const minutes = ('0' + Math.floor((difTime / 60) % 60)).slice(-2);
  const hours = ('0' + Math.floor((difTime / 3600) % 24)).slice(-2);
  return {
    fultime: `${hours}:${minutes}:${seconds}`,
    seconds,
    minutes,
    hours,
  };
};
