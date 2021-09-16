<template>
  <div id="app">
    <layout />
  </div>
</template>
<script>
import layout from './views/layout'

export default {
  name: "App",
  components: {
    layout: layout
  },
  methods: {},
};
</script>

<style lang='less'>
#app {
  height: 100%;
  background: #ffffff;
}
</style>