import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/neur.jpg';

export default class Signin extends Component {
    render() {
        return (
            <div class="az-signin-wrapper content content-full">
                <div class="az-card-signin">
                    <div class="singin-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div class="az-signin-header">
                        <h3>Please sign in to continue</h3>

                        <form action="index.html">
                            <div class="form-group">
                                <label>Email</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button class="btn btn-az-primary btn-block">
                                Sign In
                            </button>
                        </form>
                    </div>
                    <div class="az-signin-footer">
                        <p>
                            <a href="">Forgot password?</a>
                        </p>
                        <p>
                            Don't have an account?{' '}
                            <Link to="/signup">Create an Account</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
