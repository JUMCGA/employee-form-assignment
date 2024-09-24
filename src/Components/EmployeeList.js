import React from 'react';

function EmployeeList(props) {
    return (
        <div className="employee-list">
            {props.employees.map((employee) => (
                <div className="employee-item" key={employee.id}>
                    <h2>{employee.name}</h2>
                    <p><strong>Email:</strong> {employee.email}</p>
                    <p><strong>Job Title:</strong> {employee.title}</p>
                    <p><strong>Department:</strong> {employee.department}</p>
                    <button 
                        onClick={() => props.onDelete(employee.id)}  
                        className="delete-button"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default EmployeeList;
