import React, { Component } from 'react';
import classNames from 'classnames';

import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import Spinner from '../common/Spinner';
import Navigation from '../sidebar/Navigation';

import Item from './Item';
import Edit from './Edit';

export default class Roles extends Component {
    state = {
        color: '#607d8b',
        toggleView: false,
        toggleEdit: false,
        currentVisible: 0,
        data: [],
        loading: true,
        itemData: {}
    };
    onItemClick = (data, e) => {
        console.log(data);
        this.setState({ itemData: data, toggleEdit: true });
    };
    onArrowClick = () => {
        this.setState(prevState => ({
            toggleView: !prevState.toggleView
        }));
    };

    onColorChange = color => {
        console.log(color);
        // this.setState({
        //     color: color.hex
        // });
    };

    componentDidMount() {
        this.getData(0);
    }

    getData = type => {
        let types = ['roles', 'sub', 'disks'];
        this.setState({
            loading: true,
            currentVisible: type,
            toggleEdit: false
        });
        axios
            .get(`https://5dd8f525505c590014d3be77.mockapi.io/${types[type]}`)
            .then(e => {
                this.setState({
                    data: e.data,
                    loading: false
                });
            });
    };

    renderItems() {
        //test
        if (this.state.currentVisible == 1) {
            return (
                <div className="az-sidebar-body">
                    <ul className="nav">
                        <Navigation />
                    </ul>
                </div>
            );
        }
        // console.log(this.state.data);
        return this.state.data.map(itemData => {
            return (
                <Item
                    id={itemData.id}
                    name={itemData.name}
                    desc={itemData.desc}
                    color="#ccc"
                    key={itemData.id}
                    onClick={e => this.onItemClick(itemData, e)}
                />
            );
        });
    }

    renderEditView() {
        const { name, desc, color } = this.state.itemData;
        return <Edit name={name} desc={desc} />;
    }

    render() {
        return (
            <div
                className={classNames('roles-body', {
                    'show-edit': this.state.toggleView
                })}
            >
                <div class="add-role">
                    <nav class="nav az-nav-line az-nav-line-chat">
                        <a
                            data-toggle="tab"
                            className={`nav-link ${
                                this.state.currentVisible == 0 ? 'active' : ''
                            }`}
                            onClick={() => this.getData(0)}
                        >
                            Roles
                        </a>
                        <a
                            data-toggle="tab"
                            className={`nav-link ${
                                this.state.currentVisible == 1 ? 'active' : ''
                            }`}
                            onClick={() => this.getData(1)}
                        >
                            Sub
                        </a>
                        <a
                            data-toggle="tab"
                            className={`nav-link ${
                                this.state.currentVisible == 2 ? 'active' : ''
                            }`}
                            onClick={() => this.getData(2)}
                        >
                            Disks
                        </a>
                        <a data-toggle="tab" class="nav-link ml-auto mr-3">
                            <FaPlus
                                style={{ marginLeft: 'auto', fill: '#28a745' }}
                            />
                        </a>
                    </nav>

                    <ul class="list-group">
                        {this.state.loading ? <Spinner /> : this.renderItems()}
                    </ul>
                </div>

                <div class="az-content-body edit-roles">
                    <div class="modal-content">
                        {/* <div class="modal-body">{this.renderContent()}</div> */}
                        {this.state.toggleEdit
                            ? this.renderEditView()
                            : 'choose item'}
                    </div>
                </div>
            </div>
        );
    }
}
