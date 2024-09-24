import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '', 
            email: '', 
            title: '', 
            department: '',
            employees: []  
        };
    }

    // Load employees from local storage 
    componentDidMount() {
        const savedEmployees = localStorage.getItem('employees');
        if (savedEmployees) {
            this.setState({ employees: JSON.parse(savedEmployees) });
        }
    }

    // Method to handle input changes
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Method to generate the next sequential ID
    getNextId = () => {
        const { employees } = this.state;

        // Check if there are employees and if they have valid IDs
        if (employees.length === 0) {
            return 1;  // If no employees exist, start with ID 1
        }

        // Find the highest ID from employees who have an ID
        const ids = employees
            .filter(employee => employee.id !== null && employee.id !== undefined)  // Filter out employees without an ID
            .map(employee => employee.id);  
        
        if (ids.length === 0) {
            return 1;  // If no valid IDs found, start with 1
        }

        const highestId = Math.max(...ids);  // Find the highest ID
        return highestId + 1;  // Return the next available ID
    }

    // Method to handle form submission
    handleSubmit = (event) => {
        event.preventDefault();

        // Generate a new employee with a sequential id
        const newEmployee = {
            id: this.getNextId(),  
            name: this.state.name,
            email: this.state.email,
            title: this.state.title,
            department: this.state.department
        };

        const updatedEmployees = [...this.state.employees, newEmployee];

        // Update the state and save to local storage
        this.setState({ 
            employees: updatedEmployees,
            name: '', 
            email: '', 
            title: '', 
            department: ''
        });
        this.saveData(updatedEmployees);
    }

    // Method to save employee data to local storage
    saveData = (employeesArray) => {
        localStorage.setItem('employees', JSON.stringify(employeesArray));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>  
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}  
                        />
                    </div>

                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}  
                        />
                    </div>

                    <div>
                        <label>Job Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleInputChange}  
                        />
                    </div>

                    <div>
                        <label>Department:</label>
                        <input
                            type="text"
                            name="department"
                            value={this.state.department}
                            onChange={this.handleInputChange}  
                        />
                    </div>

                    <button type="submit">Submit</button>  
                </form>

                <h2>Employee List</h2>
                <ul>
                    {this.state.employees.map((employee) => (
                        <li key={employee.id}>
                            {employee.name} - {employee.email} - {employee.title} - {employee.department}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default EmployeeForm;

