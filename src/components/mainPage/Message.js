import React, { Component } from 'react';
import Linkify from 'react-linkify';

const fromDB = [
    {
        user: 12,
        img: '',
        text:
            'Great plan! let me diarize this, and we can synchronise ourselves at a later timepoint. It just needs more cowbell punter ultimate measureof success for crisp ppt. Innovation is hot right now high performance keywords but drive awareness to increase engagement push back make sure to include in your',
        time: '14:32'
    },
    {
        user: 232,
        img: 'https://via.placeholder.com/500x334',
        text: '',
        time: '15:32'
    },
    {
        user: 2312,
        img: '',
        text:
            "The last person we talked to said this would be ready but what's the real problem we're trying to solve here? work flows that ipo will be a game-changer tbrand terrorists. Can you slack it to me?",
        time: '16:32'
    },
    {
        user: 2312,
        img: '',
        text: 'Here is Link to our page https://smartoakproject.com/',
        time: '16:32'
    }
];

export default function Message() {
    return fromDB.map(e => {
        if (e.img.length) {
            return (
                <div class="media">
                    <div class="az-img-user-post">
                        {/* <img src=`https://via.placeholder.com/user/${fromDB.user}` alt="user" /> */}
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    <div class="media-body">
                        <div class="msg-body">
                            <div class="az-msg-wrapper p-0">
                                <img src={e.img} alt="" />
                            </div>
                            <i class="fas fa-ellipsis-h " />
                        </div>
                        <div>
                            <span>{e.time}</span>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div class="media">
                    <div class="az-img-user-post">
                        {/* <img src="https://via.placeholder.com/user/{fromDB.user}" alt="user" /> */}
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    <div class="media-body">
                        <div class="msg-body">
                            <div class="az-msg-wrapper">
                                <Linkify>{e.text}</Linkify>
                            </div>
                            <i class="fas fa-ellipsis-h " />
                        </div>
                        <div>
                            <span>{e.time}</span>
                        </div>
                    </div>
                </div>
            );
        }
    });
}
