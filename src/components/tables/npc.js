import React, { Component } from "react";
import NPCService from "../../service/NPCService";

class NPC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NPCs: [],
      id: "",
      name: "",
      atk_speed: "",
      c_damage: "",
      level: "",
      message: null,
    };

    this.saveNPC = this.saveNPC.bind(this);
    this.editNPC = this.editNPC.bind(this);
    this.deleteNPC = this.deleteNPC.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.reloadNPCList = this.reloadNPCList.bind(this);
    this.fetchNPCById = this.fetchNPCById.bind(this);
  }

  /* Add */
  saveNPC = (e) => {
    e.preventDefault();
    let npc = {
      name: this.state.name,
      atk_speed: this.state.atk_speed,
      c_damage: this.state.c_damage,
      level: this.state.level,
    };
    NPCService.addNPC(npc).then((res) => {
      this.setState({ message: "NPC added successfully." });
      window.location.reload();
    });
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  /*Listing*/
  componentDidMount(npcId) {
    this.reloadNPCList();
    this.fetchNPCById(npcId);
  }

  reloadNPCList() {
    NPCService.fetchNPCs().then((res) => {
      this.setState({ NPCs: res.data.result });
    });
  }

  fetchNPCById(npcId) {
    NPCService.fetchNPCById(npcId).then((res) => {
      let npc = res.data.result;
      this.setState({
        id: npc.id,
        name: npc.name,
        atk_speed: npc.atk_speed,
        c_damage: npc.c_damage,
        level: npc.level,
      });
    });
  }

  editNPC = (e) => {
    e.preventDefault();
    let npc = {
      id: this.state.id,
      name: this.state.name,
      atk_speed: this.state.atk_speed,
      c_damage: this.state.c_damage,
      level: this.state.level,
    };

    NPCService.updateNPC(npc).then((res) => {
      this.setState({ message: "NPC updated successfully." });
      window.location.href = "/npc";
    });
  };

  /* Delete */
  deleteNPC(id) {
    NPCService.deleteNPC(id).then((res) => {
      this.setState({ message: "NPC deleted successfully." });
      this.setState({ NPCs: this.state.NPCs.filter() });
      window.location.href = "/npc";
    });
  }

  deleteAll() {
    NPCService.deleteAll().then((res) => {
      this.setState({ message: "NPCs deleted successfully." });
      window.location.href = "/npc";
    });
  }

  render() {
    let i = 0;

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
                <li class="sub-menu">
                  <a href="/character">
                    <i
                      class="ra ra-crossed-swords"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <span>Create Character</span>
                  </a>
                </li>
                <li className="sub-menu">
                  <a className="active" href="javascript:;">
                    <i className="fa fa-th"></i>
                    <span>Tables</span>
                  </a>
                  <ul className="sub">
                    <li>
                      <a href="/player">Players</a>
                    </li>
                    <li className="active">
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
            <div class="container">
              <div class="table-wrapper table-responsive">
                <div class="table-title">
                  <div class="row">
                    <div class="col-sm-6">
                      <h2>
                        NPC's <b>Table</b>
                      </h2>
                    </div>
                    <div class="col-sm-6">
                      <a
                        href="#addNPCModal"
                        class="btn btn-success"
                        data-toggle="modal"
                      >
                        <i class="material-icons">&#xE147;</i>{" "}
                        <span>Add New NPC</span>
                      </a>
                      <a
                        href="#deleteAllNPCModal"
                        class="btn btn-danger"
                        data-toggle="modal"
                      >
                        <i class="material-icons">&#xE15C;</i>{" "}
                        <span>Delete</span>
                      </a>
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
                      <th>Name</th>
                      <th>Attack Speed</th>
                      <th>Critical Damage</th>
                      <th>Level</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.NPCs.map((npc) => (
                      <tr id={npc.id}>
                        <td>
                          <span class="custom-checkbox">
                            <input
                              type="checkbox"
                              id="checkbox1"
                              name="options[]"
                              value="1"
                            />
                            <label for="checkbox1"></label>
                          </span>
                        </td>
                        <td class="hidden">ID</td>
                        <td>{npc.name}</td>
                        <td>{npc.atk_speed}</td>
                        <td>{npc.c_damage}</td>
                        <td>{npc.level}</td>
                        <td>
                          <a
                            href="#editNPCModal"
                            class="edit"
                            data-toggle="modal"
                            onClick={() => this.fetchNPCById(npc.id)}
                          >
                            <i
                              class="material-icons"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              &#xE254;
                            </i>
                          </a>
                          <a
                            href="#deleteNPCModal"
                            class="delete"
                            data-toggle="modal"
                            onClick={() => (i = npc.id)}
                          >
                            <i
                              class="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                            >
                              &#xE872;
                            </i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/*<!-- Add Modal HTML -->*/}
              <div id="addNPCModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form>
                      <div class="modal-header">
                        <h4 class="modal-title">Add NPC</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          &times;
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>Attack Speed</label>
                          <input
                            type="number"
                            id="atk_speed"
                            name="atk_speed"
                            value={this.state.atk_speed}
                            onChange={this.onChange}
                            class="form-control"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>Critical Damage</label>
                          <input
                            type="number"
                            id="c_damage"
                            name="c_damage"
                            value={this.state.c_damage}
                            onChange={this.onChange}
                            class="form-control"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>Level</label>
                          <input
                            type="number"
                            id="level"
                            name="level"
                            value={this.state.level}
                            onChange={this.onChange}
                            class="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <input
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                          value="Cancel"
                        />
                        <input
                          type="submit"
                          class="btn btn-success"
                          onClick={this.saveNPC}
                          value="Add"
                        ></input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*<!-- Edit Modal HTML -->*/}
              <div id="editNPCModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form id="myForm">
                      <div class="modal-header">
                        <h4 class="modal-title">Edit NPC</h4>
                        <button
                          type="button"
                          id="cancelx"
                          class="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          &times;
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                            value={this.state.name}
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>Attack Speed</label>
                          <input
                            type="number"
                            id="atk_speed"
                            name="atk_speed"
                            class="form-control"
                            value={this.state.atk_speed}
                            onChange={this.onChange}
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>Critical Damage</label>
                          <input
                            type="number"
                            id="c_damage"
                            name="c_damage"
                            class="form-control"
                            value={this.state.c_damage}
                            onChange={this.onChange}
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>Level</label>
                          <input
                            type="number"
                            id="level"
                            name="level"
                            class="form-control"
                            value={this.state.level}
                            onChange={this.onChange}
                            required
                          />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <input
                          type="button"
                          id="cancel"
                          class="btn btn-default"
                          data-dismiss="modal"
                          value="Cancel"
                        />
                        <input
                          type="submit"
                          class="btn btn-info"
                          onClick={this.editNPC}
                          value="Save"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*<!-- Delete Modal HTML -->*/}
              <div id="deleteNPCModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form>
                      <div class="modal-header">
                        <h4 class="modal-title">Delete NPC</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          &times;
                        </button>
                      </div>
                      <div class="modal-body">
                        <p>Are you sure you want to delete this NPC?</p>
                        <p class="text-warning">
                          <small>This action cannot be undone.</small>
                        </p>
                      </div>
                      <div class="modal-footer">
                        <input
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                          value="Cancel"
                        />
                        <input
                          type="submit"
                          class="btn btn-danger"
                          value="Delete"
                          onClick={() => this.deleteNPC(i)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/*<!-- Delete ALL Modal HTML -->*/}
              <div id="deleteAllNPCModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form>
                      <div class="modal-header">
                        <h4 class="modal-title">Delete NPCs</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          &times;
                        </button>
                      </div>
                      <div class="modal-body">
                        <p>
                          Are you sure you want to delete all these Records?
                        </p>
                        <p class="text-warning">
                          <small>This action cannot be undone.</small>
                        </p>
                      </div>
                      <div class="modal-footer">
                        <input
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                          value="Cancel"
                        />
                        <input
                          type="submit"
                          class="btn btn-danger"
                          value="Delete"
                          onClick={() => this.deleteAll()}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="site-footer" style={{ marginTop: "515px" }}>
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

export default NPC;
