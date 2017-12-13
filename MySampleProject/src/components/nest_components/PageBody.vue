<template>
  
    <div>
      <app-header></app-header>
      <ul>
        <li v-for="barkadas in barkada">{{ barkadas }}</li>
      </ul>
      <app-footer></app-footer>
    </div>
  
</template>s

<script>
export default {
  data () {
    return {
      barkada: ['erwin', 'reginald', 'earl']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
