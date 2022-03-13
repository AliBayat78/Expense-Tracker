import { useEffect, useState } from 'react'
import OverViewComponent from './OverViewComponent'
import TransactionComponent from './TransactionComponent'

const ExpenseApp = () => {
  const [transactions, setTransactions] = useState([])

  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  // adding the form Value from TransactionForm component to a State
  const addTransaction = (formValue) => {
    const value = { ...formValue, id: Date.now() }
    setTransactions([...transactions, value])
  }

  // changing the expense and income base on changes in transactions
  // its important we notice its based on changes not just adding it
  // we may delete or edit an item so its based on changes
  useEffect(() => {
    let inc = 0
    let exp = 0
    transactions.forEach((i) => {
      i.type === 'expense' ? (exp = exp + parseFloat(i.amount)) : (inc = inc + parseFloat(i.amount))
    })
    setIncome(inc)
    setExpense(exp)
  }, [transactions])

  return (
    <div className="container">
      <OverViewComponent
        transactions={transactions}
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransactionComponent setTransactions={setTransactions} transactions={transactions} />
    </div>
  )
}

export default ExpenseApp
