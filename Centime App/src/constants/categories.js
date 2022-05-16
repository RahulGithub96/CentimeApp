const incomeColors = ['#123123','#165f40','#0bc77e'];
const expenseColors = ['#b50d12','#ffae8a','#f55b5f'];

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColors[0] },
  { type: 'Extra income', amount: 0, color: incomeColors[1] },
  { type: 'Salary', amount: 0, color: incomeColors[2] }
];

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0] },
  { type: 'Phone', amount: 0, color: expenseColors[1] },
  { type: 'Other', amount: 0, color: expenseColors[2] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};