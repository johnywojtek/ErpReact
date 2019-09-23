import React, { Component } from 'react';
import { TiCancelOutline } from 'react-icons/ti';
import { Scrollbars } from 'react-custom-scrollbars';
import {
    FaMicrophoneSlash,
    FaMicrophone,
    FaShareSquare,
    FaVideoSlash,
    FaVideo,
    FaCog,
    FaDesktop
} from 'react-icons/fa';
export default class VideoChat extends Component {
    render() {
        return (
            <div className="voice-chat-wrapper">
                <div className="voice-main">
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

                        <div className="btn btn-danger">ROZŁĄCZ</div>
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
                                <div className="media flex-row-reverse">
                                    <div className="az-img-user online">
                                        <img
                                            src="https://via.placeholder.com/500x500"
                                            alt=""
                                        />
                                    </div>
                                    <div className="media-body">
                                        <div className="az-msg-wrapper">
                                            Nulla consequat massa quis enim.
                                            Donec pede justo, fringilla vel...
                                        </div>
                                        <div className="az-msg-wrapper">
                                            rhoncus ut, imperdiet a, venenatis
                                            vitae, justo...
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
                                            consectetuer adipiscing elit. Aenean
                                            commodo ligula eget dolor.
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
                                            Nullam dictum felis eu pede mollis
                                            pretium
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
                                            consectetuer adipiscing elit. Aenean
                                            commodo ligula eget dolor.
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
                                            Donec quam felis, ultricies nec,
                                            pellentesque eu, pretium quis, sem.
                                            Nulla consequat massa quis enim.
                                            Donec pede justo, fringilla vel,
                                            aliquet nec. In enim justo, rhoncus
                                            ut, imperdiet a, venenatis vitae,
                                            justo.
                                        </div>
                                        <div className="az-msg-wrapper">
                                            Nullam dictum felis eu pede mollis
                                            pretium
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
                                            Nam quam nunc, blandit vel, luctus
                                            pulvinar, hendrerit id, lorem.
                                            Maecenas nec odio et ante tincidunt
                                            tempus. Donec vitae sapien ut libero
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
                                            Nam quam nunc, blandit vel, luctus
                                            pulvinar, hendrerit id, lorem.
                                            Maecenas nec odio et ante tincidunt
                                            tempus. Donec vitae sapien ut libero
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
                </div>
            </div>
        );
    }
}
