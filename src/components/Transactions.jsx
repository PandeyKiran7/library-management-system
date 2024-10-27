import { useState } from "react";
import "./styles/Transactions.css";

function Transactions() {
  const [transactions, setTransactions] = useState([
    { id: 1, userId: 1, bookId: 2, type: "Borrow", date: "2024-10-01" },
    { id: 2, userId: 2, bookId: 1, type: "Return", date: "2024-10-05" },
    { id: 3, userId: 3, bookId: 3, type: "Borrow", date: "2024-10-10" }
  ]);

  const [newTransaction, setNewTransaction] = useState({ userId: "", bookId: "", type: "Borrow", date: "" });
  const [alert, setAlert] = useState(null); // State for alert message
  const [isEditing, setIsEditing] = useState(false); // State to track if editing
  const [currentTransactionId, setCurrentTransactionId] = useState(null); // Current transaction ID being edited

  const handleAddTransaction = () => {
    if (newTransaction.userId && newTransaction.bookId && newTransaction.date) {
      const newId = transactions.length + 1;
      setTransactions([...transactions, { id: newId, ...newTransaction }]);
      setNewTransaction({ userId: "", bookId: "", type: "Borrow", date: "" });
      setAlert("Transaction added successfully!"); // Show success alert
      setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
    }
  };

  const handleEditTransaction = (id) => {
    const transactionToEdit = transactions.find(transaction => transaction.id === id);
    setNewTransaction(transactionToEdit); // Set form fields to the transaction details
    setIsEditing(true); // Set editing mode
    setCurrentTransactionId(id); // Set the current transaction ID being edited
  };

  const handleUpdateTransaction = () => {
    if (currentTransactionId) {
      setTransactions(transactions.map(transaction =>
        transaction.id === currentTransactionId ? { ...newTransaction, id: currentTransactionId } : transaction
      ));
      setNewTransaction({ userId: "", bookId: "", type: "Borrow", date: "" });
      setIsEditing(false); // Exit editing mode
      setCurrentTransactionId(null); // Clear current transaction ID
      setAlert("Transaction updated successfully!"); // Show success alert
      setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
    }
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    setAlert("Transaction deleted successfully!"); // Show success alert
    setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
  };

  return (
    <div className="transactions-container">
      <h1>Manage Transactions</h1>

      {/* Alert Message */}
      {alert && <div className="alert">{alert}</div>}

      {/* Transaction List */}
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="transaction-item">
            <span>
              User ID: {transaction.userId} | Book ID: {transaction.bookId} | Type: {transaction.type} | Date: {transaction.date}
            </span>
            <button onClick={() => handleEditTransaction(transaction.id)} className="edit-button">
              Edit
            </button>
            <button onClick={() => handleDeleteTransaction(transaction.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Add/Edit Transaction Form */}
      <div className="add-transaction-form">
        <input
          type="text"
          placeholder="User ID"
          value={newTransaction.userId}
          onChange={(e) => setNewTransaction({ ...newTransaction, userId: e.target.value })}
        />
        <input
          type="text"
          placeholder="Book ID"
          value={newTransaction.bookId}
          onChange={(e) => setNewTransaction({ ...newTransaction, bookId: e.target.value })}
        />
        <select
          value={newTransaction.type}
          onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
        >
          <option value="Borrow">Borrow</option>
          <option value="Return">Return</option>
        </select>
        <input
          type="date"
          value={newTransaction.date}
          onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
        />
        <button
          onClick={isEditing ? handleUpdateTransaction : handleAddTransaction} // Determine action based on editing state
          className="add-transaction-button"
          disabled={!newTransaction.userId || !newTransaction.bookId || !newTransaction.date} // Disable if fields are empty
        >
          {isEditing ? "Update Transaction" : "Add Transaction"}
        </button>
      </div>
    </div>
  );
}

export default Transactions;
