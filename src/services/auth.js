import axios from "axios";
import Cookies from "universal-cookie";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = 'http://localhost:3001/api/v1/';
const cookies = new Cookies();

/**
 * Retrieves general data by endpoint /user/:userId and set JWT cookie on success
 * @param {{ email: string, username: string}} loginObject 
 * 
 * @returns {token: string} data object or Error object
*/
export const signin = async ({ email, password }) => {
  return await axios.post(`${API_URL}user/login`, 
  {
    "email": email,
    "password": password
  }).then((response) => {
    if(response.data.body.token) {
      const { token } = response.data.body;
      cookies.set('jwt', token, { path: '/' });
      return response.data;
    }
  })
};

/**
 * Removes JWT from cookies
 */
export const signout = () => {
  cookies.remove('jwt', { path: '/' });
};

/**
 * @param 
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
  } 
  catch (error) { 
    console.log(error.response);
    // return new Error(`${data.message}, please try again later.`);
  }
};

/**
 * Retrieves user profile if JWT is validated
 * @param {} token Passing current user JWT from cookie as authorization
 * 
 * @returns {  }
 */
export const getUserProfile = async () => {
  try {
    const token = cookies.get('jwt', { path: '/' });
    const  { data }  = await axios.post(`${API_URL}user/profile`, 
    {},
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}` 
      }
    });
    console.log(data);

    return data;
  } 
  catch (error) { 
    console.log(error.response);
      // return new Error(`${data.message}, please try again later.`);
  }
};

/**
 * Updates user profile if JWT is validated
 * @param {{ firstName: string, lastName: string }}
 * 
 * @returns {  }
 */
export const updateUserProfile = async ({ firstName, lastName }) => {
  try {
    const token = cookies.get('jwt', { path: '/' });
    const { data } = await axios.put(`${API_URL}user/profile`,
    {
      "firstName": firstName,
      "lastName": lastName
    },
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}` 
      }
    });

    return data;
  } 
  catch (error) { 
    console.log(error.response);
    // return new Error(`${data.message}, please try again later.`);
  }
};