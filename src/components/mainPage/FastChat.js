import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';

import {
    FaPhone,
    FaVideo,
    FaCamera,
    FaPaperclip,
    FaSmile,
    FaEllipsisV,
    FaRegPaperPlane
} from 'react-icons/fa';
import { IoMdClose, IoIosSettings } from 'react-icons/io';

export default class FastChat extends Component {
    state = { close: false };

    onCloseClick = () => {
        this.setState({ close: true });
    };

    render() {
        return (
            <div
                class="small-chat "
                className={classNames('small-chat', {
                    'd-none': this.state.close
                })}
            >
                <div class="small-chat-header">
                    <div class="az-img-user">
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    <div class="chat-msg-name">
                        <h6>Reynante Labares</h6>
                    </div>
                    <nav class="nav">
                        <Link class="nav-link" to="/main/voiceChat">
                            <FaPhone />
                        </Link>
                        <Link class="nav-link" to="/main/videoChat">
                            <FaVideo />
                        </Link>
                        <a href="" class="nav-link">
                            <IoIosSettings />
                        </a>
                        <div onClick={this.onCloseClick} class="nav-link">
                            <IoMdClose />
                        </div>
                    </nav>
                </div>
                <div class="small-chat-body">
                    <Scrollbars style={{ height: '85%' }}>
                        <div class="content-inner">
                            <label class="az-chat-time">
                                <span>3 days ago</span>
                            </label>
                            <div class="media flex-row-reverse">
                                <div class="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="az-msg-wrapper">
                                        Nulla consequat massa quis enim. Donec
                                        pede justo, fringilla vel...
                                    </div>
                                    <div class="az-msg-wrapper">
                                        rhoncus ut, imperdiet a, venenatis
                                        vitae, justo...
                                    </div>
                                    <div class="az-msg-wrapper p-0">
                                        <img
                                            src="https://via.placeholder.com/500x334"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <span>9:48 am</span>{' '}
                                        <a href="">
                                            <i class="icon ion-android-more-horizontal"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="az-msg-wrapper">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula
                                        eget dolor.
                                    </div>
                                    <div>
                                        <span>9:32 am</span>{' '}
                                        <a href="">
                                            <i class="icon ion-android-more-horizontal"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="media flex-row-reverse">
                                <div class="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="az-msg-wrapper">
                                        Nullam dictum felis eu pede mollis
                                        pretium
                                    </div>
                                    <div>
                                        <span>11:22 am</span>{' '}
                                        <a href="">
                                            <i class="icon ion-android-more-horizontal"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <label class="az-chat-time">
                                <span>Yesterday</span>
                            </label>
                            <div class="media">
                                <div class="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="az-msg-wrapper">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula
                                        eget dolor.
                                    </div>
                                    <div>
                                        <span>9:32 am</span>{' '}
                                        <a href="">
                                            <i class="icon ion-android-more-horizontal"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="media flex-row-reverse">
                                <div class="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="az-msg-wrapper">
                                        Donec quam felis, ultricies nec,
                                        pellentesque eu, pretium quis, sem.
                                        Nulla consequat massa quis enim. Donec
                                        pede justo, fringilla vel, aliquet nec.
                                        In enim justo, rhoncus ut, imperdiet a,
                                        venenatis vitae, justo.
                                    </div>
                                    <div class="az-msg-wrapper">
                                        Nullam dictum felis eu pede mollis
                                        pretium
                                    </div>
                                    <div>
                                        <span>9:48 am</span>{' '}
                                        <a href="">
                                            <i class="icon ion-android-more-horizontal"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <label class="az-chat-time">
                                <span>Today</span>
                            </label>
                            <div class="media">
                                <div class="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="az-msg-wrapper">
                                        Maecenas tempus, tellus eget condimentum
                                        rhoncus
                                    </div>
                                    <div class="az-msg-wrapper">
                                        Nam quam nunc, blandit vel, luctus
                                        pulvinar, hendrerit id, lorem. Maecenas
                                        nec odio et ante tincidunt tempus. Donec
                                        vitae sapien ut libero venenatis
                                        faucibus.
                                    </div>
                                    <div>
                                        <span>10:12 am</span>{' '}
                                        <a href="">
                                            <i class="icon ion-android-more-horizontal"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="media flex-row-reverse">
                                <div class="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="az-msg-wrapper">
                                        Maecenas tempus, tellus eget condimentum
                                        rhoncus
                                    </div>
                                    <div class="az-msg-wrapper">
                                        Nam quam nunc, blandit vel, luctus
                                        pulvinar, hendrerit id, lorem. Maecenas
                                        nec odio et ante tincidunt tempus. Donec
                                        vitae sapien ut libero venenatis
                                        faucibus.
                                    </div>
                                    <div>
                                        <span>09:40 am</span>{' '}
                                        <a href="">
                                            <i class="icon ion-android-more-horizontal"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Scrollbars>

                    <div class="small-chat-footer">
                        <nav class="nav">
                            <a class="nav-link">
                                <FaCamera />
                            </a>
                            <a class="nav-link">
                                <FaPaperclip />
                            </a>
                            <a class="nav-link">
                                <FaSmile />
                            </a>
                        </nav>
                        <input
                            type="text"
                            class="form-control "
                            placeholder="Aa"
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
