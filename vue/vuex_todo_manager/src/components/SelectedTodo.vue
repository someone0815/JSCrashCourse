<template>
  <div class="back-body card"
       v-if="selectedTodo != null">
    <h3>{{selectedTodo.title}}</h3>
    <button :class="[selectedTodo.completed ? 'is-completecard'
                                           : ''
                                           ]"
            @click="toggle(selectedTodo)"><i :class="[selectedTodo.completed ? 'is-complete s2 fa-lg' : 's2 fa-lg']"
         class="fas fa-check-circle"></i> CHECK</button>

    <button class="del"
            @click="deleteTodo(selectedTodo._id)"><i :class="[selectedTodo.completed ? 's2 fa-lg' : 's2 fa-lg']"
         class="fas fa-eraser"></i> DELETE</button>
    <!-- <p class="sub-info">{{selectedTodo._id}} {{selectedTodo.completed}}</p> -->

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

<style >
h3 {
  font-weight: 600 !important;
  /* display: inline-block; */
  font-kerning: 1em;
}

.card {
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
  /* cursor: pointer; */
  color: #1c3b61;
  box-shadow: 1px 3px 4px 0px hsla(0, 0%, 0%, 0.16);
  position: relative;
  /* height: 13rem; */
  /* padding-left: 3.5rem !important; */
  transition: all 0.4s, box-shadow 0.2s;
}

.sub-info {
  color: hsla(49, 29%, 45%, 0.43);
}
.s2 {
  display: inline-block;
  position: initial;
  padding: 1rem;
  /* margin-right: -1rem; */
}

button {
  padding: 0rem 1.6rem 0rem 0.5rem;
  background: #91919126;
  border: 0px;
  border-radius: 0.51rem;
  color: #b4b4b4;
  font-weight: bold;
  font-size: 0.8rem;
  /* font-family: revert; */
  cursor: pointer;
  display: block;
  margin: auto;
  margin: auto;
  margin-bottom: 1rem;
}

.del {
  background: #ff00001f;
  /* border: 0px; */
  color: #f34747c7;
  font-weight: 600;
  font-size: 0.9rem;
}

.is-completecard {
  background: #d1f0e8;
  color: #68ae9d;
}
</style>