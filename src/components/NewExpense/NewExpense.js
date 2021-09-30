import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false)
  const showFormHandler = () => {
    setShowForm(!showForm)
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }
  const cancelHandler = () => {
    setShowForm(false)
  }
  return (
    <div className="new-expense">
      {showForm || <button onClick={showFormHandler}>Add new Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
