import React from 'react';
import {
    TiMail,
    TiStarOutline,
    TiBookmark,
    TiArrowForwardOutline,
    TiCancelOutline,
    TiPen,
    TiTrash,
    TiFolder,
    TiChevronLeft,
    TiArrowSync,
    TiChevronRight,
    TiTag,
    TiArrowRight,
    TiArrowLeft
} from 'react-icons/ti';
import { IoIosClose } from 'react-icons/io';

import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';

export default class Email extends React.Component {
    state = { view: false, compose: false };
    onArrowClick = () => {
        this.setState(prevState => ({
            view: !prevState.view
        }));
    };
    onButtonClick = () => {
        this.setState({ compose: true });
    };
    onCloseClick = () => {
        this.setState({ compose: false });
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ compose: false });
        }
    };
    setWrapperRef = node => {
        this.wrapperRef = node;
    };
    render() {
        return (
            <div className="az-content-body content-padding">
                <div
                    className={classNames('az-content-left-mail', {
                        'd-block': this.state.view
                    })}
                >
                    <TiArrowRight
                        onClick={this.onArrowClick}
                        className="arrow-emial"
                    />
                    <a
                        onClick={this.onButtonClick}
                        id="btnCompose"
                        className="btn btn-az-primary btn-compose"
                    >
                        Compose
                    </a>

                    <Scrollbars style={{ height: '91%' }}>
                        <div className="az-mail-menu">
                            <nav className="nav az-nav-column">
                                <a href="" className="nav-link active">
                                    <TiMail className="typcn" /> Inbox
                                    <span>20</span>
                                </a>
                                <a href="" className="nav-link active">
                                    <TiMail /> Inbox
                                    <span>20</span>
                                </a>
                                <a href="" className="nav-link active">
                                    <TiMail /> Inbox
                                    <span>20</span>
                                </a>
                                <a href="" className="nav-link active">
                                    <TiMail /> Inbox
                                    <span>20</span>
                                </a>
                                <a href="" className="nav-link active">
                                    <TiMail /> Inbox
                                    <span>20</span>
                                </a>
                                <a href="" className="nav-link">
                                    <TiStarOutline /> Starred
                                    <span>3</span>
                                </a>
                                <a href="" className="nav-link">
                                    <TiBookmark /> Important
                                    <span>10</span>
                                </a>
                                <a href="" className="nav-link">
                                    <TiArrowForwardOutline />
                                    Sent Mail
                                    <span>8</span>
                                </a>
                                <a href="" className="nav-link">
                                    <TiPen /> Drafts
                                    <span>15</span>
                                </a>
                                <a href="" className="nav-link">
                                    <TiCancelOutline /> Spam
                                    <span>128</span>
                                </a>
                                <a href="" className="nav-link">
                                    <TiTrash /> Trash
                                    <span>6</span>
                                </a>
                            </nav>

                            <label className="az-content-label az-content-label-sm">
                                Label
                            </label>
                            <nav className="nav az-nav-column">
                                <a href="#" className="nav-link">
                                    <TiFolder /> Project A
                                </a>
                                <a href="#" className="nav-link">
                                    <TiFolder /> Project B
                                </a>
                                <a href="#" className="nav-link">
                                    <TiFolder /> Project C
                                </a>
                                <a href="#" className="nav-link">
                                    <TiFolder /> Project D
                                </a>
                            </nav>

                            <label className="az-content-label az-content-label-sm">
                                Mails
                            </label>
                            <nav className="nav az-nav-column">
                                <a href="#" className="nav-link">
                                    lucasdabraowski@gmail.com <span>221</span>
                                </a>
                                <a href="#" className="nav-link">
                                    lucasdabraowski@onet.com <span>323</span>
                                </a>
                                <a href="#" className="nav-link">
                                    lucasdabraowski@wp.com <span>173</span>
                                </a>
                                <a href="#" className="nav-link add-mail">
                                    <i className="fas fa-plus"></i> dodaj
                                    kolejnego maila
                                </a>
                            </nav>
                        </div>
                    </Scrollbars>
                </div>
                <div
                    className={classNames('az-content-body-mail', {
                        'd-none': this.state.view
                    })}
                >
                    <div className="az-mail-header">
                        <div>
                            <TiArrowLeft
                                onClick={this.onArrowClick}
                                className="arrow-emial"
                            />
                            <div>
                                <h4>Inbox</h4>
                                <p>You have 2 unread messages</p>
                            </div>
                        </div>
                        <div>
                            <span>1-50 of 1200</span>
                            <div className="btn-group" role="group">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary disabled"
                                >
                                    <TiChevronLeft />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                >
                                    <TiChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="az-mail-options">
                        <label className="ckbox">
                            <input id="checkAll" type="checkbox" />
                            <span></span>
                        </label>
                        <div className="btn-group">
                            <button className="btn btn-light">
                                <TiArrowSync
                                    style={{ width: '24px', height: '24px' }}
                                />
                            </button>
                            <button className="btn btn-light disabled">
                                <TiTrash className="ask-user" />
                            </button>
                            <button className="btn btn-light disabled">
                                <TiTag />
                            </button>
                        </div>
                    </div>
                    <Scrollbars style={{ height: '81%' }}>
                        <div className="az-mail-list">
                            <div className="az-mail-item unread">
                                <div className="az-mail-checkbox">
                                    <label className="ckbox">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <div className="az-mail-star">
                                    <i className="typcn typcn-star"></i>
                                </div>
                                <div className="az-img-user">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div className="az-mail-body">
                                    <div className="az-mail-from">
                                        Adrian Monino
                                    </div>
                                    <div className="az-mail-subject">
                                        <strong>
                                            Someone who believes in you
                                        </strong>
                                        <span>
                                            enean commodo li gula eget dolor cum
                                            socia eget dolor enean commodo li
                                            gula eget dolor cum socia eget dolor
                                        </span>
                                    </div>
                                </div>
                                <div className="az-mail-attachment">
                                    <i className="typcn typcn-attachment"></i>
                                </div>
                                <div className="az-mail-date">11:30am</div>
                            </div>
                            <div className="az-mail-item unread">
                                <div className="az-mail-checkbox">
                                    <label className="ckbox">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <div className="az-mail-star active">
                                    <i className="typcn typcn-star"></i>
                                </div>
                                <div className="az-img-user">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div className="az-mail-body">
                                    <div className="az-mail-from">
                                        Albert Ansing
                                    </div>
                                    <div className="az-mail-subject">
                                        <strong>
                                            Here's What You Missed This Week
                                        </strong>
                                        <span>
                                            enean commodo li gula eget dolor cum
                                            socia eget dolor enean commodo li
                                            gula eget dolor cum socia eget
                                            dolor...
                                        </span>
                                    </div>
                                </div>
                                <div className="az-mail-date">06:50am</div>
                            </div>
                            <div className="az-mail-item">
                                <div className="az-mail-checkbox">
                                    <label className="ckbox">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <div className="az-mail-star">
                                    <i className="typcn typcn-star"></i>
                                </div>
                                <div className="az-img-user">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div className="az-mail-body">
                                    <div className="az-mail-from">
                                        Carla Guden
                                    </div>
                                    <div className="az-mail-subject">
                                        <strong>
                                            4 Ways to Optimize Your Search
                                        </strong>
                                        <span>
                                            viva mus elemen tum semper nisi
                                            enean vulputat enean commodo li gula
                                            eget dolor cum socia eget dolor
                                        </span>
                                    </div>
                                </div>
                                <div className="az-mail-attachment">
                                    <i className="typcn typcn-attachment"></i>
                                </div>
                                <div className="az-mail-date">Yesterday</div>
                            </div>
                            <div className="az-mail-item unread">
                                <div className="az-mail-checkbox">
                                    <label className="ckbox">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <div className="az-mail-star">
                                    <i className="typcn typcn-star"></i>
                                </div>
                                <div className="az-img-user">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div className="az-mail-body">
                                    <div className="az-mail-from">
                                        Reven Galeon
                                    </div>
                                    <div className="az-mail-subject">
                                        <strong>
                                            We're Giving a Macbook for Free
                                        </strong>
                                        <span>
                                            viva mus elemen tum semper nisi
                                            enean vulputat enean commodo li gula
                                            eget dolor cum socia eget dolor
                                        </span>
                                    </div>
                                </div>
                                <div className="az-mail-date">Yesterday</div>
                            </div>
                            <div className="az-mail-item">
                                <div className="az-mail-checkbox">
                                    <label className="ckbox">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <div className="az-mail-star">
                                    <i className="typcn typcn-star"></i>
                                </div>
                                <div className="az-img-user">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div className="az-mail-body">
                                    <div className="az-mail-from">
                                        Elisse Tan
                                    </div>
                                    <div className="az-mail-subject">
                                        <strong>
                                            Keep Your Personal Data Safe
                                        </strong>
                                        <span>
                                            viva mus elemen tum semper nisi
                                            enean vulputat enean commodo li gula
                                            eget dolor cum socia eget dolor
                                        </span>
                                    </div>
                                </div>
                                <div className="az-mail-date">Oct 13</div>
                            </div>
                            <div className="az-mail-item">
                                <div className="az-mail-checkbox">
                                    <label className="ckbox">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <div className="az-mail-star">
                                    <i className="typcn typcn-star"></i>
                                </div>
                                <div className="az-img-user">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div className="az-mail-body">
                                    <div className="az-mail-from">
                                        Marianne Audrey
                                    </div>
                                    <div className="az-mail-subject">
                                        <strong>We've Made Some Changes</strong>
                                        <span>
                                            viva mus elemen tum semper nisi
                                            enean vulputat enean commodo li gula
                                            eget dolor cum socia eget dolor
                                        </span>
                                    </div>
                                </div>
                                <div className="az-mail-date">Oct 13</div>
                            </div>
                            <div className="az-mail-item">
                                <div className="az-mail-checkbox">
                                    <label className="ckbox">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <div className="az-mail-star">
                                    <i className="typcn typcn-star"></i>
                                </div>
                                <div className="az-avatar">J</div>
                                <div className="az-mail-body">
                                    <div className="az-mail-from">
                                        Jane Phoebe
                                    </div>
                                    <div className="az-mail-subject">
                                        <strong>Grab Our Holiday Deals</strong>
                                        <span>
                                            viva mus elemen tum semper nisi
                                            enean vulputat enean commodo li gula
                                            eget dolor cum socia eget dolor
                                        </span>
                                    </div>
                                </div>
                                <div className="az-mail-date">Oct 12</div>
                            </div>
                            <div className="az-mail-item">
                                <div className="az-mail-checkbox">
                                    <label className="ckbox">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <div className="az-mail-star">
                                    <i className="typcn typcn-star"></i>
                                </div>
                                <div className="az-img-user">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div className="az-mail-body">
                                    <div className="az-mail-from">
                                        Raffy Godinez
                                    </div>
                                    <div className="az-mail-subject">
                                        <strong>Just a Few Steps Away</strong>
                                        <span>
                                            viva mus elemen tum semper nisi
                                            enean vulputat enean commodo li gula
                                            eget dolor cum socia eget dolor
                                        </span>
                                    </div>
                                </div>
                                <div className="az-mail-date">Oct 05</div>
                            </div>
                            <div className="az-mail-item">
                                <div className="az-mail-checkbox">
                                    <label className="ckbox">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <div className="az-mail-star active">
                                    <i className="typcn typcn-star"></i>
                                </div>
                                <div className="az-img-user">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div className="az-mail-body">
                                    <div className="az-mail-from">
                                        Allan Cadungog
                                    </div>
                                    <div className="az-mail-subject">
                                        <strong>Credit Card Promos</strong>
                                        <span>
                                            viva mus elemen tum semper nisi
                                            enean vulputat enean commodo li gula
                                            eget dolor cum socia eget dolor
                                        </span>
                                    </div>
                                </div>
                                <div className="az-mail-date">Oct 04</div>
                            </div>
                            <div className="az-mail-item">
                                <div className="az-mail-checkbox">
                                    <label className="ckbox">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <div className="az-mail-star">
                                    <i className="typcn typcn-star"></i>
                                </div>
                                <div className="az-img-user">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div className="az-mail-body">
                                    <div className="az-mail-from">
                                        Alfie Salinas
                                    </div>
                                    <div className="az-mail-subject">
                                        <strong>
                                            4 Ways to Optimize Your Search
                                        </strong>
                                        <span>
                                            viva mus elemen tum semper nisi
                                            enean vulputat enean commodo li gula
                                            eget dolor cum socia eget dolor
                                        </span>
                                    </div>
                                </div>
                                <div className="az-mail-date">Oct 02</div>
                            </div>
                            <div className="az-mail-item">
                                <div className="az-mail-checkbox">
                                    <label className="ckbox">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <div className="az-mail-star">
                                    <i className="typcn typcn-star"></i>
                                </div>
                                <div className="az-img-user">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <div className="az-mail-body">
                                    <div className="az-mail-from">
                                        Jove Guden
                                    </div>
                                    <div className="az-mail-subject">
                                        <strong>
                                            Keep Your Personal Data Safe
                                        </strong>
                                        <span>
                                            viva mus elemen tum semper nisi
                                            enean vulputat enean commodo li gula
                                            eget dolor cum socia eget dolor
                                        </span>
                                    </div>
                                </div>
                                <div className="az-mail-date">Oct 02</div>
                            </div>
                        </div>
                    </Scrollbars>

                    {/* <div className="mb-lg-5"></div> */}
                </div>
                <div
                    className={classNames('az-mail-compose', {
                        'd-block': this.state.compose
                    })}
                >
                    <div>
                        <div class="container">
                            <div
                                ref={this.setWrapperRef}
                                class="az-mail-compose-box"
                            >
                                <div class="az-mail-compose-header">
                                    <span>New Message</span>
                                    <nav class="nav">
                                        <a href="" class="nav-link">
                                            <i class="fas fa-minus"></i>
                                        </a>
                                        <a href="" class="nav-link">
                                            <i class="fas fa-compress"></i>
                                        </a>
                                        <IoIosClose
                                            onClick={this.onCloseClick}
                                        />
                                    </nav>
                                </div>
                                <div class="az-mail-compose-body">
                                    <div class="form-group">
                                        <label class="form-label">To</label>
                                        <div>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Enter recipient's email address"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">
                                            Subject
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <textarea
                                            class="form-control"
                                            rows="8"
                                            placeholder="Write your message here..."
                                        ></textarea>
                                    </div>
                                    <div class="form-group">
                                        <nav class="nav">
                                            <a
                                                href=""
                                                class="nav-link"
                                                data-toggle="tooltip"
                                                title="Add attachment"
                                            >
                                                <i class="fas fa-paperclip"></i>
                                            </a>
                                            <a
                                                href=""
                                                class="nav-link"
                                                data-toggle="tooltip"
                                                title="Add photo"
                                            >
                                                <i class="far fa-image"></i>
                                            </a>
                                            <a
                                                href=""
                                                class="nav-link"
                                                data-toggle="tooltip"
                                                title="Add link"
                                            >
                                                <i class="fas fa-link"></i>
                                            </a>
                                            <a
                                                href=""
                                                class="nav-link"
                                                data-toggle="tooltip"
                                                title="Emoticons"
                                            >
                                                <i class="far fa-smile"></i>
                                            </a>
                                            <a
                                                href=""
                                                class="nav-link"
                                                data-toggle="tooltip"
                                                title="Discard"
                                            >
                                                <i class="far fa-trash-alt"></i>
                                            </a>
                                        </nav>
                                        <button class="btn btn-primary">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
