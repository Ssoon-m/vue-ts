<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input @input="handleInput" id="todo-input" type="text" :value="item" />
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {VueEvent} from '@/types/index'
export default Vue.extend({
  props: {
    item: {
      type: String,
      required: true,
      // default: "",
    },
  },
  methods: {
    // ts를 쓰고 있기 때문에 event의 타입을 적어줬다.
    handleInput(event: VueEvent.Input<HTMLInputElement>) {
      event.target.value;
      // if(!event.target){
      //  return;  
      // }
      const eventTarget = event.target as HTMLInputElement;
      this.$emit("input", eventTarget.value);
    },
    addTodo() {
      this.$emit("add");
    },
  },
});
</script>

<style scoped>
</style>