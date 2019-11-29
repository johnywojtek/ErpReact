import React, { Component } from 'react';
import MyContext from '../../MyContext';
import { FaTrash, FaDotCircle } from 'react-icons/fa';

// az-img-user online = true // green online circle
// media new=true //red circle

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }

    render() {
        const className =
            this.state.activeIndex === this.props.index
                ? 'media selected'
                : 'media';
        return (
            <div>
                <MyContext.Consumer>
                    {context => (
                        <div
                            className={className}
                            key={this.props.index}
                            onClick={() => {
                                this.setState({
                                    activeIndex: this.props.index
                                });
                                if (window.innerWidth < 1000) {
                                    return context.toggleChat();
                                }
                            }}
                        >
                            <div className="az-img-user">
                                <img src={this.props.img} alt="" />
                                {/* <span>2</span> new messages number when new = true */}
                            </div>
                            <div className="media-body">
                                <h6 className="mb-0"></h6>
                                <div className="media-contact-name">
                                    <span>{`${this.props.firstName} ${this.props.lastName}`}</span>
                                    <span>{`${this.props.date} days`}</span>
                                    {this.props.icons ? (
                                        <div className="media-contact-icons">
                                            <FaTrash />
                                            <FaDotCircle />
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <p>
                                    {this.props.emial ? this.props.emial : null}
                                </p>
                            </div>
                        </div>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}
