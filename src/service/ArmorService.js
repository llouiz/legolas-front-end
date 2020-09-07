import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/auth';

class ArmorService {

    addArmor(armor) {
        return axios.post(USER_API_BASE_URL + '/armor', armor);
    }

    fetchArmors() { 
        return axios.get(USER_API_BASE_URL + '/armor'); 
    }

    fetchArmorById(id) { 
        return axios.get(USER_API_BASE_URL + '/armor/' + id);
    } 

    updateArmor(armor) {
        return axios.put(USER_API_BASE_URL + '/armor/' + armor.id, armor);
    }

    deleteArmor(id) { 
        return axios.delete(USER_API_BASE_URL + '/armor/' + id);
    }

    deleteAll() { 
        return axios.delete(USER_API_BASE_URL + '/armor/all');
    }
}

export default new ArmorService();
