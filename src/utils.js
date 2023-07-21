const getTodayDate = () => {
  const now = new Date(Date.now());
  const year = now.getFullYear();
  const month = now.toDateString().split(' ')[1];
  const date = now.getDate();
  return [year, month, date];
};

export {getTodayDate};
