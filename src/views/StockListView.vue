<template>
    <div>
      <h1>Stock List</h1>
      <ul>
        <li v-for="stock in stocks" :key="stock.id">
          {{ stock.name }} - {{ stock.email }}
          <button @click="editStock(stock)">Edit</button>
          <button @click="deleteStock(stock.id)">Delete</button>
        </li>
      </ul>
      <div v-if="editingStock">
        <h2>Edit Stock</h2>
        <input v-model="editingStock.name" placeholder="Name"/>
        <input v-model="editingStock.email" placeholder="Email"/>
        <button @click="saveStock">Save</button>
      </div>
      <div v-else>
        <h2>Add New Stock</h2>
        <input v-model="newStock.name" placeholder="Name"/>
        <input v-model="newStock.email" placeholder="Email"/>
        <button @click="addStock">Add</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import stockService from '../services/stockService';
  
  const stocks = ref([]);
  const newStock = ref({ name: '', email: '' });
  const editingStock = ref(null);
  
  const fetchStocks = async () => {
    // const response = await stockService.getStocks();
    // stocks.value = response.data;
    stocks.value = [
        { id: 1, name: '张三', email: '<EMAIL1>' },
        { id: 2, name: '李四', email: '<EMAIL2>' },
        { id: 3, name: '王五', email: '<EMAIL3>' }
    ]
  };
  
  const addStock = async () => {
    await stockService.createStock(newStock.value);
    newStock.value = { name: '', email: '' };
    fetchStocks();
  };
  
  const editStock = (stock) => {
    editingStock.value = { ...stock };
  };
  
  const saveStock = async () => {
    await stockService.updateStock(editingStock.value.id, editingStock.value);
    editingStock.value = null;
    fetchStocks();
  };
  
  const deleteStock = async (id) => {
    await stockService.deleteStock(id);
    fetchStocks();
  };
  
  // fetchStocks();
  onMounted(fetchStocks);
  </script>
  