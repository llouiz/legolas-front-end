import React, {Component} from 'react';

class Gallery extends Component {
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
                            <a className="active" href="/gallery">
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
                    <section className="wrapper site-min-height">
                        <h3><i className="fa fa-angle-right"></i> Gallery</h3>
                        <hr/>
                        
                        <div className="row mt">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div className="project-wrapper">
                            <div className="project">
                                <div className="photo-wrapper">
                                <div className="photo">
                                    <a className="fancybox" href="https://i.imgur.com/wKBd4a6.jpg"><img className="img-responsive" src="https://i.imgur.com/wKBd4a6.jpg" alt=""/></a>
                                </div>
                                <div className="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div className="project-wrapper">
                            <div className="project">
                                <div className="photo-wrapper">
                                <div className="photo">
                                    <a className="fancybox" href="https://i.imgur.com/iWT0qOR.jpg"><img className="img-responsive" src="https://i.imgur.com/iWT0qOR.jpg" alt=""/></a>
                                </div>
                                <div className="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div className="project-wrapper">
                            <div className="project">
                                <div className="photo-wrapper">
                                <div className="photo">
                                    <a className="fancybox" href="https://i.imgur.com/y4vxNjf.jpg"><img className="img-responsive" src="https://i.imgur.com/y4vxNjf.jpg" alt=""/></a>
                                </div>
                                <div className="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>

                        <div className="row mt mb">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div className="project-wrapper">
                            <div className="project">
                                <div className="photo-wrapper">
                                <div className="photo">
                                    <a className="fancybox" href="https://i.imgur.com/tZQoxMl.jpg"><img className="img-responsive" src="https://i.imgur.com/tZQoxMl.jpg" alt=""/></a>
                                </div>
                                <div className="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div className="project-wrapper">
                            <div className="project">
                                <div className="photo-wrapper">
                                <div className="photo">
                                    <a className="fancybox" href="https://i.imgur.com/lvPDbNK.jpg"><img className="img-responsive" src="https://i.imgur.com/lvPDbNK.jpg" alt=""/></a>
                                </div>
                                <div className="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div className="project-wrapper">
                            <div className="project">
                                <div className="photo-wrapper">
                                <div className="photo">
                                    <a className="fancybox" href="https://i.imgur.com/S9kCPq4.jpg"><img className="img-responsive" src="https://i.imgur.com/S9kCPq4.jpg" alt=""/></a>
                                </div>
                                <div className="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="row mt mb">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div className="project-wrapper">
                            <div className="project">
                                <div className="photo-wrapper">
                                <div className="photo">
                                    <a className="fancybox" href="https://i.imgur.com/y4vxNjf.jpg"><img className="img-responsive" src="https://i.imgur.com/y4vxNjf.jpg" alt=""/></a>
                                </div>
                                <div className="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div className="project-wrapper">
                            <div className="project">
                                <div className="photo-wrapper">
                                <div className="photo">
                                    <a className="fancybox" href="https://i.imgur.com/wKBd4a6.jpg"><img className="img-responsive" src="https://i.imgur.com/wKBd4a6.jpg" alt=""/></a>
                                </div>
                                <div className="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div className="project-wrapper">
                            <div className="project">
                                <div className="photo-wrapper">
                                <div className="photo">
                                    <a className="fancybox" href="https://i.imgur.com/iWT0qOR.jpg"><img className="img-responsive" src="https://i.imgur.com/iWT0qOR.jpg" alt=""/></a>
                                </div>
                                <div className="overlay"></div>
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

                        <a href="gallery.html#" className="go-top">
                        <i className="fa fa-angle-up"></i>
                        </a>
                    </div>
                    </footer>

                </section>
            </div>
        );
    }
}

export default Gallery;
