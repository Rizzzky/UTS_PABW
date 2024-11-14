import { ref, computed } from 'vue';

export const newTask = ref('');
export const tasks = ref([]);
export const filter = ref('all');

export const filteredTasks = computed(() => {
  if (filter.value === 'completed') {
    return tasks.value.filter(task => task.completed);
  } else if (filter.value === 'pending') {
    return tasks.value.filter(task => !task.completed);
  }
  return tasks.value;
});

export function addTask() {
  if (newTask.value.trim() !== '') {
    tasks.value.push({ name: newTask.value, completed: false, isEditing: false });
    newTask.value = '';
    saveTasksToLocalStorage();
  }
}

export function deleteTask(index) {
  tasks.value.splice(index, 1);
  saveTasksToLocalStorage();
}

export function editTask(index) {
  tasks.value[index].isEditing = true;
}

export function setFilter(filterType) {
  filter.value = filterType;
}

export function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
}

export function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks.value = JSON.parse(storedTasks);
  }
}
