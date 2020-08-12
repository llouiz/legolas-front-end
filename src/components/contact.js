import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }


    render() {

        const { status } = this.state;

        return (
            <div>
                <section id="container">
                    <header className="header black-bg">
                        <div className="sidebar-toggle-box">
                            <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
                        </div>
                        <a href="/" className="logo"><b>Lego<span>las</span></b></a>

                        <div className="top-menu">
                            <ul className="nav pull-right top-menu">
                                <li><a className="logout" href="/">Logout</a></li>
                            </ul>
                        </div>
                    </header>

                    <aside>
                        <div id="sidebar" className="nav-collapse ">
                            <ul className="sidebar-menu" id="nav-accordion">

                                <li className="mt">
                                    <a href="/">
                                        <i className="fa fa-dashboard"></i>
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a href="javascript:;">
                                        <i className="fa fa-calendar"></i>
                                        <span>Calendar</span>
                                    </a>
                                    <ul className="sub">
                                        <li><a href="/calendar">Events</a></li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="/gallery">
                                        <i className="fa fa-picture-o"></i>
                                        <span>Gallery</span>
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="active" href="/contact">
                                        <i className="fa fa-tasks"></i>
                                        <span>Contact</span>
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a href="javascript:;">
                                        <i className="fa fa-th"></i>
                                        <span>Tables</span>
                                    </a>
                                    <ul className="sub">
                                        <li>
                                            <a href="/">Players</a>
                                        </li>
                                        <li>
                                            <a href="/">Items</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="/faq">
                                        <i className="fa fa-book"></i>
                                        <span>FAQ</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    <section id="main-content">
                        <section className="wrapper">
                            <h3><i className="fa fa-angle-right"></i> Contact</h3>
                            <div className="row mt">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <h4 className="title">Send Us An Email</h4>
                                    <div id="message"></div>
                                    <form id="myForm" className="contact-form" role="form"
                                        onSubmit={this.submitForm}
                                        action="https://formspree.io/xpzypqpv"
                                        method="POST">

                                        <div className="form-group">
                                            <input type="name" name="name" className="form-control" id="contact-name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" id="contact-email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="subject" className="form-control" id="contact-subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>

                                        <div className="form-group">
                                            <textarea className="form-control" name="message" id="contact-message" placeholder="Your Message" rows="5" data-rule="required" data-msg="Please write something for us" required></textarea>
                                            <div className="validate"></div>
                                        </div>

                                        <div className="loading"></div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>

                                        <div className="form-send">
                                            <button type="submit" className="btn btn-large btn-primary">Send Message</button>
                                        </div>

                                    </form>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <h4 className="title">Contact Details</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <ul className="contact_details">
                                        <li><i className="fa fa-envelope-o"></i> info@yoursite.com</li>
                                        <li><i className="fa fa-phone-square"></i> +34 5565 6555</li>
                                        <li><i className="fa fa-home"></i> Some Fine Address, 887, Madrid, Spain.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </section>
                    <footer className="site-footer" style={{ position: 'relative', top: '38px', zIndex: '-1' }}>
                        <div className="text-center">
                            <p>
                                &copy; Copyrights <strong>Legolas</strong>. All Rights Reserved
                        </p>
                            <a href="form_component.html#" className="go-top">
                                <i className="fa fa-angle-up"></i>
                            </a>
                        </div>
                    </footer>
                </section>
            </div>
        );
    }
}

export default Contact;
