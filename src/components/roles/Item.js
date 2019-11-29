import React, { Component } from 'react';
import { FaMinus } from 'react-icons/fa';
import axios from 'axios';

export default function Item(props) {
    const onMinusClick = e => {
        console.log(e);
        //remove
        // axios.delete(
        //     `https://5dd8f525505c590014d3be77.mockapi.io/roles/${this.props.id}`
        // );
    };
    return (
        <li
            class="list-group-item"
            style={{ color: props.color }}
            onClick={props.onClick}
        >
            {props.name}
            <FaMinus onClick={onMinusClick} />
        </li>
    );
}
