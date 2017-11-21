<template>
	<div class="ygkm-wrapper">
		<div class="ygkm">
			<ul>
				<li  v-for="(list,$index) in data"  @click="firstList($index)" >
					<div class="list-xq" :class="{'active-xq':lists[$index].show}" >{{list.xnxq}}
						<span v-if="lists[$index].show"><img style="width:.8em;margin-right:.5em" src="./../../../assets/image/xxjt.png"></span>
						<span v-else=""><img src="./../../../assets/image/next.png"></span>
						<span :class="{'active-ks': km>0}">{{list.jgl}}</span>
					</div>
				<transition name="slide-fade">
					<div class="ygkm-list" ref="items" v-show="lists[$index].show">
						<ul>
							<li  v-for="(item,index) in list.kc" @click="lostXqShow(list.xq,list.xn,item.kcmc)"><a>{{item.kcmc}}<span><img src="./../../../assets/image/next.png"></span></a></li>
						</ul>
					</div>
				</transition>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			km:{
				type:Number,
				default:1,
			}
		},
		data(){
			return{
				dyxq:false,
				data:'',
				lists:[],
				cjfx:''
			}
		},
		methods:{
			lostXqShow:function(xq,xn,kcmc){
				 this.$http.get('http://192.168.0.101:8081/target/school_cjfx?userid=1500654&ticket=06707289551C6223FB9E6868658AECAE&function_id=20150101&xq='+xq+'&xn='+xn+'&kcmc='+kcmc).then(res=>{
	            this.cjfx=res.data.content;
				this.$router.push({path:'/lost_xq',query:{data:this.cjfx}});
	            console.log(this.cjfx);
	        	})
			},
			firstList(index) {
				var _this=this;
				_this.lists[index].show=!_this.lists[index].show;				
			},
		},
		created() {
			var _this = this;
	           this.$http.get('http://192.168.0.101:8081/target/school_cjgk?userid=1500681&function_id=20150101&ticket=06707289551C6223FB9E6868658AECAE&id=fa8dc10a4b6e4212ad308a5e5eb37496').then(res=>{
	            _this.data=res.data.content;
	            _this.data.forEach(function(r,i){
					_this.lists.push({"show":false}) 
					// _this.data[i].xk.forEach(function(res,j){
					// 	_this.lists[i].zlist.push({"shows":false})
					// })
				})

				// console.log(_this.data);
	        })
		},
	}
</script>
<style>
.active-ks{color: red!important;}
.active-xq{
	color: #f8f8f8 !important;
	background: #65BFFF !important;
	font-size: 17px !important;
	font-weight: bold;
}
.ygkm-wrapper{
	background: #f7f7f7;
}
.ygkm{
	text-align: left;
	background: white;
}
.ygkm ul li{
	line-height: 2.3em;
	border-bottom: 1px solid #eeeeee;
	font-size: 15px;
	color: #444444;
	font-family: PingFang-SC-Bold;
}

.list-xq{

	padding:.37em .8em .38em .86em;
}
.ygkm ul li{
	font-size: 15px;
	color: #444444;
}
.ygkm ul li span{
	font-size: 14px;
	color: #f1f1f1;
}
.ygkm ul li span{
	display: inline-block;
	width: .5em;
	float: right;
	margin-left: .5em;
}
.ygkm ul li span img{
	width: 100%;
	vertical-align: middle;
}
/* .ygkm-list{
	display: none;
} */
.ygkm-list ul li{
	font-size: 15px;
	color: #333333;
	background: #eeeded;
	padding:.27em .8em .38em .76em;
	border-bottom: 1px solid #dddddd;
}
.ygkm-list ul li a{
	display: block;
}
.ygkm-list .router-link-active{
	 color:#333333 !important;
}
.slide-fade-enter-active {
  transition: all .2s ease-in;
}
 .slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} 
.slide-fade-enter, .slide-fade-leave-active {
  padding-bottom: 1px; 
  opacity: 0;
}
</style>