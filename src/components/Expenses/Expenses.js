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
  return (
    <div>
      <ExpensesFilter onChangeFilter={filterChangeHandler} year={year} />
      <Card className="expenses">
        {props.expenses.map((el) => (
          <ExpenseItem title={el.title} date={el.date} amount={el.amount} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
