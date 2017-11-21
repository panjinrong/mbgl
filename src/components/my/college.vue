<template>
  <div class="college-wrapper">
 		<div class="college-list"  :style="{'-webkit-overflow-scrolling': scrollMode}">
	 		<mt-loadmore :bottom-method="handleBottomChange" :top-method="handleTopChange" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
	 			<ul>
	 				<li v-for="(list,index) in data" @click.stop="collegegoalDetail(list.pid)">
		 				<mt-cell-swipe  :right="[{ content: '放弃', style: { background: 'red', color: '#fff' }, handler: () =>pass(list.pid)}]" ref="shetuan">
		 					<div class="desc" :class="yxj(index)">&nbsp;</div>
		 					<div class="img-college"><img src="./../../assets/image/xk.png"></div>
		 					<div class="msg-college"> 
								<h3>{{list.mc}}</h3>
								<a>
									<img v-for="(item,$index) in list.img" :src="item.tx" >
								</a>
								<div class="set">
								<p>
									<span>{{list.jzsj}}截止</span>
									<span><img src="./../../assets/image/mb.png"></span><font>{{list.zmb}}</font>
									<span><img src="./../../assets/image/naozhong.png"></span>
								</p>
								</div>
		 					</div>
	 					</mt-cell-swipe>
	 				</li>
	 			</ul>
			</mt-loadmore>
 		</div>
 		<v-routers></v-routers>
  </div>
</template>

<script>
import routers from '../routers'
export default {
	data(){
  	return{
  		data:'',
  		allLoaded:false,
  		scrollMode:"auto" ,
  		pagenow:1,
  		pagesize:10,
  		mblx:'xymb',
	    // page:0,
	    // list: [ ],
	    // bottomStatus:'',
	    // topStatus:'',
	    mbxq:''
  	}
  },

  mounted() {
  	this.dataList();
  },
  methods:{
    collegegoalDetail:function(id){
    	var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_mbxq?userid=11204050220&function_id=20150101&ticket=7A459E71400C19A4A813994B79BC4E41&id=fa8dc10a4b6e4212ad308a5e5eb37496').then(res=>{
            _this.mbxq=res.data.content;   
             // console.log(_this.mbxq);
      		this.$router.push({path:'/collegegoaldetail/collegegoaldetail',query:{data:JSON.stringify(this.mbxq),mblx:this.mblx,id:id}});
        })

    },

	handleTopChange:function(status) {
        // this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
      },
    handleBottomChange:function(status) {
    	// this.$refs.loadmore.onBottomLoaded();//加载完成
        // this.bottomStatus = status;
        // console.log("this.bottomStatus = status; "+ status);
      },
    pass(id) {
    	console.log(id);
           this.$http.get('http://192.168.0.101:8081/target/target_fqmb?userid=1500654&function_id=20150101&ticket=06707289551C6223FB9E6868658AECAE&id=98765432111').then(res=>{
            // console.log(res.data);
        })
    },
    yxj(index) {
    	if(this.data[index].yxj===1){
    		return 'desc1'
    	}else if(this.data[index].yxj===2){
    		return 'desc2'
    	}else if(this.data[index].yxj===3){
    		return 'desc3'
    	}else{
    		return 'desc3'
    	}
    },
    dataList(){
    	 var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_wdmblb?userid=11204050220&mbly=2&pagenow='+this.pagenow+'&pagesize='+this.pagesize+'&mblx=1&title=%E5%8D%8F%E5%90%8C%E7%9B%AE%E6%A0%87&&ticket=B110E55DEECA941AEFDCF9CE72C2789D&function_id=20150101').then(res=>{
            _this.data=res.data.content;
            // console.log(_this.data);
        })
    },
  },
  created() {
        // var _this = this;
        //    this.$http.get('http://192.168.0.101:8081/target/target_wdmblb?userid=11204050220&mbly=2&pagenow=1&pagesize=11&mblx=1&title=%E5%8D%8F%E5%90%8C%E7%9B%AE%E6%A0%87&&ticket=B110E55DEECA941AEFDCF9CE72C2789D&function_id=20150101').then(res=>{
        //     _this.data=res.data.content;
        //     // console.log(_this.data);
        // })
	},
  components:{
  	'v-routers':routers
  }
}
</script>

<style>
*{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
ul li{
  list-style: none;
}
#my{
	background: #f7f7f7;
    margin-bottom: 4em;
}
.college-wrapper #routers .home-routers > a:nth-child(1){
	color: #3da8f5!important;
 }
.college-wrapper{
	text-align: left;
	background: #f7f7f7;
    margin-bottom: 3.5em; 
    position: absolute;
    width: 100%;
}
.college-list ul li{
	/*position: relative;*/
	margin:.69em .75em 0;
	border-bottom: 1px solid #eeeeee;
	border-radius: 6px;
	background: white;
	overflow: hidden;
    width: calc(100% - 1.38em);
}
.college-list .desc{
	/*background: white;*/
	width: .425em;
	height: 4em;
	margin:0;
	top: 0;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	vertical-align: top
}
.desc1{
	color: #ff6f7d;
}
.desc2{
	color: #ffc107;
}
.desc3{
	color: #c5d2e1;
}
.college-list ul li>div{
	display: inline-block;
	margin:.69em .625em;
}
.college-list .img-college{
	width:1.2em;
	height: 1em;
	vertical-align: top;
    margin: -1.1em 1em 0;
	/* margin-right: -.2em; */
}
.college-list .img-college img{
	width: 100%;
	height: 100%;
}
.college-list .msg-college{
	width: 100%;
}
.college-list .msg-college h3{
	font-family: PingFang-SC-Bold;
	font-size: 15px;
	color: #555555;
    width: 196px;
	padding-top: .1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
}
.college-list .msg-college a {
	float: right;  
    margin-top: -.1em;
    /*margin-right: 4em;*/
}
.college-list .msg-college a img{
	width: 1.1em;
	height: 1.1em;
	border-radius: 50%;
	margin-right: .5em;
}
.set p{
	display: inline-block;
	font-family: PingFang-sc-Regular;
	font-size: 11px;
	color: #999999;
}
.college-list .msg-college p span{
	display: inline-block;
	vertical-align: middle;
	margin-right: .67em;
}
.college-list .msg-college p font{
	font-family: PingFang-sc-Regular;
	font-size: 12px;
	color: #9e9e9e;
	vertical-align: middle;
	margin-left: .8em;
}
.college-list .msg-college p span img{
	width: 1.1em;
	height: 1.1em;
}

.mint-cell-title{
	display: none!important;
}  
.mint-cell-wrapper{
	padding:0!important; 
	background-image:none!important; 
}
.mint-cell-swipe-button {
    line-height: 65px!important;
    padding: 0 .5em;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
}
.mint-cell-value{
	width: 100% !important;
}
 /*.mint-cell-value>div {
    width: 100%; 
    height: 2.93em;
    padding: 0 .75em;
    line-height: 2.93em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
    float: left;
}*/
</style> 