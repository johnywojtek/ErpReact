import React from 'react';

import { FaRegTrashAlt, FaDotCircle } from 'react-icons/fa';

export default function Notification(props) {
    return (
        <div className="media">
            <div className="az-img-user-post">
                <img src="https://via.placeholder.com/500x500" alt="" />
            </div>
            <div className="media-body d-flex">
                <div>
                    <p>{props.text}</p>
                    <span>{props.data}</span>
                </div>
                <div>
                    <FaRegTrashAlt />
                    <FaDotCircle />
                </div>
            </div>
        </div>
    );
}
