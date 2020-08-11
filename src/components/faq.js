import React, {Component} from 'react';

class FAQ extends Component {
    render() {
        return(
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
                            <a href="/contact">
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
                            <a className="active" href="/faq">
                            <i className="fa fa-book"></i>
                            <span>FAQ</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </aside>

                    <section id="main-content">
                    <section className="wrapper site-min-height">
                        <div className="row mt mb">
                        <div className="col-lg-12">
                            <h3><i className="fa fa-angle-right"></i> F.A.Q</h3>
                            <br/>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="dmbox">
                                <div className="service-icon">
                                <a className="" href="faq.html#"><i className="dm-icon fa fa-question fa-3x"></i></a>
                                </div>
                                <h4>1. Knowledge-Base</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s..</p>
                            </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="dmbox">
                                <div className="service-icon">
                                <a className="" href="faq.html#"><i className="dm-icon fa fa-envelope-o fa-3x"></i></a>
                                </div>
                                <h4>2. Report a Bug</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s..</p>
                            </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="dmbox">
                                <div className="service-icon">
                                <a className="" href="faq.html#"><i className="dm-icon fa fa-random fa-3x"></i></a>
                                </div>
                                <h4>3. Submit a Ticket</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s..</p>
                            </div>
                            </div>

                        </div>

                        </div>

                        <div className="row content-panel">
                        <h2 className="centered">Most Asked Questions</h2>
                        <div className="col-md-10 col-md-offset-1 mt mb">
                            <div className="accordion" id="accordion2">
                            <div className="accordion-group">
                                <div className="accordion-heading">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="faq.html#collapseOne">
                                    <em className="glyphicon glyphicon-chevron-right icon-fixed-width"></em>Is the game for free?
                                    </a>
                                </div>
                                <div id="collapseOne" className="accordion-body collapse in">
                                <div className="accordion-inner">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-group">
                                <div className="accordion-heading">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="faq.html#collapseTwo">
                                    <em className="glyphicon glyphicon-chevron-right icon-fixed-width"></em>How can I install my server?
                                    </a>
                                </div>
                                <div id="collapseTwo" className="accordion-body collapse">
                                <div className="accordion-inner">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-group">
                                <div className="accordion-heading">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="faq.html#collapseThree">
                                    <em className="glyphicon glyphicon-chevron-right icon-fixed-width"></em>What are the requirements for running the game?
                                    </a>
                                </div>
                                <div id="collapseThree" className="accordion-body collapse">
                                <div className="accordion-inner">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-group">
                                <div className="accordion-heading">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="faq.html#collapseFour">
                                    <em className="glyphicon glyphicon-chevron-right icon-fixed-width"></em>How to make progress in this game?
                                    </a>
                                </div>
                                <div id="collapseFour" className="accordion-body collapse">
                                <div className="accordion-inner">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-group">
                                <div className="accordion-heading">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="faq.html#collapseFive">
                                    <em className="glyphicon glyphicon-chevron-right icon-fixed-width"></em>How Can I get Support?
                                    </a>
                                </div>
                                <div id="collapseFive" className="accordion-body collapse">
                                <div className="accordion-inner">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                                </div>
                            </div>
                            </div>

                        </div>

                        </div>

                    </section>

                    </section>

                    <footer className="site-footer">
                    <div className="text-center">
                        <p>
                        &copy; Copyrights <strong>Legolas</strong>. All Rights Reserved
                        </p>

                        <a href="faq.html#" className="go-top">
                        <i className="fa fa-angle-up"></i>
                        </a>
                    </div>
                    </footer>

                </section>
            </div>
        );
    }
}

export default FAQ;
