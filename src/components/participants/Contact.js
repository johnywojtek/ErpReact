import React, { Component } from 'react';

const database = [
    {
        userName: 'Abigail Johnson',
        phone: '602-999-123'
    },
    {
        userName: 'Abigail Johnson',
        phone: '602-999-123'
    },
    {
        userName: 'Abigail Johnson',
        phone: '602-999-123'
    },
    {
        userName: 'Abigail Johnson',
        phone: '602-999-123'
    }
];

export default function Contact() {
    return database.map(e => {
        return (
            <div class="az-contact-item">
                <div class="az-img-user online">
                    <img src="https://via.placeholder.com/500x500" alt="" />
                </div>
                <div class="az-contact-body">
                    <h6>{e.userName}</h6>
                    <span class="phone">{e.phone}</span>
                </div>
            </div>
        );
    });
}
