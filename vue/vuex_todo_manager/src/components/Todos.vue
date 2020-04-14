<template>
  <div>
    <h3>Todos</h3>

    <div class="todos">
      <div @dblclick="onDblClick(todo)"
           v-for="todo in allTodos"
           :key="todo._id"
           class="todo"
           v-bind:class="{ 'is-complete': todo.completed }">
        {{ todo.title }}
        <i @click="deleteTodo(todo._id)"
           class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDblClick(todo) {
      const updTodo = {
        _id: todo._id,
        title: todo.title,
        completed: !todo.completed
      };
      console.log('onDblClick -> updTodo', updTodo);

      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  background: #41b883;
  padding: 1rem;
  border-radius: 2px;
  text-align: center;
  position: relative;
  cursor: pointer;
  color: #b4ffd2;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #0000003b;
  cursor: pointer;
}
.is-complete {
  background: #2c5442;
  color: #63a085;
}

@media (max-width: 700px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
