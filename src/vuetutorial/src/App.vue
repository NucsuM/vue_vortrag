<template>
  <div id="app">
    <navbar/>
    <div class="container-fluid">
      <basics1 v-if="$root.$data.currentLocation === 'b1'" />
      <basics2 v-if="$root.$data.currentLocation === 'b2'" />
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import basics1 from "./components/Basics1.vue";
import basics2 from "./components/Basics2.vue";

export default {
  name: "app",
  components: {
    navbar,
    basics1,
    basics2
  },
  data: function() {
    return {
      visible: ""
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
#app .container-fluid {
  padding-left: 100px;
  padding-right: 100px;
}

.border {
  border: 1px;
}
.col {
  border: 1px solid red;
}
</style>
