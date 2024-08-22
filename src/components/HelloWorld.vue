<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as stockAPI from '../api/stock';

// 定义一个 Stock
interface Stock {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        bs: string;
        name: string;
    };
}

const stocks = ref<Stock[]>([]); // 定义一个响应式引用来存储股票数据

async function fetchStocks() {
    try {
        const response = await stockAPI.getStockList(); // 使用 await 等待异步操作完成
        stocks.value = response; // 更新响应式数据
        console.log(response); // 打印响应到控制台
    } catch (error) {
        console.error('Failed to fetch stock list:', error); // 处理错误
    }
}

// 页面加载时调用 fetchStocks 函数
onMounted(fetchStocks);

</script>

<template>
    <div>
        <!-- <button @click="fetchStocks">获取数据</button> -->
        <div v-for="stock in stocks" :key="stock.id">
            {{ stock.id }}-{{ stock.name }}-{{ stock.phone }}
    </div>
    </div>
    <router-link to="/">Go to Home</router-link>
</template>

<style scoped>

</style>
