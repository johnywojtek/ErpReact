import React, { Component } from 'react';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';

import Notification from './Notification';
import Spinner from '../common/Spinner';
import User from '../common/User';

export default class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: []
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        axios
            .get('https://randomuser.me/api/', {
                params: {
                    results: 20
                }
            })
            .then(e => {
                this.setState({
                    users: e.data.results,
                    loading: false
                });
            });
    }

    render() {
        return (
            <div style={{ flex: 1 }}>
                <div class="notification-content">
                    <div class="notification-container">
                        <Scrollbars style={{ height: '98%' }}>
                            <div class="notification-main">
                                <div
                                    id="idNotifications"
                                    class="notification-list"
                                >
                                    <Notification
                                        username="Wojciech John"
                                        desc="Opublikował post"
                                        date="2 d"
                                    />
                                    <Notification
                                        username="Wojciech John"
                                        desc="Opublikował post"
                                        date="2 d"
                                    />
                                    <Notification
                                        username="Wojciech John"
                                        desc="Opublikował post"
                                        date="2 d"
                                    />
                                </div>
                            </div>
                        </Scrollbars>

                        <div
                            class=" az-content-right-chat-main"
                            style={{ width: '29vw' }}
                        >
                            <Scrollbars style={{ height: '98%' }}>
                                <div id="azChatList" class="az-chat-list">
                                    {this.state.loading ? (
                                        <Spinner />
                                    ) : (
                                        this.state.users.map((e, i) => {
                                            return (
                                                <User
                                                    index={i}
                                                    emial={e.email}
                                                    img={e.picture.medium}
                                                    firstName={e.name.first}
                                                    lastName={e.name.last}
                                                    date={e.registered.age}
                                                />
                                            );
                                        })
                                    )}
                                </div>
                            </Scrollbars>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
