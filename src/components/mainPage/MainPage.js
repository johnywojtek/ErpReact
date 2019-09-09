import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faCamera,
    faPaperclip,
    faSmile,
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Message from './Message';
import UsersList from './UsersList';
import FastChat from './FastChat';

export default function MainPage() {
    return (
        <div>
            <div class="az-content-body">
                <div class="az-content-body-posts">
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

                    <div id="azChatBody" class="az-chat-body-main">
                        <Scrollbars style={{ height: '100%' }}>
                            <div class="content-inner">
                                <label class="az-chat-time">
                                    <span>Today</span>
                                </label>

                                <Message />

                                <label class="az-chat-time">
                                    <span>Yesterday</span>
                                </label>

                                <Message />

                                <label class="az-chat-time">
                                    <span>2 days ago</span>
                                </label>

                                <Message />
                            </div>
                        </Scrollbars>
                    </div>
                </div>
                <div class="az-content-right-chat-main">
                    <FastChat />
                    <Scrollbars style={{ height: '100%' }}>
                        <div id="azChatList" class="az-chat-list">
                            <UsersList />
                        </div>
                    </Scrollbars>
                </div>
            </div>
        </div>
    );
}
