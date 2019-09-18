import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/neur.jpg';
import MyContext from '../MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faSearch,
    faUser,
    faPowerOff,
    faEdit,
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import { faComments, faBell } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames';

export default class FullHeader extends Component {
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
                                        <FontAwesomeIcon
                                            onClick={context.toggleChat}
                                            icon={faArrowLeft}
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
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                        <div className="az-header-right">
                            <div className="az-header-message">
                                <Link to="/head/chat">
                                    <FontAwesomeIcon icon={faComments} />
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
                                    <FontAwesomeIcon icon={faBell} />
                                </a>
                                <div
                                    ref={this.setWrapperRef}
                                    className="dropdown-menu"
                                >
                                    <div className="az-dropdown-header d-sm-none">
                                        <a className="az-header-arrow">
                                            <FontAwesomeIcon
                                                onClick={() =>
                                                    this.setState({
                                                        show: false
                                                    })
                                                }
                                                icon={faArrowLeft}
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
                                        <div className="media new">
                                            <div className="az-img-user">
                                                <img
                                                    src="https://via.placeholder.com/500x500"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="media-body">
                                                <p>
                                                    Congratulate{' '}
                                                    <strong>
                                                        Socrates Itumay
                                                    </strong>{' '}
                                                    for work anniversaries
                                                </p>
                                                <span>Mar 15 12:32pm</span>
                                            </div>
                                        </div>
                                        <div className="media new">
                                            <div className="az-img-user online">
                                                <img
                                                    src="https://via.placeholder.com/500x500"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="media-body">
                                                <p>
                                                    <strong>Joyce Chua</strong>{' '}
                                                    just created a new blog post
                                                </p>
                                                <span>Mar 13 04:16am</span>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="az-img-user">
                                                <img
                                                    src="https://via.placeholder.com/500x500"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="media-body">
                                                <p>
                                                    <strong>
                                                        Althea Cabardo
                                                    </strong>{' '}
                                                    just created a new blog post
                                                </p>
                                                <span>Mar 13 02:56am</span>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="az-img-user">
                                                <img
                                                    src="https://via.placeholder.com/500x500"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="media-body">
                                                <p>
                                                    <strong>
                                                        Adrian Monino
                                                    </strong>{' '}
                                                    added new comment on your
                                                    photo
                                                </p>
                                                <span>Mar 12 10:40pm</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-footer">
                                        <Link to="/head/notification">
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
                                            <FontAwesomeIcon
                                                onClick={() =>
                                                    this.setState({
                                                        showAvatar: false
                                                    })
                                                }
                                                icon={faArrowLeft}
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
                                    >
                                        <FontAwesomeIcon icon={faUser} /> My
                                        Profile
                                    </Link>
                                    <a
                                        href="/main/accSettings"
                                        className="dropdown-item"
                                    >
                                        <FontAwesomeIcon icon={faEdit} /> Edit
                                        Profile Account
                                    </a>

                                    <Link
                                        to="/signin"
                                        className="dropdown-item"
                                    >
                                        <FontAwesomeIcon icon={faPowerOff} />{' '}
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
