<template>
  <div class="bgcolor">basics1</div>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      name: "basics1",
      posts: []
    };
  },
  methods:{
  },
  created: function() {
    console.log('basics1')

    axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
    //console.log(JSON.stringify(this, null, 2));
    
    //console.log('name: ' + this.name)
    this.posts = response.data
  }.bind(this)
  )
  .catch(function (error) {
    console.log(error);
  });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgcolor {
  background-color: #562181;
}
</style>
