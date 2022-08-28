import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log(`Error while calling add User Api `, error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log(`Error while calling  User Api `, error);
  }
};
//

export const getUser = async (id) => {
  try {
    console.log("getUser api called")
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log(`Error while calling  getUser Api `, error);
  }
};
//

export const editUser = async (data,id) => {
    try {
      console.log("editUser api called")
      return await axios.put(`${URL}/${id}`,data);
    } catch (error) {
      console.log(`Error while calling  getUser Api `, error);
    }
  };

  export const deleteUser = async (id) => {
    try {
      console.log("deleteUser api called")
      return await axios.delete(`${URL}/${id}`);
    } catch (error) {
      console.log(`Error while calling delete Api `, error);
    }
  };

  
