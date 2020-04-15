<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';
import FilterTodos from './components/FilterTodos.vue';

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
};
</script>

<style>
h3 {
  color: lightcyan;
}
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.6;
  background: #282c34;
}
.container {
  max-width: 450px;
  margin: auto;
  overflow: auto;
  padding: 0 1rem;
  overflow: hidden;
}
</style>
