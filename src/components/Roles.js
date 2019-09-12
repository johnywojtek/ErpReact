import React, { Component } from 'react';

export default class Roles extends Component {
    render() {
        return (
            <div class="az-content-body">
                <div class="az-content-left show-roles">
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
                                    <label for="sel1">Add new role</label>
                                    <input
                                        type="text"
                                        class="form-control  mt-2"
                                        placeholder="Name of new role"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Role color</label>
                                    <input type="text" id="showPaletteOnly" />
                                </div>
                                <button
                                    type="submit"
                                    class="btn btn-az-primary mb-2"
                                >
                                    Add
                                </button>
                                <div class="form-group">
                                    <label for="sel1">Delete role</label>
                                    <select class="form-control" id="sel1">
                                        <option selected="selected">
                                            Choose role
                                        </option>
                                        <option>King of Smart Oak</option>
                                        <option>King of Smart Oak</option>
                                        <option>King of Smart Oak</option>
                                        <option>King of Smart Oak</option>
                                        <option>King of Smart Oak</option>
                                        <option>King of Smart Oak</option>
                                        <option>King of Smart Oak</option>
                                        <option>King of Smart Oak</option>
                                        <option>King of Smart Oak</option>
                                        <option>King of Smart Oak</option>
                                        <option>King of Smart Oak</option>
                                    </select>
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
