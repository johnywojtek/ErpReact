import React from 'react';
import axios from 'axios';
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
import User from '../User';
import FastChat from './FastChat';
import Loading from '../Loading';

export default class MainPage extends React.Component {
    state = { users: [], loading: true };

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
                                {this.state.loading ? (
                                    <Loading />
                                ) : (
                                    <User
                                        people={this.state.users}
                                        emial={true}
                                    />
                                )}
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        );
    }
}
