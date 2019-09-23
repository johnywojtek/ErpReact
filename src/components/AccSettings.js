import React, { Component } from 'react';

//usunąć validacje.

const FormErrors = ({ formErrors }) => (
    <div>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <div class="alert alert-danger">
                        {formErrors[fieldName]}
                    </div>
                );
            } else {
                return '';
            }
        })}
    </div>
);

export default class AccSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            description: '',
            email: '',
            password: '',
            phone: '',
            formErrors: {
                fullName: '',
                description: '',
                email: '',
                password: '',
                phone: ''
            },
            fullNameValid: false,
            descriptionValid: false,
            emailValid: false,
            passwordValid: false,
            phoneValid: false,
            formValid: false
        };
        this.fileInput = React.createRef();
    }

    handleUserInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let fullNameValid = this.state.fullNameValid;
        let descriptionValid = this.state.descriptionValid;
        let phoneValid = this.state.phoneValid;

        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(
                    /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                );
                fieldValidationErrors.email = emailValid
                    ? ''
                    : 'Email is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid
                    ? ''
                    : 'Password is too short';
                break;
            case 'fullName':
                fullNameValid = value.length >= 1;
                fieldValidationErrors.fullName = fullNameValid
                    ? ''
                    : 'Full Name is too short';
                break;
            case 'description':
                descriptionValid = value.length >= 6;
                fieldValidationErrors.description = descriptionValid
                    ? ''
                    : 'description is too short';
                break;
            case 'phone':
                phoneValid = value.match(/^\d{9}$/);
                fieldValidationErrors.phone = phoneValid
                    ? ''
                    : 'Phone is invalid';
                break;
            default:
                break;
        }
        this.setState(
            {
                formErrors: fieldValidationErrors,
                fullNameValid: fullNameValid,
                emailValid: emailValid,
                phoneValid: phoneValid,
                descriptionValid: descriptionValid,
                passwordValid: passwordValid
            },
            this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid
        });
    }
    onSubmitClick = () => {
        console.log('send data');
        //dostęp do inputa file
        console.log(this.fileInput.current.files);
    };

    errorClass(error) {
        return error.length === 0 ? '' : 'has-error';
    }

    render() {
        const {
            fullName,
            description,
            email,
            password,
            phone,
            formErrors
        } = this.state;

        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <div class="text-center">
                            <img
                                src="//placehold.it/100"
                                class="avatar rounded-circle"
                                alt="avatar"
                            />
                            <h6>Upload a different photo...</h6>

                            <input
                                type="file"
                                ref={this.fileInput}
                                class="form-control"
                            />
                        </div>
                    </div>

                    <div class="col-md-9 personal-info">
                        <FormErrors formErrors={formErrors} />
                        <h3>Personal info</h3>

                        <form class="form-horizontal" role="form">
                            <div
                                className={`form-group ${this.errorClass(
                                    this.state.formErrors.fullName
                                )}`}
                            >
                                <label class="col-lg-3 control-label">
                                    Full name:
                                </label>
                                <div class="col-lg-8">
                                    <input
                                        class="form-control"
                                        type="text"
                                        name="fullName"
                                        required
                                        value={fullName}
                                        onChange={this.handleUserInput}
                                    />
                                </div>
                            </div>

                            <div
                                className={`form-group ${this.errorClass(
                                    this.state.formErrors.description
                                )}`}
                            >
                                <label class="col-lg-3 control-label">
                                    Description
                                </label>
                                <div class="col-lg-8">
                                    <textarea
                                        class="form-control"
                                        rows="5"
                                        name="description"
                                        required
                                        value={description}
                                        onChange={this.handleUserInput}
                                    ></textarea>
                                </div>
                            </div>
                            <div
                                className={`form-group ${this.errorClass(
                                    this.state.formErrors.email
                                )}`}
                            >
                                <label class="col-lg-3 control-label">
                                    Email:
                                </label>
                                <div class="col-lg-8">
                                    <input
                                        class="form-control"
                                        type="text"
                                        name="email"
                                        value={email}
                                        required
                                        onChange={this.handleUserInput}
                                    />
                                </div>
                            </div>
                            <div
                                className={`form-group ${this.errorClass(
                                    this.state.formErrors.password
                                )}`}
                            >
                                <label class="col-md-3 control-label">
                                    Phone:
                                </label>
                                <div class="col-md-8">
                                    <input
                                        class="form-control"
                                        type="number"
                                        name="phone"
                                        max={9}
                                        value={phone}
                                        required
                                        onChange={this.handleUserInput}
                                    />
                                </div>
                            </div>
                            <div
                                className={`form-group ${this.errorClass(
                                    this.state.formErrors.password
                                )}`}
                            >
                                <label class="col-md-3 control-label">
                                    Password:
                                </label>
                                <div class="col-md-8">
                                    <input
                                        class="form-control"
                                        type="password"
                                        name="password"
                                        value={password}
                                        required
                                        onChange={this.handleUserInput}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={!this.state.formValid}
                                onClick={this.onSubmitClick}
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
