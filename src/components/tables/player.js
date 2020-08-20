import React, {Component} from 'react';

class Player extends Component {
    render() {
        return(
            <div className="container">
                <div className="left-align">
                    <h1>Players</h1>  
                    <a href="#modalAddNew" className="btn btn-floating btn-large waves-effect waves-light modal-trigger green">
                        <i className="material-icons">add</i>
                    </a>
                </div>
                <br/><br/>
            
                {/*<!-- Modal of addNew -->*/}
                    <div className="modal" id="modalAddNew" role="dialog" aria-labelledby="ModalLabel-AddNew">
                        <div className="modal-content">
                            <div className="row">
                                <h2>Add new player</h2>                
                                <form className="col s12" action="/host/create/" method="POST">                                
                                    <input type="hidden" name="csrfmiddlewaretoken" value="flPjsq9ydzvCeMmdIN0mp1O3zTfchOfPQpRYYKNgDVRViZR87I74bPLj5tX1QBZI"/>
                                                                
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <select name="id_client" id="hostSelectAddIdClient">
                                                <option value="" disabled selected>Choose your option</option>                                            
                                                
                                                    <option value="43">Cobaia</option>
                                                
                                                    <option value="49">DevilEnterprise</option>
                                                
                                                    <option value="50">AngelCompany</option>
                                                
                                            </select>
                                            <label for="id_client" >Player's Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input required name="hostname" type="text" value=""/>
                                            <label for="hostname">Hostname</label>
                                        </div>                                
                                        <div className="input-field col s6">					
                                                <input required name="ip" type="text" value=""/>
                                                <label for='ip'>IP Address</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">			
                                            <input required name="description" type="text" value=""/>
                                            <label for="description">Description</label>
                                        </div>                                
                                    </div>                            
                                    <div className="modal-footer">                                                               
                                        <button className="btn waves-effect waves-light green" type="submit" name="action">
                                            Add
                                            <i className="material-icons left">add</i>
                                        </button>
                                        <a className="modal-close btn waves-effect waves-light">
                                            Back
                                            <i className="material-icons left">exit_to_app</i>                                    
                                        </a>							
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                {/*<!-- End Modal of addNew -->*/}
            
                    <table className="table striped highlight centered responsive-table">
                        <thead className="">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Total Kills</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                    
                        <tr>
                            <td>Zeus</td>
                            <td>The God of thunder</td>
                            <td>1085</td>
                            <td>
                                <a href="#modalReadDetail-15" className="btn btn-floating waves-effect waves-light modal-trigger blue" >
                                    <i className="material-icons">info</i>
                                </a>                        
                                <a href="#modalUpdate-15" className="btn btn-floating waves-effect waves-light modal-trigger green" >
                                    <i className="material-icons">edit</i>
                                </a>                        
                                <a href="#modalDelete-15" className="btn btn-floating waves-effect waves-light modal-trigger red" >
                                    <i className="material-icons">delete</i>
                                </a>	
                            </td>	
                        </tr>
            
                        {/*<!-- Modal of ReadDetail -->*/}
            
                            <div className="modal" id="modalReadDetail-15" role="dialog" aria-labelledby="ModalLabel-ReadDetail">
                                <div className="modal-content">
                                    <div className="row">
                                        <h2>databasesServer</h2>							
                                        <ul>
                                            <li>
                                                <b>Client name:</b> Cobaia 
                                            </li>
                                            <li>
                                                <b>Hostname:</b> databasesServer
                                            </li>
                                            <li>
                                                <b>IP Address:</b> 192.168.56.101
                                            </li>
                                            <li>
                                                <b>Client description:</b> teste
                                            </li>
                                        </ul>
                                        <div className="modal-footer">
                                            <a className="modal-close btn waves-effect waves-light">
                                                Back
                                                <i className="material-icons left">exit_to_app</i>                                    
                                            </a>								
                                        </div>
                                    </div>
                                </div>
                            </div>

                        {/*<!-- Modal of update -->*/}
            
                        <div className="modal" id="modalUpdate-15" role="dialog" aria-labelledby="ModalLabel-Update">
                            <div className="modal-content">
                                <div className="row">
                                    <h2>databasesServer</h2>
                                </div>                
                                <form className="col s12" action="/host/update/15/" method="POST">
                                    <input type="hidden" name="csrfmiddlewaretoken" value="flPjsq9ydzvCeMmdIN0mp1O3zTfchOfPQpRYYKNgDVRViZR87I74bPLj5tX1QBZI"/>

                                        <div className="row">
                                            <div className="input-field col s6">
                                                <select name="id_client" id="hostSelectUpdateIdClient">
                                                    <option value="Clients object (43)" selected>Cobaia</option>                                            
                                                    
                                                        <option value="43">Cobaia</option>
                                                    
                                                        <option value="49">DevilEnterprise</option>
                                                    
                                                        <option value="50">AngelCompany</option>
                                                    
                                                </select>
                                                <label>Client name</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input required type="text" name="hostname" value="databasesServer"/>
                                                <label for="hostname">Hostname</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input required type="text" name="ip" value="192.168.56.101"/>
                                                <label for="ip">IP Address</label>
                                            </div>                                    
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input required type="text" name="description" value="teste"/>
                                                <label for="description">Description</label>
                                            </div>
                                        </div>
                                
                                    <div className="modal-footer">
                                        <button className="btn waves-effect waves-light green" type="submit">
                                            Update
                                            <i className="material-icons left">system_update_alt</i>
                                        </button>
                                        <a className="modal-close btn waves-effect waves-light">
                                            Back
                                            <i className="material-icons left">exit_to_app</i>                                    
                                        </a>
                                    </div>
                                </form>
                            </div> {/*<!-- end modal content -->*/}
                        </div> {/*<!-- end modal -->*/}
                                        
                        {/*<!-- Modal of Delete -->*/}
            
                        <div className="modal" id="modalDelete-15" role="dialog" aria-labelledby="SmallModalLabel-Delete">
                            <div className="modal-content">
                                <div className="row">                             
                                    <h2>Confirmation to delete</h2>
                                </div>
                                <div className="row">                          
                                    <p>Deleting the Host, all dependents: Databases and Backup Policies will also be deleted.</p>
                                    <p>Really want to delete the host <b>databasesServer</b>?</p>
                                </div>
                                <div className="modal-footer">
                                    <a className="modal-close btn waves-effect waves-light">
                                        Back
                                        <i className="material-icons left">exit_to_app</i>                                    
                                    </a> 
                                    <a href="/hots/delete/15/" className="btn waves-effect waves-light red" type="submit" name="action">
                                        Delete
                                        <i className="material-icons left">delete_forever</i>
                                    </a>
                                </div>
                            </div>
                        </div>
            
                    
                        <tr>
                            <td>DevilEnterprise</td>
                            <td>angelServer01</td>
                            <td>Angel Server</td>
                            <td>
                                <a href="#modalReadDetail-23" className="btn btn-floating waves-effect waves-light modal-trigger blue" >
                                    <i className="material-icons">info</i>
                                </a>                        
                                <a href="#modalUpdate-23" className="btn btn-floating waves-effect waves-light modal-trigger green" >
                                    <i className="material-icons">edit</i>
                                </a>                        
                                <a href="#modalDelete-23" className="btn btn-floating waves-effect waves-light modal-trigger red" >
                                    <i className="material-icons">delete</i>
                                </a>	
                            </td>	
                        </tr>
            
                        {/*<!-- Modal of ReadDetail -->*/}
            
                            <div className="modal" id="modalReadDetail-23" role="dialog" aria-labelledby="ModalLabel-ReadDetail">
                                <div className="modal-content">
                                    <div className="row">
                                        <h2>angelServer01</h2>							
                                        <ul>
                                            <li>
                                                <b>Client name:</b> DevilEnterprise 
                                            </li>
                                            <li>
                                                <b>Hostname:</b> angelServer01
                                            </li>
                                            <li>
                                                <b>IP Address:</b> 1.1.1.1
                                            </li>
                                            <li>
                                                <b>Client description:</b> Angel Server
                                            </li>
                                        </ul>
                                        <div className="modal-footer">
                                            <a className="modal-close btn waves-effect waves-light">
                                                Back
                                                <i className="material-icons left">exit_to_app</i>                                    
                                            </a>								
                                        </div>
                                    </div>
                                </div>
                            </div>

                        {/*<!-- Modal of update -->*/}
            
                        <div className="modal" id="modalUpdate-23" role="dialog" aria-labelledby="ModalLabel-Update">
                            <div className="modal-content">
                                <div className="row">
                                    <h2>angelServer01</h2>
                                </div>                
                                <form className="col s12" action="/host/update/23/" method="POST">
                                    <input type="hidden" name="csrfmiddlewaretoken" value="flPjsq9ydzvCeMmdIN0mp1O3zTfchOfPQpRYYKNgDVRViZR87I74bPLj5tX1QBZI"/>

                                        <div className="row">
                                            <div className="input-field col s6">
                                                <select name="id_client" id="hostSelectUpdateIdClient">
                                                    <option value="Clients object (49)" selected>DevilEnterprise</option>                                            
                                                    
                                                        <option value="43">Cobaia</option>
                                                    
                                                        <option value="49">DevilEnterprise</option>
                                                    
                                                        <option value="50">AngelCompany</option>
                                                    
                                                </select>
                                                <label>Client name</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input required type="text" name="hostname" value="angelServer01"/>
                                                <label for="hostname">Hostname</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input required type="text" name="ip" value="1.1.1.1"/>
                                                <label for="ip">IP Address</label>
                                            </div>                                    
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input required type="text" name="description" value="Angel Server"/>
                                                <label for="description">Description</label>
                                            </div>
                                        </div>
                                
                                    <div className="modal-footer">
                                        <button className="btn waves-effect waves-light green" type="submit">
                                            Update
                                            <i className="material-icons left">system_update_alt</i>
                                        </button>
                                        <a className="modal-close btn waves-effect waves-light">
                                            Back
                                            <i className="material-icons left">exit_to_app</i>                                    
                                        </a>
                                    </div>
                                </form>
                            </div> {/*<!-- end modal content -->*/}
                        </div> {/*<!-- end modal -->*/}
                                        
                        {/*<!-- Modal of Delete -->*/}
            
                        <div className="modal" id="modalDelete-23" role="dialog" aria-labelledby="SmallModalLabel-Delete">
                            <div className="modal-content">
                                <div className="row">                             
                                    <h2>Confirmation to delete</h2>
                                </div>
                                <div className="row">                          
                                    <p>Deleting the Host, all dependents: Databases and Backup Policies will also be deleted.</p>
                                    <p>Really want to delete the host <b>angelServer01</b>?</p>
                                </div>
                                <div className="modal-footer">
                                    <a className="modal-close btn waves-effect waves-light">
                                        Back
                                        <i className="material-icons left">exit_to_app</i>                                    
                                    </a> 
                                    <a href="/hots/delete/23/" className="btn waves-effect waves-light red" type="submit" name="action">
                                        Delete
                                        <i className="material-icons left">delete_forever</i>
                                    </a>
                                </div>
                            </div>
                        </div>
            
                    
                        <tr>
                            <td>DevilEnterprise</td>
                            <td>devilServer01</td>
                            <td>Devil Database</td>
                            <td>
                                <a href="#modalReadDetail-24" className="btn btn-floating waves-effect waves-light modal-trigger blue" >
                                    <i className="material-icons">info</i>
                                </a>                        
                                <a href="#modalUpdate-24" className="btn btn-floating waves-effect waves-light modal-trigger green" >
                                    <i className="material-icons">edit</i>
                                </a>                        
                                <a href="#modalDelete-24" className="btn btn-floating waves-effect waves-light modal-trigger red" >
                                    <i className="material-icons">delete</i>
                                </a>	
                            </td>	
                        </tr>
            
                        {/*<!-- Modal of ReadDetail -->*/}
            
                            <div className="modal" id="modalReadDetail-24" role="dialog" aria-labelledby="ModalLabel-ReadDetail">
                                <div className="modal-content">
                                    <div className="row">
                                        <h2>devilServer01</h2>							
                                        <ul>
                                            <li>
                                                <b>Client name:</b> DevilEnterprise 
                                            </li>
                                            <li>
                                                <b>Hostname:</b> devilServer01
                                            </li>
                                            <li>
                                                <b>IP Address:</b> 2.2.2.2
                                            </li>
                                            <li>
                                                <b>Client description:</b> Devil Database
                                            </li>
                                        </ul>
                                        <div className="modal-footer">
                                            <a className="modal-close btn waves-effect waves-light">
                                                Back
                                                <i className="material-icons left">exit_to_app</i>                                    
                                            </a>								
                                        </div>
                                    </div>
                                </div>
                            </div>

                        {/*<!-- Modal of update -->*/}
            
                        <div className="modal" id="modalUpdate-24" role="dialog" aria-labelledby="ModalLabel-Update">
                            <div className="modal-content">
                                <div className="row">
                                    <h2>devilServer01</h2>
                                </div>                
                                <form className="col s12" action="/host/update/24/" method="POST">
                                    <input type="hidden" name="csrfmiddlewaretoken" value="flPjsq9ydzvCeMmdIN0mp1O3zTfchOfPQpRYYKNgDVRViZR87I74bPLj5tX1QBZI"/>

                                        <div className="row">
                                            <div className="input-field col s6">
                                                <select name="id_client" id="hostSelectUpdateIdClient">
                                                    <option value="Clients object (49)" selected>DevilEnterprise</option>                                            
                                                    
                                                        <option value="43">Cobaia</option>
                                                    
                                                        <option value="49">DevilEnterprise</option>
                                                    
                                                        <option value="50">AngelCompany</option>
                                                    
                                                </select>
                                                <label>Client name</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input required type="text" name="hostname" value="devilServer01"/>
                                                <label for="hostname">Hostname</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input required type="text" name="ip" value="2.2.2.2"/>
                                                <label for="ip">IP Address</label>
                                            </div>                                    
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input required type="text" name="description" value="Devil Database"/>
                                                <label for="description">Description</label>
                                            </div>
                                        </div>
                                
                                    <div className="modal-footer">
                                        <button className="btn waves-effect waves-light green" type="submit">
                                            Update
                                            <i className="material-icons left">system_update_alt</i>
                                        </button>
                                        <a className="modal-close btn waves-effect waves-light">
                                            Back
                                            <i className="material-icons left">exit_to_app</i>                                    
                                        </a>
                                    </div>
                                </form>
                            </div> {/*<!-- end modal content -->*/}
                        </div> 
                                        
                        {/*<!-- Modal of Delete -->*/}
            
                        <div className="modal" id="modalDelete-24" role="dialog" aria-labelledby="SmallModalLabel-Delete">
                            <div className="modal-content">
                                <div className="row">                             
                                    <h2>Confirmation to delete</h2>
                                </div>
                                <div className="row">                          
                                    <p>Deleting the Host, all dependents: Databases and Backup Policies will also be deleted.</p>
                                    <p>Really want to delete the host <b>devilServer01</b>?</p>
                                </div>
                                <div className="modal-footer">
                                    <a className="modal-close btn waves-effect waves-light">
                                        Back
                                        <i className="material-icons left">exit_to_app</i>                                    
                                    </a> 
                                    <a href="/hots/delete/24/" className="btn waves-effect waves-light red" type="submit" name="action">
                                        Delete
                                        <i className="material-icons left">delete_forever</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </table>
                </div>
        );
    }
}

export default Player;
