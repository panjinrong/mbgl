<template>
  <div id="collegedetail-header-wrapper">
 		<div class="collegedetail-title">
 			<img src="./../../../assets/image/Marquee-N.png">
 			<h3>{{JSON.parse(this.mbxq)[0].mc}}</h3>
 		</div>
 		<div class="collegedetail-input">
 			<div class="collegedetail-input-img">
 				<img src="./../../../assets/image/Remarks.png">
 			</div>
 			<div class="collegedetail-input-nr" @click="bzShow()">
 				<p>{{JSON.parse(this.mbxq)[0].bz}}</p>
 			</div>
 		</div>
 		<div class="collegedetail-mbgs" @click="zmbShow(data[0].id)">
			<div class="collegedetail-mbgs-img">
				<img src="./../../../assets/image/Target.png">
			</div>
			<div class="collegedetail-mbgs-wc">
				<p>{{JSON.parse(this.mbxq)[0].count_ywc}}个子目标，{{JSON.parse(this.mbxq)[0].count_zmb}}个完成</p>
			</div>
			<div class="next">
				<img src="./../../../assets/image/next.png">
			</div>
		</div>
  </div>
</template>

<script>
export default {
	props:['mbxq','mblx'],
	data() {
		return {
			zmbList:'',
			data:eval("("+this.mbxq+")"),
		}
	},
	methods:{
		zmbShow:function(id){
			var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_zmblb?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&id='+id).then(res=>{
            _this.zmbList=res.data.content;
            // console.log(_this.zmbList);
			this.$router.push({path:'./collegegoal_addzmb',query:{zmbList:JSON.stringify(this.zmbList),gjdid:id,mblx:this.mblx}});
        })
		},
		bzShow:function(){
			this.$router.push('./collegegoal_bz');
		}
	},
	created(){
    // console.log(this.data);
	}
}
</script>

<style>
#collegedetail-header-wrapper{
	text-align: left;
	background: #f7f7f7;
}
.collegedetail-title,.collegedetail-input,.collegedetail-mbgs{
	padding:.7em 0;
	background: white;
	border-bottom: 1px solid #eeeeee;
}
.collegedetail-title img{
	width: 1.1em;
	height: 1.1em;
	margin: 0 .67em;
	vertical-align: top;
    margin-top: .1em;
}
.collegedetail-title h3{
	display: inline-block;
	font-family: PingFang-SC-Bold;
	font-size: 18px;
	color: #333333;
}
.collegedetail-input>div,.collegedetail-mbgs>div{
	display: inline-block;
}
.collegedetail-input .collegedetail-input-img{
	vertical-align: top;
	margin-top: .3em;
}
.collegedetail-input .collegedetail-input-img img,.collegedetail-mbgs .collegedetail-mbgs-img img{
	width: 1.1em;
	height: 1.1em;
	margin: 0 .67em;
	float: left;
}
.collegedetail-input .collegedetail-input-nr{
	width: 80%;
}
.collegedetail-mbgs .collegedetail-mbgs-img img{
	height: .9em;
}
.collegedetail-mbgs .collegedetail-mbgs-wc p{
	background: #3da8f5;
	color: #ffffff;
	font-size: 13px;
	border-radius: 17px;
	padding: .1em .5em;
}
.collegedetail-mbgs .next{
	float: right;
}
.collegedetail-mbgs .next img{
	width: .5em;
	height: .8em;
	margin-right: .67em;
}
</style>