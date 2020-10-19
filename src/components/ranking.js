import React, { Component } from "react";
import PlayerService from "../service/PlayerService";

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      message: null,
    };

    this.reloadPlayerList = this.reloadPlayerList.bind(this);
  }

  componentDidMount() {
    this.reloadPlayerList();
  }

  reloadPlayerList() {
    PlayerService.fechTopKillList().then((res) => {
      this.setState({ players: res.data.result });
    });
  }

  render() {
    let c = 0;

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
                  <a className="logout" href="/">
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
                  <a href="/index">
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
                  <a className="active" href="/ranking">
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
            <div className="page-leaderboard">
              <div id="contain-all" className=" slideout-panel">
                <section className="leaderboard-progress">
                  <div className="contain text-center">
                    <img
                      alt="Legolas Top Kill"
                      className="mb-2"
                      src="https://d125fmws0bore1.cloudfront.net/assets/svgs/icon_trophy_leaderboard-3442a4b2312e6cdd02aa9870e636dc082890277a6267c4ed986a750fef7cbb35.svg"
                    />
                    <h2>Top Kill Players</h2>
                    <p className="lead">
                      Here's a list of our top kill players on the leaderboard.
                    </p>
                  </div>
                </section>
                <section className="ranking">
                  <div className="contain">
                    {this.state.players.map((player) => (
                      <div className="ranking-table">
                        <div className="ranking-table-header-row">
                          <div className="ranking-table-header-data h6">
                            Rank
                          </div>
                          <div className="ranking-table-header-data h6">
                            Name
                          </div>
                          <div className="ranking-table-header-data h6">
                            Kills
                          </div>
                          <div
                            style={{
                              position: "relative",
                              marginRight: "50px",
                            }}
                            className="ranking-table-header-data h6"
                          >
                            Level
                          </div>
                        </div>
                        <div className="hidden">{c++}</div>

                        {c === 1 ? (
                          <div className="ranking-table-row-leader-1">
                            <div className="ranking-table-data-leader-1">
                              <div className="medal-gold"></div>
                            </div>
                            <div
                              style={{
                                marginLeft: "115px",
                                position: "relative",
                                top: "10px",
                              }}
                              className="ranking-table-data"
                            >
                              {player.charname}

                              <div
                                style={{
                                  marginLeft: "195px",
                                  position: "relative",
                                  bottom: "18px",
                                }}
                              >
                                {player.kills}
                              </div>
                            </div>

                            <div className="ranking-table-data">
                              {player.level}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        {c === 2 ? (
                          <div className="ranking-table-row-leader-2">
                            <div className="ranking-table-data-leader-2">
                              <div className="medal-silver"></div>
                            </div>
                            <div
                              style={{
                                marginLeft: "115px",
                                position: "relative",
                                top: "10px",
                              }}
                              className="ranking-table-data"
                            >
                              {player.charname}

                              <div
                                style={{
                                  marginLeft: "195px",
                                  position: "relative",
                                  bottom: "18px",
                                }}
                              >
                                {player.kills}
                              </div>
                            </div>
                            <div className="ranking-table-data">
                              {player.level}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        {c === 3 ? (
                          <div className="ranking-table-row-leader-3">
                            <div className="ranking-table-data-leader-3">
                              <div className="medal-bronze"></div>
                            </div>
                            <div
                              style={{
                                marginLeft: "115px",
                                position: "relative",
                                top: "10px",
                              }}
                              className="ranking-table-data"
                            >
                              {player.charname}

                              <div
                                style={{
                                  marginLeft: "195px",
                                  position: "relative",
                                  bottom: "18px",
                                }}
                              >
                                {player.kills}
                              </div>
                            </div>
                            <div className="ranking-table-data">
                              {player.level}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        {c >= 4 ? (
                          <div className="ranking-table-body">
                            <div className="ranking-table-row">
                              <div className="ranking-table-data">{c}</div>
                              <div
                                style={{
                                  marginLeft: "115px",
                                  position: "relative",
                                  top: "10px",
                                }}
                                className="ranking-table-data"
                              >
                                {player.charname}

                                <div
                                  style={{
                                    marginLeft: "195px",
                                    position: "relative",
                                    bottom: "18px",
                                  }}
                                >
                                  {player.kills}
                                </div>
                              </div>
                              <div className="ranking-table-data">
                                <div className="complete"></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </section>
          <footer className="site-footer" style={{ marginTop: "605px" }}>
            <div className="text-center">
              <p>
                &copy; Copyrights <strong>Legolas</strong>. All Rights Reserved
              </p>
              <a href="/ranking#" className="go-top">
                <i className="fa fa-angle-up"></i>
              </a>
            </div>
          </footer>
        </section>
      </div>
    );
  }
}

export default Ranking;
