import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse2: false,
            collapse3: false,
            collapse4: false,
            collapse5: false
        };
    }

    getCollapseState(id) {
        const objToReturn = {};
        for (const i in this.state) {
            console.log(i, id, i !== id);
            if (i !== id) {
                objToReturn[i] = false;
            } else {
                objToReturn[i] = true;
            }
        }

        return objToReturn;
    }

    toggle = e => {
        console.log(e.target.id);

        if (e.target.id === false) {
            this.setState(this.getCollapseState(e.target.id));
        } else {
            this.setState(this.getCollapseState(e.target.id));
        }
    };

    render() {
        return (
            <div>
                <div>
                    <a to="/">Home</a>
                </div>
                <div>
                    <a onClick={this.toggle} id="collapse2">
                        Zadany BEM SOLID DRY
                    </a>
                    <div isOpen={this.state.collapse2}></div>
                </div>

                <div>
                    <a onClick={this.toggle} id="collapse3">
                        React
                    </a>
                    <div isOpen={this.state.collapse3}></div>
                </div>
            </div>
        );
    }
}
