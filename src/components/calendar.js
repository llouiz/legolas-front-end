import React, {Component} from 'react';

  class Calendar extends Component {
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
                            <a className="active" href="javascript:;">
                            <i className="fa fa-calendar"></i>
                            <span>Calendar</span>
                            </a>
                            <ul className="sub">
                            <li className="active"><a href="/calendar">Events</a></li>
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
                        <h3><i className="fa fa-angle-right"></i> Calendar</h3>

                        <div className="row mt">
                        <aside className="col-lg-3 mt">
                            <h4><i className="fa fa-angle-right"></i> Event List</h4>
                            <div id="external-events">
                            <div className="external-event label label-theme">CS GO</div>
                            <div className="external-event label label-success">Dota 2</div>
                            <div className="external-event label label-info">Overwatch</div>
                            <div className="external-event label label-warning">Hearthstone</div>
                            <div className="external-event label label-danger">League of Legends</div>
                            <div className="external-event label label-default">Fortnite</div>
                            <div className="external-event label label-theme">Mobile Legends</div>
                            <div className="external-event label label-info">Minecraft</div>
                            <div className="external-event label label-success">Lineage</div>
                            <p className="drop-after">
                                <input type="checkbox" id="drop-remove"/> Remove After Drop
                            </p>
                            </div>
                        </aside>
                        <aside className="col-lg-9 mt">
                            <section className="panel">
                            <div className="panel-body">
                                <div id="calendar" className="has-toolbar"></div>
                            </div>
                            </section>
                        </aside>
                        </div>
                    </section>
                    </section>
                    <footer className="site-footer">
                    <div className="text-center">
                        <p>
                        &copy; Copyrights <strong>Legolas</strong>. All Rights Reserved
                        </p>

                        <a href="calendar.html#" className="go-top">
                        <i className="fa fa-angle-up"></i>
                        </a>
                    </div>
                    </footer>
                    </section>
            </div>
        );
    }
  }

  export default Calendar;
