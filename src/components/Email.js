import React from 'react';
import { TiMail } from 'react-icons/ti';

export default function Email() {
    return (
        <div class="az-content-body content-padding">
            <div class=" az-content-left-mail">
                <div class="az-content-header">
                    <a href="" id="azNavbarShow" class="az-header-menu-icon">
                        <span></span>
                    </a>
                    <a href="index.html" class="az-logo">
                        az<span>i</span>a
                    </a>
                    <a href="" id="azContentLeftHide" class="az-header-arrow">
                        <i class="icon ion-md-arrow-forward d-sm-none"></i>
                        <i class="icon ion-md-close d-none d-sm-block"></i>
                    </a>
                </div>

                <a
                    id="btnCompose"
                    href=""
                    class="btn btn-az-primary btn-compose"
                >
                    Compose
                </a>
                <div class="az-mail-menu">
                    <nav class="nav az-nav-column">
                        <a href="" class="nav-link active">
                            <TiMail class="typcn" /> Inbox
                            <span>20</span>
                        </a>
                        <a href="" class="nav-link active">
                            <TiMail /> Inbox
                            <span>20</span>
                        </a>
                        <a href="" class="nav-link active">
                            <TiMail /> Inbox
                            <span>20</span>
                        </a>
                        <a href="" class="nav-link active">
                            <TiMail /> Inbox
                            <span>20</span>
                        </a>
                        <a href="" class="nav-link active">
                            <TiMail /> Inbox
                            <span>20</span>
                        </a>
                        <a href="" class="nav-link">
                            <i class="typcn typcn-star-outline"></i> Starred
                            <span>3</span>
                        </a>
                        <a href="" class="nav-link">
                            <i class="typcn typcn-bookmark"></i> Important
                            <span>10</span>
                        </a>
                        <a href="" class="nav-link">
                            <i class="typcn typcn-arrow-forward-outline"></i>{' '}
                            Sent Mail
                            <span>8</span>
                        </a>
                        <a href="" class="nav-link">
                            <i class="typcn typcn-pen"></i> Drafts{' '}
                            <span>15</span>
                        </a>
                        <a href="" class="nav-link">
                            <i class="typcn typcn-cancel-outline"></i> Spam
                            <span>128</span>
                        </a>
                        <a href="" class="nav-link">
                            <i class="typcn typcn-trash"></i> Trash{' '}
                            <span>6</span>
                        </a>
                    </nav>

                    <label class="az-content-label az-content-label-sm">
                        Label
                    </label>
                    <nav class="nav az-nav-column">
                        <a href="#" class="nav-link">
                            <i class="typcn typcn-folder"></i> Project A{' '}
                        </a>
                        <a href="#" class="nav-link">
                            <i class="typcn typcn-folder"></i> Project B{' '}
                        </a>
                        <a href="#" class="nav-link">
                            <i class="typcn typcn-folder"></i> Project C{' '}
                        </a>
                        <a href="#" class="nav-link">
                            <i class="typcn typcn-folder"></i> Project D{' '}
                        </a>
                    </nav>

                    <label class="az-content-label az-content-label-sm">
                        Mails
                    </label>
                    <nav class="nav az-nav-column">
                        <a href="#" class="nav-link">
                            {' '}
                            lucasdabraowski@gmail.com <span>221</span>
                        </a>
                        <a href="#" class="nav-link">
                            {' '}
                            lucasdabraowski@onet.com <span>323</span>
                        </a>
                        <a href="#" class="nav-link">
                            {' '}
                            lucasdabraowski@wp.com <span>173</span>
                        </a>
                        <a href="#" class="nav-link add-mail">
                            <i class="fas fa-plus"></i> dodaj kolejnego maila
                        </a>
                    </nav>
                </div>
            </div>
            <div class="az-content-body-mail">
                <div class="az-mail-header">
                    <div>
                        <h4>Inbox</h4>
                        <p>You have 2 unread messages</p>
                    </div>
                    <div>
                        <span>1-50 of 1200</span>
                        <div class="btn-group" role="group">
                            <button
                                type="button"
                                class="btn btn-outline-secondary disabled"
                            >
                                <i class="icon ion-ios-arrow-back"></i>
                            </button>
                            <button
                                type="button"
                                class="btn btn-outline-secondary"
                            >
                                <i class="icon ion-ios-arrow-forward"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="az-mail-options">
                    <label class="ckbox">
                        <input id="checkAll" type="checkbox" />
                        <span></span>
                    </label>
                    <div class="btn-group">
                        <button class="btn btn-light">
                            <i class="typcn typcn-arrow-sync"></i>
                        </button>
                        <button class="btn btn-light disabled">
                            <i class="typcn typcn-trash ask-user"></i>
                        </button>
                        <button class="btn btn-light disabled">
                            <i class="typcn typcn-tag"></i>
                        </button>
                    </div>
                </div>

                <div class="az-mail-list">
                    <div class="az-mail-item unread">
                        <div class="az-mail-checkbox">
                            <label class="ckbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div class="az-mail-star">
                            <i class="typcn typcn-star"></i>
                        </div>
                        <div class="az-img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div class="az-mail-body">
                            <div class="az-mail-from">Adrian Monino</div>
                            <div class="az-mail-subject">
                                <strong>Someone who believes in you</strong>
                                <span>
                                    enean commodo li gula eget dolor cum socia
                                    eget dolor enean commodo li gula eget dolor
                                    cum socia eget dolor
                                </span>
                            </div>
                        </div>
                        <div class="az-mail-attachment">
                            <i class="typcn typcn-attachment"></i>
                        </div>
                        <div class="az-mail-date">11:30am</div>
                    </div>
                    <div class="az-mail-item unread">
                        <div class="az-mail-checkbox">
                            <label class="ckbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div class="az-mail-star active">
                            <i class="typcn typcn-star"></i>
                        </div>
                        <div class="az-img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div class="az-mail-body">
                            <div class="az-mail-from">Albert Ansing</div>
                            <div class="az-mail-subject">
                                <strong>
                                    Here's What You Missed This Week
                                </strong>
                                <span>
                                    enean commodo li gula eget dolor cum socia
                                    eget dolor enean commodo li gula eget dolor
                                    cum socia eget dolor...
                                </span>
                            </div>
                        </div>
                        <div class="az-mail-date">06:50am</div>
                    </div>
                    <div class="az-mail-item">
                        <div class="az-mail-checkbox">
                            <label class="ckbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div class="az-mail-star">
                            <i class="typcn typcn-star"></i>
                        </div>
                        <div class="az-img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div class="az-mail-body">
                            <div class="az-mail-from">Carla Guden</div>
                            <div class="az-mail-subject">
                                <strong>4 Ways to Optimize Your Search</strong>
                                <span>
                                    viva mus elemen tum semper nisi enean
                                    vulputat enean commodo li gula eget dolor
                                    cum socia eget dolor
                                </span>
                            </div>
                        </div>
                        <div class="az-mail-attachment">
                            <i class="typcn typcn-attachment"></i>
                        </div>
                        <div class="az-mail-date">Yesterday</div>
                    </div>
                    <div class="az-mail-item unread">
                        <div class="az-mail-checkbox">
                            <label class="ckbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div class="az-mail-star">
                            <i class="typcn typcn-star"></i>
                        </div>
                        <div class="az-img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div class="az-mail-body">
                            <div class="az-mail-from">Reven Galeon</div>
                            <div class="az-mail-subject">
                                <strong>We're Giving a Macbook for Free</strong>
                                <span>
                                    viva mus elemen tum semper nisi enean
                                    vulputat enean commodo li gula eget dolor
                                    cum socia eget dolor
                                </span>
                            </div>
                        </div>
                        <div class="az-mail-date">Yesterday</div>
                    </div>
                    <div class="az-mail-item">
                        <div class="az-mail-checkbox">
                            <label class="ckbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div class="az-mail-star">
                            <i class="typcn typcn-star"></i>
                        </div>
                        <div class="az-img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div class="az-mail-body">
                            <div class="az-mail-from">Elisse Tan</div>
                            <div class="az-mail-subject">
                                <strong>Keep Your Personal Data Safe</strong>
                                <span>
                                    viva mus elemen tum semper nisi enean
                                    vulputat enean commodo li gula eget dolor
                                    cum socia eget dolor
                                </span>
                            </div>
                        </div>
                        <div class="az-mail-date">Oct 13</div>
                    </div>
                    <div class="az-mail-item">
                        <div class="az-mail-checkbox">
                            <label class="ckbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div class="az-mail-star">
                            <i class="typcn typcn-star"></i>
                        </div>
                        <div class="az-img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div class="az-mail-body">
                            <div class="az-mail-from">Marianne Audrey</div>
                            <div class="az-mail-subject">
                                <strong>We've Made Some Changes</strong>
                                <span>
                                    viva mus elemen tum semper nisi enean
                                    vulputat enean commodo li gula eget dolor
                                    cum socia eget dolor
                                </span>
                            </div>
                        </div>
                        <div class="az-mail-date">Oct 13</div>
                    </div>
                    <div class="az-mail-item">
                        <div class="az-mail-checkbox">
                            <label class="ckbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div class="az-mail-star">
                            <i class="typcn typcn-star"></i>
                        </div>
                        <div class="az-avatar">J</div>
                        <div class="az-mail-body">
                            <div class="az-mail-from">Jane Phoebe</div>
                            <div class="az-mail-subject">
                                <strong>Grab Our Holiday Deals</strong>
                                <span>
                                    viva mus elemen tum semper nisi enean
                                    vulputat enean commodo li gula eget dolor
                                    cum socia eget dolor
                                </span>
                            </div>
                        </div>
                        <div class="az-mail-date">Oct 12</div>
                    </div>
                    <div class="az-mail-item">
                        <div class="az-mail-checkbox">
                            <label class="ckbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div class="az-mail-star">
                            <i class="typcn typcn-star"></i>
                        </div>
                        <div class="az-img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div class="az-mail-body">
                            <div class="az-mail-from">Raffy Godinez</div>
                            <div class="az-mail-subject">
                                <strong>Just a Few Steps Away</strong>
                                <span>
                                    viva mus elemen tum semper nisi enean
                                    vulputat enean commodo li gula eget dolor
                                    cum socia eget dolor
                                </span>
                            </div>
                        </div>
                        <div class="az-mail-date">Oct 05</div>
                    </div>
                    <div class="az-mail-item">
                        <div class="az-mail-checkbox">
                            <label class="ckbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div class="az-mail-star active">
                            <i class="typcn typcn-star"></i>
                        </div>
                        <div class="az-img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div class="az-mail-body">
                            <div class="az-mail-from">Allan Cadungog</div>
                            <div class="az-mail-subject">
                                <strong>Credit Card Promos</strong>
                                <span>
                                    viva mus elemen tum semper nisi enean
                                    vulputat enean commodo li gula eget dolor
                                    cum socia eget dolor
                                </span>
                            </div>
                        </div>
                        <div class="az-mail-date">Oct 04</div>
                    </div>
                    <div class="az-mail-item">
                        <div class="az-mail-checkbox">
                            <label class="ckbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div class="az-mail-star">
                            <i class="typcn typcn-star"></i>
                        </div>
                        <div class="az-img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div class="az-mail-body">
                            <div class="az-mail-from">Alfie Salinas</div>
                            <div class="az-mail-subject">
                                <strong>4 Ways to Optimize Your Search</strong>
                                <span>
                                    viva mus elemen tum semper nisi enean
                                    vulputat enean commodo li gula eget dolor
                                    cum socia eget dolor
                                </span>
                            </div>
                        </div>
                        <div class="az-mail-date">Oct 02</div>
                    </div>
                    <div class="az-mail-item">
                        <div class="az-mail-checkbox">
                            <label class="ckbox">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div class="az-mail-star">
                            <i class="typcn typcn-star"></i>
                        </div>
                        <div class="az-img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div class="az-mail-body">
                            <div class="az-mail-from">Jove Guden</div>
                            <div class="az-mail-subject">
                                <strong>Keep Your Personal Data Safe</strong>
                                <span>
                                    viva mus elemen tum semper nisi enean
                                    vulputat enean commodo li gula eget dolor
                                    cum socia eget dolor
                                </span>
                            </div>
                        </div>
                        <div class="az-mail-date">Oct 02</div>
                    </div>
                </div>

                <div class="mb-lg-5"></div>
            </div>
        </div>
    );
}
