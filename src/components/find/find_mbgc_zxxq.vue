 <template>
  <div class="mbgc-zxxq-wrapper">
	<v-mbgc :data="data"></v-mbgc>
  </div>
</template>

<script>
import button from './button_jion'
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
	      console.log( _this.data);
	    })
	},
	components:{
		'v-button':button,
		'v-mbgc':mbgc_list
	}
}
</script>

<style>
</style>
