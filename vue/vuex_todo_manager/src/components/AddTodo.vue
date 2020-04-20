<template>
  <div class="back-body">
    <div class="add">
      <form @submit="onSubmit">
        <input type="text"
               v-model="title"
               placeholder="Add Todo..." />

        <button class="subbutton"
                type="submit"
                name="action">
          <i class=" sub fas-times fas fa-plus"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { loremIpsum } from 'lorem-ipsum';

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
      this.addTodo(
        this.title != ''
          ? this.title
          : loremIpsum({
              count: 1,
              sentenceLowerBound: 3, // Min. number of words per sentence.
              sentenceUpperBound: 16
            })
      );
      this.title = '';
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
  flex: 10;
  border: transparent;
  outline: 0;
  background-color: white;
  color: hsl(42.2, 11.7%, 54.7%);
  padding: 1rem;
  border-radius: 0.7rem 0em 0rem 0.7rem;
}
input[type='submit'] {
  border: 0px;
  flex: 2;
  background: white;
  color: hsl(42.2, 11.7%, 54.7%);
  cursor: pointer;
  padding: 1rem;
  border-radius: 0rem 0.7rem 0.7rem 0rem;
}
.subbutton {
  background: #fff;
  padding: 1rem;
  margin: auto;
  border-radius: 0rem 0.7rem 0.7rem 0rem;
}
.add {
  border-radius: 0.7rem;
  box-shadow: 1px 3px 4px 0px hsla(0, 0%, 0%, 0.16);
}
.sub {
  position: inherit;
  display: inline-block;
}
</style>
