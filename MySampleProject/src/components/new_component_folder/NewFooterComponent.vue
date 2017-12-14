 <template>
  <header>
  	<h1>{{ footer_text }}</h1>
  </header>
</template>

<script>
export default {
  data () {
    return {
      footer_text: 'Copyright 2017'
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
  	color: red;
  	text-align: center;
  }
</style>
