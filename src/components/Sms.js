import React, { Component } from 'react';

export default class Sms extends Component {
    render() {
        return (
            <div>
               <form id="contact-form"  role="form">

{/* <div class="messages">dasdasdas</div> */}

<div class="controls">

    <div class="row">
        
        <div class="col-md-6">
            <div class="form-group">
                <label for="form_need">Treść wiadomości *</label>
                <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                    <option value=""></option>
                    <option value="Request quotation">Request quotation</option>
                    <option value="Request order status">Request order status</option>
                    <option value="Request copy of an invoice">Request copy of an invoice</option>
                    <option value="Other">Other</option>
                </select>
                <div class="help-block with-errors"></div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
            <label for="form_need2">Treść wiadomości *</label>
                <input id="form_need2" class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
                <div class="help-block with-errors"></div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="form_message">Message *</label>
                <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                <div class="help-block with-errors"></div>
            </div>
        </div>
        <div class="col-md-12">
            <input type="submit" class="btn btn-success btn-send" value="Send message"/>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <p class="text-muted">
                <strong>*</strong> These fields are required. Contact form template by
                <a href="https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form" target="_blank">Bootstrapious</a>.</p>
        </div>
    </div>
</div>

</form>
            </div>
        );
    }
}
