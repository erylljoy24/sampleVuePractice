 <template>
  <header>
  	<h1>{{ header }}</h1>
  </header>
</template>

<script>
export default {
  data () {
    return {
      header: 'this is the header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
  	background: green;
  	text-align: center;
  },
  h1{
  	text-decoration-color: red;
  	text-align: center;
  }
</style>
