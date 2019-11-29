import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import Navigation from './Navigation';
import logo from '../../img/neur.jpg';

class Sidebar extends Component {
    // componentDidMount() {
    //     document.addEventListener('mousedown', this.handleClickOutside);

    // }

    // componentWillUnmount() {
    //     document.removeEventListener('mousedown', this.handleClickOutside);
    // }

    // handleClickOutside = event => {
    //     if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
    //         this.props.onBtnClick(false);
    //     }
    // };

    setWrapperRef = node => {
        this.wrapperRef = node;
    };

    // onSidebarButtonClick = () => {
    //     // this.setState({ btnClick: false });

    //     this.props.onBtnClick(false);
    // };
    render() {
        return (
            <div className="az-sidebar" ref={this.setWrapperRef}>
                <div className="az-sidebar-header">
                    <NavLink to="/">
                        <img className="logo" src={logo} />
                    </NavLink>
                    {/* <div
                        onClick={this.onSidebarButtonClick}
                        className="sidebar-close d-block d-lg-none"
                    >
                        <IoIosClose />
                    </div> */}
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
                            <Navigation />
                        </ul>
                    </div>
                </Scrollbars>
            </div>
        );
    }
}

export default Sidebar;
