<template>
  
    <div id="outer-div">
      <app-header></app-header>
        <div id="inner-div">
          <ul>
            <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
              <h1>{{ ninja.name }}</h1>
              <h3 v-show="ninja.show">{{ ninja.specialty }}</h3>
            </li>
          </ul>
        </div>
      <app-footer></app-footer>
    </div>
  
</template>

<script>
export default {
  data () {
    return {
      ninjas: [
        {name: 'Reginald', specialty: 'Fatty ass', show:false},
        {name: 'Erwin', specialty: 'Big nose', show:false},
        {name: 'Gem', specialty: 'Baldy', show:false},
        {name: 'RJ', specialty: 'Katas', show:false},
        {name: 'Earl', specialty: 'Drive Motorbike', show:false},
        {name: 'Neil', specialty: 'Chickboi', show:false}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #outer-div{
    display: block;
    width: 90%;
    align-content: center;
  },
  #inner-div{
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  },
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  },
  li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
