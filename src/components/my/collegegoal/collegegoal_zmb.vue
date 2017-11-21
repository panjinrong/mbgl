<template>
  <div class="college-zmb-wrapper" >
 		<ul>
 			<li v-for="(list,index) in data" @click="zmbXqShow(list.id)" >
 				<img src="./../../../assets/image/xk.png">
 				<p>{{list.mc}}</p>
 				<span>
 				<img :src="list.faceaddress">
 				</span>
 			</li>
 		</ul>
  </div>
</template>

<script>
export default {
	props:['zmbList','mblx'],
	data() {
		return {
			data:JSON.parse(this.zmbList)
		}
	},
	methods:{
		zmbXqShow:function(id){
			var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_mbxq?userid=11204050220&function_id=20150101&ticket=7A459E71400C19A4A813994B79BC4E41&id='+id).then(res=>{
            _this.mbxq=res.data.content;   
      		this.$router.push({path:'./zmb_content_xq',query:{data:JSON.stringify(this.mbxq),mblx:this.mblx,id:id}});
        })
		}
	},
	created(){
		// console.log(this.zmbList);
	}
}
</script>

<style>
.college-zmb-wrapper{
	text-align: left;
	background: #f7f7f7;
	min-height: 100%;
	width: 100%;
	position: absolute;
}
.college-zmb-wrapper ul li{
	margin: .8em .8em 0;
	line-height: 3.5em;
	border-radius: 8px;
	background: white;
	padding: 0 .7em;
}
.college-zmb-wrapper ul li>img{
	width: 1em;
	height: 1em;
	vertical-align: top;
	margin-top: 1.25em;
}
.college-zmb-wrapper ul li p{
	display: inline-block;
	font-family: PingFang-SC-Bold;
	font-size: 15px;
	color: #555555;
	border-bottom:1px solid #eeeeee;
}
.college-zmb-wrapper ul li span{
	float: right;
}
.college-zmb-wrapper ul li span>img{
	width: 1.5em;
	height: 1.5em;
	border-radius: 50%;
	vertical-align: top;
	margin-top: 1em;
}
</style> 