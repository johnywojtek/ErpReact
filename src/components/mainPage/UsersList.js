import React, { Component } from 'react';
import classNames from 'classnames';

//dodać obługę time last ago
//pomyśleć nad online

const data = [
    {
        userId: 12,
        username: 'Socrates Itu',
        email: 'socrates@emial.com.pl',
        time: '3 hours'
    },
    {
        userId: 21,
        username: 'Lucas Dąbrowski-Dębski',
        email: 'Lucas@emial.com.pl',
        time: '5 days'
    },
    {
        userId: 12,
        username: 'Vitalii Hromyk',
        email: 'Vitalii@emial.com.pl',
        time: '5 days'
    },
    {
        userId: 212,
        username: 'Lucas Dąbrowski-Dębski',
        email: 'Lucas@emial.com.pl',
        time: '5 days'
    },
    {
        userId: 212,
        username: 'Dexter dela Cruz',
        email: 'dexter@emial.com.pl',
        time: '8 hours'
    },
    {
        userId: 212,
        username: 'Reynante Labares',
        email: 'ray@emial.com.pl',
        time: '2 days'
    },
    {
        userId: 212,
        username: 'Wojciech John',
        email: 'johny@emial.com.pl',
        time: '4 days'
    },
    {
        userId: 212,
        username: 'Wojciech John',
        email: 'johny@emial.com.pl',
        time: '4 days'
    },
    {
        userId: 212,
        username: 'Joyce Chua',
        email: 'joy@emial.com.pl',
        time: '3 days'
    },
    {
        userId: 212,
        username: 'Wojciech John',
        email: 'johny@emial.com.pl',
        time: '4 days'
    },
    {
        userId: 212,
        username: 'Lucas Dąbrowski-Dębski',
        email: 'Lucas@emial.com.pl',
        time: '5 days'
    },
    {
        userId: 212,
        username: 'Vitalii Hromyk',
        email: 'Vitalii@emial.com.pl',
        time: '5 days'
    },
    {
        userId: 212,
        username: 'Vitalii Hromyk',
        email: 'Vitalii@emial.com.pl',
        time: '5 days'
    },
    {
        userId: 212,
        username: 'Vitalii Hromyk',
        email: 'Vitalii@emial.com.pl',
        time: '5 days'
    }
];

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new: true,
            online: this.props.online,
            selected: false
        };
    }
    onUserClick = e => {
        this.setState({
            selected: true,
            new: false
            // test: 'siema'
        });
        console.log(e);
    };
    render() {
        const isNew = classNames('media', {
            new: this.state.new,
            selected: this.state.selected
        });

        const isOnline = classNames('az-img-user', {
            online: this.state.online
        });
        return (
            <div onClick={this.onUserClick} className={isNew}>
                <div className={isOnline}>
                    {/* <img src=`https://via.placeholder.com/user/${fromDB.user}` alt="user" /> */}
                    <img src="https://via.placeholder.com/500x500" alt="" />
                    {/* <span>2</span> */}
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

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = { collapse1: false, collapse2: false };
    }
    render() {
        return data.map(e => {
            return <User username={e.username} email={e.email} time={e.time} />;
        });
    }
}
