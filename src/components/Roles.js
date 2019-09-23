import React, { Component } from 'react';
import { CirclePicker } from 'react-color';
import classNames from 'classnames';
import { TiArrowLeft } from 'react-icons/ti';
class Role extends Component {
    state = { color: '#607d8b' };

    render() {
        return (
            <li
                class="list-group-item"
                style={{ color: this.state.color }}
                onClick={this.onRoleClick}
            >
                {this.props.name}
            </li>
        );
    }
}

export default class Roles extends Component {
    state = {
        value: 'choose role to edit',
        color: '#607d8b',
        toggleEdit: false
    };

    onRoleClick = e => {
        this.setState({ toggleEdit: true });

        this.setState({
            value: e.currentTarget.textContent
        });
    };
    onArrowClick = () => {
        this.setState(prevState => ({
            toggleEdit: !prevState.toggleEdit
        }));
    };
    onColorChange = color => {
        this.setState({
            color: color.hex
        });
    };
    render() {
        return (
            <div
                className={classNames('roles-body', {
                    'show-edit': this.state.toggleEdit
                })}
            >
                <div class="add-role">
                    <div className="role-heading">
                        <h2 className="mb-0">Roles</h2>
                        <div className="btn btn-outline-success">
                            Add Role +
                        </div>
                    </div>
                    <ul class="list-group">
                        <li
                            data="sosadw"
                            class="list-group-item"
                            style={{ color: this.state.color }}
                            onClick={this.onRoleClick}
                        >
                            King of Smart Oak
                        </li>
                        <li
                            class="list-group-item"
                            style={{ color: this.state.color }}
                            onClick={this.onRoleClick}
                        >
                            King of Smart Oak
                        </li>
                        <li
                            class="list-group-item"
                            style={{ color: this.state.color }}
                            onClick={this.onRoleClick}
                        >
                            King of 2
                        </li>
                        <li
                            class="list-group-item"
                            style={{ color: this.state.color }}
                            onClick={this.onRoleClick}
                        >
                            Spider man
                        </li>
                        <li
                            class="list-group-item"
                            style={{ color: this.state.color }}
                            onClick={this.onRoleClick}
                        >
                            King kong
                        </li>
                        <li
                            class="list-group-item"
                            style={{ color: this.state.color }}
                            onClick={this.onRoleClick}
                        >
                            Smart Oak Member
                        </li>
                        <li
                            class="list-group-item"
                            style={{ color: this.state.color }}
                            onClick={this.onRoleClick}
                        >
                            Lorem ipsum
                        </li>
                        <li
                            class="list-group-item"
                            style={{ color: this.state.color }}
                            onClick={this.onRoleClick}
                        >
                            Every every
                        </li>
                    </ul>
                </div>

                <div class="az-content-body edit-roles">
                    <div class="modal-content">
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <TiArrowLeft
                                        className="arrow-emial"
                                        onClick={this.onArrowClick}
                                    />
                                    <h4 className="my-3">Change name</h4>
                                    <input
                                        type="text"
                                        class="form-control mt-2"
                                        placeholder="Name of new role"
                                        value={this.state.value}
                                    />
                                </div>
                                <div class="form-group">
                                    <h4 className="my-4">Change name</h4>
                                    <CirclePicker
                                        onChange={this.onColorChange}
                                    />
                                </div>

                                <div class="form-group">
                                    <h4 className="my-4">Settings</h4>
                                    <div class="form-check">
                                        <label class="form-check-label mb-2">
                                            <input
                                                type="checkbox"
                                                class="form-check-input "
                                                value=""
                                            />
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Blanditiis, non?
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input
                                                type="checkbox"
                                                class="form-check-input"
                                                value=""
                                            />
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Blanditiis, non?
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <h4 className="my-2">Delete name</h4>

                                    <button
                                        type="submit"
                                        class="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </div>

                                <button type="submit" class="btn btn-success ">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
