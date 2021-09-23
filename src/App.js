import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      id: 'el1',
      title: 'Clothes for home wear',
      amount: 120,
      date: new Date(2021, 6, 24),
    },
    {
      id: 'el2',
      title: 'Pyjamas',
      amount: 60,
      date: new Date(2021, 7, 24),
    },
    {
      id: 'el3',
      title: 'Shoes for autumn collection',
      amount: 50,
      date: new Date(2021, 8, 24),
    },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((el) => (
        <ExpenseItem title={el.title} date={el.date} amount={el.amount} />
      ))}
      {/* <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date.toLocaleDateString()}
        amount={expenses[0].amount}
      /> */}
    </div>
  )
}

export default App
