import React, { Component } from 'react';
import PlayerService from '../service/PlayerService';

class Character extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: [],
            id: '',
            charname: '',
            classe: '',
            race: '',
            gender: '',
            message: null
        }
        this.savePlayer = this.savePlayer.bind(this);
    }

    /* Add */
    savePlayer = (e) => {
        e.preventDefault();
        let player = { charname: this.state.charname, classe: this.state.classe, race: this.state.race, gender: this.state.gender};
        PlayerService.addPlayer(player).then(res => {
            this.setState({ message: 'Character added successfully.' });
            window.location.reload();
        });
    }

    onChange = (e) =>
        this.setState({
            [e.target.name]: e.target.value
    });

    render() {
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
                                    <a className="active" href="/character">
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
                        <section class="body">
                            <div class="inner-wrapper">
                                <section role="main" class="content-body">
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <section class="panel form-wizard" id="w4">
                                                <header class="panel-heading">
                                                    <div class="panel-actions">
                                                        <a href="#" class="fa fa-caret-down"></a>
                                                        <a href="#" class="fa fa-times"></a>
                                                    </div>

                                                    <h2 class="panel-title">Character's Registration</h2>
                                                </header>
                                                <div class="panel-body">
                                                    <div class="wizard-progress wizard-progress-lg">
                                                        <div class="steps-progress">
                                                            <div class="progress-indicator"></div>
                                                        </div>
                                                        <ul class="wizard-steps">
                                                            <li class="active">
                                                                <a href="#w4-account" data-toggle="tab"><span>1</span>Welcome</a>
                                                            </li>
                                                            <li>
                                                                <a href="#w4-profile" data-toggle="tab"><span>2</span>Player's Info</a>
                                                            </li>
                                                            <li>
                                                                <a href="#w4-confirm" data-toggle="tab"><span>4</span>Confirmation</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <form class="form-horizontal" novalidate="novalidate">
                                                        <div class="tab-content">
                                                            <div id="w4-account" class="tab-pane active">
                                                                <div class="form-group">   
                                                                    <h3 class="centered">You're almost there!</h3>
                                                                    <h5 class="centered"><p>Please Follow The Next Steps to create your character's profile.</p></h5>
                                                                </div>
                                                            </div>
                                                            <div id="w4-profile" class="tab-pane">
                                                                <div class="form-group">
                                                                    <label class="col-sm-1 control-label" for="w4-charname">Nickname</label>
                                                                    <div class="col-sm-5">
                                                                        <input type="text" class="form-control" id="charname" name="charname" value={this.state.charname} onChange={this.onChange} required />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label class="col-sm-1 control-label" for="w4-class">Class</label>
                                                                    <div class="col-sm-5">
                                                                        <input type="text" class="form-control" id="class" name="classe" value={this.state.classe} onChange={this.onChange} required />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label class="col-sm-1 control-label" for="w4-race">Race</label>
                                                                    <div class="col-sm-5">
                                                                        <input type="text" class="form-control" id="race" name="race" value={this.state.race} onChange={this.onChange} required />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    
                                                                    <label class="col-sm-1 control-label" for="gender">Gender</label>
                                                                    <div class="col-sm-2">
                                                                         <select class="custom-select mr-sm-2"      id="gender" name="gender" value={this.state.gender} onChange={this.onChange}>
                                                                        <option value="Male" selected hidden>Male</option>
                                                                        <option value="Male" selected>Male</option>
                                                                        <option value="Female">Female</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id="w4-confirm" class="tab-pane">
                                                                <div class="form-group">
                                                                    <p class="centered">By clicking on Finish you are agreeing to the terms of Legolas.</p>
                                                                </div>
                                                                <div class="form-group">
                                                                    <div class="col-sm-3"></div>
                                                                    <div class="col-sm-9">
                                                                        <div class="checkbox-custom">
                                                                            <input type="checkbox" name="terms" id="w4-terms" required />
                                                                            <label for="w4-terms">I agree to the terms of service</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="panel-footer">
                                                    <ul class="pager">
                                                        <li class="previous disabled">
                                                            <a><i class="fa fa-angle-left"></i> Previous</a>
                                                        </li>
                                                        <li class="finish hidden pull-right">
                                                            <a onClick={this.savePlayer}>Finish</a>
                                                        </li>
                                                        <li class="next">
                                                            <a>Next <i class="fa fa-angle-right"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </section>

                    <footer className="site-footer">
                        <div className="text-center">
                            <p>
                                &copy; Copyrights <strong>Legolas</strong>. All Rights Reserved
                        </p>
                            <a href="/character#" className="go-top">
                                <i className="fa fa-angle-up"></i>
                            </a>
                        </div>
                    </footer>
                </section>
            </div>
        );
    }
}

export default Character;