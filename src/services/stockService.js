import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/stocks',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getStocks() {
    return apiClient.get('/');
  },
  getStock(id) {
    return apiClient.get(`/${id}`);
  },
  createStock(stock) {
    return apiClient.post('/', stock);
  },
  updateStock(id, stock) {
    return apiClient.put(`/${id}`, stock);
  },
  deleteStock(id) {
    return apiClient.delete(`/${id}`);
  },
};
