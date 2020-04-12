<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
textarea:focus,
input:focus {
  outline: none;
}
input[type='text'] {
  border-radius: 2px 0px 0px 2px;
  flex: 10;
  padding: 10px;
  border: transparent;
  outline: 0;
  background-color: #404650;
  color: #b4ffd2;
}
input[type='submit'] {
  border-radius: 0px 2px 2px 0px;
  border: 0px;
  flex: 2;
  background: #41b883;

  border: 1px #41b883 solid;
  cursor: pointer;
  color: #b4ffd2;
}
input[type='submit']:hover {
  background: #65d8a5;
}
</style>
