<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <SelectedTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';
import FilterTodos from './components/FilterTodos.vue';
import SelectedTodo from './components/SelectedTodo.vue';

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos,
    SelectedTodo
  }
};
</script>

<style>
h3 {
  color: lightcyan;
  margin: 0px 0px 15px 3px;
  font-weight: 400;
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
  /* padding: 0 1rem; */
  overflow: hidden;
}
.back-body {
  background-color: hsla(220, 13%, 16%, 1);
  border-radius: 4px;
  padding: 15px;
  margin: 10px 5px 10px 5px;
}
</style>
