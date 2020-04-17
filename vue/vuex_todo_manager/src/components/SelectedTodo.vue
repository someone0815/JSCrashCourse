<template>
  <div class="back-body hght"
       v-if="selectedTodo != null">
    <h3>Selected Todo</h3>
    <p>id: {{selectedTodo._id}}</p>
    <p>title: {{selectedTodo.title}}</p>
    <p>completed: {{selectedTodo.completed}}</p>
    <button @click="updatex(selectedTodo)">Completed?</button>
    <button @click="deleteTodo(selectedTodo._id)">Delete</button>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'SelectedTodo',
  methods: {
    ...mapActions(['deleteTodo', 'updateTodo']),
    updatex(todo) {
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
.hght {
  height: 220px;
}
</style>