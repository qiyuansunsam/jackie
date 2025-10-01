import axios from 'axios';

// Use environment variable or default to production URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://jackie-portfolio-api.onrender.com/api';

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
      const response = await axios.delete(`${API_BASE_URL}/messages/${messageId}`, {
        headers: {
          'Authorization': 'Bearer host-secret-key' // In production, use proper authentication
        }
      });
      return response.data;
    } catch (error) {
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