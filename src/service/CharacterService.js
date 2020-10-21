import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/auth";

class CharacterService {
  addCharacter(character) {
    return axios.post(USER_API_BASE_URL + "/character", character);
  }

  fetchCharacter() {
    return axios.get(USER_API_BASE_URL + "/character");
  }

  fetchCharacterById(id) {
    return axios.get(USER_API_BASE_URL + "/character/" + id);
  }

  updateCharacter(character) {
    return axios.put(
      USER_API_BASE_URL + "/character/" + character.id,
      character
    );
  }

  deleteCharacter(id) {
    return axios.delete(USER_API_BASE_URL + "/character/" + id);
  }

  deleteAll() {
    return axios.delete(USER_API_BASE_URL + "/character/all");
  }

  fechTopKillList() {
    return axios.get(USER_API_BASE_URL + "/character/topKill");
  }
}

export default new CharacterService();
