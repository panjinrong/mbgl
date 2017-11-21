<template>
  <div id="jy-wrapper">
	 <div class="jy-list" :style="{'-webkit-overflow-scrolling': scrollMode}">
		 <mt-loadmore :bottom-method="handleBottomChange" :top-method="handleTopChange" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
		 	<ul>
		 		<li v-for="(list,index) in data">
		 			<div class="photo"><img :src="list.faceaddress"></div>
		 			<div class="msg-list">
		 				<h3>{{list.username}}</h3>
		 				<span> {{list.time}}</span>
		 				<p>为你的<font>{{list.mc}}</font>加油</p>
		 			</div>

		 		</li>
		 	</ul>
	 	</mt-loadmore>
	 </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			data:'',
	  		allLoaded:false,
	  		scrollMode:"auto" ,
	  		pagenow:1,
	  		pagesize:10,
		}
	},
	methods:{
		handleTopChange:function(status) {
			var _this = this;
			if(_this.pagenow>1){
				_this.pagenow=_this.pagenow-1;
				_this.pagesize=_this.pagesize-10;
				this.$http.get('http://192.168.0.101:8081/target/target_dzlb?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&pagenow='+_this.pagenow+'&pagesize='+_this.pagesize).then(res=>{
		            _this.data=res.data.content;
			    	this.$refs.loadmore.onTopLoaded();//加载完成
		            // console.log(_this.data);
		        })
			}else{
			    this.$refs.loadmore.onTopLoaded();//加载完成
			}
        // this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
      	},
	    handleBottomChange:function(status) {
	    	var _this = this;
			_this.pagenow=_this.pagenow+1;
			_this.pagesize=_this.pagesize+10;
            this.$http.get('http://192.168.0.101:8081/target/target_dzlb?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&pagenow='+_this.pagenow+'&pagesize='+_this.pagesize).then(res=>{
	            if(res.data.code==='40001'){
	           		 _this.data=res.data.content;
		  			this.$refs.loadmore.onBottomLoaded();//加载完成
	            }else{
	            	 _this.data=this.data
		  			this.$refs.loadmore.onBottomLoaded();//加载完成
	            }
	            console.log(_this.data);
        	})
	    },
  	},
	mounted(){
		var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_dzlb?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&pagenow=1&pagesize=10').then(res=>{
            _this.data=res.data.content;
            console.log(_this.data);
        })
	}
}
</script>

<style>
#jy-wrapper{
	text-align: left;
}
.jy-list ul li{
	padding: .824em .824em 0;
}
.jy-list ul li>div{
	display: inline-block;
}
.jy-list .photo{
	width: 3.6em;
	height: 3.6em;
}
.jy-list .photo img{
	height: 100%;
	width: 100%;
	border-radius: 5px;
}
.jy-list .msg-list{
	border-bottom: 1px solid #eeeeee;
	width: 80%;
	vertical-align: top;
}
.jy-list .msg-list h3{
	font-family: PingFang-SC-Bold;
	font-size: 17px;
	color: #333333;
	display: inline-block;
	line-height: 1.8em;
}
.jy-list .msg-list span{
	float: right;   
	line-height: 2.4em;
}
.jy-list .msg-list p{
	font-size: 14px;
	color: #333333;
	line-height: 2em;
	padding-bottom: .825em;
}
.jy-list .msg-list p>font{
	color: #3da8f5;
}
.jy-list .msg-list span{
	font-size: 12px;
	color: #b2b2b2;
}
</style> 








