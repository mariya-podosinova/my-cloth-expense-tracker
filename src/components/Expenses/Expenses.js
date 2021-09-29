import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
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
        {filteredExpenses.map((el) => (
          <ExpenseItem
            key={el.id}
            title={el.title}
            date={el.date}
            amount={el.amount}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
