import React from 'react';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';

import Message from './Message';
import User2 from '../User2';
import FastChat from './FastChat';
import Loading from '../Loading';

import {
    FaCamera,
    FaPaperclip,
    FaSmile,
    FaEllipsisV,
    FaRegPaperPlane
} from 'react-icons/fa';

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
                                placeholder="Widok do wysyłania postów"
                            />
                            <a href="" class="az-msg-send">
                                <FaRegPaperPlane />
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
                                    <User2
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
