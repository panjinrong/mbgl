<template>
	<div class="mbfl-wrapper">
		<div class="xujh">
			<ul>
				<li v-for="(list,$index) in data" >
					<div class="listkey"  :class="{'active':lists[$index].show}" @click="firstList($index)">
						<p>{{list.xq}}</p>	
						 <span v-if="lists[$index].show"><img style="width:.8em;margin-right:.5em" src="./../../../assets/image/xxjt.png"></span>
						<span v-else><img src="./../../../assets/image/next.png"></span> 
					</div>
					<transition name="slide-fade">
						<ul ref="items" class="firsts" :data-id="$index" v-show="lists[$index].show">
							<li v-for="(listfirst,index) in list.kc"  >
							 	<div class="listfirst" @click="secondList($index,index)">
							 		<p>{{listfirst.kcmc}}</p>
							 		 <span v-if="lists[$index].zlist[index].shows"><img src="./../../../assets/image/xxjt.png"></span> 
									<span v-else><img src="./../../../assets/image/next.png"></span>
							 	</div>
							 	<transition-group name="fade" >
								 	<ul v-show="lists[$index].zlist[index].shows" :key="'a'+index">
								 		<li>
								 			<div class="listsecond">
								 				<p>类别</p>
								 				<span>{{listfirst.kcxz}}</span>
								 			</div>
								 		</li>
								 		<li>
								 			<div class="listsecond">
								 				<p>课时</p>
								 				<span>{{listfirst.xs}}</span>
								 			</div>
								 		</li>
								 		<li>
								 			<div class="listsecond">
								 				<p>学分</p>
								 				<span>{{listfirst.xf}}</span>
								 			</div>
								 		</li>
								 	</ul>
							 	</transition-group>
							</li>
						</ul>
					</transition>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			data:'',
			lists:[],
		}
	},
	methods:{
		firstList(index) {
			var _this=this;
			_this.lists[index].show=!_this.lists[index].show;
		},
		secondList($index,index) {
			var _this=this;
			_this.lists[$index].zlist[index].shows=!_this.lists[$index].zlist[index].shows;
		},
		
	},
	created() {
	},
	mounted(){
		 var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/school_xxjh?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D').then(res=>{
            _this.data=res.data.content;
            _this.data.forEach(function(r,i){
				_this.lists.push({"show":false,"zlist":[]}) 
				_this.data[i].kc.forEach(function(res,j){
					_this.lists[i].zlist.push({"shows":false})
				})
			})
            // console.log(_this.data);
        })
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
.xujh .actives{
	color: #f8f8f8 !important;
	background: #65BFFF !important;
	font-size: 17px !important;
	font-weight: bold;
}
.xujh .active{
	color: #f8f8f8 !important;
	background: #65BFFF !important;
	font-weight: bold;
}
.mbfl-wrapper{
	background: #f7f7f7;
}
.xujh{
	text-align: left;
	background: white;
}
.listkey,.listfirst,.listsecond{
	border-bottom: 1px solid #eeeeee;
	padding:.38em .8em .38em .87em;
}
.listkey p,.listfirst p,.listsecond p{
	display: inline-block;
}
.xujh ul li{
	line-height: 2.3em;
	font-size: 15px;
	color: #444444;
	font-family: PingFang-SC-Bold;
}
.listkey span,.listfirst span{
	display: inline-block;
	width: .5em;
	float: right;
}
.listkey span img,.listfirst span img{
	width: 100%;
	vertical-align: middle;
}
.listfirst{
	background: #f7f7f7;
}
.item ul li{
	font-size: 15px;
	color: #555555;
	font-family: PingFang-SC-Medium;
}
.listsecond{
	background: #f0f0f0;
	border-bottom: 1px solid #dddddd;
}
.item-list ul li{
	font-size: 14px;
	color: #555555;		
}
.listsecond span{
	font-family: PingFang-SC-Medium;
	text-align: right;
	font-size: 14px;
	color: #555555;
	float: right;
}
.slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .2s ease-in;
}
.slide-fade-enter, .slide-fade-leave {
  	opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  	transition: all .3s ease;
}
.fade-enter,.fade-leave{
	opacity: 0;
	transform: translateY(-10px);
}
</style>
