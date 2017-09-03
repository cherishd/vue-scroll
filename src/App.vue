<template>
  <div id="app">
    <h1>Vue Scroll</h1>
    <ul>
      <li v-for="i in 3" :key="i" class="card">
        <item :index="i"></item>
      </li>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'app',
  components: {
    Item
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul,li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.card {
  margin-bottom: 20px;
  border: 1px solid #333;
  border-radius: 2px;
  &:hover {
    box-shadow: 5px 5px 10px #333;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
