import React, { Component } from "react";
import WeaponService from "../../service/WeaponService";

class Weapon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Weapons: [],
      id: "",
      name: "",
      atk_speed: "",
      c_damage: "",
      droppable: "",
      level: "",
      message: null,
    };

    this.saveWeapon = this.saveWeapon.bind(this);
    this.editWeapon = this.editWeapon.bind(this);
    this.deleteWeapon = this.deleteWeapon.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.reloadWeaponList = this.reloadWeaponList.bind(this);
    this.fetchWeaponById = this.fetchWeaponById.bind(this);
  }

  /* Add */
  saveWeapon = (e) => {
    e.preventDefault();
    let weapon = {
      name: this.state.name,
      atk_speed: this.state.atk_speed,
      c_damage: this.state.c_damage,
      droppable: this.state.droppable,
      level: this.state.level,
    };
    WeaponService.addWeapon(weapon).then((res) => {
      this.setState({ message: "Weapon added successfully." });
      window.location.reload();
    });
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  /*Listing*/
  componentDidMount(weaponId) {
    this.reloadWeaponList();
    this.fetchWeaponById(weaponId);
  }

  reloadWeaponList() {
    WeaponService.fetchWeapons().then((res) => {
      this.setState({ Weapons: res.data.result });
    });
  }

  fetchWeaponById(weaponId) {
    WeaponService.fetchWeaponById(weaponId).then((res) => {
      let weapon = res.data.result;
      this.setState({
        id: weapon.id,
        name: weapon.name,
        atk_speed: weapon.atk_speed,
        c_damage: weapon.c_damage,
        droppable: weapon.droppable,
        level: weapon.level,
      });
    });
  }

  editWeapon = (e) => {
    e.preventDefault();
    let weapon = {
      id: this.state.id,
      name: this.state.name,
      atk_speed: this.state.atk_speed,
      c_damage: this.state.c_damage,
      droppable: this.state.droppable,
      level: this.state.level,
    };

    WeaponService.updateWeapon(weapon).then((res) => {
      this.setState({ message: "Weapon updated successfully." });
      window.location.href = "/weapon";
    });
  };

  /* Delete */
  deleteWeapon(id) {
    WeaponService.deleteWeapon(id).then((res) => {
      this.setState({ message: "Weapon deleted successfully." });
      this.setState({ Weapons: this.state.Weapons.filter() });
      window.location.href = "/weapon";
    });
  }

  deleteAll() {
    WeaponService.deleteAll().then((res) => {
      this.setState({ message: "Weapons deleted successfully." });
      window.location.href = "/weapon";
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
                    <li>
                      <a href="/npc">NPCs</a>
                    </li>
                    <li className="active">
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
                        Weapon's <b>Table</b>
                      </h2>
                    </div>
                    <div class="col-sm-6">
                      <a
                        href="#addWeaponModal"
                        class="btn btn-success"
                        data-toggle="modal"
                      >
                        <i class="material-icons">&#xE147;</i>{" "}
                        <span>Add New Weapon</span>
                      </a>
                      <a
                        href="#deleteAllWeaponsModal"
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
                      <th>Droppable</th>
                      <th>Level</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.Weapons.map((weapon) => (
                      <tr id={weapon.id}>
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
                        <td>{weapon.name}</td>
                        <td>{weapon.atk_speed}</td>
                        <td>{weapon.c_damage}</td>
                        <td>{weapon.droppable}</td>
                        <td>{weapon.level}</td>
                        <td>
                          <a
                            href="#editWeaponModal"
                            class="edit"
                            data-toggle="modal"
                            onClick={() => this.fetchWeaponById(weapon.id)}
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
                            href="#deleteWeaponModal"
                            class="delete"
                            data-toggle="modal"
                            onClick={() => (i = weapon.id)}
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
              <div id="addWeaponModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form>
                      <div class="modal-header">
                        <h4 class="modal-title">Add Weapon</h4>
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
                            type="text"
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
                          <label>Droppable</label>
                          <input
                            type="text"
                            id="droppable"
                            name="droppable"
                            value={this.state.droppable}
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
                          onClick={this.saveWeapon}
                          value="Add"
                        ></input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*<!-- Edit Modal HTML -->*/}
              <div id="editWeaponModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form id="myForm">
                      <div class="modal-header">
                        <h4 class="modal-title">Edit Weapon</h4>
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
                            type="text"
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
                          <label>Droppable</label>
                          <input
                            type="text"
                            id="droppable"
                            name="droppable"
                            class="form-control"
                            value={this.state.droppable}
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
                          onClick={this.editWeapon}
                          value="Save"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*<!-- Delete Modal HTML -->*/}
              <div id="deleteWeaponModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form>
                      <div class="modal-header">
                        <h4 class="modal-title">Delete Weapon</h4>
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
                        <p>Are you sure you want to delete this Weapon?</p>
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
                          onClick={() => this.deleteWeapon(i)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/*<!-- Delete ALL Modal HTML -->*/}
              <div id="deleteAllWeaponsModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form>
                      <div class="modal-header">
                        <h4 class="modal-title">Delete Weapons</h4>
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

export default Weapon;
