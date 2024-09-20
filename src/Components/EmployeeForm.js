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
            employees: []  // Added state to hold all employees
        };
    }

    // Load employees from local storage when the component mounts
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

    // Method to handle form submission
    handleSubmit = (event) => {
        event.preventDefault();

        const newEmployee = {
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
                    {this.state.employees.map((employee, index) => (
                        <li key={index}>
                            {employee.name} - {employee.email} - {employee.title} - {employee.department}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default EmployeeForm;
