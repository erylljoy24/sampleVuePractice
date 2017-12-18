 <template>
  <div class="container">
    <div class="container-fluid navbar-header">
      <h1 class="text-danger">{{ header }}</h1>
    </div>
  </div>
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
  container-fluid{
    background: grey;
    text-align: center;
  },
  h1{
  	color: red;
  	text-align: center;
  }
</style>
