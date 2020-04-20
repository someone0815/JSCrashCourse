<template>
  <div class="back-body closemargin">
    <select @change="filterTodos($event)">
      <option value="200"
              selected>200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'FilterTodos',
  methods: mapActions(['filterTodos'])
};
</script>
<style>
div {
  color: hsl(42.2, 11.7%, 54.7%);
}
select {
  padding: 6px;
  border: #41b883 1px solid;
  box-shadow: 1px 3px 4px 0px hsla(32, 96%, 35%, 0.16);
}
select {
  border: 0px;
  border-radius: 2px;
  height: 35px;
}
</style>
