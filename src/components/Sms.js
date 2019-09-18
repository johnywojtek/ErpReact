import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Scrollbars } from 'react-custom-scrollbars';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Checkbox extends Component {
    state = { checkbox: false };

    handleInputChange = event => {
        this.setState(prevState => ({
            checkbox: !prevState.checkbox
        }));
    };
    render() {
        return (
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    checked={this.state.checkbox}
                    onChange={this.handleInputChange}
                    id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                    {this.props.text}
                </label>
            </div>
        );
    }
}

export default class Sms extends Component {
    state = { startDate: new Date() };
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        var products = [
            {
                id: 1,
                name: 'NeuroN szkolenia',
                acc: 'Main Account'
            },
            {
                id: 2,
                name: 'NeuroN szkolenia',
                acc: 'Main Account'
            },
            {
                id: 3,
                name: 'NeuroN szkolenia',
                acc: 'Main Account'
            },
            {
                id: 4,
                name: 'NeuroN szkolenia',
                acc: 'Main Account'
            },
            {
                id: 5,
                name: 'NeuroN szkolenia',
                acc: 'Main Account'
            },
            {
                id: 6,
                name: 'NeuroN szkolenia',
                acc: 'Main Account'
            },
            {
                id: 7,
                name: 'NeuroN szkolenia',
                acc: 'Main Account'
            }
        ];
        const selectRowProp = {
            mode: 'checkbox' // or checkbox
        };

        return (
            <div className="sms">
                <Scrollbars style={{ height: '90%' }}>
                    <form id="contact-form" role="form">
                        {/* <div class="messages">dasdasdas</div> */}

                        <div class="controls">
                            <div class="container">
                                <div class="row"></div>
                                <div class="row mt-md-0 mt-3">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_message">
                                                Message *
                                            </label>
                                            <textarea
                                                id="form_message"
                                                name="message"
                                                class="form-control"
                                                rows="4"
                                                required="required"
                                                data-error="Please, leave us a message."
                                            ></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h3>Termin realizacji</h3>

                                        <Checkbox text="Natychmiast" />
                                        <Checkbox text="W określonym czasie:" />
                                        <div className="message-time">
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                            />
                                            <Checkbox text="Powtarzaj wysyłkę:" />

                                            <div className="message-time-repeat">
                                                Wyślij łącznie{' '}
                                                <input type="text" />{' '}
                                                wiadomości. Jedna wiadomość co{' '}
                                                <select
                                                    id="form_need"
                                                    name="need"
                                                    class="form-control"
                                                    data-error="Please specify your need."
                                                >
                                                    <option value="1" selected>
                                                        1
                                                    </option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">
                                                        10
                                                    </option>
                                                    <option value="8">8</option>
                                                    <option value="8">8</option>
                                                    <option value="8">8</option>
                                                    <option value="8">8</option>
                                                    <option value="8">8</option>
                                                    <option value="8">8</option>
                                                    <option value="8">8</option>
                                                    <option value="8">8</option>
                                                    <option value="8">8</option>
                                                </select>
                                                <select
                                                    id="form_need"
                                                    name="need"
                                                    class="form-control"
                                                    data-error="Please specify your need."
                                                >
                                                    <option value=""></option>
                                                    <option value="Request quotation">
                                                        Request quotation
                                                    </option>
                                                    <option value="Request order status">
                                                        Request order status
                                                    </option>
                                                    <option value="Request copy of an invoice">
                                                        Request copy of an
                                                        invoice
                                                    </option>
                                                    <option value="Other">
                                                        Other
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <input
                                            type="submit"
                                            class="btn btn-success btn-send"
                                            value="Send message"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="container">
                        <div className="row mt-3">
                            <div className="col-md-8">
                                <BootstrapTable
                                    selectRow={selectRowProp}
                                    data={products}
                                    version="4"
                                >
                                    <TableHeaderColumn isKey dataField="id">
                                        ID
                                    </TableHeaderColumn>
                                    <TableHeaderColumn dataField="name">
                                        Name
                                    </TableHeaderColumn>
                                    <TableHeaderColumn dataField="acc">
                                        Account
                                    </TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                        </div>
                    </div>
                </Scrollbars>
            </div>
        );
    }
}
