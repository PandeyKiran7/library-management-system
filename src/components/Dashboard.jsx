import { Link } from "react-router-dom";
import "./styles/Dashboard.css";

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard">
      <h1>Library Dashboard</h1>
      <button className="logout-button" onClick={onLogout}>Logout</button>
      <div className="dashboard-links">
        <Link to="/books" className="dashboard-link">Manage Books</Link>
        <Link to="/users" className="dashboard-link">Manage Users</Link>
        <Link to="/transactions" className="dashboard-link">Manage Transactions</Link>
        <Link to="/notifications" className="dashboard-link">Notifications</Link>
      </div>
    </div>
  );
}

export default Dashboard;
