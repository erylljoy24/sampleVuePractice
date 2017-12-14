<template>
	<div>
		<new-header></new-header>
		<new-body v-bind:ninjas="ninjas"></new-body>
		<new-footer></new-footer>
	</div>
</template>

<script>
import NewHeaderComponent from './new_component_folder/NewHeaderComponent';
import NewPageBodyComponent from './new_component_folder/NewPageBodyComponent';
import NewFooterComponent from './new_component_folder/NewFooterComponent';


export default {
	components: {
		'new-header': NewHeaderComponent,
		'new-body': NewPageBodyComponent,
		'new-footer': NewFooterComponent
	},
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
  
</style>
