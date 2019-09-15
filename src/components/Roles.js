import React, { Component } from 'react';

export default class Roles extends Component {
    render() {
        return (
            <div class="roles-body">
                <div class="az-content-left show-roles">
                    <div className="add-role">
                        <h2>Roles</h2>
                        <div className="btn btn-outline-success">
                            Add Role +
                        </div>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                        <li class="list-group-item">King of Smart Oak</li>
                    </ul>
                </div>

                <div class="az-content-body edit-roles">
                    <div class="modal-content">
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="sel1">Change name</label>
                                    <input
                                        type="text"
                                        class="form-control mt-2"
                                        placeholder="Name of new role"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Role color</label>
                                    <input type="text" id="showPaletteOnly" />
                                </div>

                                <div class="form-group">
                                    <h4>Delete role</h4>
                                    <button
                                        type="submit"
                                        class="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
