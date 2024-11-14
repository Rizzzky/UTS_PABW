<template>
  <div class="todo-container">
    <h1>To-Do List</h1>
    <input v-model="newTask" placeholder="Tambahkan tugas baru" @keyup.enter="addTask" />
    <button @click="addTask">Tambah</button>

    <div class="filter-buttons">
      <button @click="setFilter('all')" :class="{ active: filter === 'all' }">Semua</button>
      <button @click="setFilter('completed')" :class="{ active: filter === 'completed' }">Selesai</button>
      <button @click="setFilter('pending')" :class="{ active: filter === 'pending' }">Belum Selesai</button>
    </div>

    <ul>
      <li v-for="(task, index) in filteredTasks" :key="index" :class="{ completed: task.completed }">
        <input type="checkbox" v-model="task.completed" @change="saveTasksToLocalStorage" />
        <template v-if="!task.isEditing">
          <span 
            @dblclick="editTask(index)" 
            :class="{ 'completed-task': task.completed, 'pending-task': !task.completed }"
          >
            {{ task.name }}
          </span>
        </template>
        <template v-else>
          <input v-model="task.name" @keyup.enter="task.isEditing = false; saveTasksToLocalStorage()" />
        </template>
        <button @click="deleteTask(index)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {
  newTask,
  tasks,
  filter,
  addTask,
  deleteTask,
  editTask,
  setFilter,
  saveTasksToLocalStorage,
  filteredTasks,
  loadTasksFromLocalStorage,
} from './useToDoList.js';

loadTasksFromLocalStorage();
</script>

<style scoped>

.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: #333; 
}
input[type="text"] {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}

button {
  padding: 8px 15px;
  margin-bottom: 10px; 
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%; 
}

li {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 8px; 
  padding: 10px;
  border-bottom: 1px solid #ddd; 
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 15px; /* Jarak di bawah filter */
}

.filter-buttons button {
  margin-right: 5px;
}

.filter-buttons .active {
  background-color: #28a745;
}


.completed-task {
  color: #007bff; 
}

.pending-task {
  color: #ff6347;
}
</style>
