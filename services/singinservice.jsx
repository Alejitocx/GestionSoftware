import axios from 'axios';

const API_URL = 'http://localhost:8080/api/findbyemail';

export const findUserByEmailAndPassword = async (email, password) => {
  try {
    const response = await axios.get(`${API_URL}/findUser`, {
      params: { email, password }
    });
    return response.data;
  } catch (error) {
    console.error('Error finding user by email and password:', error);
    throw error; // Re-throw the error so it can be handled by the calling component
  }
};