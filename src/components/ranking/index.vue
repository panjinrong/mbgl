<template>
  <div id="ranking">
    <v-routers></v-routers>
  	<div class="ranks">
	  <div class="rank_routes">
	  	<div @click="toactive('周榜',$event)"><a class="toactive">周榜</a></div>
	    <div @click="toactive('月榜',$event)"><a>月榜</a></div>
	    <div @click="toactive('总榜',$event)"><a>总榜</a></div>
	  </div>
	</div>
   	  <v-ranknr :data="data" v-if="showContent"></v-ranknr>
  </div>
</template>

<script>
import axios from 'axios'
import routers from '../routers'
import ranknr from './ranking'
export default {
  name: 'ranking',
  data(){
  	return{
  		data:"",
  		showContent:false,
  		info:""
  	}
  },
  created(){
  	this.getData('周榜')
  },
  components:{'v-routers':routers,'v-ranknr':ranknr},
  methods:{
  	toactive:function(w,e){
  		this.getData(w);
  		if(e.target.tagName == 'A' || e.target.tagName == 'a'){
  			if(!this.hasClass(e.target,'toactive')){
  				this.delClass(document.getElementsByClassName('toactive'),'toactive');
  				this.addClass(e.target,'toactive');
  			}
  		}else{
  			if(!this.hasClass(e.target.childNodes[0],'toactive')){
  				this.delClass(document.getElementsByClassName('toactive'),'toactive');
  				this.addClass(e.target.childNodes[0],'toactive');
  			}
  		}
  	},
  	getData:function(type){
  	   var _this = this;
  	   _this.data = new Promise(function(resolve) {
  	   	   axios({
  	   	   	 methods:'post',
             url:'/api/inform/getRank?time='+type,
             params: _this.info
  	   	   }).then(function(res){
  	   	   		var d = res.data;
		  	   	if(d.code == "40001"){
		  	   		_this.showContent = true;
		  	   		resolve(d.content);
		  	   	}
		  	})
  		});
  	},
//原生js 赠删class
  	delClass:function(e,cls){
  		for(var i=0;i<e.length;i++){
  			if (this.hasClass(e[i],cls)) {  
		        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
		        e[i].className = e[i].className.replace(reg, ' ');  
    		}
  		}
  	},
  	hasClass:function(obj,cls){  
  		var re;
  		if(obj.className){
  			re = obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  		}
    	return re;
	},
	addClass:function(obj,cls) {  
	    if (!this.hasClass(obj,cls)) obj.className += " " + cls;  
	} 
	}
}
</script>

<style>
#ranking{
	height:100%;
	background: #41a7fc;
}
.ranks{
	position: fixed;
	width: 100%;
	background-color: #41a7fc;
	z-index: 999;
}
.rank_routes{
	height:2.75em;
	position: relative;
/*	border-bottom: 1px solid #afffff;
*/}
.rank_routes::after{
	content: "";
	display: block;
	position: absolute;
	height:1px;
	width: 200%;
	border-bottom: 1px solid #54b0fc;
	bottom:0em;
	transform-origin: 0 0;
    transform: scale(0.5, 0.5);
    box-sizing: border-box;
}
.rank_routes > div{
	height:2.75em;
	line-height: 2.75em;
	width:calc(33.33% - 1em);
	margin:0em .5em;
	float: left;
	text-align: center;
}
.rank_routes > div:first-child{
	width:calc(33.33% - 2em);
	margin-left: 1.5em;
}
.rank_routes > div:last-child{
	width:calc(33.33% - 2em);
	margin-right: 1.5em;
}
.rank_routes a{
	display: inline-block;
	position: relative;
	height: 2.75em;
	line-height: 2.75em;
	text-decoration: none;
	color:#0272a2;
}
.rank_routes a.toactive::after{
	content: "";
	display: inline-block;
	position: absolute;
	background: #ffffff;
	width:1.375em;
	height:.125em;
	bottom:.2em;
	left:50%;
	margin-left: 1px;
	border-radius: .4em;
	transform: translate(-50%,0);
	z-index: 999;
}
.rank_routes a.router-link-active{
	color:#ffffff!important;
}
</style>
