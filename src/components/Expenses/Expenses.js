import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import './Expenses.css'

function Expenses(props) {
  const [year, setYear] = useState(2021)
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter((el) => {
    return el.date.getFullYear().toString() === year
  })
  return (
    <div>
      <ExpensesFilter onChangeFilter={filterChangeHandler} year={year} />
      <Card className="expenses">
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
