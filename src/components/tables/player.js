import React, { Component } from 'react';
import { storage } from "../../firebase/index";
import PlayerService from '../../service/PlayerService';

class Player extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            id: '',
            imgURL: '',
            charname: '',
            classe: '',
            race: '',
            gender: '',
            kills: '',
            level: '',
            message: null,
            image: null,
            url: '',
            progress: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);

        this.savePlayer = this.savePlayer.bind(this);
        this.editPlayer = this.editPlayer.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.reloadPlayerList = this.reloadPlayerList.bind(this);
        this.fetchPlayerById = this.fetchPlayerById.bind(this);
    }
    
    handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
            this.setState({
                [e.target.name]: e.target.value
        });
    }

    handleUpload = () => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes * 100));
            this.setState({progress});
        },
        (error) => {
            // error function ....
            console.log(error);
        },
        () => {
            // complete function ....
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log({url});
                this.setState({url});
            })
        });
    }


    /* Add */
    savePlayer = (e) => {
        e.preventDefault();
        let player = { imgURL: this.state.url, charname: this.state.charname, classe: this.state.classe, race: this.state.race, gender: this.state.gender, kills: this.state.kills, level: this.state.level };
        PlayerService.addPlayer(player).then(res => {
            this.setState({ message: 'Player added successfully.' });
            window.location.reload();
        });
    }

    onChange = (e) =>
        this.setState({
            [e.target.name]: e.target.value
    
    });


    /*Listing*/
    componentDidMount(playerId) {
        this.reloadPlayerList();
        this.fetchPlayerById(playerId);
    }

    reloadPlayerList() {
        PlayerService.fetchPlayers().then((res) => {
            this.setState({ players: res.data.result })
        });
    }

    fetchPlayerById(playerId) {
        PlayerService.fetchPlayerById(playerId)
            .then((res) => {
                let player = res.data.result;
                this.setState({
                    id: player.id,
                    imgURL: player.imgURL,
                    charname: player.charname,
                    classe: player.classe,
                    race: player.race,
                    gender: player.gender,
                    kills: player.kills,
                    level: player.level
                })
            });
    }

    editPlayer = (e) => {
        e.preventDefault();
        let player = { id: this.state.id, imgURL: this.state.imgURL, charname: this.state.charname, classe: this.state.classe, race: this.state.race, gender: this.state.gender, kills: this.state.kills, level: this.state.level };


        PlayerService.updatePlayer(player).then(res => {
            this.setState({ message: 'Player updated successfully.' });
            window.location.href = "/player";
        });
    }

    /* Delete */
    deletePlayer(id) {
        PlayerService.deletePlayer(id).then(res => {
            this.setState({ message: 'Player deleted successfully.' });
            this.setState({ players: this.state.players.filter() });
            window.location.href = "/player";
        });
    }

    deleteAll() {
        PlayerService.deleteAll().then(res => {
            this.setState({ message: 'Players deleted successfully.' });
            window.location.href = "/player";
        });
    }

    render() {
        let i = 0;

        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          };

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
                                    <a href="/character">
                                    <i class="ra ra-crossed-swords" style={{ fontSize: '18px' }}></i>
                                        <span>Create Character</span>
                                    </a>
                                </li>
                                <li className="sub-menu">
                                    <a className="active" href="javascript:;">
                                        <i className="fa fa-th"></i>
                                        <span>Tables</span>
                                    </a>
                                    <ul className="sub">
                                        <li className="active">
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
                        <div class="container">
                            <div class="table-wrapper table-responsive">
                                <div class="table-title">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <h2>Player's <b>Table</b></h2>
                                        </div>
                                        <div class="col-sm-6">
                                            <a href="#addPlayerModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Player</span></a>
                                            <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>
                                        </div>
                                    </div>
                                </div>
                                <table id="myTable" class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>
                                                <span class="custom-checkbox">
                                                    <input type="checkbox" id="selectAll" />
                                                    <label for="selectAll"></label>
                                                </span>
                                            </th>
                                            <th class="hidden">ID</th>
                                            <th class="hidden">Avatar</th>
                                            <th>Avatar</th>
                                            <th>Nickname</th>
                                            <th>Class</th>
                                            <th>Race</th>
                                            <th>Gender</th>
                                            <th>Kills</th>
                                            <th>Level</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.players.map(
                                                player =>
                                                    <tr id={player.id}>
                                                        <td>
                                                            <span class="custom-checkbox">
                                                                <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                                <label for="checkbox1"></label>
                                                            </span>
                                                        </td>
                                                        <td class="hidden">ID</td>
                                                        <td class="hidden">{player.imgURL}</td>
                                                        <td>{<img src={player.imgURL}/>}</td>
                                                        <td>{player.charname}</td>
                                                        <td>{player.classe}</td>
                                                        <td>{player.race}</td>
                                                        <td>{player.gender}</td>
                                                        <td>{player.kills}</td>
                                                        <td>{player.level}</td>
                                                        <td>
                                                            <a href="#editPlayerModal" class="edit" data-toggle="modal" onClick={() => this.fetchPlayerById(player.id)}><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                                            <a href="#deletePlayerModal" class="delete" data-toggle="modal" onClick={() => i = player.id}><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                                        </td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>

                            {/*<!-- Add Modal HTML -->*/}
                            <div id="addPlayerModal" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <form>
                                            <div class="modal-header">
                                                <h4 class="modal-title">Add Player</h4>
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="form-group">
                                                        <progress value={this.state.progress} max="100"/>
                                                        <br/>
                                                        <label>Avatar</label>
                                                        <input type="file" onChange={this.handleChange} required/>
                                                        <br/>
                                                        <button onClick={this.handleUpload}>Upload</button>
                                                </div>
                                                <div class="form-group">
                                                    <label>Nickname</label>
                                                    <input type="text" class="form-control" id="charname" name="charname" value={this.state.charname} onChange={this.onChange} required />
                                                </div>
                                                <div class="form-group">
                                                    <label>Class</label>
                                                    <input type="text" id="class" name="classe" value={this.state.classe} onChange={this.onChange} class="form-control" required />
                                                </div>
                                                <div class="form-group">
                                                    <label>Race</label>
                                                    <input type="text" id="race" name="race" value={this.state.race} onChange={this.onChange} class="form-control" required />
                                                </div>
                                                <div class="form-group">
                                                    <label>Gender</label>
                                                    <input type="text" id="gender" name="gender" value={this.state.gender} onChange={this.onChange} class="form-control" required />
                                                </div>
                                                <div class="form-group">
                                                    <label>Kills</label>
                                                    <input type="number" id="kills" name="kills" value={this.state.kills} onChange={this.onChange} class="form-control" required />
                                                </div>
                                                <div class="form-group">
                                                    <label>Level</label>
                                                    <input type="number" id="level" name="level" value={this.state.level} onChange={this.onChange} class="form-control" required />
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                <input type="submit" class="btn btn-success" onClick={this.savePlayer} value="Add"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Edit Modal HTML -->*/}
                            <div id="editPlayerModal" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <form id="myForm">
                                            <div class="modal-header">
                                                <h4 class="modal-title">Edit Player</h4>
                                                <button type="button" id="cancelx" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <input class="hidden" type="text" class="hidden form-control" id="imgURL" name="imgURL" readonly="true" value={this.state.imgURL} required />
                                                </div>
                                                <div class="form-group">
                                                    <label>Nickname</label>
                                                    <input type="text" class="form-control" id="charname" name="charname" readonly="true" defaultValue={this.state.charname} required />
                                                </div>
                                                <div class="form-group">
                                                    <label>Class</label>
                                                    <input type="text" id="class" name="class" class="form-control" value={this.state.classe} onChange={this.onChange} required />
                                                </div>
                                                <div class="form-group">
                                                    <label>Race</label>
                                                    <input type="text" id="race" name="race" class="form-control" value={this.state.race} onChange={this.onChange} required />
                                                </div>
                                                <div class="form-group">
                                                    <label>Gender</label>
                                                    <input type="text" id="gender" name="gender" class="form-control" value={this.state.gender} onChange={this.onChange} required />
                                                </div>
                                                <div class="form-group">
                                                    <label>Kills</label>
                                                    <input type="number" id="kills" name="kills" class="form-control" value={this.state.kills} onChange={this.onChange} required />
                                                </div>
                                                <div class="form-group">
                                                    <label>Level</label>
                                                    <input type="number" id="level" name="level" class="form-control" value={this.state.level} onChange={this.onChange} required />
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <input type="button" id="cancel" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                <input type="submit" class="btn btn-info" onClick={this.editPlayer} value="Save" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Delete Modal HTML -->*/}
                            <div id="deletePlayerModal" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <form>
                                            <div class="modal-header">
                                                <h4 class="modal-title">Delete Player</h4>
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Are you sure you want to delete this player?</p>
                                                <p class="text-warning"><small>This action cannot be undone.</small></p>
                                            </div>
                                            <div class="modal-footer">
                                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                <input type="submit" class="btn btn-danger" value="Delete" onClick={() => this.deletePlayer(i)} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/*<!-- Delete ALL Modal HTML -->*/}
                            <div id="deleteEmployeeModal" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <form>
                                            <div class="modal-header">
                                                <h4 class="modal-title">Delete Players</h4>
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Are you sure you want to delete all these Records?</p>
                                                <p class="text-warning"><small>This action cannot be undone.</small></p>
                                            </div>
                                            <div class="modal-footer">
                                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                <input type="submit" class="btn btn-danger" value="Delete" onClick={() => this.deleteAll()} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="site-footer" style={{marginTop: '335px'}}>
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

export default Player;
