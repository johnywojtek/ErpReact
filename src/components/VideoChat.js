import React, { Component } from 'react';
import { TiCancelOutline } from 'react-icons/ti';

import {
    FaMicrophoneSlash,
    FaMicrophone,
    FaShareSquare,
    FaVideoSlash,
    FaVideo,
    FaCog,
    FaDesktop
} from 'react-icons/fa';
import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        <FaDesktop />

                        <FaVideoSlash />

                        <div className="btn-disconect">ROZŁĄCZ</div>
                        <FaMicrophone />
                        <FaCog />
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
                    <div class="az-chat-footer-main">
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
            </div>
        );
    }
}
