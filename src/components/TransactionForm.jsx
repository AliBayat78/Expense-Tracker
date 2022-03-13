import { useState } from 'react'

const TransactionForm = ({ addTransaction, setIsShow }) => {
  const [formValue, setFormValue] = useState({ type: 'expense', amount: 0, desc: '' })

  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    addTransaction(formValue)
    setIsShow(false)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        className="amount-input"
        onChange={changeHandler}
        placeholder="amount"
        type="number"
        name="amount"
        value={formValue.amount}
      />
      <input
        className="desc-input"
        onChange={changeHandler}
        placeholder="Description"
        type="text"
        name="desc"
        value={formValue.desc}
      />
      <div className="radioBox">
        <input
          type="radio"
          name="type"
          value={formValue.type}
          value="expense"
          checked={formValue.type === 'expense'}
          onChange={changeHandler}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          name="type"
          value={formValue.type}
          value="income"
          checked={formValue.type === 'income'}
          onChange={changeHandler}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  )
}

export default TransactionForm
