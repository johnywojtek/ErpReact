import React, { Component } from 'react';
import Linkify from 'react-linkify';
import { FaEllipsisH } from 'react-icons/fa';
import Moment from 'react-moment';
import {
    FaPhone,
    FaVideo,
    FaCamera,
    FaPaperclip,
    FaSmile,
    FaEllipsisV,
    FaRegPaperPlane
} from 'react-icons/fa';

export default function Post(props) {
    return (
        <div class="post">
            <div class="post__header">
                <div className="d-flex align-items-center">
                    <img src={props.avatar} alt="" />
                    <div className="ml-3">
                        <p className="post__name">{props.username}</p>
                        <span className="post__date">
                            <Moment format="DD MMMM HH:mm">{props.date}</Moment>
                        </span>
                    </div>
                </div>
                <FaEllipsisH />
            </div>
            <div class="post__body">
                <div className="post__desc">
                    <Linkify>{props.desc}</Linkify>
                </div>
                <div class="post__img">
                    {props.img && <img src={props.img} alt="" />}
                </div>
            </div>
            <div className="post__action ">
                <div className="d-flex">
                    <span className="mr-2">Like</span>
                    <span>Comment</span>
                </div>
                <div className="d-flex">
                    <span className="mr-2">1000 Likes</span>
                    <span>50 comments</span>
                </div>
            </div>
            <div className="post__comments">
                <div class="post__msg">
                    <div className="az-img-user-post online">
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    {/* <nav class="nav">
                        <a class="nav-link">
                            <FaCamera />
                        </a>
                        <a class="nav-link">
                            <FaPaperclip />
                        </a>
                        <a class="nav-link">
                            <FaSmile />
                        </a>
                    </nav> */}
                    <div className="input-wrapper">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Aa"
                        ></input>
                        <a href="" class="az-msg-send">
                            <FaRegPaperPlane />
                        </a>
                    </div>
                </div>
                <div className="media">
                    <div className="az-img-user-post online">
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    <div className="media-body">
                        <div className="az-msg-wrapper">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                        </div>
                        <div>
                            <span>9:32 am</span>{' '}
                            <a href="">
                                <i className="icon ion-android-more-horizontal"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="media">
                    <div className="az-img-user-post online">
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    <div className="media-body">
                        <div className="az-msg-wrapper">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                        </div>
                        <div>
                            <span>9:32 am</span>{' '}
                            <a href="">
                                <i className="icon ion-android-more-horizontal"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="media">
                    <div className="az-img-user-post online">
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    <div className="media-body">
                        <div className="az-msg-wrapper">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                        </div>
                        <div>
                            <span>9:32 am</span>{' '}
                            <a href="">
                                <i className="icon ion-android-more-horizontal"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="post__comments__more">
                    Load more comments (10)
                </div>
            </div>
        </div>
    );
}
