import { useEffect, useState } from 'react'

const TransactionComponent = ({ transactions, setTransactions }) => {
  // copy of transaction for new filtering
  const [filterTnc, setFilterTnc] = useState(transactions)
  // a state for saving the search input value
  const [inputValue, setInputValue] = useState('')

  const filterHandler = (searchValue) => {
    const newTnc = transactions.filter((i) =>
      i.desc.toLowerCase().includes(searchValue.toLowerCase()),
    )
    setFilterTnc(newTnc)
  }

  const changeHandler = (e) => {
    setInputValue(e.target.value)
    filterHandler(e.target.value)
  }

  // removing items
  const removeHandler = (id) => {
    const newValue = transactions.filter((i) => i.id !== id)
    setTransactions(newValue)
  }

  // with changing transactions -> check the search input and do the filter again
  useEffect(() => {
    filterHandler(inputValue)
  }, [transactions])

  if (!transactions.length) return <h4>add some transaction</h4>

  return (
    <>
      <input
        value={inputValue}
        onChange={changeHandler}
        className="search-input"
        placeholder="Search for tnx..."
        type="text"
      />
      {!filterTnc.length ? (
        <p>No Matches Found</p>
      ) : (
        filterTnc.map((i) => {
          return (
            <div
              key={i.id}
              className="transaction-comp"
              style={{ borderRight: i.type === 'income' ? '4px solid green' : '4px solid red' }}
            >
              <div>{i.desc}</div>
              <div>
                <span>{i.amount}$ </span>&nbsp;
                <button onClick={() => removeHandler(i.id)} className="cancel">
                  Delete
                </button>
              </div>
            </div>
          )
        })
      )}
    </>
  )
}

export default TransactionComponent
