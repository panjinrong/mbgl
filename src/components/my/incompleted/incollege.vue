<template>
  <div id="wwc-wrapper">
	 <div class="wwc-list" :style="{'-webkit-overflow-scrolling': scrollMode}">
		<mt-loadmore :bottom-method="handleBottomChange" :top-method="handleTopChange" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
			<ul>
				<li v-for="(list,index) in data" @click="completeXq(list.id)">
				<p>{{list.bz}}</p>
					<span>
						<img :src="list.faceaddress">
					</span>
				</li>
			</ul>
		</mt-loadmore>
	</div> 
  </div>
</template>

<script>
export default {
	data() {
		return{
			data:'',
	  		allLoaded:false,
	  		scrollMode:"auto" ,
	  		pagenow:1,
	  		pagesize:5,
	  		mbxq:'',
		}
	},
	methods:{
		completeXq(id){
			console.log(id);
			var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_mbxq?userid=11204050220&function_id=20150101&ticket=7A459E71400C19A4A813994B79BC4E41&id='+id).then(res=>{
            _this.mbxq=res.data.content;   
             console.log(_this.mbxq);
			this.$router.push({path:'./../collegegoal/completedgoal-xq',query:{data:JSON.stringify(this.mbxq),id:id}});
        })
       },
		handleTopChange:function(status) {
			var _this = this;
			if(_this.pagenow>1){
				_this.pagenow=_this.pagenow-1;
				_this.pagesize=_this.pagesize-5;
				this.$http.get('http://192.168.0.56:8081/target/target_mbwwclbxy?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&pagenow='+_this.pagenow+'&pagesize='+_this.pagesize).then(res=>{
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
			_this.pagesize=_this.pagesize+5;
            this.$http.get('http://192.168.0.56:8081/target/target_mbwwclbxy?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&pagenow='+_this.pagenow+'&pagesize='+_this.pagesize).then(res=>{
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
           this.$http.get('http://192.168.0.56:8081/target/target_mbwwclbxy?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&pagenow=1&pagesize=5').then(res=>{
            _this.data=res.data.content;
            console.log(_this.data);
        })
	}
}
</script>

<style>
.wwc-list{
	margin-top: .625em; 
}
.wwc-list ul li{
	font-size: 16px;
	color: #333333;
	text-align: left;
	height: 4.25em;
	line-height: 4.25em;
	margin: .625em .94em 0;
	background: #ffffff;
	padding: 0 .94em;
	border-bottom:1px solid #eeeeee;
	border-radius: 5px;
}
.wwc-list ul li p{
	display: inline-block;
    width: 85%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.wwc-list ul li span{
	display: inline-block;
	float: right;
	width: 1.8em;
	height: 1.8em;
}
.wwc-list ul li span img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
	vertical-align: middle;
}
</style>