import React, { Component } from 'react';

class FAQ extends Component {
    render() {
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
                                    <a href="/contact">
                                        <i class="fa fa-tasks"></i>
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
                                    <a class="active" href="/faq">
                                        <i class="fa fa-book"></i>
                                        <span>FAQ</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    <section id="main-content">
                        <section class="wrapper site-min-height">
                            <div class="row mt mb">
                                <div class="col-lg-12">
                                    <h3><i class="fa fa-angle-right"></i> F.A.Q</h3>
                                    <br />
                                    <div class="col-lg-4 col-md-4 col-sm-12">
                                        <div class="dmbox">
                                            <div class="service-icon">
                                                <a class="" href="faq.html#"><i class="dm-icon fa fa-question fa-3x"></i></a>
                                            </div>
                                            <h4>1. Knowledge-Base</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s..</p>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-12">
                                        <div class="dmbox">
                                            <div class="service-icon">
                                                <a class="" href="faq.html#"><i class="dm-icon fa fa-envelope-o fa-3x"></i></a>
                                            </div>
                                            <h4>2. Report a Bug</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s..</p>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-12">
                                        <div class="dmbox">
                                            <div class="service-icon">
                                                <a class="" href="faq.html#"><i class="dm-icon fa fa-random fa-3x"></i></a>
                                            </div>
                                            <h4>3. Submit a Ticket</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s..</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <h2 class="centered">Most Asked Questions</h2>
                            <div class="row content-panel">
                                <div class="col-md-10 col-md-offset-1 mt mb">
                                    <div class="accordion" id="accordion2">
                                        <div class="accordion-group">
                                            <div class="accordion-heading">
                                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="faq.html#collapseOne">
                                                    <em class="glyphicon glyphicon-chevron-right icon-fixed-width"></em>Is the game for free?
                                    </a>
                                            </div>
                                            <div id="collapseOne" class="accordion-body collapse in">
                                                <div class="accordion-inner">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-group">
                                            <div class="accordion-heading">
                                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="faq.html#collapseTwo">
                                                    <em class="glyphicon glyphicon-chevron-right icon-fixed-width"></em>How can I install my server?
                                    </a>
                                            </div>
                                            <div id="collapseTwo" class="accordion-body collapse">
                                                <div class="accordion-inner">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-group">
                                            <div class="accordion-heading">
                                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="faq.html#collapseThree">
                                                    <em class="glyphicon glyphicon-chevron-right icon-fixed-width"></em>What are the requirements for running the game?
                                    </a>
                                            </div>
                                            <div id="collapseThree" class="accordion-body collapse">
                                                <div class="accordion-inner">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-group">
                                            <div class="accordion-heading">
                                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="faq.html#collapseFour">
                                                    <em class="glyphicon glyphicon-chevron-right icon-fixed-width"></em>How to make progress in this game?
                                    </a>
                                            </div>
                                            <div id="collapseFour" class="accordion-body collapse">
                                                <div class="accordion-inner">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-group">
                                            <div class="accordion-heading">
                                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="faq.html#collapseFive">
                                                    <em class="glyphicon glyphicon-chevron-right icon-fixed-width"></em>How Can I get Support?
                                    </a>
                                            </div>
                                            <div id="collapseFive" class="accordion-body collapse">
                                                <div class="accordion-inner">
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

                    <footer class="site-footer">
                        <div class="text-center">
                            <p>
                                &copy; Copyrights <strong>Legolas</strong>. All Rights Reserved
                        </p>

                            <a href="/faq#" class="go-top">
                                <i class="fa fa-angle-up"></i>
                            </a>
                        </div>
                    </footer>

                </section>
            </div>
        );
    }
}

export default FAQ;
