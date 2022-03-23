import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Car Or Vehicle', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'New Desk Wooden', amount: 294.67, date: new Date(2021, 2, 28) },
  ];

  const addExpenseHandler = expense => {
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
