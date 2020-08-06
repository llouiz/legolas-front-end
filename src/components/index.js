import React, {Component} from 'react';

class Index extends Component {
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
                            <a className="active" href="/">
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
                            <a href="/rank">
                            <i className="fas fa-medal" style={{fontSize: '18px'}}></i>
                            <span>Ranking</span>
                            </a>
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
                    <div id="carousel-example" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example" data-slide-to="1"></li>
                            <li data-target="#carousel-example" data-slide-to="2"></li>
                        </ol>
                        
                        <div className="carousel-inner">
                            <div className="item active">
                            <a href="#"><img src="https://i.imgur.com/lGUihf7.jpg" /></a>
                            <div className="carousel-caption">
                                <h3>Great Opportunity</h3>
                                <p>Don't lose your chance to get new more features in the game!</p>
                            </div>
                            </div>
                            <div className="item">
                            <a href="#"><img src="https://i.imgur.com/1bM8u3a.jpg" /></a>
                            <div className="carousel-caption">
                                <h3>Everyday's offer</h3>
                                <p>The more you play the game, the more offer you will get!</p>
                            </div>
                            </div>
                            <div className="item">
                            <a href="#"><img src="https://i.imgur.com/zyUKUhH.jpg" /></a>
                            <div className="carousel-caption">
                                <h3>Invitation</h3>
                                <p>Inviting friends to play the game, can get you more scores in the game.</p>
                            </div>
                            </div>
                        </div>
                        
                        <a className="left carousel-control" href="#carousel-example" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                    </section>

                    <footer className="site-footer">
                    <div className="text-center">
                        <p>
                        &copy; Copyrights <strong>Legolas</strong>. All Rights Reserved
                        </p>
                        <a href="index.html#" className="go-top">
                        <i className="fa fa-angle-up"></i>
                        </a>
                    </div>
                    </footer>

                </section>
            </div>
        );
    }
}

export default Index;
