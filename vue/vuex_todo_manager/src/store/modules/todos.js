import axios from 'axios';
import key from '@/assets/txt/key.txt';

const state = {
  todos: [],
  selected: {},
};

const getters = {
  allTodos: (state) => state.todos,
  selectedTodo: (state) => state.selected,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('http://192.168.2.104:3000/api/todos');
    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios
      .post('http://192.168.2.104:3000/api/todos/' + key, {
        title,
      })
      .catch((err) => console.log(err));
    commit('newTodo', response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios
      .delete(`http://192.168.2.104:3000/api/todos/${id}&${key}`)
      .catch((err) => console.log(err));

    commit('removeTodo', id);
  },
  async filterTodos({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `http://192.168.2.104:3000/api/todos/?limit=${limit}`
    );

    commit('setTodos', response.data);
  },
  async updateTodo({ commit }, updTodo) {
    const response = await axios
      .put(`http://192.168.2.104:3000/api/todos/${updTodo._id}&${key}`, updTodo)
      .catch((err) => console.log(err));
    commit('updateTodo', response.data);
    console.log('response.data');
    console.log(response.data);
  },
  async setSelectedTodo({ commit }, todo) {
    commit('setSelectedTodo', todo);
  },
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
    state.selected = todos[0];
  },
  newTodo: (state, todo) => {
    state.todos.unshift(todo);
    state.selected = todo;
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo._id !== id);
    state.selected = state.todos[0];
  },

  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex((todo) => todo._id === updTodo._id);

    if (index !== -1) {
      state.selected = updTodo;
      state.todos.splice(index, 1, updTodo);

      // console.log(state);
    }
  },
  setSelectedTodo: (state, selectedTodo) => {
    state.selected = selectedTodo;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
