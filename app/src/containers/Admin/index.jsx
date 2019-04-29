import * as React from 'react'
import './admin.scss'
import axios from 'axios';


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_auth: false,
            user: "",
            password: "",
            password_error: "",
            users_list: {}
        }
    }

    handleUserChange(e) {
        this.setState({user: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    handleSubmit() {
        this.setState({password_error: ""})
        axios.post('http://127.0.0.1:5000/admin/', [
            this.state.user,
            this.state.password
        ]).then(() => {
            this.setState({is_auth: true})
        }).catch((error) => {
            if (error.response_status == 401) {
                this.setState({password_error: "Wrong Password"})
            }
        })
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/get_users").then((response) => {
            console.log("RESPONSE DATA FOR GET USERS", response.data)
            this.setState({users_list: response.data})
        })
    }
    render() {
        if (!this.state.is_auth) {
            return (
                <div className="Admin-login">
                    <div className="Admin-login-title">
                        <h1>Login</h1>
                    </div>

                    <div className="Admin-login-email-title">
                        <h3>Email</h3>
                    </div>

                    <div className="Admin-login-email-input">
                        <input type="text" placeholder="Enter Email" name="email"  onChange={(e) => this.handleUserChange(e)}/>
                    </div>

                    <div className="Admin-login-password-title">
                        <h3>Password</h3>
                    </div>

                    <div className="Admin-login-password-input">
                        <input type="password" placeholder="Enter Password" onChange={(e) => this.handlePasswordChange(e)}/>
                    </div>

                    <button type="submit" className="registerbtn" onClick={(e) => this.handleSubmit(e)}>Register</button>

                    <div className="Admin-password-error">
                        {this.state.password_error}
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className="Admin">
                    <div className="Admin-spacer" />
                    <div className="Admin-title">
                        Users
                    </div>
                    <div className="Admin-spacer" />

                    <div className="Admin-fields-titles">
                        <div className="Admin-field-title"><h3> Email </h3></div>
                        <div className="Admin-field-title"><h3> First Name </h3></div>
                        <div className="Admin-field-title"> Last Name </div>
                    </div>

                    <div className="Admin-values-wrapper">
                        <div className="Admin-values">
                            {this.state.users_list.map((user) => {
                                return <div>{user.email}BOOOOP</div>
                            })}
                        </div>

                        <div className="Admin-values">
                            {this.state.users_list.map((user) => {
                                return <div>{user.first_name}</div>
                            })}
                        </div>

                        <div className="Admin-values">
                            {this.state.users_list.map((user) => {
                                return <div>{user.first_name}</div>
                            })}
                        </div>
                    </div>


                </div>
            )
        }
    }
}

export default Admin

//
// <div className="Admin-spacer" />
// <div className="Admin-spacer">
//     <div className="Admin-email-title">
//         Email
//     </div>
// </div>
//
// <div className="Admin-title">
//     Users List
// </div>
