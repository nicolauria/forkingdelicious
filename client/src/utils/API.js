import axios from "axios";

export default {
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/forkingAPI/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/forkingAPI/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/forkingAPI", userData);
  }
};
