<template>
  <div class="back-body hght"
       v-if="selectedTodo != null">
    <p>{{selectedTodo._id}}</p>
    <p>{{selectedTodo.title}}</p>
    <p>{{selectedTodo.completed}}</p>
    <button @click="toggle(selectedTodo)">Toggle</button>
    <button @click="deleteTodo(selectedTodo._id)">Delete</button>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'SelectedTodo',
  methods: {
    ...mapActions(['deleteTodo', 'updateTodo']),
    toggle(todo) {
      const updTodo = {
        _id: todo._id,
        title: todo.title,
        completed: !todo.completed
      };
      console.log('onDblClick -> updTodo', updTodo);

      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(['selectedTodo'])
};
</script>

<style>
button {
  background: #41b883;
  padding: 1rem;
  border-radius: 2px;
  text-align: center;
  position: relative;
  cursor: pointer;
  border: 0px;
  color: #b4ffd2;
  margin: 5px;
}
.hght {
  height: 220px;
}
</style>