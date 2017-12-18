<template>
	<div>
		<div class="container">
			<div class="container-fluid navbar-inverse">
				<button class="btn-danger" v-on:click="component = 'new-header'">Login</button>
				<button class="btn-default" v-on:click="component = 'new-body'">Register</button>
			</div>
		</div>
		<component v-bind:is="component"></component>
	</div>
</template>

<script>
import LoginComponent from './LoginComponent'
import RegistrationComponent from './RegistrationComponent'


export default{
	components:{
		'new-header': LoginComponent,
		'new-body': RegistrationComponent
		},	
	data(){
		return{
			component: 'new-header'
		}
	}
}
</script>

<style scope>
	
</style>