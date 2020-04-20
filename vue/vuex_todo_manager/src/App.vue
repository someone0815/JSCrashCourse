<template>
  <div id="app">
    <div class="container">
      <AddTodo class="noback" />
      <FilterTodos class="noback" />
      <SelectedTodo class="sel" />
      <Todos class="noback" />
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
  /* color: lightcyan; */
  margin: 0px 0px 2rem 0px;
  font-weight: 400;
}
body {
  font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.6;
  background: #edf1f5;
  letter-spacing: 0.02rem;
}
.container {
  max-width: 450px;
  margin: auto;
  overflow: auto;
  /* padding: 0 1px; */
  overflow: hidden;
}
.back-body {
  background-color: white;

  /* border-radius: 3px; */
  padding: 1rem;
}
.sel {
  margin: 0rem 1rem 0rem 1rem;
}
.noback {
  background-color: unset;
}
</style>
