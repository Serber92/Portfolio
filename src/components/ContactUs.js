import React, { Component } from 'react';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

export default class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
        const msg = {
            to: 'test@example.com',
            from: 'test@example.com',
            subject: "Message from Portfolio",
            text: this.state.message,
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail.send(msg);
        event.preventDefault();
    }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 className="section-subheading text-muted">Feel free to contact me for any work or suggestions below</h3>
                </div>
            </div>
            <div className="row">
                <div className="twelve columns collapsed">
                    <form noValidate="" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="six columns">
                                <div className="form-group">
                                    <input onChange={this.handleInputChange} value={this.state.name} type="text" className="form-control" placeholder="Your Name *" name="name" required="" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.handleInputChange} value={this.state.email} type="email" className="form-control" placeholder="Your Email *" name="email" required="" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.handleInputChange} value={this.state.phone} type="tel" className="form-control" placeholder="Your Phone *" name="phone" required="" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="six columns">
                                <div className="form-group">
                                    <textarea onChange={this.handleInputChange} value={this.state.message} className="form-control" placeholder="Your Message *" name="message" required="" data-validation-required-message="Please enter a message." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                <button type="submit" className="btn btn-xl">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
        );
  }
}