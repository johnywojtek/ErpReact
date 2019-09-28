import React, { Component } from 'react';

import {
    FaMicrophoneSlash,
    FaMicrophone,
    FaVideoSlash,
    FaCog,
    FaDesktop
} from 'react-icons/fa';

import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    FaPhone,
    FaVideo,
    FaCamera,
    FaPaperclip,
    FaSmile,
    FaEllipsisV,
    FaRegPaperPlane
} from 'react-icons/fa';
import {
    faCamera,
    faPaperclip,
    faSmile,
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Message from './mainPage/Message';

export default class VideoChat extends Component {
    render() {
        return (
            <div className="video-chat-wrapper">
                <div className="video-main">
                    <div className="users">
                        <div className="img-user">
                            <div className="muted">
                                <FaMicrophoneSlash />
                            </div>
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div className="img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div className="img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div className="img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div className="img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="controles">
                        <a href="">
                            <FaDesktop />
                        </a>
                        <a href="">
                            <FaVideoSlash />
                        </a>

                        <a className="btn-disconect">ROZŁĄCZ</a>
                        <a href="">
                            <FaMicrophone />
                        </a>
                        <a href="">
                            <FaCog />
                        </a>
                    </div>
                </div>
                <div className="voice-chat">
                    <Scrollbars>
                        <div id="azChatBody" className="az-chat-body">
                            <div className="content-inner">
                                <label className="az-chat-time">
                                    <span>3 days ago</span>
                                </label>

                                <Message />
                                <label className="az-chat-time">
                                    <span>Yesterday</span>
                                </label>
                                <Message />

                                <label className="az-chat-time">
                                    <span>Today</span>
                                </label>

                                <Message />
                            </div>
                        </div>
                    </Scrollbars>
                    <div class="az-chat-footer-main videoChat-footer">
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
                            class="form-control "
                            placeholder="Type your message here..."
                        />
                        <a href="" class="az-msg-send">
                            <FaRegPaperPlane />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
