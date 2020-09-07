import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/auth';

class TableService {

    addPlayer(player) {
        return axios.post(USER_API_BASE_URL + '/player', player);
    }

    fetchPlayers() { 
        return axios.get(USER_API_BASE_URL + '/player'); 
    }

    fetchPlayerById(id) { 
        return axios.get(USER_API_BASE_URL + '/player/' + id);
    } 

    updatePlayer(player) {
        return axios.put(USER_API_BASE_URL + '/player/' + player.id, player);
    }

    deletePlayer(id) { 
        return axios.delete(USER_API_BASE_URL + '/player/' + id);
    }

    deleteAll() { 
        return axios.delete(USER_API_BASE_URL + '/player/all');
    }

    fechTopKillList() {
        return axios.get(USER_API_BASE_URL + '/player/topKill');
    }
}

export default new TableService();
