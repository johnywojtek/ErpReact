import React from 'react';
import {
    TiDevicePhone,
    TiEdit,
    TiUserAddOutline,
    TiCancel,
    TiMessages,
    TiTrash,
    TiCameraOutline
} from 'react-icons/ti';
import { Scrollbars } from 'react-custom-scrollbars';
import Chart from './Chart';
import Contact from './Contact';

import { FaRegClock, FaRegEnvelope, FaMobileAlt } from 'react-icons/fa';
export default function Participants() {
    return (
        <div class="az-content-body participants az-content-body-show">
            <div class="az-content-left az-content-left-contacts">
                <h2 class="az-content-title mb-3">Contacts</h2>

                <nav class="nav az-nav-line az-nav-line-chat">
                    <a href="" data-toggle="tab" class="nav-link active">
                        All Contacts
                    </a>
                    <a href="" data-toggle="tab" class="nav-link">
                        Groups
                    </a>
                </nav>
                <Scrollbars style={{ height: '89%' }}>
                    <button className="content-toggler">></button>
                    <div id="azContactList" class="az-contacts-list">
                        <div class="az-contact-label">A</div>
                        <Contact />
                        <div class="az-contact-label">B</div>
                        <Contact />
                        <div class="az-contact-label">C</div>
                        <Contact />
                    </div>
                </Scrollbars>
            </div>
            <Scrollbars style={{ height: '89%' }}>
                <div class="az-content-body-contacts">
                    <div class="az-contact-info-header">
                        <div class="media">
                            <div class="az-img-user">
                                <img
                                    src="https://via.placeholder.com/500x500"
                                    alt=""
                                />
                                <a href="">
                                    <TiCameraOutline />
                                </a>
                            </div>
                            <div class="media-body">
                                <h4>Abigail Johnson</h4>
                                <p>Product Designer</p>
                                <nav class="nav">
                                    <a href="" class="nav-link">
                                        <TiDevicePhone />
                                        Call
                                    </a>

                                    <a href="" class="nav-link">
                                        <TiMessages /> Message
                                    </a>
                                    <a href="" class="nav-link add-group">
                                        <TiUserAddOutline />
                                        Add to Group
                                    </a>
                                    <li class="nav-link block-button">
                                        <TiCancel />
                                        Block
                                    </li>
                                    <a href="" class="nav-link edit-contact">
                                        <TiEdit /> Edit Contact
                                    </a>
                                    <a href="" class="nav-link delete-contact">
                                        <TiTrash />
                                        Delete Contact
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="az-contact-info-body">
                        <div class="media-list">
                            <nav class="nav az-nav-line-part">
                                <a
                                    href=""
                                    class="nav-link active"
                                    data-toggle="tab"
                                >
                                    Week
                                </a>
                                <a href="" class="nav-link" data-toggle="tab">
                                    Month
                                </a>
                                <a href="" class="nav-link" data-toggle="tab">
                                    Year
                                </a>
                            </nav>

                            <div class="row mb-2">
                                <div class="az-profile-view-chart">
                                    <Chart />
                                    <div class="az-profile-view-info">
                                        <div class="d-flex align-items-baseline">
                                            <h6>508</h6>
                                            <span>-1.2% since last week</span>
                                        </div>
                                        <p>Profile viewers past 10 days</p>
                                    </div>
                                </div>
                            </div>

                            <div class="media">
                                <div class="media-icon">
                                    <FaMobileAlt />
                                </div>
                                <div class="media-body-info">
                                    <div>
                                        <span>+1 (234) 567 8901</span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-icon align-self-start">
                                    <FaRegEnvelope />
                                </div>
                                <div class="media-body-info">
                                    <div>
                                        <span>abigail.johnson@gmail.com</span>
                                    </div>
                                </div>
                            </div>

                            <div class="media">
                                <div class="media-icon">
                                    <FaRegClock />
                                </div>
                                <div class="media-body-info">
                                    <div>
                                        <span>1865 h</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul class="list-group">
                            <label className="az-content-label">Roles</label>
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
                </div>
            </Scrollbars>
        </div>
    );
}
