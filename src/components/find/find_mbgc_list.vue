 <template>
  <div class="mbgc-zrxq-wrapper" v-show="show" :style="{'-webkit-overflow-scrolling': scrollMode}">
  <mt-loadmore :bottom-method="handleBottomChange" :top-method="handleTopChange" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
  		<ul  class="zrxq-list">
	  		<li v-for="(list,index) in data">
	  			<div class="list-up-img">
              		<img :src="list.faceaddress">
  				</div>
	  			<div class="zrxq-list-up">
	  				<div class="list-up-msg">
	  					<h4>{{list.mc}}</h4>
	  					<span>{{list.cjrs}}人参加</span>
	  					<v-button :sfjr="list.sfjr" :id="list.id"></v-button>
	  					<p :class="{'activelist':list.bz.length>50}"  @click="toMbxq(list.id)">{{list.bz}}</p>
	  				</div>
	  				<div class="zrxq-list-down">
		  				<p>发布者：<span>{{list.name}}</span></p>
			  			<p>
							<img src="./../../assets/image/shijian.png">
							<span>{{list.cjsj}}</span>
						</p>
		  			</div>
	  			</div>
	  		</li>
  		</ul>
  		</mt-loadmore>
  </div>
</template>
<script>
import button from './button_jion'
import bus from '../eventBus'
export default {
	props:['data'],
	data() {
		return{
			show:true,
	  		allLoaded:false,
	  		scrollMode:"auto" ,
			page:1,
			pagesize:3,
			mbxq:'',
		}
	},
	methods:{
		toMbxq(id){
			// console.log(id)
  			var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_mbxq?userid=11204050220&function_id=20150101&ticket=7A459E71400C19A4A813994B79BC4E41&id='+id).then(res=>{
            _this.mbxq=res.data.content;   
             console.log(_this.mbxq);
			this.$router.push({path:'/find_mbgc_xq',query:{data:JSON.stringify(this.mbxq),id:id}});
            // this.$router.push({path:'./find_mbgc_xq',query:{data:JSON.stringify(this.mbxq),id:id}});
        })
		},
		handleTopChange:function(status) {
			var _this = this;
			if(_this.page>1){
				_this.page=_this.page-1;
				_this.pagesize=_this.pagesize-5;
				this.$http.get('http://192.168.0.56:8081/target/target_mbwwclbgr?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&page='+_this.page+'&pagesize='+_this.pagesize).then(res=>{
		            _this.data=res.data.content;
			    	this.$refs.loadmore.onTopLoaded();//加载完成
		            console.log(_this.data);
		        })
			}else{
			    this.$refs.loadmore.onTopLoaded();//加载完成
			}
        // this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
      	},
	    handleBottomChange:function(status) {
	    	var _this = this;
			_this.page=_this.page+1;
			_this.pagesize=_this.pagesize+5;
            this.$http.get('http://192.168.0.56:8081/target/target_mbwwclbgr?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&page='+_this.page+'&pagesize='+_this.pagesize).then(res=>{
	            if(res.data.code==='40001'){
	           		 _this.data=res.data.content;
		  			this.$refs.loadmore.onBottomLoaded();//加载完成
	            }else{
	            	 _this.data=this.data
					_this.page=_this.page-1;
					_this.pagesize=_this.pagesize-5;
		  			this.$refs.loadmore.onBottomLoaded();//加载完成
	            }
	            console.log(_this.data);
        	})
	    },
	},
	mounted() {
		var _this=this;
		 bus.$on("setSearch",function(msg){
            _this.show=msg;
            console.log('1:'+_this.show);
          });

	    // this.$http.get('http://192.168.0.56:8081/discovery/getTargetSquareZR?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&page=1&pagesize=3').then(res=>{
	    //     _this.data=res.data.content;
	    //   // console.log( _this.data);
	    // })
	},
	components:{
		'v-button':button
	}
}
</script>

<style>
.mbgc-zrxq-wrapper .zrxq-list{
	background: #ffffff;
}
.zrxq-list li{
	margin: 0 .9375em;
	padding: .75em 0;
	border-bottom: 1px solid #eeeeee;
}
.zrxq-list-up,.zrxq-list-up>div,.zrxq-list-up>div h4{
	display: inline-block;
}
.zrxq-list-up>div h4{
	font-family: PingFang-SC-Bold;
	font-size: 17px;
	color: #333333;
	/*margin-right: 1em;*/
    width: 9em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.zrxq-list-down p{
	display: inline-block;
	font-size: 12px;    height: 2em;
    line-height: 2em;
	color: #999999 !important;
}
.zrxq-list-down p:nth-child(2){
	margin-left: 1em;
}
.zrxq-list-down p > img{
	width: 1em;
    vertical-align: top;
    margin-top: .45em;
}
.list-up-msg span{
	font-size: 12px;
	color: #999999;
    vertical-align: top;
    margin-top: .3em;
    display: inline-block;
}
.zrxq-list-up div p{
	font-size: 12px;
	color: #555555;
}
.list-up-img{
	display: inline-block;
	width: 2.94em;
	height: 2.94em;
	margin: 0 .5em .2em 0;
    vertical-align: top;
}
.list-up-msg p{
   margin: .1em 0 0;
}
.activelist{
	position: relative; 
	line-height: 20px; 
	max-height: 40px;
	overflow: hidden;
}
.activelist::after{
	content: "...";
	position: absolute;
	bottom: 0; 
	right: 0; 
	padding-left: 1em;
    margin-right: .2em;
	background: -webkit-linear-gradient(left, transparent, #fff 55%);
	background: -o-linear-gradient(right, transparent, #fff 55%);
	background: -moz-linear-gradient(right, transparent, #fff 55%);
	background: linear-gradient(to right, transparent, #fff 55%);
}
.list-up-img img{
	width: 100%;
	height: 100%;
	border-radius: 5px;  
	vertical-align: bottom;
}
.zrxq-list-up{
	width: calc(100% - 4em);
}
.zrxq-list-up .list-up-msg{
	width: 100%;
}

</style>
