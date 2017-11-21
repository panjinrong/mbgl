<template>
  <div class="addzmb-wrapper" >
 		<div class="addzmb-title">
 			<input type="text" name="" placeholder="目标名称" maxlength="20" v-model="mbmc">
 		</div>
 		<div class="zddlist">
 			<ul>
 				<li>
 					<img src="./../../../assets/image/Set.png">
 					<div  @click="showData()">
	 					<input type="text" name="" placeholder="设置截止时间" readonly="" v-model="timeshow" >
	 					<span>
	 						<img src="./../../../assets/image/next.png">
	 					</span>
 					</div>
 				</li>
 				<li @click="addzmbBz()" :message="msg">
 					<img src="./../../../assets/image/Remarks.png">
 					<div>
	 					<p v-if="editText">{{editText}}</p>
	 					<p v-else="">添加备注</p>
	 					<span>
	 						<img src="./../../../assets/image/next.png">
	 					</span>
 					</div>
 				</li>
 				<li @click="mbfxShow()">
 					<img src="./../../../assets/image/mb.png">
 					<div>
 						<input type="text" name="" placeholder="目标类型" readonly="" v-model="mbfxVal" >
	 					<span>
	 						<img src="./../../../assets/image/next.png">
	 					</span>
 					</div>
 				</li>
 				<li @click="setYxj()">
 				    <img v-if="lx===4" src="./../../../assets/image/Priority.png">
 					<img v-else-if="lx===3"  src="./../../../assets/image/Priority.png">
 					<img v-else-if="lx===1" src="./../../../assets/image/Priority1.png">
 					<img v-else="lx===2" src="./../../../assets/image/Priority2.png">
 					<div>
	 					<p v-if="lx===4">设置优先级</p>
	 					<p v-else-if="lx===1" class="desc1">非常紧急</p>
		                <p v-else-if="lx===2" class="desc2">紧急</p>
		                <p v-else="lx===3" class="desc3">普通</p>
	 					<span>
	 						<img src="./../../../assets/image/next.png">
	 					</span>
 					</div>
 				</li>
 			</ul>
 		</div>
 		<!-- <v-yxj ></v-yxj> -->
 		<div class="addzmb-button" @click="onback()">
	 		<button>完成</button>
 		</div>
		<!-- 添加备注-->
		  <div class="addzmb-bz-wrapper" v-show="addedit">
		  		<div class="zmbbz">
			 		<textarea placeholder="添加备注" ref="textareaTxet" v-model="editText"></textarea>
		  			<p><span>{{editText.length}}</span>-500</p>
		  		</div>
		  		<div class="zmb-button">
		  			<button @click="tjbjChild()">确定</button>
		  		</div>
		  </div> 

		 <!-- 优先级 -->
        <div id="mbyxj-wrapper" v-show="yxj" >
          <div class="mbyxj-content">
            <div class="mbyxj-title">
              <button class="cancel"  @click="cancelHide()">取消</button>
              <span>优先级</span>
              <button class="complete" @click="completeHide()">完成</button>
            </div>
            <div class="mbyxj-jb" v-show="yxj" >
              <ul ref="ul">
                <li data-id="1" @click="jjqkVal(1)">
	                <img src="./../../../assets/image/Priority1.png">
	                <span>非常紧急</span>
	                <a v-if="lx===1">
	                	<img src="./../../../assets/image/Plus-Hook.png">
	           		</a>
                </li>
                <li data-id="2" @click="jjqkVal(2)">
                	<img src="./../../../assets/image/Priority2.png">
	                <span>紧急</span>
	                <a  v-if="lx===2">
	                	<img src="./../../../assets/image/Plus-Hook.png">
	           		</a>
                </li>
                <li data-id="3" @click="jjqkVal(3)">
	                <img src="./../../../assets/image/Priority.png">
	                <span>普通</span>
	                <a  v-if="lx===3">
	                	<img src="./../../../assets/image/Plus-Hook.png">
	           		</a>
                </li>
              </ul>
            </div>
          </div>
        </div> 
        <!-- 截止时间弹框 -->
        <v-settime  v-show="show" @child-info="setTimes1" @child-time="getTime" ref="childMethod"></v-settime> 
        <div class="mbfx_wrapper" v-show="mbfx">
        <div class="mbfx" >
        	<div class="btn">
        		<button @click="mbfxHide()">取消</button>
        		<span>目标类型</span>
        		<button @click="mbfxHide()">确定</button>
        	</div>
			<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
        </div>
        </div>
  </div>
</template>

