import React from 'react'

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const expenses = [
    {
      id: 'el1',
      title: 'Cloth for home wear',
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
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
