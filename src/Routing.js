import React from 'react';

import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import MyContext from './MyContext';
import Sidebar from './components/Sidebar';
import MainPage from './components/mainPage/MainPage';
import MainHeader from './components/header/MainHeader';
import classNames from 'classnames';
import Participants from './components/participants/Participants';
import Email from './components/Email';
import Signin from './components/Signin';
import FullWidthHeader from './components/header/FullWidthHeader';
import Signup from './components/Signup';
import Notification from './components/Notification';
import Profile from './components/Profile';
import Chat from './components/chat/Chat';
import AccSettings from './components/AccSettings';
import Calendar from './components/calendar/Calendar';
import Roles from './components/Roles';
import Disks from './components/Disks';
import Sms from './components/Sms';
import Info from './components/Info';
import VideoChat from './components/VideoChat';
import VoiceChat from './components/VoiceChat';

const routes = [
    {
        path: '/main',
        exact: true,
        main: () => <MainPage />
    },

    {
        path: '/main/accSettings',
        main: () => <AccSettings />
    },
    {
        path: '/main/calendar',
        main: () => <Calendar />
    },
    {
        path: '/main/email',
        main: () => <Email />
    },
    {
        path: '/main/participants',
        main: () => <Participants />
    },
    {
        path: '/main/roles',
        main: () => <Roles />
    },
    {
        path: '/main/disks',
        main: () => <Disks />
    },
    {
        path: '/main/sms',
        main: () => <Sms />
    },
    {
        path: '/main/info',
        main: () => <Info />
    },
    {
        path: '/main/account-settings',
        main: () => <AccSettings />
    },
    {
        path: '/main/voiceChat',
        main: () => <VoiceChat />
    },
    {
        path: '/main/videoChat',
        main: () => <VideoChat />
    }
];

class RoutingSidebar extends React.Component {
    state = { status: false };
    onSidebarButtonClick = status => {
        console.log(status);

        this.setState({ status });
    };
    render() {
        return (
            <div>
                <Router>
                    <div
                        className={classNames({
                            'az-sidebar-show': this.state.status
                        })}
                        style={{ display: 'flex' }}
                    >
                        <Sidebar onBtnClick={this.onSidebarButtonClick} />
                        <div className="content">
                            <MainHeader
                                onBtnClick={this.onSidebarButtonClick}
                            />

                            {routes.map((route, index) => (
                                // Render more <Route>s with the same paths as
                                // above, but different components this time.
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                        </div>
                        <div className="az-navbar-backdrop"></div>
                    </div>
                </Router>
            </div>
        );
    }
}

class MyProvider extends React.Component {
    state = { toggleChat: false };

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    toggleChat: () => {
                        this.setState(prevState => ({
                            toggleChat: !prevState.toggleChat
                        }));
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
class Headers extends React.Component {
    render() {
        return (
            <MyProvider>
                <Router>
                    <div className="content-full">
                        <FullWidthHeader />
                        <Switch>
                            <Route path="/head/chat" component={Chat} />
                            <Route path="/head/profile" component={Profile} />

                            <Route
                                path="/head/notification"
                                component={Notification}
                            />
                        </Switch>
                    </div>
                </Router>
            </MyProvider>
        );
    }
}

export default class Routing extends React.Component {
    state = { status: false };
    onSidebarButtonClick = status => {
        console.log(status);

        this.setState({ status });
    };
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/main" />}
                        />
                        <Route path="/main" component={RoutingSidebar} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/head" component={Headers} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
