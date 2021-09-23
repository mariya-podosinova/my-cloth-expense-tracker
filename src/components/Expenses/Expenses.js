import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((el) => (
        <ExpenseItem title={el.title} date={el.date} amount={el.amount} />
      ))}
    </Card>
  )
}

export default Expenses
