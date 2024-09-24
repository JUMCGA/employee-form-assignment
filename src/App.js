import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';  
import logo from './logo.svg';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);
  const location = useLocation();  

  // Reload employee data whenever the location changes 
  useEffect(() => {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
      setEmployees(JSON.parse(savedEmployees));
    }
  }, [location]);  // This will re-run the effect whenever the URL path changes

  // Function to delete an employee
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Employee Management System</h1>
      </header>

      {/* Navigation Button */}
      <nav>
        {location.pathname === '/employees' ? (
          <Link to="/" className="nav-button red-button">Back Home</Link>
        ) : (
          <Link to="/employees" className="nav-button red-button">Employee List Page</Link>
        )}
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/employees" element={<EmployeeList employees={employees} onDelete={deleteEmployee} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
