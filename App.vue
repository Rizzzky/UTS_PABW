<template>
  <div id="app" class="app-container">
    <div class="app-box">
      <ToDoList />
    </div>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue';

export default {
  components: {
    ToDoList
  }
};
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
}

.app-box {
  border: 2px solid #007bff;
  border-radius: 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
