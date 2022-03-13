import TransactionForm from './TransactionForm'
import { useState } from 'react'
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy'

const OverViewComponent = ({ addTransaction, income, expense }) => {
  // toggle with a button => Add (show the form) - Cancel (Hide the Form)
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <div className="balance">
        <Tooltip arrow="true" position="bottom" title={`$ Balance = ${income} - ${expense}`}>
          <p>Balance: {income - expense}$</p>
        </Tooltip>
        <button
          className={`${isShow ? 'cancel' : 'add'}`}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? 'Cancel' : 'Add'}
        </button>
      </div>
      {isShow ? <TransactionForm addTransaction={addTransaction} setIsShow={setIsShow} /> : null}
      <div className="exp-inc">
        <div className="exp">
          Expense <span>{expense}$</span>
        </div>
        <div className="inc">
          Income <span>{income}$</span>
        </div>
      </div>
    </>
  )
}

export default OverViewComponent
