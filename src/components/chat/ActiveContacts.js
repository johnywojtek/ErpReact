import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class ActiveContacts extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 4,
            arrows: false
        };
        return (
            <div>
                <div className="az-chat-contacts-wrapper">
                    <label className="az-content-label az-content-label-sm">
                        Active Contacts (5)
                    </label>
                    <div id="chatActiveContacts" className="az-chat-contacts">
                        <Slider {...settings}>
                            <div>
                                <div className="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <small>Adrian</small>
                            </div>
                            <div>
                                <div className="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <small>John</small>
                            </div>
                            <div>
                                <div className="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <small>Daniel</small>
                            </div>
                            <div>
                                <div className="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <small>Katherine</small>
                            </div>
                            <div>
                                <div className="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <small>Raymart</small>
                            </div>
                            <div>
                                <div className="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <small>Junrisk</small>
                            </div>
                            <div>
                                <div className="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <small>George</small>
                            </div>
                            <div>
                                <div className="az-img-user online">
                                    <img
                                        src="https://via.placeholder.com/500x500"
                                        alt=""
                                    />
                                </div>
                                <small>Maryjane</small>
                            </div>
                            <div>
                                <div className="az-chat-contacts-more">20+</div>
                                <small>More</small>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
