 <template>
 <div id="personal-wrapper">
		<div class="personal-list">
			<ul>
	 			<li v-for="(list,index) in data" @click.stop="personalgoalDetail(list.pid,list.mblx)">
			 		<mt-cell-swipe :right="[{ content: '放弃', style: { background: 'red', color: '#fff' }, handler: () =>pass(list.pid)}]" ref="shetuan"> 
		 					<div class="desc" :class="yxj(index)">&nbsp;</div>
	 					<div>
					 		<div class="addlst-title">
					 			<p>属于目标：<span>{{list.title}}</span></p>
					 		</div>	
					 		<div class="bottom">
		 					<div class="img-personal"><img src="./../../assets/image/xk.png"></div>
		 					<div class="msg-personal"> 
								<h3>{{list.mc}}</h3>
								<a>
									<img :src="list.faceaddress.split(',')[0]" >
								</a>
								<p>
									<span>{{list.jzsj}}截止</span>
									<span><img src="./../../assets/image/mb.png"></span><font>{{list.zmb}}</font>
									<span><img src="./../../assets/image/naozhong.png"></span>
								</p>
			 				</div>
			 				</div>
		 				</div>
	 				  </mt-cell-swipe> 
	 			</li>
			</ul>
		</div>
		<v-routers></v-routers>
 </div>
</template>

<script>
import routers from '../routers'
export default {
	data() {
		return{
			jjqk:'非常紧急',
			data:'',
			zzmb:'',
			mbxq:'',
			mblx:'',
		}
	},
	created() {
		var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_wdmblb?userid=11204050220&mbly=1&pagenow=1&pagesize=11&mblx=1&title=%E5%8D%8F%E5%90%8C%E7%9B%AE%E6%A0%87&&ticket=B110E55DEECA941AEFDCF9CE72C2789D&function_id=20150101').then(res=>{
            _this.data=res.data.content;
            // console.log(_this.data);
        })
	},
	methods:{
		leftButtonHandler(evt) {  
       		console.log(123);  
	    },
	    personalgoalDetail(id,mblx) {
	    	if(mblx===1){
	    		this.mblx='zzmb'
	    	}else{
	    		this.mblx='xtmb'
	    	}
	    	var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_mbxq?userid=11204050220&function_id=20150101&ticket=7A459E71400C19A4A813994B79BC4E41&id=fa8dc10a4b6e4212ad308a5e5eb37496').then(res=>{
            _this.mbxq=res.data.content;   
      		this.$router.push({path:'/collegegoal/personaldetail_xq',query:{data:JSON.stringify(this.mbxq),mblx:this.mblx,id:id}});
        	})
	    },
	     pass(id) {
	    	console.log(id);
            this.$http.get('http://192.168.0.101:8081/target/target_fqmb?userid=1500654&function_id=20150101&ticket=06707289551C6223FB9E6868658AECAE&id=98765432111').then(res=>{
	            console.log(res.data);
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
#personal-wrapper #routers .home-routers > a:nth-child(1){
	color: #3da8f5!important;
 }
.header{
	height:5.85em;
	background: #90CAF3;
	overflow: hidden;
}
.header>span{
	float: right;
	padding: .7em;
}
.header>span img{
	width: 1em;
	height: 1em;
}
#personal-wrapper{
	text-align: left;
	background: #f7f7f7;
    margin-bottom: 3.5em;
    position: absolute;
    width: 100%;
}
.personal-list ul li{
	margin:.69em .75em 0;
	border-bottom: 1px solid #eeeeee;
	border-radius: 6px;
	background: white;
    width: calc(100% - 1.38em);
	/* overflow: hidden; */
}
.personal-list .desc{
	/*background: #ff6f7d;*/
	width: .425em;
	height: 5em;
	margin:0;
	top: 0;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	vertical-align: top
}
#personal-wrapper .addlst-title{
	margin:0 1em .5em;
	padding: 0;
}
#personal-wrapper .addlst-title p{
	background: #f2f2f2;
	font-family: PingFang-SC-Medium;
	font-size: 12px;
	color: #999999;
	display: inline-block;
	padding: .2em .6em .2em;
	border-radius: 6px;
}
.bottom{
	display: flex;
}
.personal-list ul li>div{
	display: inline-block;
	margin:.69em .625em;
}
.personal-list .img-personal{
	width:1.35em;
	height: 1em;
	vertical-align: top;
    margin:0 1em 0; 
}
.personal-list .img-personal img{
	width: 100%;
	height: 100%;
}
.personal-list .msg-personal h3{
	font-family: PingFang-SC-Bold;
	font-size: 15px;
	color: #555555;
	padding-top: .2em;
    width: 196px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
}
.personal-list .msg-personal a {
	float: right;
	margin-top: -.1em;
}
.personal-list .msg-personal a img{
	width: 1.1em;
	height: 1.1em;
	border-radius: 50%;
	margin-right: .5em;
}
.personal-list .msg-personal p{
	display: inline-block;
	font-family: PingFang-sc-Regular;
	font-size: 11px;
	color: #999999;
}
.personal-list .msg-personal p span{
	display: inline-block;
	vertical-align: middle;
	margin-right: .67em;
}
.personal-list .msg-personal p font{
	font-family: PingFang-sc-Regular;
	font-size: 12px;
	color: #9e9e9e;
	vertical-align: middle;
	margin-left: .8em;
}
.personal-list .msg-personal p span img{
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
#personal-wrapper .mint-cell-swipe-button {
   line-height: 80px!important;
   padding: 0 .5em;
}
</style> 


