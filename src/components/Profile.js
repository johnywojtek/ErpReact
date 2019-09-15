import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { FaPhone, FaVideo } from 'react-icons/fa';
import {
    IoLogoGithub,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoMdLink
} from 'react-icons/io';

export default class Profile extends Component {
    render() {
        return (
            <Scrollbars style={{ height: '91%' }}>
                <div class="profile-content">
                    <div class="az-content-left-profile">
                        <div class="az-profile-overview">
                            <div class="az-img-user">
                                <img
                                    src="https://via.placeholder.com/500x500"
                                    alt=""
                                />
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div>
                                    <h5 class="az-profile-name">
                                        Sophia White
                                    </h5>
                                    <p class="az-profile-name-text">
                                        UI/UX Designer
                                    </p>
                                </div>
                                <div class="btn-icon-list">
                                    <button class="btn-indigo btn-icon">
                                        <FaPhone />
                                    </button>
                                    <button class="btn-primary btn-icon">
                                        <FaVideo />
                                    </button>
                                </div>
                            </div>

                            <label class="az-content-label mt-4 mb-4">
                                Websites &amp; Social Channel
                            </label>
                            <div class="az-profile-social-list">
                                <a href="" class="media-icon">
                                    <IoLogoGithub />
                                </a>
                                <a href="" class="media-icon">
                                    <IoLogoTwitter />
                                </a>
                                <a href="" class="media-icon">
                                    <IoLogoLinkedin />
                                </a>
                                <a href="" class="media-icon">
                                    <IoMdLink />
                                </a>
                                <a href="" class="media-icon">
                                    <IoMdLink />
                                </a>
                            </div>
                            <label class="az-content-label mt-4 mb-2">
                                Description
                            </label>
                            <div class="az-profile-bio mt-3">
                                Genius, Compiler, Powerful Multitasker, Fantasy
                                Fruit Loop, Replacement President of a Major
                                Soft Drink Manufacturer.Genius, Compiler,
                                Powerful Multitasker, Fantasy Fruit Loop,
                                Replacement President of a Major Soft Drink
                                Manufacturer.Genius, Compiler, Powerful
                                Multitasker, Fantasy Fruit Loop, Replacement
                                President of a Major
                            </div>
                        </div>
                    </div>

                    <div class="az-content-body az-content-body-chat profile-activity">
                        <div class="az-chat-header">
                            <div class="az-chat-msg-name">
                                <h5 className="mb-0">Activity</h5>
                            </div>
                        </div>
                        <Scrollbars style={{ height: '93%' }}>
                            <div id="azChatBody" class="az-chat-body">
                                <div class="content-inner">
                                    <label class="az-chat-time">
                                        <span>3 days ago</span>
                                    </label>
                                    <div class="media">
                                        <div class="az-img-user online">
                                            <img
                                                src="https://via.placeholder.com/500x500"
                                                alt=""
                                            />
                                        </div>
                                        <div class="media-body">
                                            <div class="msg-body">
                                                <div class="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Saepe, eligendi.
                                                    Repudiandae consequuntur cor
                                                </div>
                                                <i class="fas fa-ellipsis-h "></i>
                                            </div>
                                            <div class="msg-body">
                                                <div class="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit. Aenean commodo ligula
                                                    eget dolor.
                                                </div>
                                                <i class="fas fa-ellipsis-h "></i>
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
                                            <div class="msg-body">
                                                <div class="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit. Aenean commodo ligula
                                                    eget dolor.
                                                </div>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </div>
                                            <div class="msg-body">
                                                <div class="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit. Aenean commodo ligula
                                                    eget dolor.
                                                </div>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </div>

                                            <div class="az-msg-wrapper p-0">
                                                <img
                                                    src="https://via.placeholder.com/500x334"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <span>9:32 am</span>{' '}
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
                                            <div class="msg-body">
                                                <div class="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit. Aenean commodo ligula
                                                    eget dolor.
                                                </div>
                                                <i class="fas fa-ellipsis-h "></i>
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
                                            <div class="msg-body">
                                                <div class="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit. Aenean commodo ligula
                                                    eget dolor.
                                                </div>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </div>
                                            <div>
                                                <span>9:32 am</span>{' '}
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
                                            <div class="msg-body">
                                                <div class="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit. Aenean commodo ligula
                                                    eget dolor.
                                                </div>
                                                <i class="fas fa-ellipsis-h "></i>
                                            </div>
                                            <div class="msg-body">
                                                <div class="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit. Aenean commodo ligula
                                                    eget dolor.
                                                </div>
                                                <i class="fas fa-ellipsis-h "></i>
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
                                            <div class="msg-body">
                                                <div class="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit. Aenean commodo ligula
                                                    eget dolor.
                                                </div>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </div>
                                            <div class="msg-body">
                                                <div class="az-msg-wrapper">
                                                    Nam quam nunc, blandit vel,
                                                    luctus pulvinar, hendrerit
                                                    id, lorem. Maecenas nec odio
                                                    et ante tincidunt tempus.
                                                    Donec vitae sapien ut libero
                                                    venenatis faucibus
                                                </div>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </div>
                                            <div>
                                                <span>10:12 am</span>{' '}
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
                                            <div class="msg-body">
                                                <div class="az-msg-wrapper">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetuer adipiscing
                                                    elit. Aenean commodo ligula
                                                    eget dolor.
                                                </div>
                                                <i class="fas fa-ellipsis-h  cart-popover"></i>

                                                <div
                                                    id="popover_content_wrapper"
                                                    style={{ display: 'none' }}
                                                >
                                                    <div>
                                                        <a
                                                            href="#"
                                                            class="msg-delete"
                                                        >
                                                            Delete
                                                        </a>
                                                        <a
                                                            href="#"
                                                            class="msg-translate"
                                                        >
                                                            Translate
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="az-msg-wrapper p-0">
                                                <img
                                                    src="https://via.placeholder.com/500x334"
                                                    alt=""
                                                />
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
                            </div>
                        </Scrollbars>
                    </div>

                    <ul class="list-group profile-roles">
                        <li class="list-group-item">
                            <h4>Roles</h4>
                        </li>

                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                    </ul>
                </div>
            </Scrollbars>
        );
    }
}
