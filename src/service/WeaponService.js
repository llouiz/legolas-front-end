import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/auth';

class WeaponService {

    addWeapon(weapon) {
        return axios.post(USER_API_BASE_URL + '/weapon', weapon);
    }

    fetchWeapons() { 
        return axios.get(USER_API_BASE_URL + '/weapon'); 
    }

    fetchWeaponById(id) { 
        return axios.get(USER_API_BASE_URL + '/weapon/' + id);
    } 

    updateWeapon(weapon) {
        return axios.put(USER_API_BASE_URL + '/weapon/' + weapon.id, weapon);
    }

    deleteWeapon(id) { 
        return axios.delete(USER_API_BASE_URL + '/weapon/' + id);
    }

    deleteAll() { 
        return axios.delete(USER_API_BASE_URL + '/weapon/all');
    }
}

export default new WeaponService();
