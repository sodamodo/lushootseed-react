import * as React from 'react'
import './registration.scss';
import register from '../../services/apiCalls';
import axios from 'axios';


class Registration extends React.Component {
    constructor(props) {
        // this.BASE_URL = 'http://127.0.0.1:5000/'

        super(props);
        this.state = {
            authenticated: null,
            email: '',
            password: '',
            password_repeat: '',
            first_name: '',
            last_name: '',
            password_error: '',
            form_error: '',
            has_registered: false,
            user_exists_error: ''

        };
    }

    handleEmailChange(e)  {
        this.setState({email: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    handlePasswordRepeatChange(e) {
        this.setState({password_repeat: e.target.value})
    }

    handleFirstName(e) {
        this.setState({first_name: e.target.value})
    }

    handleLastName(e) {
        this.setState({last_name: e.target.value})
    }

    handleSubmit(e) {

        this.setState({password_error: ""})
        this.setState({form_error: ""})
        this.setState({user_exists_error: ""})

        if (this.state.password != this.state.password_repeat) {
            this.setState({password_error: "Passwords need to be the same"})
        }
        else if (this.state.email != '' && this.state.firstname != '' && this.state.last_name != '') {
            axios.post('http://127.0.0.1:5000/register/', [
                    this.state.email,
                    this.state.first_name,
                    this.state.last_name,
                    this.state.password_repeat
            ]
        ).catch((error) => {
                if (error.response.status == 303) {
                    this.setState({user_exists_error: "A user with this email address already exists"})
                }

        }).then(() => {
            this.setState({has_registered: true})
        })

        }

        else {
            this.setState({form_error: "Please fill out all fields in the form"})
        }
    }

    render() {
        if (this.state.has_registered === false) {
            return (
                <div className="Registration">

                    <div className="Registration-header">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                    </div>

                    <div className="Registration-fields-container">

                        <div className="Registration-email">
                            <div className="Registration-field-title">
                                <b>Email</b>
                            </div>

                            <div className="Registration-input-field">
                                <input type="text" placeholder="Enter Email" name="email"  onChange={(e) => this.handleEmailChange(e)} />
                            </div>

                        </div>


                        <div className="Registration-password">
                            <div className="Registration-field-title">
                                <b>Password</b>
                            </div>

                            <div className="Registration-input-field">
                                <input type="password" placeholder="Enter Password" onChange={(e) => this.handlePasswordChange(e)}/>
                            </div>

                        </div>

                        <div className="Registration-password">
                            <div className="Registration-field-title">
                                <b>Repeat Password</b>
                            </div>

                            <div className="Registration-input-field">
                                <input type="password" placeholder="Repeat Password" onChange={(e) => this.handlePasswordRepeatChange(e)} />
                            </div>

                        </div>


                        <div className="Registration-firstname">
                            <div className="Registration-field-title">
                                <b>First Name</b>
                            </div>

                            <div className="Registration-input-field">
                                <input type="text" placeholder="First Name" onChange={(e) => this.handleFirstName(e)} />
                            </div>

                        </div>

                        <div className="Registration-lastname">
                            <div className="Registration-field-title">
                                <b>Last Name</b>
                            </div>


                            <div className="Registration-input-field">
                                <input type="text" placeholder="Last Name" onChange={(e) => this.handleLastName(e)} />
                            </div>

                        </div>

                        <div className="Registration-submit">
                            <button type="submit" className="registerbtn" onClick={(e) => this.handleSubmit(e)}>Register</button>
                        </div>



                    </div>


                    <div className="Registration-messages">
                        <div>

                            {this.state.password_error}
                        </div>

                        <div>
                            <div>{this.state.form_error}</div>
                        </div>

                        <div>
                            <div>{this.state.user_exists_error}</div>
                        </div>

                    </div>
                </div>
            )


        }

        else {
            return (
                <div className="Registration">
                    <div className="Registration-success">Thank you for registering</div>
                </div>
            )
        }
    }
}

export default Registration
