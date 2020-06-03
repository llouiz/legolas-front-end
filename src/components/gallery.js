import React, {Component} from 'react';

class Gallery extends Component {
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
                            <a href="javascript:;">
                            <i class="fa fa-calendar"></i>
                            <span>Calendar</span>
                            </a>
                            <ul class="sub">
                            <li><a href="/calendar">Events</a></li>
                            </ul>
                        </li>
                        <li class="sub-menu">
                            <a class="active" href="/gallery">
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
                    <section class="wrapper site-min-height">
                        <h3><i class="fa fa-angle-right"></i> Gallery</h3>
                        <hr/>
                        
                        <div class="row mt">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div class="project-wrapper">
                            <div class="project">
                                <div class="photo-wrapper">
                                <div class="photo">
                                    <a class="fancybox" href="https://i.imgur.com/wKBd4a6.jpg"><img class="img-responsive" src="https://i.imgur.com/wKBd4a6.jpg" alt=""/></a>
                                </div>
                                <div class="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div class="project-wrapper">
                            <div class="project">
                                <div class="photo-wrapper">
                                <div class="photo">
                                    <a class="fancybox" href="https://i.imgur.com/iWT0qOR.jpg"><img class="img-responsive" src="https://i.imgur.com/iWT0qOR.jpg" alt=""/></a>
                                </div>
                                <div class="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div class="project-wrapper">
                            <div class="project">
                                <div class="photo-wrapper">
                                <div class="photo">
                                    <a class="fancybox" href="https://i.imgur.com/y4vxNjf.jpg"><img class="img-responsive" src="https://i.imgur.com/y4vxNjf.jpg" alt=""/></a>
                                </div>
                                <div class="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>

                        <div class="row mt mb">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div class="project-wrapper">
                            <div class="project">
                                <div class="photo-wrapper">
                                <div class="photo">
                                    <a class="fancybox" href="https://i.imgur.com/tZQoxMl.jpg"><img class="img-responsive" src="https://i.imgur.com/tZQoxMl.jpg" alt=""/></a>
                                </div>
                                <div class="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div class="project-wrapper">
                            <div class="project">
                                <div class="photo-wrapper">
                                <div class="photo">
                                    <a class="fancybox" href="https://i.imgur.com/lvPDbNK.jpg"><img class="img-responsive" src="https://i.imgur.com/lvPDbNK.jpg" alt=""/></a>
                                </div>
                                <div class="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div class="project-wrapper">
                            <div class="project">
                                <div class="photo-wrapper">
                                <div class="photo">
                                    <a class="fancybox" href="https://i.imgur.com/S9kCPq4.jpg"><img class="img-responsive" src="https://i.imgur.com/S9kCPq4.jpg" alt=""/></a>
                                </div>
                                <div class="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div class="row mt mb">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div class="project-wrapper">
                            <div class="project">
                                <div class="photo-wrapper">
                                <div class="photo">
                                    <a class="fancybox" href="https://i.imgur.com/y4vxNjf.jpg"><img class="img-responsive" src="https://i.imgur.com/y4vxNjf.jpg" alt=""/></a>
                                </div>
                                <div class="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div class="project-wrapper">
                            <div class="project">
                                <div class="photo-wrapper">
                                <div class="photo">
                                    <a class="fancybox" href="https://i.imgur.com/wKBd4a6.jpg"><img class="img-responsive" src="https://i.imgur.com/wKBd4a6.jpg" alt=""/></a>
                                </div>
                                <div class="overlay"></div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc">
                            <div class="project-wrapper">
                            <div class="project">
                                <div class="photo-wrapper">
                                <div class="photo">
                                    <a class="fancybox" href="https://i.imgur.com/iWT0qOR.jpg"><img class="img-responsive" src="https://i.imgur.com/iWT0qOR.jpg" alt=""/></a>
                                </div>
                                <div class="overlay"></div>
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

                        <a href="gallery.html#" class="go-top">
                        <i class="fa fa-angle-up"></i>
                        </a>
                    </div>
                    </footer>

                </section>
            </div>
        );
    }
}

export default Gallery;