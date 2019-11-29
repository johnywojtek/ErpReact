import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import axios from 'axios';

import Collapse, { Panel } from '../../es';
import Icon from '../Icon';
import Spinner from '../common/Spinner';

class Sidebar extends Component {
    state = {
        accordion: true,
        activeKey: [],
        data: [],
        loading: false
    };

    onChange = activeKey => {
        this.setState({
            activeKey
        });
    };

    componentDidMount() {
        this.setState({ loading: true });
        axios.get(`https://5dd8f525505c590014d3be77.mockapi.io/sub`).then(e => {
            this.setState({
                data: e.data,
                loading: false
            });
        });
    }
    setActivityKey = () => {
        this.setState({
            activeKey: ['2']
        });
    };

    toggle = () => {
        this.setState({
            accordion: !this.state.accordion
        });
    };

    // onSidebarButtonClick = () => {
    //     // this.setState({ btnClick: false });
    //     this.props.onBtnClick(false);
    // };
    render() {
        let navigation = this.state.data.map(e => {
            return (
                <Panel
                    header={e.header}
                    headerIcon={<Icon tag={e.headerIcon} />}
                >
                    <nav>
                        {e.links.map(e => {
                            if (e.links) {
                                return (
                                    <Collapse defaultActiveKey="1">
                                        <Panel
                                            header={e.name}
                                            headerClass="nav-second"
                                        >
                                            {e.links.map(e => {
                                                return (
                                                    <NavLink
                                                        to={e.url}
                                                        className="nav-sub-link"
                                                    >
                                                        {e.name}
                                                    </NavLink>
                                                );
                                            })}
                                        </Panel>
                                    </Collapse>
                                );
                            } else {
                                return (
                                    <NavLink
                                        to={e.url}
                                        className="nav-sub-link"
                                        activeClassName="active"
                                    >
                                        {e.name}
                                    </NavLink>
                                );
                            }
                        })}
                    </nav>
                </Panel>
            );
        });
        const accordion = this.state.accordion;

        const activeKey = this.state.activeKey;
        return (
            <Collapse
                accordion={accordion}
                onChange={this.onChange}
                activeKey={activeKey}
                // className="nav-link"
            >
                {this.state.loading ? <Spinner /> : navigation}
            </Collapse>
        );
    }
}

export default Sidebar;
