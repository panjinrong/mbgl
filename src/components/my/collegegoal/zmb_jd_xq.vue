<template>
    <div class="collegedetail-mbrj" >
    	<h3>目标日记</h3>
    	<div class="collegedetail-mbrj-msg " v-for="(list,index) in data">
    		<div><p>{{list.rq}}</p></div>
	        <transition-group name="slide-fade">
	          <div  :key="'a'+index">
	            <div class="msg-xq flex"  v-for="(item,i) in list.czjl" v-show="i<show[index].num">
	                <div style="flex: 0 0 45px;"><p>{{item.time}}</p></div>
	                <span>
	                			<a></a>
	                    <img src="./../../../assets/image/XQ-dot.png">
	                </span>
	                <div><p>{{item.name}}{{item.type}}</p></div>
	            </div> 
	          	<div class="msg-xq-ls msg-xq flex" @click="update(index)" v-show="!show[index].show">
					<div style="flex: 0 0 45px;" v-show="data[index].czjl.length>2"><p>&nbsp;</p></div>
					<span v-show="data[index].czjl.length>2">
		    			<a></a>
						  <img src="./../../../assets/image/XQ-dot1.png">
					</span>
					<div v-show="data[index].czjl.length>2"><p>{{data[index].czjl.length-2}}条操作</p></div>
				</div>
	            <div class="msg-xq-ls  msg-xq flex" @click="updatedown(index)" v-show="show[index].show">
	                <div style="flex: 0 0 45px;"><p>&nbsp;</p></div>
	                <span>
	                			<a></a>
	                    <img src="./../../../assets/image/XQ-dot2.png">
	                </span>
	                <div><p>收起</p></div>
	            </div>
	          </div>
          </transition-group>
	    </div>
	</div>
</template>

<script>
export default {
	props:['id'],
	data() {
		return{
        	updatemsg:false,
        	data:'',
        	length:'',
        	show:[],
		}
	},
	methods:{
	    update(index) {
	    	this.show[index].num=this.data[index].czts;
	    	this.show[index].show=true
	    },
	    updatedown(index) {
	    	this.show[index].num=2;
	    	this.show[index].show=false
	    },
	},
	created(){
		console.log('ju:'+this.id);
	},
	mounted(){
		var _this=this;
	    this.$http.get('http://192.168.0.56:8081/target/target_diary?userid=987654321&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&id='+this.id+'&pagenow=1&pagesize=3').then(res=>{
		 	_this.data=res.data.content
		 	_this.data.forEach(function(r,i){
		 		_this.show.push({'show':false,'num':2})
		 	})
            console.log(_this.show);
        })
	}
}
</script>

<style>
.collegedetail-mbrj{
	background: white;
	margin-top: .4em;
	padding-left: .5em;
} 
.collegedetail-mbrj h3{
	font-size: 17px;
	color: #555555;
	border-bottom: 1px solid #eeeeee;
	line-height: 2.5em;
}
.collegedetail-mbrj-msg>div{
	line-height: 2.5em;  
}
.flex{
    display: flex;
    height: 2em;
    line-height: 2em;
}
.collegedetail-mbrj-msg>div span,.collegedetail-mbrj-msg>div p{
	display: inline-block;
    line-height: 1.5em;
}
.collegedetail-mbrj-msg>p{
  font-size: 14px;
  color: #555555;
  padding: .785em  0 .8em 0;
}
.collegedetail-mbrj-msg .msg-xq span{
	padding: 0 .15em;
    /*border-left: 1px solid #3da8f5;*/
}
.collegedetail-mbrj-msg .msg-xq span>img{
	width: .7em;
	padding: 0 .1em;

    /*margin-left: -.65em;*/
}
.collegedetail-mbrj-msg .msg-xq-ls span{
	padding:0;
}
.collegedetail-mbrj-msg .msg-xq-ls span>img{
	width: 1em;
}
</style>