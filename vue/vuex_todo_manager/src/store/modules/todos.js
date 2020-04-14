import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('http://localhost:3000/api/todos');

    commit('setTodos', response.data);
    console.log('fetchTodos:');
    console.log(response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post('http://localhost:3000/api/todos', {
      title
    });

    commit('newTodo', response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`http://localhost:3000/api/todos/${id}`);

    commit('removeTodo', id);
  },
  async filterTodos({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `http://localhost:3000/api/todos/?limit=${limit}`
    );

    commit('setTodos', response.data);
  },
  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `http://localhost:3000/api/todos/${updTodo._id}`,
      updTodo
    );

    commit('updateTodo', response.data);
    console.log('response.data');
    console.log(response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo._id !== id)),
  updateTodo: (state, updTodo) => {
    //
    const index = state.todos.findIndex(todo => todo._id === updTodo._id);

    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
      // console.log(state);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
