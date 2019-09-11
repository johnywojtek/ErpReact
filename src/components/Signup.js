import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/neur.jpg';
export default class Signup extends Component {
    render() {
        return (
            <div class="az-signup-wrapper content-full">
                <div class="az-column-signup-left">
                    <div>
                        <div class="signup-logo">
                            <img
                                src={logo}
                                style={{
                                    width: '350px',
                                    marginBottom: '20px'
                                }}
                                alt=""
                            />
                        </div>
                        <h4>
                            We are excited to launch our new company and product
                            Azia. After being featured in too many magazines to
                            mention and having created an online stir, we know
                            that ThemePixels is going to be big. We also hope to
                            win Startup Fictional Business of the Year this
                            year.
                        </h4>

                        <a href="index.html" class="btn btn-outline-primary">
                            Learn More
                        </a>
                    </div>
                </div>
                <div class="az-column-signup">
                    <img src="../img/neur.jpg" alt="" />

                    <div class="az-signup-header">
                        <h4>It's free to signup and only takes a minute.</h4>

                        <form action="page-profile.html">
                            <div class="form-group">
                                <label>Firstname &amp; Lastname</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your firstname and lastname"
                                />
                            </div>
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
                                />{' '}
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    class="form-control"
                                    placeholder="Enter your phone number"
                                />
                                <label class="tel-under-text">
                                    Your number is kept confidential and not
                                    shared with others
                                </label>
                            </div>
                            <button class="btn btn-az-primary btn-block">
                                Create Account
                            </button>
                            <div class="row row-xs">
                                <div class="col-sm-6">
                                    <button class="btn btn-block">
                                        <i class="fab fa-facebook-f"></i> Signup
                                        with Facebook
                                    </button>
                                </div>
                                <div class="col-sm-6 mt-1 mt-sm-0">
                                    <button class="btn btn-primary btn-block">
                                        <i class="fab fa-twitter"></i> Signup
                                        with Twitter
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="az-signup-footer">
                        <p>
                            Already have an account?{' '}
                            <Link to="/signup">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
