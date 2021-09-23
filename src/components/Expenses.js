import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((el) => (
        <ExpenseItem title={el.title} date={el.date} amount={el.amount} />
      ))}
    </div>
  )
}

export default Expenses
