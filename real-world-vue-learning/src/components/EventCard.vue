<template>
  <div>
    <h1 v-if="condition" v-on:event="handle"></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "hello world"
    }
  },
}
</script>

<style></stcopy relyle>
