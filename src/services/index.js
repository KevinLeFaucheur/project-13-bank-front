import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = 'http://localhost:3001/api/v1/';

/**
 * Retrieves general data by endpoint /user/:userId
 * @param {{ email: string, username: string}} loginObject 
 * 
 * @returns {token: string} data object or Error object
*/
export const login = async ({ email, password }) => {
    try {
        const { data: { body } } = await axios.post(`${API_URL}user/login`, 
        {
          "email": email,
          "password": password
        });
        return body;
  
    } catch ({ response: { data } }) { 

      switch(data.status) {
        case 404: console.log(data.message);
        break;
        case 400: console.log(data.message);
        break;
        case 500: console.log(data.message);
        break;
        default:
      }
      // return new Error(`${data.message}, please try again later.`);
    }
};

/**
 * 
 * @returns 
 */
export const signup = async ({ email, password, firstName, lastName }) => {
  try {
      const  { data }  = await axios.post(`${API_URL}user/signup`, 
      {
        "email": email,
        "password": password,
        "firstName": firstName,
        "lastName": lastName
      });
      console.log(data);
      return data;

  } catch (error) { 
    console.log(error.response);
      // return new Error(`${data.message}, please try again later.`);
  }
};

/**
 * 
 * @returns 
 */
export const getUserProfile = async ({ token }) => {
    try {
        const  { data }  = await axios.post(`${API_URL}user/profile`,
        {
          headers: { "Authorization": `Bearer ${token}` }
        });
        console.log(data);
        return data;

    } catch (error) { 
      console.log(error.response);
        // return new Error(`${data.message}, please try again later.`);
    }
};

/**
 * 
 * @returns 
 */
export const updateUserProfile = async ({ email, password, token }) => {
  try {
      const  { data }  = await axios.put(`${API_URL}user/profile`,
      {
        "firstName": email,
        "lastName": password
      },
      { 
        headers: { "Authorization": `Bearer ${token}` }
      }
      );
      console.log(data);
      return data;

  } catch (error) { 
    console.log(error.response);
      // return new Error(`${data.message}, please try again later.`);
  }
};