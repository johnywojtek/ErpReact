import React, { Component } from 'react';

// az-img-user online = true // green online circle
// media new=true //red circle

export default class User extends Component {
    render() {
        return (
            <div className="media">
                <div className="az-img-user">
                    <img src={this.props.img} alt="" />
                    {/* <span>2</span> new messages number when new = true */}
                </div>
                <div className="media-body">
                    <div className="media-contact-name">
                        <span>{this.props.username}</span>
                        <span>{this.props.time}</span>
                    </div>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}
