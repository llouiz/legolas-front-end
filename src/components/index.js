import React, { Component } from "react";
import { ACCESS_TOKEN } from "../constants";
import { getCurrentUser } from "../util/APIUtils";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true,
    });

    getCurrentUser()
      .then((response) => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
    });
    Alert.success("You're safely logged out!");
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <section id="container">
          <header className="header black-bg">
            <div className="sidebar-toggle-box">
              <div
                className="fa fa-bars tooltips"
                data-placement="right"
                data-original-title="Toggle Navigation"
              ></div>
            </div>
            <a href="/index" className="logo">
              <b>
                Lego<span>las</span>
              </b>
            </a>

            <div className="top-menu">
              <ul className="nav pull-right top-menu">
                <li>
                  <a className="logout" href="/" onClick={this.handleLogout}>
                    Logout
                  </a>
                </li>
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
                    <li>
                      <a href="/calendar">Events</a>
                    </li>
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
                  <a href="/character">
                    <i
                      className="ra ra-crossed-swords"
                      style={{ fontSize: "18px" }}
                    ></i>
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
                    <i
                      className="fas fa-medal"
                      style={{ fontSize: "18px" }}
                    ></i>
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
            <div
              id="carousel-example"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel-example"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#carousel-example" data-slide-to="1"></li>
                <li data-target="#carousel-example" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">
                <div className="item active">
                  <a href="!#!">
                    <img
                      src="https://cdna.artstation.com/p/assets/images/images/008/470/158/large/kim-sung-hwan-lineage-lfc-illustration.jpg?1513043913"
                      alt="img not found"
                    />
                  </a>
                  <div className="carousel-caption">
                    <h3>Great Opportunity</h3>
                    <p>
                      Don't lose your chance to get new more features in the
                      game!
                    </p>
                  </div>
                </div>
                <div className="item">
                  <a href="!#!">
                    <img
                      src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Best-Desktop-Full-HD-Background-Sites.jpg"
                      alt="img not found"
                    />
                  </a>
                  <div className="carousel-caption">
                    <h3>Everyday's offer</h3>
                    <p>
                      The more you play the game, the more offer you will get!
                    </p>
                  </div>
                </div>
                <div className="item">
                  <a href="!#!">
                    <img
                      src="https://wallpapercave.com/wp/wp4118279.jpg"
                      alt="img not found"
                    />
                  </a>
                  <div className="carousel-caption">
                    <h3>Invitation</h3>
                    <p>
                      Inviting friends to play the game, can get you more scores
                      in the game.
                    </p>
                  </div>
                </div>
              </div>

              <a
                className="left carousel-control"
                href="#carousel-example"
                data-slide="prev"
              >
                <span className="glyphicon glyphicon-chevron-left"></span>
              </a>
              <a
                className="right carousel-control"
                href="#carousel-example"
                data-slide="next"
              >
                <span className="glyphicon glyphicon-chevron-right"></span>
              </a>
            </div>
          </section>

          <div className="container">
            <p>
              Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor
              risus. Pellentesque in ipsum id orci porta dapibus. Vivamus magna
              justo, lacinia eget consectetur sed, convallis at tellus. Vivamus
              suscipit tortor eget felis porttitor volutpat. Pellentesque in
              ipsum id orci porta dapibus. Donec rutrum congue leo eget
              malesuada. Sed porttitor lectus nibh. Curabitur aliquet quam id
              dui posuere blandit. Vivamus suscipit tortor eget felis porttitor
              volutpat.
            </p>

            <p>
              Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id
              orci porta dapibus. Vivamus magna justo, lacinia eget consectetur
              sed, convallis at tellus. Pellentesque in ipsum id orci porta
              dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur
              aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan
              id imperdiet et, porttitor at sem. Donec rutrum congue leo eget
              malesuada. Curabitur aliquet quam id dui posuere blandit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <p>
              Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur non nulla sit
              amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Donec sollicitudin molestie
              malesuada. Sed porttitor lectus nibh. Donec rutrum congue leo eget
              malesuada. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.
              Cras ultricies ligula sed magna dictum porta.
            </p>
          </div>

          <footer className="site-footer" style={{ marginTop: "555px" }}>
            <div className="text-center">
              <p>
                &copy; Copyrights <strong>Legolas</strong>. All Rights Reserved
              </p>
              <a href="/index#" className="go-top">
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