<script>
import mbyxj from './mbyxj'
import settime from './set_times'
export default {
	data() {
		return {
			yxj:false,
			addedit:false,
			mbmc:'',
			msg:'qwertyuio',
			editText:'',
			li:[],
      		lx:4,
      		timeshow:'',
	        show:false,
	        mbfx:false,
	        mbfxVal:'',
	        mblx:'',
            slots: [
	        {
	          // flex: 1,
	          values: ['自主目标', '协同目标',],
	          className: 'slot1',
	          textAlign: 'center'
	        },
	      ]

		}
	},
	watch:{
		editText:{
			handler:function(curVal,oldVal){
    		}
		},
		deep:true
	},
	methods:{
		settxShow:function(index){
			this.$router.push('./set_tx');
		},
		addzmbBz:function(){
			this.addedit=true;
			//this.$router.push('./addzmb_bz');
		},
		setYxj:function(){
			this.yxj=true;
		},
		cancelHide() {
			this.yxj=false;
		},
		completeHide() {
			this.yxj=false;
		},
		addzmbShow:function(){
			this.$router.push('./collegegoal_addzmb');
		},
		showtjbjPatent:function(data){
			this.msg=data;
			// console.log(data);
		},
		onback() {
			var targetContent={};
			targetContent.mbmc=this.mbmc;
			targetContent.jzsj=this.timeshow;
			targetContent.bz=this.editText;
			targetContent.yxj=this.lx;
			targetContent.mblx=this.mblx
			targetContent.mbly=''
			targetContent.cjz=''
			targetContent.fzr=11204050220;
			targetContent.pid='';
			targetContent.gjdid='';
			// console.log(arr)
			// {"mbmc":"测试","jzsj":"2017-11-10 12：00","bz":"备注","yxj":"1","mbly":"gr","mblx":"1","cjz":"","fzr":"","pid":"","gjdid":""}
			this.$http.get('http://192.168.0.56:8081/target/target_create?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&targetContent='+JSON.stringify(targetContent)).then(res=>{
			      // _this.data=res.data.content
			      console.log(_this.data)
			})
			this.$router.go(-1);
		},
		tjbjChild() {
			this.addedit=false;
		},
		jjqkVal:function(flag) {
	        this.li.push(flag);
	        this.lx=eval("("+this.li+")")
		       if(this.li.length>1){
		        this.li.splice(0, 1); 
		       }
	        // console.log(this.lx);
	    },
	    showData() {
		    this.show=true;
      		this.$refs.childMethod.open('picker1')
	    },
	    setTimes1(mes) {
	      this.settimeshowevent=mes; 
	      if(this.settimeshowevent===2){
	        this.show=true;
	      }else{
	        this.show=false;
	      }
	    },
	    getTime(mes) {         //获取滑动时间
	      this.timeshow=mes;
	    },
	    onValuesChange(picker, values) {	    	
	    	this.mbfxVal=values[0];
			if(this.mbfxVal==='自主目标'){
				this.mblx=1
			}else{
				this.mblx=2
			}
	    },
	    mbfxHide(){
	    	this.mbfx=false;
	    },
	    mbfxShow() {
	    	this.mbfx=true;
	    }
	},
	components:{
		'v-yxj':mbyxj,
		'v-settime':settime 
	}
}
</script>

