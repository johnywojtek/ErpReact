import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/neur.jpg';
import MyContext from '../../MyContext';
import Notification from './Notification';

import {
    FaSearch,
    FaUser,
    FaPowerOff,
    FaEdit,
    FaArrowLeft,
    FaRegBell,
    FaRegComments
} from 'react-icons/fa';

import classNames from 'classnames';

export default class FullWidthHeader extends Component {
    constructor(props) {
        super(props);

        this.state = { show: false, showAvatar: false };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    onBellClick = () => {
        this.setState({ show: this.state.show ? false : true });
    };

    onAvatarClick = () => {
        this.setState({ showAvatar: this.state.showAvatar ? false : true });
    };

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ show: false });
        }
        if (this.wrapperRef2 && !this.wrapperRef2.contains(event.target)) {
            this.setState({ showAvatar: false });
        }
    };
    setWrapperRef = node => {
        this.wrapperRef = node;
    };

    setWrapperRef2 = node => {
        this.wrapperRef2 = node;
    };

    onSidebarButtonClick = () => {
        console.log('siema');
    };

    render() {
        return (
            <div>
                <div className="az-header">
                    <div className="container-fluid">
                        <div className="az-header-left">
                            <MyContext.Consumer>
                                {context =>
                                    context.state.toggleChat ? (
                                        <FaArrowLeft
                                            onClick={context.toggleChat}
                                            className="arrow-fullWidthHeader"
                                        />
                                    ) : (
                                        <Link to="/">
                                            <img
                                                src={logo}
                                                style={{ width: '140px' }}
                                                alt=""
                                            />
                                        </Link>
                                    )
                                }
                            </MyContext.Consumer>
                        </div>
                        <div className="az-header-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for anything..."
                            />
                            <button className="btn">
                                <FaSearch />
                            </button>
                        </div>
                        <div className="az-header-right">
                            <div className="az-header-message">
                                <Link to="/head/chat">
                                    <FaRegComments />
                                </Link>
                            </div>
                            <div
                                className={classNames(
                                    'dropdown az-header-notification',
                                    {
                                        show: this.state.show
                                    }
                                )}
                            >
                                <a onClick={this.onBellClick} className="new">
                                    <FaRegBell />
                                </a>
                                <div
                                    ref={this.setWrapperRef}
                                    className="dropdown-menu"
                                >
                                    <div className="az-dropdown-header d-sm-none">
                                        <a className="az-header-arrow">
                                            <FaArrowLeft
                                                onClick={() =>
                                                    this.setState({
                                                        show: false
                                                    })
                                                }
                                            />
                                        </a>
                                    </div>
                                    <h6 className="az-notification-title">
                                        Notifications
                                    </h6>
                                    <p className="az-notification-text">
                                        You have 2 unread notification
                                    </p>
                                    <div className="az-notification-list">
                                        <Notification
                                            text="Althea Cabardo just created a new blog postqwqwq"
                                            data="Mar 13 02:56am"
                                        />
                                        <Notification
                                            text="Althea Cabardo just created a new blog postqwqwq"
                                            data="Mar 13 02:56am"
                                        />
                                        <Notification
                                            text="Althea Cabardo just created a new blog postqwqwq"
                                            data="Mar 13 02:56am"
                                        />
                                        <Notification
                                            text="Althea Cabardo just created a new blog postqwqwq"
                                            data="Mar 13 02:56am"
                                        />
                                    </div>
                                    <div className="dropdown-footer">
                                        <Link
                                            to="/head/notification"
                                            onClick={() =>
                                                this.setState({
                                                    show: false
                                                })
                                            }
                                        >
                                            View All Notifications
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={classNames(
                                    'dropdown az-profile-menu',
                                    {
                                        show: this.state.showAvatar
                                    }
                                )}
                            >
                                <a className="az-img-user">
                                    <img
                                        onClick={this.onAvatarClick}
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </a>
                                <div
                                    ref={this.setWrapperRef2}
                                    className="dropdown-menu"
                                >
                                    <div className="az-dropdown-header d-sm-none">
                                        <a className="az-header-arrow">
                                            <FaArrowLeft
                                                onClick={() =>
                                                    this.setState({
                                                        showAvatar: false
                                                    })
                                                }
                                            />
                                        </a>
                                    </div>
                                    <div className="az-header-profile">
                                        <div className="az-img-user">
                                            <img
                                                src="https://via.placeholder.com/500x500"
                                                alt=""
                                            />
                                        </div>
                                        <h6>Aziana Pechon</h6>
                                        <span>Premium Member</span>
                                    </div>

                                    <Link
                                        to="/head/profile"
                                        className="dropdown-item"
                                        onClick={() =>
                                            this.setState({
                                                showAvatar: false
                                            })
                                        }
                                    >
                                        <FaUser /> My Profile
                                    </Link>
                                    <Link
                                        to="/main/account-settings"
                                        className="dropdown-item"
                                        onClick={() =>
                                            this.setState({
                                                showAvatar: false
                                            })
                                        }
                                    >
                                        <FaEdit /> Edit Profile Account
                                    </Link>

                                    <Link
                                        to="/signin"
                                        className="dropdown-item"
                                        onClick={() =>
                                            this.setState({
                                                showAvatar: false
                                            })
                                        }
                                    >
                                        <FaPowerOff />
                                        Sign Out
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
