import React, { Component } from "react";
import ArmorService from "../../service/ArmorService";

class Armor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Armors: [],
      id: "",
      name: "",
      price: "",
      destroyable: "",
      droppable: "",
      tradeable: "",
      message: null,
    };

    this.saveArmor = this.saveArmor.bind(this);
    this.editArmor = this.editArmor.bind(this);
    this.deleteArmor = this.deleteArmor.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.reloadArmorList = this.reloadArmorList.bind(this);
    this.fetchArmorById = this.fetchArmorById.bind(this);
  }

  /* Add */
  saveArmor = (e) => {
    e.preventDefault();
    let armor = {
      name: this.state.name,
      price: this.state.price,
      destroyable: this.state.destroyable,
      droppable: this.state.droppable,
      tradeable: this.state.tradeable,
    };
    ArmorService.addArmor(armor).then((res) => {
      this.setState({ message: "Armor added successfully." });
      window.location.reload();
    });
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  /*Listing*/
  componentDidMount(armorId) {
    this.reloadArmorList();
    this.fetchArmorById(armorId);
  }

  reloadArmorList() {
    ArmorService.fetchArmors().then((res) => {
      this.setState({ Armors: res.data.result });
    });
  }

  fetchArmorById(armorId) {
    ArmorService.fetchArmorById(armorId).then((res) => {
      let armor = res.data.result;
      this.setState({
        id: armor.id,
        name: armor.name,
        price: armor.price,
        destroyable: armor.destroyable,
        droppable: armor.droppable,
        tradeable: armor.tradeable,
      });
    });
  }

  editArmor = (e) => {
    e.preventDefault();
    let armor = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      destroyable: this.state.destroyable,
      droppable: this.state.droppable,
      tradeable: this.state.tradeable,
    };

    ArmorService.updateArmor(armor).then((res) => {
      this.setState({ message: "Armor updated successfully." });
      window.location.href = "/armor";
    });
  };

  /* Delete */
  deleteArmor(id) {
    ArmorService.deleteArmor(id).then((res) => {
      this.setState({ message: "Armor deleted successfully." });
      this.setState({ Armors: this.state.Armors.filter() });
      window.location.href = "/armor";
    });
  }

  deleteAll() {
    ArmorService.deleteAll().then((res) => {
      this.setState({ message: "Armors deleted successfully." });
      window.location.href = "/armors";
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
                    <li>
                      <a href="/weapon">Weapons</a>
                    </li>
                    <li className="active">
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
                        Armor's <b>Table</b>
                      </h2>
                    </div>
                    <div class="col-sm-6">
                      <a
                        href="#addArmorModal"
                        class="btn btn-success"
                        data-toggle="modal"
                      >
                        <i class="material-icons">&#xE147;</i>{" "}
                        <span>Add New Armor</span>
                      </a>
                      <a
                        href="#deleteAllArmorsModal"
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
                      <th>Price</th>
                      <th>Destroyable</th>
                      <th>Droppable</th>
                      <th>Tradeable</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.Armors.map((armor) => (
                      <tr id={armor.id}>
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
                        <td>{armor.name}</td>
                        <td>{armor.price}</td>
                        <td>{armor.destroyable}</td>
                        <td>{armor.droppable}</td>
                        <td>{armor.tradeable}</td>
                        <td>
                          <a
                            href="#editArmorModal"
                            class="edit"
                            data-toggle="modal"
                            onClick={() => this.fetchArmorById(armor.id)}
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
                            href="#deleteArmorModal"
                            class="delete"
                            data-toggle="modal"
                            onClick={() => (i = armor.id)}
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
              <div id="addArmorModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form>
                      <div class="modal-header">
                        <h4 class="modal-title">Add Armor</h4>
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
                          <label>Price</label>
                          <input
                            type="number"
                            id="price"
                            name="price"
                            value={this.state.price}
                            onChange={this.onChange}
                            class="form-control"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>Destroyable</label>
                          <input
                            type="text"
                            id="destroyable"
                            name="destroyable"
                            value={this.state.destroyable}
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
                          <label>Tradeable</label>
                          <input
                            type="text"
                            id="tradeable"
                            name="tradeable"
                            value={this.state.tradeable}
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
                          onClick={this.saveArmor}
                          value="Add"
                        ></input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*<!-- Edit Modal HTML -->*/}
              <div id="editArmorModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form id="myForm">
                      <div class="modal-header">
                        <h4 class="modal-title">Edit Armor</h4>
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
                          <label>Price</label>
                          <input
                            type="number"
                            id="price"
                            name="price"
                            value={this.state.price}
                            onChange={this.onChange}
                            class="form-control"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>Destroyable</label>
                          <input
                            type="text"
                            id="destroyable"
                            name="destroyable"
                            value={this.state.destroyable}
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
                          <label>Tradeable</label>
                          <input
                            type="text"
                            id="tradeable"
                            name="tradeable"
                            value={this.state.tradeable}
                            onChange={this.onChange}
                            class="form-control"
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
                          onClick={this.editArmor}
                          value="Save"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*<!-- Delete Modal HTML -->*/}
              <div id="deleteArmorModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form>
                      <div class="modal-header">
                        <h4 class="modal-title">Delete Armor</h4>
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
                        <p>Are you sure you want to delete this Armor?</p>
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
                          onClick={() => this.deleteArmor(i)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/*<!-- Delete ALL Modal HTML -->*/}
              <div id="deleteAllArmorsModal" class="modal fade">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <form>
                      <div class="modal-header">
                        <h4 class="modal-title">Delete Armors</h4>
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

export default Armor;
