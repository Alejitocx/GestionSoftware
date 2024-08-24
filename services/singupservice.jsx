import axios from 'axios';

const API_URL = 'http://localhost:8080/api/signup';

export const signUp = async (payload) => {
  try {
    const response = await axios.post(API_URL, payload);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error; // Re-throw the error so it can be handled by the calling component
  }
};
