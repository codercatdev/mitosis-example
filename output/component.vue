<template>
  <div>
    <input class="input" :value="name" @input="name = $event.target.value" />
    Hello! I can run in React, Vue, Solid, or Liquid!
  </div>
</template>
<script>
export default {
  name: "my-component",

  data: () => ({ name: "Alex" }),
};
</script>
<style scoped>
.input {
  color: red;
}
</style>

