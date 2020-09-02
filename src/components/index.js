import React, { Component } from 'react';
import Alert from 'react-s-alert';

class Index extends Component {
    render() {
        Alert.success(<div><h4>Welcome to Legolas!</h4> <br/>
            Legolas is an RPG interesting game that it is about warriors going through challeging missions. Hope you enjoy the game and have fun while playing it!
            </div>);
        return (
            <div>
                <section id="container">
                    <header className="header black-bg">
                        <div className="sidebar-toggle-box">
                            <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
                        </div>
                        <a href="/index" className="logo"><b>Lego<span>las</span></b></a>

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
                                    <a className="active" href="/index">
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
                        <div id="carousel-example" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-example" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example" data-slide-to="1"></li>
                                <li data-target="#carousel-example" data-slide-to="2"></li>
                            </ol>

                            <div class="carousel-inner">
                                <div class="item active">
                                    <a href="#"><img src="https://cdna.artstation.com/p/assets/images/images/008/470/158/large/kim-sung-hwan-lineage-lfc-illustration.jpg?1513043913" /></a>
                                    <div class="carousel-caption">
                                        <h3>Great Opportunity</h3>
                                        <p>Don't lose your chance to get new more features in the game!</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <a href="#"><img src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Best-Desktop-Full-HD-Background-Sites.jpg" /></a>
                                    <div class="carousel-caption">
                                        <h3>Everyday's offer</h3>
                                        <p>The more you play the game, the more offer you will get!</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <a href="#"><img src="https://wallpapercave.com/wp/wp4118279.jpg" /></a>
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

                    <footer className="site-footer" style={{marginTop: '555px'}}>
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
