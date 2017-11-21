<template>
  <div id="collegedetail-wrapper">
  		<div class="banner">
	  		<p @click="Hidedt()"><router-link :to="{path:'/collegegoal/collegegoaldetail-xq',query:{data:mbxq,mblx:mblx}}" >详情</router-link></p>
	  		<p @click="Showdt()"><router-link to="/collegegoal/collegegoaldetail-dt">动态</router-link></p>
	  		<span v-show="fbdt" @click="dtfaShow()">发表动态</span>
  		</div>
  		<router-view></router-view>
	</div> 
</template>

<script>
export default {
	data(){
		return{
			fbdt:false,
			mbxq:this.$route.query.data,
			mblx:this.$route.query.mblx,
			id:this.$route.query.id
		}
	},
	// watch:{
	// 	fbdt:{
	// 		Showdt() {
	// 		this.fbdt=true;
	// 	},
	// 	Hidedt() {
	// 		this.fbdt=false;
	// 	}
	// 	}
	// },
	created(){
		// console.log(this.mbxq);
	},
	methods:{
		Showdt() {
			this.fbdt=true;
		},
		Hidedt() {
			this.fbdt=false;
		},
		dtfaShow() {
			this.fbdt=true;
			this.$router.push('/updataimg');
		}
	}
}
</script>

<style>
#collegedetail-wrapper{
    width: 100%;
}
#collegedetail-wrapper .banner{
    margin: .5em 0 0; 
}
#collegedetail-wrapper .banner p{
	display: inline-block;
}
#collegedetail-wrapper .banner a{
	text-align: center;
	width: calc(100%/2 - .2em);
	font-size: 17px;
	color: #999999;
	margin: 0 1em;
}
#collegedetail-wrapper .banner span{
	font-size: 14px;
	color: #52acfa;
	position: absolute;
    right: 0;
    top: 0;
    margin: .5em 1em;
}
#collegedetail-wrapper .router-link-active {
	color: #555555 !important;
	border-bottom: 1px solid #555555;
}
</style>