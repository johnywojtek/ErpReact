import React, { Component } from 'react';
import MyContext from '../MyContext';

// az-img-user online = true // green online circle
// media new=true //red circle

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }

    handleClick(index, props) {
        this.setState({ activeIndex: index });
    }

    render() {
        return (
            <div>
                {this.props.people.map(function(e, index) {
                    const className =
                        this.state.activeIndex === index
                            ? 'media selected'
                            : 'media';
                    return (
                        <MyContext.Consumer>
                            {context => (
                                <div
                                    className={className}
                                    key={index}
                                    onClick={
                                        (this.handleClick.bind(
                                            this,
                                            index,
                                            this.props
                                        ),
                                        context.toggleChat)
                                    }
                                >
                                    <div className="az-img-user">
                                        <img src={e.picture.medium} alt="" />
                                        {/* <span>2</span> new messages number when new = true */}
                                    </div>
                                    <div className="media-body">
                                        <h6 className="mb-0"></h6>
                                        <div className="media-contact-name">
                                            <span>{`${e.name.first} ${e.name.last}`}</span>
                                            <span>{`${e.registered.age} days`}</span>
                                        </div>
                                        <p>
                                            {this.props.emial ? e.email : null}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </MyContext.Consumer>
                    );
                }, this)}
            </div>
        );
    }
}
