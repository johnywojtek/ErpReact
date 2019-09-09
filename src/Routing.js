import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainPage from './components/mainPage/MainPage';
import Header from './components/Header';
import classNames from 'classnames';
import Participants from './components/Participants';
import Email from './components/Email';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Notification from './components/Notification';
import Profile from './components/Profile';
import Chat from './components/Chat';
import AccEdit from './components/AccEdit';
import AccSettings from './components/AccSettings';
import Calendar from './components/Calendar';
import Roles from './components/Roles';
import Disks from './components/Disks';
import Sms from './components/Sms';
import Info from './components/Info';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
    {
        path: '/main',
        exact: true,
        main: () => <MainPage />
    },

    {
        path: '/main/accEdit',
        main: () => <AccEdit />
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
                            <Header onBtnClick={this.onSidebarButtonClick} />

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
                    </div>
                </Router>
            </div>
        );
    }
}

class Headers extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="content">
                        <Header onBtnClick={this.onSidebarButtonClick} />
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
            </div>
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
