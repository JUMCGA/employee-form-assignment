import React from 'react';
import './EmployeeForm.css';


class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', title: '', department: '' };
    }

    // Method for handling input changes
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Method for handling form submission
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with the following data:", this.state);

        this.setState({ name: '', email: '', title: '', department: '' });
    }

    render() {
        return (
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
        );
    }
}

export default EmployeeForm;
