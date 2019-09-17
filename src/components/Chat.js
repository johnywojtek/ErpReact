import React, { Component } from 'react';
import userGroup from '../img/user-group.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Scrollbars } from 'react-custom-scrollbars';

import { FaVideo, FaRegFileAlt, FaPhone } from 'react-icons/fa';
import MyContext from '../MyContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import User from './User';
import axios from 'axios';
import Loading from './Loading';

import {
    faCamera,
    faPaperclip,
    faSmile,
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Slider from 'react-slick';
import ActiveContacts from './ActiveContacts';
import classNames from 'classnames';

export default class Chat extends Component {
    state = { users: [], loading: true, view: 'users', toggleChat: false };
    componentDidMount() {
        this.setState({ loading: true });
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

    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <div
                        className={classNames('content-chat', {
                            'az-content-body-show': context.state.toggleChat
                        })}
                    >
                        <div className="az-content-left az-content-left-chat">
                            <nav className="nav az-nav-line az-nav-line-chat">
                                <a
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
                                </a>
                                <a
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
                                </a>
                            </nav>
                            <ActiveContacts />
                            <Scrollbars style={{ height: '71vh' }}>
                                <div id="azChatList" className="az-chat-list">
                                    {this.state.loading ? (
                                        <Loading />
                                    ) : this.state.view === 'users' ? (
                                        <User
                                            people={this.state.users}
                                            emial={false}
                                        />
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
                                                        Za...
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
                                    <a href="" className="nav-link">
                                        <i className="icon ion-md-more"></i>
                                    </a>
                                    <a
                                        href=""
                                        className="nav-link"
                                        data-toggle="tooltip"
                                        title="Start Voice Call"
                                    >
                                        <FaPhone />
                                    </a>
                                    <a
                                        href=""
                                        className="nav-link"
                                        data-toggle="tooltip"
                                        title="Start Video Call"
                                    >
                                        <FaVideo />
                                    </a>
                                </nav>
                            </div>
                            <Scrollbars style={{ height: '81%' }}>
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
                                        <FontAwesomeIcon icon={faCamera} />
                                    </a>
                                    <a
                                        href=""
                                        class="nav-link"
                                        data-toggle="tooltip"
                                        title="Attach a File"
                                    >
                                        <FontAwesomeIcon icon={faPaperclip} />
                                    </a>
                                    <a
                                        href=""
                                        class="nav-link"
                                        data-toggle="tooltip"
                                        title="Add Emoticons"
                                    >
                                        <FontAwesomeIcon icon={faSmile} />
                                    </a>
                                    <a href="" class="nav-link">
                                        <FontAwesomeIcon icon={faEllipsisV} />
                                    </a>
                                </nav>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Type your message here..."
                                />
                                <a href="" class="az-msg-send">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </a>
                            </div>
                        </div>

                        <div className="az-content-left az-content-left-invoice">
                            <h2 className="az-content-title">Shared Files</h2>
                            <div id="azInvoiceList" className="az-invoice-list">
                                <Scrollbars style={{ height: '96%' }}>
                                    <div className="media">
                                        <div className="media-icon">
                                            <FaRegFileAlt />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                <span>Somethink.pdf</span>
                                                <p>
                                                    <span>Date:</span> Oct 25
                                                </p>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-icon">
                                            <FaRegFileAlt />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                <span>Somethink.pdf</span>
                                                <p>
                                                    <span>Date:</span> Oct 25
                                                </p>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-icon">
                                            <FaRegFileAlt />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                <span>Somethink.pdf</span>
                                                <p>
                                                    <span>Date:</span> Oct 25
                                                </p>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-icon">
                                            <FaRegFileAlt />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                <span>Somethink.pdf</span>
                                                <p>
                                                    <span>Date:</span> Oct 25
                                                </p>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="media selected">
                                        <div className="media-icon">
                                            <FaRegFileAlt />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                <span>Fun Photos.pdf</span>
                                                <p>
                                                    <span>Date:</span> Oct 25
                                                </p>
                                            </h6>
                                        </div>
                                    </div>
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
                                    <div className="media">
                                        <div className="media-icon">
                                            <FaRegFileAlt />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                <span>Textwebpages.word</span>
                                                <p>
                                                    <span>Date:</span> Oct 27
                                                </p>
                                            </h6>
                                        </div>
                                    </div>
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
                                    <div className="media">
                                        <div className="media-icon">
                                            <FaRegFileAlt />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                <span>Invoice002300</span>
                                                <p>
                                                    <span>Date:</span> Oct 25
                                                </p>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-icon">
                                            <FaRegFileAlt />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                <span>Invoice002299</span>
                                                <p>
                                                    <span>Date:</span> Oct 25
                                                </p>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-icon">
                                            <FaRegFileAlt />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                <span>Invoice002300</span>
                                                <p>
                                                    <span>Date:</span> Oct 25
                                                </p>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-icon">
                                            <FaRegFileAlt />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                <span>Invoice002300</span>
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
