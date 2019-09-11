import React from 'react';
import logo from '../img/neur.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

import Collapse, { Panel } from '../es';
import { Scrollbars } from 'react-custom-scrollbars';
import { IoIosClose } from 'react-icons/io';
import { FaRegFlag } from 'react-icons/fa';

import {
    TiClipboard,
    TiHomeOutline,
    TiThLargeOutline,
    TiPuzzleOutline
} from 'react-icons/ti';
class Sidebar extends React.Component {
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

    onSidebarButtonClick = () => {
        // this.setState({ btnClick: false });

        this.props.onBtnClick(false);
    };
    render() {
        const accordion = this.state.accordion;

        const activeKey = this.state.activeKey;
        return (
            <div className="az-sidebar">
                <div className="az-sidebar-header">
                    <NavLink to="/">
                        <img className="logo" src={logo} />
                    </NavLink>
                    <div
                        onClick={this.onSidebarButtonClick}
                        className="sidebar-close d-block d-lg-none"
                    >
                        <IoIosClose />
                    </div>
                </div>

                <Scrollbars
                    autoHideTimeout={200}
                    autoHideDuration={200}
                    autoHide={true}
                    hideTracksWhenNotNeeded={true}
                    style={{ width: '100%', height: '100%' }}
                >
                    <div className="az-sidebar-body">
                        <ul className="nav">
                            <div className="nav-label">
                                <li>Main Menu</li>
                                {/* <FontAwesomeIcon icon={faPlus} /> */}
                            </div>

                            <Collapse
                                accordion={accordion}
                                onChange={this.onChange}
                                activeKey={activeKey}
                                // className="nav-link"
                            >
                                <Panel
                                    header="Board"
                                    headerIcon={<TiHomeOutline class="typcn" />}
                                >
                                    <nav>
                                        <NavLink
                                            to="/"
                                            className="nav-sub-link"
                                            activeClassName="active"
                                        >
                                            Main
                                        </NavLink>
                                        <NavLink
                                            to="/main/info"
                                            className="nav-sub-link"
                                            activeClassName="active"
                                        >
                                            Information
                                        </NavLink>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="Tools"
                                    headerIcon={
                                        <TiThLargeOutline class="typcn" />
                                    }
                                >
                                    <nav>
                                        <NavLink
                                            to="/main/calendar"
                                            className="nav-sub-link"
                                        >
                                            Calendar
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Chat
                                        </NavLink>
                                        <NavLink
                                            to="/main/email"
                                            className="nav-sub-link"
                                        >
                                            E-mail
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Activity log
                                        </NavLink>
                                        <NavLink
                                            to="/main/participants"
                                            className="nav-sub-link"
                                        >
                                            Participants
                                        </NavLink>
                                        <NavLink
                                            to="/main/roles"
                                            className="nav-sub-link"
                                        >
                                            Roles & permissions
                                        </NavLink>
                                        <NavLink
                                            to="/main/disks"
                                            className="nav-sub-link"
                                        >
                                            Disks
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Gsuit
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Google Ads
                                        </NavLink>

                                        <Collapse defaultActiveKey="1">
                                            <Panel
                                                header="Texts on pages"
                                                headerClass="nav-second"
                                            >
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    smartoakproject.com{' '}
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    neuronfoundation.com
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    attendo.world
                                                </NavLink>
                                            </Panel>
                                        </Collapse>
                                        <NavLink
                                            to="/main/sms"
                                            className="nav-sub-link"
                                        >
                                            SMS notifications
                                        </NavLink>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="Management"
                                    headerIcon={<TiClipboard class="typcn" />}
                                >
                                    <nav>
                                        <NavLink to="" className="nav-sub-link">
                                            Coordinators
                                        </NavLink>
                                        <NavLink
                                            to=""
                                            className="nav-sub-link active"
                                        >
                                            NeuroN Foundation
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            New Neuropsychiatry
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            NeuroN Direction
                                        </NavLink>

                                        <Collapse defaultActiveKey="1">
                                            <Panel
                                                header="Oakes Innovate"
                                                headerClass="nav-second"
                                            >
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Attendo
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Sanum
                                                </NavLink>
                                            </Panel>
                                        </Collapse>
                                        <NavLink to="" className="nav-sub-link">
                                            NTV Channel
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Oakes Clinic
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Oak Atlantis
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            NeuroN Currency
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Administration
                                        </NavLink>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="Basics"
                                    headerIcon={<FaRegFlag class="typcn" />}
                                >
                                    <nav>
                                        <NavLink to="" className="nav-sub-link">
                                            NeuroN Store{' '}
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Marketing, PR, media
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Newsletter
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Drone, camera
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Graphics and photos
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Recruitment
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Social media
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Copywriters
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Translators
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Special tasks
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            ERP System & websites
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Websites
                                        </NavLink>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="Major Events"
                                    headerIcon={
                                        <TiPuzzleOutline class="typcn" />
                                    }
                                >
                                    <nav>
                                        <NavLink to="" className="nav-sub-link">
                                            Hippocampus
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            NeuroN Direction
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            New Neuropsychiatry
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Charity event
                                        </NavLink>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="NeuroN Foundation"
                                    headerIcon={
                                        <TiPuzzleOutline class="typcn" />
                                    }
                                >
                                    <nav>
                                        <Collapse defaultActiveKey="1">
                                            <Panel
                                                header="Cities"
                                                headerClass="nav-second"
                                            >
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Białystok
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Bydgoszcz
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Częstochowa
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Katowice
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Kielce
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Kraków
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Lublin
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Łódź
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Olsztyn
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Poznań
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Rzeszów
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Szczecin
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Toruń
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Trójmiasto
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Warszawa
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Wrocław
                                                </NavLink>
                                            </Panel>
                                        </Collapse>
                                        <Collapse defaultActiveKey="1">
                                            <Panel
                                                header="Actions"
                                                headerClass="nav-second"
                                            >
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Social Campaigns
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Conference
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Theater
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Sport & Learning
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Expression
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    NeuroN sCOOL
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    NeuroN Place
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Artistic Agency
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Fundraising
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Application
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    NeuroN Runs
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Voluntary Hackathon
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Social Stores
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Relaxation Activities
                                                </NavLink>
                                            </Panel>
                                        </Collapse>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="New Neuropsychiatry"
                                    headerIcon={
                                        <TiPuzzleOutline class="typcn" />
                                    }
                                >
                                    <nav>
                                        <NavLink to="" className="nav-sub-link">
                                            Association
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Journal
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Institute
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Check Neurons
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Forum
                                        </NavLink>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="NeuroN Direction"
                                    headerIcon={
                                        <TiPuzzleOutline class="typcn" />
                                    }
                                >
                                    <nav>
                                        <Collapse defaultActiveKey="1">
                                            <Panel
                                                header="Application"
                                                headerClass="nav-second"
                                            >
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Front end
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Back end
                                                </NavLink>
                                            </Panel>
                                        </Collapse>
                                        <Collapse defaultActiveKey="1">
                                            <Panel
                                                header="Program"
                                                headerClass="nav-second"
                                            >
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Front end
                                                </NavLink>
                                                <NavLink
                                                    to=""
                                                    className="nav-sub-link"
                                                >
                                                    Back end
                                                </NavLink>
                                            </Panel>
                                        </Collapse>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="Oakes Innovate"
                                    headerIcon={
                                        <TiPuzzleOutline class="typcn" />
                                    }
                                >
                                    <nav>
                                        <NavLink to="" className="nav-sub-link">
                                            Attendo
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Sanum
                                        </NavLink>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="NTV Channel"
                                    headerIcon={
                                        <TiPuzzleOutline class="typcn" />
                                    }
                                >
                                    <nav>
                                        <NavLink to="" className="nav-sub-link">
                                            Coś o muzyce
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Coś o książkach
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Coś o filmach
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Exploration of Reality
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Język na dziś
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Filmy dokumentalne
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Czas na wykład
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Historia sztuki
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Tematy społeczne
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Motomaniak
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Technomaniak
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Bajki
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Tabu
                                        </NavLink>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="Oakes Clinic"
                                    headerIcon={
                                        <TiPuzzleOutline class="typcn" />
                                    }
                                >
                                    <nav>
                                        <NavLink to="" className="nav-sub-link">
                                            General
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Brain Project
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Cancer Project
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Genetic Project
                                        </NavLink>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="Oak Atlantis"
                                    headerIcon={
                                        <TiPuzzleOutline class="typcn" />
                                    }
                                >
                                    <nav>
                                        <NavLink to="" className="nav-sub-link">
                                            General
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            Veg recipes
                                        </NavLink>
                                        <NavLink to="" className="nav-sub-link">
                                            What needs to change?
                                        </NavLink>
                                    </nav>
                                </Panel>

                                <Panel
                                    header="NeuroN Currency"
                                    headerIcon={
                                        <TiPuzzleOutline class="typcn" />
                                    }
                                >
                                    <nav>
                                        <NavLink to="" className="nav-sub-link">
                                            General
                                        </NavLink>
                                    </nav>
                                </Panel>
                            </Collapse>
                        </ul>
                    </div>
                </Scrollbars>
            </div>
        );
    }
}

export default Sidebar;
