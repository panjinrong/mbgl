<template>
    <div class="mbgc-zrxq-wrapper">
  		<v-mbgc :data="data"></v-mbgc>
  		<v-search v-show="false"></v-search>
    </div>
</template>

<script>
import search from './mbgc_search'
import mbgc_list from './find_mbgc_list'
export default {
	data() {
		return{
			data:'',
		}
	},
	created() {
		var _this=this;
	    this.$http.get('http://192.168.0.56:8081/discovery/getTargetSquareZR?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&page=1&pagesize=3').then(res=>{
	        _this.data=res.data.content;
	      // console.log( _this.data);
	    })
	},
	components:{
		'v-search':search,
		'v-mbgc':mbgc_list
	}
}
</script>

<style>

</style>
