<template>
  <div>
    <h3>Todos</h3>

    <transition-group class="todos"
                      name="slide-fade"
                      mode="in">
      <div @dblclick="onDblClick(todo)"
           v-for="todo in allTodos"
           :key="todo._id"
           class="todo"
           v-bind:class="{ 'is-complete': todo.completed }">
        {{ todo.title }}
        <i @click="deleteTodo(todo._id)"
           class="fas fa-trash-alt"></i>
      </div>
      <!-- <div :key="value">
          {{ value }}
        </div> -->
    </transition-group>

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
  transition: all 0.4s;
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
.slide-fade-enter-active {
  transition: all 0.4s;
}
.slide-fade-enter {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
