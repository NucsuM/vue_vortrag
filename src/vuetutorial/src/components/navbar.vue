<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#" >VueJS Tutorial</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="openLink('b1')" href="#">Basics #1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="openLink('b2')" href="#">Basics #2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Leaflet</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">D3</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    msg: String
  }, methods: {
    openLink: function (linkedName) {
      this.$root.$data.currentLocation = linkedName
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
