import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Collapse, { Panel } from '../es';
import { Scrollbars } from 'react-custom-scrollbars';

export default class Info extends Component {
    state = {
        accordion: true,
        activeKey: []
    };

    onChange = activeKey => {
        this.setState({
            activeKey
        });
    };

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

    render() {
        const accordion = this.state.accordion;

        const activeKey = this.state.activeKey;
        return (
            <div className="info">
                <Collapse
                    accordion={accordion}
                    onChange={this.onChange}
                    activeKey={activeKey}
                    showArrow="false"
                    // className="nav-link"
                >
                    <h2>Ogólne</h2>
                    <Panel header="Board">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore cupiditate earum ut debitis cum
                            laudantium iste incidunt officiis! Eum dolorem
                            laboriosam officiis maiores nobis provident mollitia
                            iusto molestiae vel repellendus!
                        </p>
                    </Panel>
                    <h2>Siema</h2>

                    <Panel header="Tools">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore cupiditate earum ut debitis cum
                            laudantium iste incidunt officiis! Eum dolorem
                            laboriosam officiis maiores nobis provident mollitia
                            iusto molestiae vel repellendus!
                        </p>
                    </Panel>

                    <Panel header="Management">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore cupiditate earum ut debitis cum
                            laudantium iste incidunt officiis! Eum dolorem
                            laboriosam officiis maiores nobis provident mollitia
                            iusto molestiae vel repellendus!
                        </p>
                    </Panel>

                    <Panel header="Basics">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore cupiditate earum ut debitis cum
                            laudantium iste incidunt officiis! Eum dolorem
                            laboriosam officiis maiores nobis provident mollitia
                            iusto molestiae vel repellendus!
                        </p>
                    </Panel>

                    <Panel header="Major Events">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore cupiditate earum ut debitis cum
                            laudantium iste incidunt officiis! Eum dolorem
                            laboriosam officiis maiores nobis provident mollitia
                            iusto molestiae vel repellendus!
                        </p>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
