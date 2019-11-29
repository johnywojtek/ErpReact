import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import axios from 'axios';
import classNames from 'classnames';

import User from '../common/User';
import Spinner from '../common/Spinner';
import ActiveContacts from './ActiveContacts';
import MyContext from '../../MyContext';

import userGroup from '../../img/user-group.png';
import 'rc-tooltip/assets/bootstrap_white.css';
import { IoMdMore, IoIosClose } from 'react-icons/io';
import {
    FaCamera,
    FaPaperclip,
    FaSmile,
    FaEllipsisV,
    FaRegPaperPlane,
    FaVideo,
    FaRegFileAlt,
    FaPhone
} from 'react-icons/fa';

export default class Chat extends Component {
    state = {
        users: [],
        loading: true,
        view: 'users',
        toggleChat: false
    };

    componentDidMount() {
        this.setState({ loading: true, toggleFile: false });
        axios
            .get('https://randomuser.me/api/', {
                params: {
                    results: 20
                }
            })
            .then(e =>
                this.setState({ users: e.data.results, loading: false })
            );
    }

    onTooltipClick = () => {
        this.setState(prevState => ({
            toggleFile: !prevState.toggleFile
        }));
    };

    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <div
                        className={classNames(
                            'content-chat ',
                            {
                                'az-content-body-show': context.state.toggleChat
                            },
                            {
                                'az-content-left-show': this.state.toggleFile
                            }
                        )}
                    >
                        <div className="az-content-left az-content-left-chat">
                            <nav className="nav az-nav-line az-nav-line-chat">
                                <span
                                    className={classNames('nav-link', {
                                        active:
                                            this.state.view === 'users'
                                                ? true
                                                : false
                                    })}
                                    onClick={() =>
                                        this.setState({ view: 'users' })
                                    }
                                >
                                    Recent Chat
                                </span>
                                <span
                                    className={classNames('nav-link ', {
                                        active:
                                            this.state.view === 'users'
                                                ? false
                                                : true
                                    })}
                                    onClick={() =>
                                        this.setState({ view: 'group' })
                                    }
                                >
                                    Groups
                                </span>
                            </nav>
                            <ActiveContacts />
                            <Scrollbars style={{ height: '71vh' }}>
                                <div id="azChatList" className="az-chat-list">
                                    {this.state.loading ? (
                                        <Spinner />
                                    ) : this.state.view === 'users' ? (
                                        this.state.users.map((e, i) => {
                                            return (
                                                <User
                                                    index={i}
                                                    emial={false}
                                                    icons={true}
                                                    img={e.picture.medium}
                                                    firstName={e.name.first}
                                                    lastName={e.name.last}
                                                    date={e.registered.age}
                                                />
                                            );
                                        })
                                    ) : (
                                        <div className="media new">
                                            <div className="az-img-user online">
                                                <img src={userGroup} alt="" />
                                                <span>2</span>
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>
                                                        Wojtek John, Michał
                                                        Zsadadasdasdadas
                                                    </span>
                                                    <span>2 hours</span>
                                                </div>
                                                <p>4 Members</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Scrollbars>
                        </div>

                        <div className="az-content-body az-content-body-chat">
                            <div className="az-chat-header">
                                <div className="az-img-user">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div className="az-chat-msg-name">
                                    <h6>Reynante Labares</h6>
                                    <small>Last seen: 2 minutes ago</small>
                                </div>
                                <nav className="nav">
                                    <Link class="nav-link" to="/main/voiceChat">
                                        <FaPhone />
                                    </Link>
                                    <Link class="nav-link" to="/main/videoChat">
                                        <FaVideo />
                                    </Link>
                                    <span className="nav-link">
                                        <FaRegFileAlt
                                            onClick={this.onTooltipClick}
                                        />
                                    </span>
                                </nav>
                            </div>

                            <Scrollbars style={{ height: '100%' }}>
                                <div id="azChatBody" className="az-chat-body">
                                    <div className="content-inner">
                                        <label className="az-chat-time">
                                            <span>3 days ago</span>
                                        </label>
                                        <div className="media flex-row-reverse">
                                            <div className="az-img-user online">
                                                <img
                                                    src="https://via.placeholder.com/500x500"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="az-msg-wrapper">
                                                    Nulla consequat massa quis
                                                    enim. Donec pede justo,
                                                    fringilla vel...
                                                </div>
                                                <div className="az-msg-wrapper">
                                                    rhoncus ut, imperdiet a,
                                                    venenatis vitae, justo...
                                                </div>
                                                <div className="az-msg-wrapper p-0">
                                                    <img
                                                        src="https://via.placeholder.com/500x334"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <span>9:48 am</span>{' '}
                                                    <a href="">
                                                        <i className="icon ion-android-more-horizontal"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="az-img-user online">
                                                <img
                                                    src="https://via.placeholder.com/500x500"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit. Aenean commodo ligula
                                                    eget dolor.
                                                </div>
                                                <div>
                                                    <span>9:32 am</span>{' '}
                                                    <a href="">
                                                        <i className="icon ion-android-more-horizontal"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media flex-row-reverse">
                                            <div className="az-img-user online">
                                                <img
                                                    src="https://via.placeholder.com/500x500"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="az-msg-wrapper">
                                                    Nullam dictum felis eu pede
                                                    mollis pretium
                                                </div>
                                                <div>
                                                    <span>11:22 am</span>{' '}
                                                    <a href="">
                                                        <i className="icon ion-android-more-horizontal"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <label className="az-chat-time">
                                            <span>Yesterday</span>
                                        </label>
                                        <div className="media">
                                            <div className="az-img-user online">
                                                <img
                                                    src="https://via.placeholder.com/500x500"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit. Aenean commodo ligula
                                                    eget dolor.
                                                </div>
                                                <div>
                                                    <span>9:32 am</span>{' '}
                                                    <a href="">
                                                        <i className="icon ion-android-more-horizontal"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media flex-row-reverse">
                                            <div className="az-img-user online">
                                                <img
                                                    src="https://via.placeholder.com/500x500"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="az-msg-wrapper">
                                                    Donec quam felis, ultricies
                                                    nec, pellentesque eu,
                                                    pretium quis, sem. Nulla
                                                    consequat massa quis enim.
                                                    Donec pede justo, fringilla
                                                    vel, aliquet nec. In enim
                                                    justo, rhoncus ut, imperdiet
                                                    a, venenatis vitae, justo.
                                                </div>
                                                <div className="az-msg-wrapper">
                                                    Nullam dictum felis eu pede
                                                    mollis pretium
                                                </div>
                                                <div>
                                                    <span>9:48 am</span>{' '}
                                                    <a href="">
                                                        <i className="icon ion-android-more-horizontal"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <label className="az-chat-time">
                                            <span>Today</span>
                                        </label>
                                        <div className="media">
                                            <div className="az-img-user online">
                                                <img
                                                    src="https://via.placeholder.com/500x500"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="az-msg-wrapper">
                                                    Maecenas tempus, tellus eget
                                                    condimentum rhoncus
                                                </div>
                                                <div className="az-msg-wrapper">
                                                    Nam quam nunc, blandit vel,
                                                    luctus pulvinar, hendrerit
                                                    id, lorem. Maecenas nec odio
                                                    et ante tincidunt tempus.
                                                    Donec vitae sapien ut libero
                                                    venenatis faucibus.
                                                </div>
                                                <div>
                                                    <span>10:12 am</span>{' '}
                                                    <a href="">
                                                        <i className="icon ion-android-more-horizontal"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media flex-row-reverse">
                                            <div className="az-img-user online">
                                                <img
                                                    src="https://via.placeholder.com/500x500"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="az-msg-wrapper">
                                                    Maecenas tempus, tellus eget
                                                    condimentum rhoncus
                                                </div>
                                                <div className="az-msg-wrapper">
                                                    Nam quam nunc, blandit vel,
                                                    luctus pulvinar, hendrerit
                                                    id, lorem. Maecenas nec odio
                                                    et ante tincidunt tempus.
                                                    Donec vitae sapien ut libero
                                                    venenatis faucibus.
                                                </div>
                                                <div>
                                                    <span>09:40 am</span>{' '}
                                                    <a href="">
                                                        <i className="icon ion-android-more-horizontal"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Scrollbars>

                            <div class="az-chat-footer">
                                <nav class="nav">
                                    <a
                                        href=""
                                        class="nav-link"
                                        data-toggle="tooltip"
                                        title="Add Photo"
                                    >
                                        <FaCamera />
                                    </a>
                                    <a
                                        href=""
                                        class="nav-link"
                                        data-toggle="tooltip"
                                        title="Attach a File"
                                    >
                                        <FaPaperclip />
                                    </a>
                                    <a
                                        href=""
                                        class="nav-link"
                                        data-toggle="tooltip"
                                        title="Add Emoticons"
                                    >
                                        <FaSmile />
                                    </a>
                                    <a href="" class="nav-link">
                                        <FaEllipsisV />
                                    </a>
                                </nav>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Type your message here..."
                                />
                                <a href="" class="az-msg-send">
                                    <FaRegPaperPlane />
                                </a>
                            </div>
                        </div>

                        <div className="az-content-left az-content-left-invoice">
                            <div className="invoice-header">
                                <IoIosClose onClick={this.onTooltipClick} />

                                <h2 className="az-content-title">
                                    Shared Files
                                </h2>
                            </div>
                            <div id="azInvoiceList" className="az-invoice-list">
                                <Scrollbars style={{ height: '96%' }}>
                                    <div className="media">
                                        <div className="media-icon">
                                            <FaRegFileAlt />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                <span>Textwebpages.word</span>
                                                <p>
                                                    <span>Date:</span> Oct 25
                                                </p>
                                            </h6>
                                        </div>
                                    </div>
                                </Scrollbars>
                            </div>
                        </div>
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}
