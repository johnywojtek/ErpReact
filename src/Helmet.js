import React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './components/Sidebar';

class Application extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet>
                    <meta charset="utf-8"></meta>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    ></meta>
                    <title>
                        Azia Responsive Bootstrap 4 Dashboard Template
                    </title>

                    {/* <link href="../lib/fontawesome-free/css/all.min.css" rel="stylesheet">
                <link href="../lib/ionicons/css/ionicons.min.css" rel="stylesheet">
                <link href="../lib/typicons.font/typicons.css" rel="stylesheet">
                <link href="../lib/morris.js/morris.css" rel="stylesheet">
                <link href="../lib/flag-icon-css/css/flag-icon.min.css" rel="stylesheet">
                <link href="../lib/jqvmap/jqvmap.min.css" rel="stylesheet"> */}

                    {/* <link rel="stylesheet" href="../css/azia.css"> */}
                </Helmet>
                <Sidebar />
            </div>
        );
    }
}

export default Application;
