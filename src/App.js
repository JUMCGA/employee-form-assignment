import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';  // Import EmployeeForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Employee Form</h1>  {/* Optional: Add a title */}
        <EmployeeForm />  {/* Add the EmployeeForm component here */}
      </header>
    </div>
  );
}

export default App;
