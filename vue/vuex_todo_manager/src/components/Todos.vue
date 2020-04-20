<template>

  <div class="back-body">
    <transition-group name="list-complete"
                      tag="p"
                      class="todos">
      <div @click="selectTodo(todo, index)"
           @dblclick="onDblClick(todo)"
           v-for="(todo, index) in allTodos"
           :key="todo._id"
           class="todo list-complete-item"
           :class="[
          
          show == index ? 'is-hover' : '',
          selectedTodo._id == todo._id ? 'selected' : '',
        ]"
           @mouseenter="show = index"
           @mouseleave="show = null">
        {{ todo.title }}
        <i :class="[todo.completed ? 'is-complete' :'' ]"
           class="fas fa-check-circle"></i>
      </div>
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
    onDblClick(todo) {
      const updTodo = {
        _id: todo._id,
        title: todo.title,
        completed: !todo.completed
      };
      console.log('onDblClick -> updTodo', updTodo);

      this.updateTodo(updTodo);
    },
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

<style >
.todos {
  padding: 0px;
  margin: 0px;
}
.todo {
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 99%, 1),
    hsla(0, 0%, 98%, 1),
    hsla(0, 0%, 98%, 1)
  );
  padding: 1rem;
  border-radius: 0.7rem;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  border-bottom-right-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
  border-top: 0.1rem solid white;
  /* text-align: center; */
  cursor: pointer;
  color: #1c3b61;
  box-shadow: 1px 3px 4px 0px hsla(0, 0%, 0%, 0.16);
  position: relative;
  padding-left: 3.5rem !important;
}
i {
  position: absolute;
  top: 1.2rem;
  left: 23px;
  color: #0000003b;
  cursor: pointer;
}
.is-complete {
  /* background: hsl(48, 100%, 98%); */
  color: #4fc5a2;
  /* box-shadow: 0px 0px 0px 0px hsla(32, 96%, 35%, 0.16); */
}

.is-hover {
  background: white;
}
.selected {
  box-shadow: 1px 3px 4px 0px hsla(0, 0%, 0%, 0.16), 0px 0px 0px 0.2rem #4fc5a2;
  background: linear-gradient(
    180deg,
    hsla(169, 92%, 98%, 0.51),
    hsla(162, 100%, 96%, 0.81)
  );
}

.list-complete-item {
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  margin-bottom: 0.8rem;
  transition: all 0.4s, box-shadow 0.2s;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.list-complete-leave-active {
  transition: opacity 0s, position 0s;
  position: absolute;
}
</style>
