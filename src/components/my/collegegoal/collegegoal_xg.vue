<template>
    <div id="collegedetail-xg-wrapper">
  	    <div class="collegedetail-mbsz">
  	  	 	  <div class="setTitle">
    	  	 		  <img :src="JSON.parse(mbxq)[0].fzr_faceaddress">
    	 			    <h4>{{JSON.parse(mbxq)[0].fzr}}</h4>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
    	  	 	</div>
    	  	 	<div class="setTime" @click="showData()" >
        	 			<img src="./../../../assets/image/Set.png">
        	 			<p><input type="" name="" v-model="timeshow" readonly="" :placeholder="JSON.parse(mbxq)[0].jzsj"></p>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
    	  	 	</div>
            <!-- 截止时间弹框 -->
            <v-settime  :gjdid="JSON.parse(mbxq)[0].id" v-show="show" @child-info="setTimes1" @child-time="getTime" ref="childMethod"></v-settime> 
    	  	 	<div class="setJj"  @click="mbyxj()">
                <img v-if="lx===1"  src="./../../../assets/image/Priority.png">
                <img v-else-if="lx===2" src="./../../../assets/image/Priority2.png">
                <img v-else="lx===3" src="./../../../assets/image/Priority1.png">
      	 			  <p v-if="lx===1">普通</p>
                <p v-else-if="lx===2">紧急</p>
                <p v-else="lx===3">非常紧急</p>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
    	  	 	</div>
    	  	 	<div class="setEndtime" @click="endtimeShow(JSON.parse(mbxq)[0].id)">
      	  	 		<img src="./../../../assets/image/Remind.png">
      	 			  <p>设置提醒</p>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
    	  	 	</div>
    	  	 	<div class="addother" @click="cyzShow(JSON.parse(mbxq)[0].id)" v-if="mblx==='xtmb'">
      	  	 		<img src="./../../../assets/image/touxiang.png">
      	  	 		<p>
        	  	 			<img v-for="(img,i) in JSON.parse(mbxq)[0].cyz_faceaddress.split(',')" :src="img">
      	  	 		</p>
      	  	 		<p>
      	  	 			  <img src="./../../../assets/image/XQ-Plus.png">
      	  	 		</p>
      	  	 		<span>
      	  	 			  <img src="./../../../assets/image/next.png">
      	  	 		</span>
    	  	 	</div>
  	    </div>
        <v-mbrz :id="id"></v-mbrz>
        <v-mbyxj :gjdid="JSON.parse(mbxq)[0].id" ref="setYxj" @getYxj="getMbYxj"></v-mbyxj> 
    </div>
</template>

<script>
import mbyxj from './mbyxj'
import settime from './set_times'
import mbrz from './zmb_jd_xq'
export default {
  props:['mbxq','mblx','id'],
  components:{
    'v-settime':settime,
    'v-mbrz':mbrz,
    'v-mbyxj':mbyxj
  },
  data() {
    return{
      mbyxjShow:false,
      elements:{},
      li:[],
      lx:JSON.parse(this.mbxq)[0].yxj_id,
      show:false,
      timeshow:'',
      settimeshowevent:1,
      cyzList:''
    }
  },
  // watch:{
  //   lx:'getMbYxj'
  // },
  methods:{
    mbyxj() {
      this.mbyxjShow=true;
      this.$refs.setYxj.open();
    },
    cancelHide() {
      this.mbyxjShow=false;
    },
    completeHide() {
      this.mbyxjShow=false;
    },
    endtimeShow(id){
      if(this.mblx==='xtmb'){
          this.$router.push({path:'./set_tx_xtmb',query:{id:id}});
      }else{
          this.$router.push({path:'./set_tx',query:{id:id}});

      }
    },
    cyzShow:function(id){
      var _this=this;
      this.$http.get('http://192.168.0.101:8081/target/target_mbrycylb?userid=1500654&function_id=20150101&ticket=06707289551C6223FB9E6868658AECAE&id=987654321').then(res=>{
        _this.cyzList=res.data.content
      this.$router.push({path:'./collegegoal_xg_cyz',query:{cyzList:JSON.stringify(_this.cyzList),id:id}});
        })
    },
    jjqkVal:function(flag) {
      this.li.push(flag);
      this.lx=eval("("+this.li+")")
      if(this.li.length>1){
        this.li.splice(0, 1); 
      }
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
    getMbYxj(mes){
      this.lx=mes;
    },
    showData() {
      this.show=true;
      this.$refs.childMethod.open('picker1')
      // this.$refs[picker].open();
    }
  },
  created() {
    console.log(this.id);
  },
  
}

</script>

<style>
#collegedetail-xg-wrapper{
	text-align: left;
	background: #f7f7f7;
	margin-top: .4em;
}
.collegedetail-mbsz>div{
	padding: .7em 0;
	background: white;
	border-bottom: 1px solid #eeeeee;
}
.collegedetail-mbsz>div{
  height: 1.7em;
  line-height: 1.7em;
}
.collegedetail-mbsz>div>img{
	width: 1.2em;
	height: 1.2em;
	margin: 0 .67em;
	vertical-align: middle;
}
.collegedetail-mbsz>div h4{
	display: inline-block;
	font-size: 16px;
	color: #555555;
}
.collegedetail-mbsz>div p{
	display: inline-block;
	font-size: 13px;
	color: #999999;
}
.msg-xq > div{
  display: inline-block;
  font-size: 13px;
  color: #999999;
}
.collegedetail-mbsz>div p input{
  border:none;
  font-size: 13px;
  color: #999999;
}
.collegedetail-mbsz .setTitle>img,.collegedetail-mbsz .addother p>img{
	width: 2em;
	height: 2em;
	border-radius: 50%;
	vertical-align: middle;
}
.collegedetail-mbsz>div>span{
	display: inline-block;
	float: right;
	width: .5em;
	height: .8em;
	margin-right: .67em;
}
.collegedetail-mbsz>div>span>img{
	width: 100%;
	height: 100%;
}
.collegedetail-mbsz .setTitle>img{
	width: 1.7em;
	height: 1.7em;
	vertical-align: top;
	margin: 0 .47em;
}
/*.picker-wrapper{
  position: relative!important;
  height:calc(100% - 100px);
}
.picker-wrapper .bottom-content{
  margin-top:-17.5em;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding:1em;
  background: white;
 }  
 .picker-wrapper .top-content{
  text-align: center;
  background: rgba(0,0,0,0);
  height:73%; 
  width: 100%;
 } 
.picker-wrapper .top-content .top-content-title{
    position: absolute;
    bottom:7.14em;
    width: 100%;
    padding:1em 1em 0;
    background: white;
    box-sizing: border-box;
    z-index: 999;
}
 .picker-wrapper .picker-backdrop{
  position: absolute;
  height: 50% !important;
  bottom: 0!important;
 }
  .picker-wrapper .cancel{
    background: transparent;
    border:none;
    color:#888888;
    float: left;
  }
.picker-wrapper .complete{
    background: transparent;
    border:none;
    color:#55b2f5;
    float: right;
}
.picker-wrapper .title{
    display: inline-block;
    font-family: PingFang-SC-Bold;
    font-size: 15px;
    font-weight: 600;
    color: #333333;
}*/
.slide{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
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