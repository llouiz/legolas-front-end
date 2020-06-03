import React, {Component} from 'react';

  class Calendar extends Component {
    render() {
        return(
            <div>
                <section id="container">
                <header class="header black-bg">
                    <div class="sidebar-toggle-box">
                        <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
                    </div>
                    <a href="/" class="logo"><b>Lego<span>las</span></b></a>

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
                            <a href="/">
                            <i class="fa fa-dashboard"></i>
                            <span>Dashboard</span>
                            </a>
                        </li>
                        <li class="sub-menu">
                            <a class="active" href="javascript:;">
                            <i class="fa fa-calendar"></i>
                            <span>Calendar</span>
                            </a>
                            <ul class="sub">
                            <li class="active"><a href="/calendar">Events</a></li>
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
                        <li class="sub-menu">
                            <a href="javascript:;">
                            <i class="fa fa-th"></i>
                            <span>Tables</span>
                            </a>
                            <ul class="sub">
                            <li>
                                <a href="/">Players</a>
                            </li>
                            <li>
                                <a href="/">Items</a>
                            </li>
                            </ul>
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
                        <h3><i class="fa fa-angle-right"></i> Calendar</h3>

                        <div class="row mt">
                        <aside class="col-lg-3 mt">
                            <h4><i class="fa fa-angle-right"></i> Event List</h4>
                            <div id="external-events">
                            <div class="external-event label label-theme">CS GO</div>
                            <div class="external-event label label-success">Dota 2</div>
                            <div class="external-event label label-info">Overwatch</div>
                            <div class="external-event label label-warning">Hearthstone</div>
                            <div class="external-event label label-danger">League of Legends</div>
                            <div class="external-event label label-default">Fortnite</div>
                            <div class="external-event label label-theme">Mobile Legends</div>
                            <div class="external-event label label-info">Minecraft</div>
                            <div class="external-event label label-success">Lineage</div>
                            <p class="drop-after">
                                <input type="checkbox" id="drop-remove"/> Remove After Drop
                            </p>
                            </div>
                        </aside>
                        <aside class="col-lg-9 mt">
                            <section class="panel">
                            <div class="panel-body">
                                <div id="calendar" class="has-toolbar"></div>
                            </div>
                            </section>
                        </aside>
                        </div>
                    </section>
                    </section>
                    <footer class="site-footer">
                    <div class="text-center">
                        <p>
                        &copy; Copyrights <strong>Legolas</strong>. All Rights Reserved
                        </p>

                        <a href="calendar.html#" class="go-top">
                        <i class="fa fa-angle-up"></i>
                        </a>
                    </div>
                    </footer>
                    </section>
            </div>
        );
    }
  }

  export default Calendar;