<style>
.addzmb-wrapper{
	text-align: left;
	background: #f7f7f7;
	min-height: 100%;
}
.addlst-title{
	background: white;
	padding: .8em .9em 0;
}
.zddlist{
	background: white;
	padding: 0 1em;
}
.addzmb-user {
	background: white;
	line-height: 2em;
}
.addzmb-user div{
	margin: 0 1em;
	border-bottom: 1px solid #eeeeee;
}
.addzmb-title{
	background: white;
	height: 3em;
	/* padding: .8em 0; */
}
.addzmb-title input {
	width: 100%;
	height: 100%;
	font-size: 17px;
	padding: 0 1em;
	color:#999999;
	border:none;
	border-bottom: 1px solid #eeeeee;
	box-sizing: border-box;
} 
.addlst-title p{
	background: #f2f2f2;
	font-family: PingFang-SC-Medium;
	font-size: 12px;
	color: #999999;
	display: inline-block;
	padding: .1em .5em;
	border-radius: 6px;
}
.addzmb-user img{
	width: 1.5em;
	height: 1.5em;
	border-radius: 50%;
}
.addzmb-user span{
	display: inline-block;
	font-size: 16px;
	color: #555555;
	vertical-align: top;
	margin-top: -.2em;
}
.zddlist ul li{
	line-height: 3em;
	height: 3em;
}
.zddlist ul li>img{
	width: .8em;
	height: .8em;
	vertical-align: top;
    margin-top: 1.15em;
}
.zddlist ul li div{
	display: inline-block;
	border-bottom: 1px solid #eeeeee;
	width: 93.5%;
	height:100%;
}
.zddlist ul li div input,.zddlist ul li div p,.zddlist ul li div select{
	font-size: 13px;
	color: #999999;
	width: 88%;
	height: 90%;
	border:none;
}
.zddlist ul li div p{
	display: inline-block;
}
.zddlist ul li div span{
	float: right;
}
.zddlist ul li div span>img{
	width: .5em;
	height: .8em;
}
.addzmb-button{
	box-sizing: border-box;
	width: 100%;
	margin-top: 1.67em;
}
.addzmb-button button{
	width: 96%;
	margin: 0 2%;
	font-size: 18px;
	color: #ffffff;
	height: 2.56em;
	padding: .5em 0 .2em;
	border-radius: 8px;
	background: #55b2f5;
	border:none;
}
.desc1{
	color: #ff6f7d !important;
}
.desc2{
	color: #ffc107 !important;
}
.desc3{
	color: #c5d2e1;
}
/* 添加备注 */
.addzmb-bz-wrapper{
    text-align: left;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: white;
}
.zmbbz{
	height: 30%;
}
.zmbbz textarea{
	width: 100%;
	height: 100%;
	border:none;
	resize: none;
	font-size: 13px;
	padding: .9em;
	box-sizing: border-box;
}
.zmbbz p{
	text-align: right;
	padding: .8em;
	color: #999999;
	font-size: 14px;
	border-bottom: 1px solid #eeeeee;
}
.zmb-button{
	width: 98%;  
    margin: 4em 1%;
	text-align: center;
}
.zmb-button button{
	color: #ffffff;
	font-size: 18px;
	border:none;
	width: 96%;
	margin: 0 2%;
	height: 2.56em;
	padding: .5em 0 .2em;
	background: #55b2f5;
	border-radius: 6px;
}

#mbyxj-wrapper{
	width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
	text-align: left;
    border-top: 1px solid #eeeeee;
    position: fixed;
    top: 0;
}
.mbyxj-content{
	width: 100%;
	background: #ffffff;  
	position: absolute;
    bottom: 0;
	padding: 0 .87em;
	box-sizing: border-box;
}
.mbyxj-content .mbyxj-title{
	text-align: center;
	font-family: PingFang-SC-Bold;
	height: 3.5em;
	line-height: 3.5em
}
.mbyxj-content .mbyxj-title span{
	font-size: 18px;
	color: #333333;
}
.mbyxj-content .mbyxj-title button{
	background: white;
	border:none;
	font-size: 14px;
	line-height: 3.5em;
}
.mbyxj-content .mbyxj-title button.cancel{
	color: #888888;
	float: left;
}
.mbyxj-content .mbyxj-title button.complete{
	color: #3da8f5;
	float: right;
}
.mbyxj-content .mbyxj-jb ul li{
	height: 2.5em;
	line-height: 2.5em;
	border-bottom: 1px solid #eeeeee;
}
.mbyxj-content .mbyxj-jb ul li p{
	display: inline-block;
	font-size: 18px;
}
.mbyxj-content .mbyxj-jb ul li img{
 	width: 1.3em;
 	margin-right: .87em;
 	margin-top: .5em;
    vertical-align: top;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(1) p{
	color: #ff7f6d;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(2) p{
	color: #ffc107;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(3) p{
	color: #c5d2e1;
}
.mbyxj-content .mbyxj-jb ul li a{
  float: right;
}
.mbyxj-content .mbyxj-jb ul li a img{
  width: 1em;
  margin-top: .8em;
}
.mbfx .picker-slot-wrapper{
    height: 170px !important;
    margin-top: 10px!important;
    transform: translate(0px, 36px) translateZ(0px);
}
.mbfx .picker-center-highlight{
    margin-top: -10px!important;
}
.mbfx .picker-slot.picker-slot-center{
    width: 100%;
    text-align: center !important;
    /*padding-left: 50%;*/
    /*margin-left: -100px;*/
}
.mbfx_wrapper{
	position: absolute;
	top: 0;
	left: 0;   
	width: 100%;
    height: 100%;
	background: rgba(0,0,0,.5);
}
.mbfx{
	position: absolute;
	width: 100%;
	bottom: 0;
	background: white;
}
.mbfx .btn {   
    height: 2.4em;
    line-height: 2.4em;
	text-align: center;
	border-bottom: 1px solid #eeeeee;
}
.mbfx .btn span{
	display: inline-block;
}
.mbfx .btn button{
	background: none;
	border:none;
	font-size: 14px;
	padding: .75em 1em;
}
.mbfx .btn button:nth-child(1){
	color: #999999;
	float: left;
}
.mbfx .btn button:nth-child(3){
	color: #3da8f5;
	float: right;
}
</style>