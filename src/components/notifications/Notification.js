import React, { Component } from 'react';
import { FaRegThumbsUp, FaRegTrashAlt } from 'react-icons/fa';

export default class Notification extends Component {
    render() {
        return (
            <div class="media">
                <div class="az-img-user notif-user ">
                    <img src="https://via.placeholder.com/500x500" alt="" />
                </div>
                <div class="media-body">
                    <div class="media-contact-name">
                        <span>
                            <strong>Strona Smart Oak Project</strong> ma nowe
                            wyświetlenia: 1 000 000.
                        </span>
                        <span>2 hours</span>
                    </div>
                    <div class="notif-action">
                        <a href="">
                            <FaRegThumbsUp />
                            Lubie to
                        </a>
                        <a href="">
                            <FaRegTrashAlt />
                            Odrzuć
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
