import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const API_URL = process.env.BUBBLE_API_URL;
const API_TOKEN = process.env.BUBBLE_API_TOKEN;

// Initialize Axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export async function fetchSchema() {
  try {
    const response = await apiClient.get('/meta');
    console.log('Schema:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching schema:', error);
    throw error;
  }
}

export default apiClient;

