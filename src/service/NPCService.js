import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/auth';

class NPCService {

    addNPC(npc) {
        return axios.post(USER_API_BASE_URL + '/npc', npc);
    }

    fetchNPCs() { 
        return axios.get(USER_API_BASE_URL + '/npc'); 
    }

    fetchNPCById(id) { 
        return axios.get(USER_API_BASE_URL + '/npc/' + id);
    } 

    updateNPC(npc) {
        return axios.put(USER_API_BASE_URL + '/npc/' + npc.id, npc);
    }

    deleteNPC(id) { 
        return axios.delete(USER_API_BASE_URL + '/npc/' + id);
    }

    deleteAll() { 
        return axios.delete(USER_API_BASE_URL + '/npc/all');
    }
}

export default new NPCService();
