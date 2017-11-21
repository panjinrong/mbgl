<template>
  <div id="ywc-wrapper">
	 <div class="mbfl-item">
	 	<ul>
	 		<li><router-link to="/completed/college">学校目标</router-link></li>
	 		<li><router-link to="/completed/personal">个人目标</router-link></li>
	 	</ul>	 	
	 </div>
	 <router-view></router-view>
  </div>
</template>

<script>
export default {
	data(){
		return{
			data:''
		}
	},
	// mounted(){
	// 	var _this = this;
 //           this.$http.get('http://192.168.0.101:8081/target/target_mbywclb?userid=11204050220&&ticket=B110E55DEECA941AEFDCF9CE72C2789D&function_id=20150101&id=98765432111').then(res=>{
 //            _this.data=res.data.content;
 //            console.log(_this.data);
 //        })
	// }
}
</script>

<style>
#ywc-wrapper{
	background: #f7f7f7;
	height: 100%;
}
.mbfl-item{
	background: #ffffff;
	border-bottom: 1px solid #eeeeee;
}
.mbfl-item ul li{
	display: inline-block;
	width: calc(100%/2 - .5em);
	padding: .23em 0 .125em;
	border-bottom: 1px solid #ffffff;
}
.mbfl-item ul li a{
	font-size: 16px;
	color: #333333;
    display: inline-block;
    padding: .7em 0;
}
.mbfl-item .router-link-active{
    color:#333333 !important;
	border-bottom: 1px solid #333333 !important;
}
</style>