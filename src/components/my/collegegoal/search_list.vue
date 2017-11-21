<template>
    <div class="list_wrapper">
		<div class="addname-xq-list" v-for="(list,index) in data">
			<p>{{list.py}}</p>
	 		<ul>
	 			<li>
	 				<img :src="list.faceaddress">
	 				<p>{{list.hybz}}</p>
	 				<v-button :stateid="list.state_id" ></v-button>
	 			</li>
	 		</ul>
		</div>
    </div>
</template>	

<script>
import mbgc_search from './bjhy_search'
import button from './button_yq'
import bus from '../../eventBus'
export default {
	props:['data'],
	data(){
	  	return{
	  		show:true,
	  		// searchtext:'',
	  		// data:'',
	  	}
	},
	created() {
		console.log(this.hyList);
	},
	components:{
		'v-search':mbgc_search,
		'v-button':button
	}
}
</script>

<style>
.list_wrapper{
  text-align: left;
  background: #f7f7f7;
  min-height: 100%;
  margin-top: 1em;
}
.addname-xq-list>p{
	padding: 0 1.05em
}
.addname-xq-list ul li{
	padding: .3em 1.05em;
	border-bottom: 1px solid #eeeeee;
	background: white;
}
.addname-xq-list ul li>img{
	width: 2em;
	height: 2em;
	vertical-align: top;
	border-radius: 6px;
}
.addname-xq-list ul li p{
	display: inline-block;
	font-size: 16px;
	color: #333333;
	margin-top:.5em;
}
</style>