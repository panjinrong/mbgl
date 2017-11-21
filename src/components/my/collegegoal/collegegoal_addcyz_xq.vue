<template>
    <div class="collegegoal_addcyz_xq_wrapper">
		<v-search @Search="getSchoolTarget" @listHide="hidden" ></v-search>
		<div class="addname-xq-list" v-for="(list,index) in hyList" v-show="show">
			<p>{{list.py}}</p>
	 		<ul>
	 			<li v-for="(name,i) in list.list">
	 				<img :src="list.faceaddress">
	 				<p>{{name.hybz}}</p>
	 				<v-button :stateid="name.state_id" ></v-button>
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
	data(){
	  	return{
	  		show:true,
	  		searchtext:'',
	  		data:'',
	  		hyList:JSON.parse(this.$route.query.hyList),
	  	}
	},
	mounted(){
		this.$refs.hide.searchShow();
            this.show=msg;
		// bus.$on("setSearch",function(msg){
  //           console.log('1:'+this.show);
  //         });
          
	},
	methods:{
		getSchoolTarget(mes) {
			this.searchtext=mes;
             this.$http.get('http://192.168.0.101:8081/target/target_wdhylbss?userid=20141029&function_id=20150101&ticket=05A4DAC8D4FE71E7C22ACB3C47832420&id=fa8dc10a4b6e4212ad308a5e5eb37496111&username='+this.searchtext).then(res=>{
            this.data=res.data.content;
            console.log(this.data);
          })
        },
        hidden(mes){
      		this.show=mes;
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
.collegegoal_addcyz_xq_wrapper{
  text-align: left;
  background: #f7f7f7;
  min-height: 100%;
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