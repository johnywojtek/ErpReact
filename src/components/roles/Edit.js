import React, { Component } from 'react';

import { CirclePicker } from 'react-color';
import { Form, Field } from 'react-final-form';

import { TiArrowLeft } from 'react-icons/ti';

export default class Edit extends Component {
    onSubmit = values => {
        console.log(values);
    };
    render() {
        return (
            <div class="modal-body">
                <div class="form-group">
                    <Form
                        onSubmit={this.onSubmit}
                        validate={values => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = 'Required';
                            }
                            if (!values.desc) {
                                errors.desc = 'Required';
                            }
                            return errors;
                        }}
                        initialValues={{
                            name: this.props.name,
                            desc: this.props.desc
                        }}
                        render={({
                            handleSubmit,
                            form,
                            submitting,
                            pristine,
                            values
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <TiArrowLeft
                                    className="arrow-roles"
                                    // onClick={this.onArrowClick}
                                />
                                <h5 className="my-2">Name</h5>

                                <Field name="name">
                                    {({ input, meta }) => (
                                        <div className="form-group">
                                            <input
                                                {...input}
                                                type="text"
                                                placeholder="Name"
                                                className={`form-control mt-2 ${meta.error &&
                                                    meta.touched &&
                                                    'is-invalid'}`}
                                            />
                                            {meta.error && meta.touched && (
                                                <div className="text-danger">
                                                    {meta.error}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <h5 className="my-2">Description</h5>

                                <Field name="desc">
                                    {({ input, meta }) => (
                                        <div className="form-group">
                                            <textarea
                                                className={`form-control mt-2 ${meta.error &&
                                                    meta.touched &&
                                                    'is-invalid'}`}
                                                rows="5"
                                                {...input}
                                                placeholder="Description"
                                            />
                                            {meta.error && meta.touched && (
                                                <div className="text-danger">
                                                    {meta.error}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <div class="form-group">
                                    <h4 className="my-4">Change name</h4>
                                    <CirclePicker name="clock" />
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
                                <button
                                    type="submit"
                                    class="btn btn-success"
                                    disabled={submitting}
                                >
                                    Save
                                </button>
                            </form>
                        )}
                    />
                </div>
            </div>
        );
    }
}
