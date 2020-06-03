import React, {Component} from 'react';

class Index extends Component {
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
                            <a class="active" href="/">
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
                            <a href="/rank">
                            <i class="fas fa-medal" style={{fontSize: '18px'}}></i>
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
                    <div id="carousel-example" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-example" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-example" data-slide-to="1"></li>
                            <li data-target="#carousel-example" data-slide-to="2"></li>
                        </ol>
                        
                        <div class="carousel-inner">
                            <div class="item active">
                            <a href="#"><img src="https://i.imgur.com/lGUihf7.jpg" /></a>
                            <div class="carousel-caption">
                                <h3>Great Opportunity</h3>
                                <p>Don't lose your chance to get new more features in the game!</p>
                            </div>
                            </div>
                            <div class="item">
                            <a href="#"><img src="https://i.imgur.com/1bM8u3a.jpg" /></a>
                            <div class="carousel-caption">
                                <h3>Everyday's offer</h3>
                                <p>The more you play the game, the more offer you will get!</p>
                            </div>
                            </div>
                            <div class="item">
                            <a href="#"><img src="https://i.imgur.com/zyUKUhH.jpg" /></a>
                            <div class="carousel-caption">
                                <h3>Invitation</h3>
                                <p>Inviting friends to play the game, can get you more scores in the game.</p>
                            </div>
                            </div>
                        </div>
                        
                        <a class="left carousel-control" href="#carousel-example" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a class="right carousel-control" href="#carousel-example" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                    </section>

                    <footer class="site-footer">
                    <div class="text-center">
                        <p>
                        &copy; Copyrights <strong>Legolas</strong>. All Rights Reserved
                        </p>
                        <a href="index.html#" class="go-top">
                        <i class="fa fa-angle-up"></i>
                        </a>
                    </div>
                    </footer>

                </section>
            </div>
        );
    }
}

export default Index;