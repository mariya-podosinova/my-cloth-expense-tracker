import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  // const [title, setTitle] = useState('')
  // const [amount, setAmount] = useState('')
  // const [date, setDate] = useState('')

  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  })

  const inputChangeHandler = (event) => {
    setUserInput(
      Object.assign(userInput, { [event.target.name]: event.target.value }),
    )
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={inputChangeHandler} />
        </div>
        <div className="new-expense__control">
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              step="1"
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__control">
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={inputChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
