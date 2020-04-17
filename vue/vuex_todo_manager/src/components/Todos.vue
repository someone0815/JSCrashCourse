<template>
  <div class="back-body">

    <transition-group class="todos"
                      name="slide-fade"
                      mode="in">
      <div @click="selectTodo(todo, index) "
           v-for="(todo, index) in allTodos"
           :key="todo._id"
           class="todo"
           :class=" [(todo.completed ? 'is-complete' : '' ), (show == index ? 'is-hover' : ''), (selectedTodo._id == todo._id  ? 'selected' : '') ]"
           @mouseenter="show = index"
           @mouseleave="show = null">
        {{ todo.title }}
        <i @click="deleteTodo(todo._id)"
           class="fas fa-trash"
           v-if="todo.completed || show == index"></i>
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
  data: () => ({
    show: null,
    selected: null
  }),
  methods: {
    ...mapActions([
      'fetchTodos',
      'deleteTodo',
      'updateTodo',
      'setSelectedTodo'
    ]),

    selectTodo(todo, index) {
      const selectedTodo = {
        _id: todo._id,
        title: todo.title,
        completed: todo.completed
      };
      this.selected = index;
      this.setSelectedTodo(selectedTodo);
    }
  },
  computed: mapGetters(['allTodos', 'selectedTodo']),
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
  transition: all 0.4s, box-shadow 0.2s;
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
.true {
  color: red;
}
.is-hover {
  box-shadow: inset 0px 0px 0px 4px #69d7a382;
}
.slide-fade-enter-active {
  transition: all 0.4s;
}
.slide-fade-enter {
  transform: translateY(-50px);
  opacity: 0;
}
.selected {
  box-shadow: inset 0px 0px 0px 5px #00ff8d;
}
</style>
