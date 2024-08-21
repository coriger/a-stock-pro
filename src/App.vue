<template>
    <div id="app">
      <header>
        <h1>MyApp</h1>
        <nav>
          <router-link to="/">Home</router-link>
          <!-- 如果有其他页面，可以继续添加导航链接 -->
        </nav>
      </header>
  
      <!-- 路由占位符 -->
      <router-view />
    </div>
  </template>
  
  <script setup>
    // 如果需要，可以在这里引入全局样式或组件
  </script>
  
  <style>
  /* 全局样式 */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  header {
    margin-bottom: 20px;
  }
  
  nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #42b983;
  }
  
  nav a.router-link-exact-active {
    font-weight: bold;
    color: #35495e;
  }
  </style>
  