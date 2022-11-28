export const getButtonsChapters = (chapters: number) => {
  const numbers = [];
  for (let i = 1; i <= chapters; i++) {
    numbers.push(i);
  }
  return numbers;
};
