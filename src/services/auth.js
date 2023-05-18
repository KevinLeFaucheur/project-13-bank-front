import axios from "axios";
import Cookies from "universal-cookie";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = 'http://localhost:3001/api/v1/';
const cookies = new Cookies();

/**
 * Sends user credentials to API by endpoint /user/:userId for login
 * Then retrieves JWT and sets a cookie on success
 * @param {{ email: string, username: string}} loginObject 
 * 
 * @returns {{ body: { token: string }, message: string, status: number }} data object
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

      console.log(response);

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
 * Sends new user credentials to API for registration
 * @param {{ { email: string, password: string, firstName: string, lastName: string } }} loginObject 
 * 
 * @returns {{ body: { 
 *                createdAt: string, 
 *                email: string, 
 *                firstName: string, 
 *                lastName: string, 
 *                password: string, 
 *                updatedAt: string 
 *                  }, 
 *            message: string, status: number }} data object
 */
export const signup = async ({ email, password, firstName, lastName }) => {
  return await axios.post(`${API_URL}user/signup`, 
  {
    "email": email,
    "password": password,
    "firstName": firstName,
    "lastName": lastName
  }).then((response) => {

    console.log(response);

    return response.data;
  })
};

/**
 * Retrieves user profile by endpoint /user/profile and Authorization token
 * @returns {{ body: { 
 *                createdAt: string, 
 *                email: string, 
 *                firstName: string, 
 *                lastName: string, 
 *                id: string, 
 *                updatedAt: string 
 *                  }, 
 *            message: string, status: number }} data object
 */
export const getUserProfile = async () => {
  const token = cookies.get('jwt', { path: '/' });
  return await axios.post(`${API_URL}user/profile`, 
  {},
  {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}` 
    }
  }).then((response) => {

    console.log(response);

    return response.data;
  })
};

/**
 * Updates user profile by endpoint /user/profile and Authorization token
 * @param {{ firstName: string, lastName: string }} loginObject 
 * @returns {{ body: { 
 *                createdAt: string, 
 *                email: string, 
 *                firstName: string, 
 *                lastName: string, 
 *                id: string, 
 *                updatedAt: string 
 *                  }, 
 *            message: string, status: number }} data object
 */
export const updateUserProfile = async ({ firstName, lastName }) => {
  const token = cookies.get('jwt', { path: '/' });
  return await axios.put(`${API_URL}user/profile`,
  {
    "firstName": firstName,
    "lastName": lastName
  },
  {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}` 
    }
  }).then((response) => {

    console.log(response);

    return response.data;
  })
};