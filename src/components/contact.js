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
                    <header class="header black-bg">
                        <div class="sidebar-toggle-box">
                            <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
                        </div>
                        <a href="/index" class="logo"><b>Lego<span>las</span></b></a>

                        <div class="top-menu">
                            <ul class="nav pull-right top-menu">
                                <li><a class="logout" href="/">Logout</a></li>
                            </ul>
                        </div>
                    </header>

                    <aside>
                        <div id="sidebar" class="nav-collapse ">
                            <ul class="sidebar-menu" id="nav-accordion">

                                <li class="mt">
                                    <a href="/index">
                                        <i class="fa fa-dashboard"></i>
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                <li class="sub-menu">
                                    <a href="javascript:;">
                                        <i class="fa fa-calendar"></i>
                                        <span>Calendar</span>
                                    </a>
                                    <ul class="sub">
                                        <li><a href="/calendar">Events</a></li>
                                    </ul>
                                </li>
                                <li class="sub-menu">
                                    <a href="/gallery">
                                        <i class="fa fa-picture-o"></i>
                                        <span>Gallery</span>
                                    </a>
                                </li>
                                <li class="sub-menu">
                                    <a class="active" href="/contact">
                                        <i class="fa fa-tasks"></i>
                                        <span>Contact</span>
                                    </a>
                                </li>
                                <li class="sub-menu">
                                    <a href="/character">
                                    <i class="ra ra-crossed-swords" style={{ fontSize: '18px' }}></i>
                                        <span>Create Character</span>
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a href="javascript:;">
                                        <i className="fa fa-th"></i>
                                        <span>Tables</span>
                                    </a>
                                    <ul className="sub">
                                        <li>
                                            <a href="/player">Players</a>
                                        </li>
                                        <li>
                                            <a href="/npc">NPCs</a>
                                        </li>
                                        <li>
                                            <a href="/weapon">Weapons</a>
                                        </li>
                                        <li>
                                            <a href="/armor">Armors</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="/ranking">
                                        <i className="fas fa-medal" style={{ fontSize: '18px' }}></i>
                                        <span>Ranking</span>
                                    </a>
                                </li>
                                <li class="sub-menu">
                                    <a href="/faq">
                                        <i class="fa fa-book"></i>
                                        <span>FAQ</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    <section id="main-content">
                        <section class="wrapper">
                            <h3><i class="fa fa-angle-right"></i> Contact</h3>
                            <div class="row mt">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <h4 class="title">Send Us An Email</h4>
                                    <div id="message"></div>
                                    <form id="mailForm" class="contact-form" role="form"
                                        onSubmit={this.submitForm}
                                        action="https://formspree.io/xpzypqpv"
                                        method="POST">

                                        <div class="form-group">
                                            <input type="name" name="name" class="form-control" id="contact-name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                            <div class="validate"></div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" name="email" class="form-control" id="contact-email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required />
                                            <div class="validate"></div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="subject" class="form-control" id="contact-subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div class="validate"></div>
                                        </div>

                                        <div class="form-group">
                                            <textarea class="form-control" name="message" id="contact-message" placeholder="Your Message" rows="5" data-rule="required" data-msg="Please write something for us" required></textarea>
                                            <div class="validate"></div>
                                        </div>

                                        <div class="loading"></div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>

                                        <div class="form-send">
                                            <button type="submit" class="btn btn-large btn-primary">Send Message</button>
                                        </div>

                                    </form>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <h4 class="title">Contact Details</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <ul class="contact_details">
                                        <li><i class="fa fa-envelope-o"></i> info@yoursite.com</li>
                                        <li><i class="fa fa-phone-square"></i> +34 5565 6555</li>
                                        <li><i class="fa fa-home"></i> Some Fine Address, 887, Madrid, Spain.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </section>
                    <footer class="site-footer" style={{ marginTop: '355px', zIndex: '-1' }}>
                        <div class="text-center">
                            <p>
                                &copy; Copyrights <strong>Legolas</strong>. All Rights Reserved
                        </p>
                            <a href="/contact#" class="go-top">
                                <i class="fa fa-angle-up"></i>
                            </a>
                        </div>
                    </footer>
                </section>
            </div>
        );
    }
}

export default Contact;
