import axios from 'axios';

// Use environment variable or default to local development
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Get host secret from localStorage or prompt
const getHostSecret = () => {
  let secret = localStorage.getItem('hostSecret');
  if (!secret && localStorage.getItem('isHost') === 'true') {
    secret = prompt('Enter host secret key:');
    if (secret) {
      localStorage.setItem('hostSecret', secret);
    }
  }
  return secret;
};

const api = {
  // Messages endpoints
  getMessages: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/messages`);
      return response.data;
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  },

  createMessage: async (messageData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/messages`, messageData);
      return response.data;
    } catch (error) {
      console.error('Error creating message:', error);
      throw error;
    }
  },

  deleteMessage: async (messageId) => {
    try {
      const hostSecret = getHostSecret();
      if (!hostSecret) {
        throw new Error('Host authentication required');
      }
      
      const response = await axios.delete(`${API_BASE_URL}/messages/${messageId}`, {
        headers: {
          'Authorization': `Bearer ${hostSecret}`
        }
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Clear invalid secret
        localStorage.removeItem('hostSecret');
        alert('Invalid host secret. Please try again.');
      }
      console.error('Error deleting message:', error);
      throw error;
    }
  },

  // Portfolio data endpoint
  getPortfolioData: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/portfolio`);
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      throw error;
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/health`);
      return response.data;
    } catch (error) {
      console.error('API health check failed:', error);
      throw error;
    }
  }
};

export default api;