<template>
    <div class="collegegoal-endtime-wrapper">
       <div class="endtime-btx">
           <p>不提醒</p>
           <span>
               <img src="./../../../assets/image/Plus-Hook.png">
           </span>
       </div>
       <v-settime :data="data" :num="num" v-show="settimeshow" @child-info="setTimes1" @child-time="getTime" ref="childMethod"></v-settime> 
       <div class="addtx" @click="txotherShow()">
          <img src="./../../../assets/image/Invitation.png">
          <p>添加提醒</p>
       </div>
       <div class="endtime-txs" v-for="(list,index) in data">
           <mt-cell-swipe  :right="rightButtons">
                <div  @click="setTimes(index)"><label>提醒时间</label> <input class="tx" type="text" readonly="readonly" :placeholder="list.time" ></div>
                <div>
                  <label>提醒事件</label><input class="bz" type="text">
                  <span>
                      <img src="./../../../assets/image/next.png">
                  </span>
                </div>
                <div class="txry" @click="cyzShow()">
                  <label>提醒人员</label>
                  <p>
                    <img src="./../../../assets/image/photo1.jpg">
                    <img src="./../../../assets/image/photo1.jpg">
                    <img src="./../../../assets/image/photo1.jpg">
                  </p>
                  <p>
                      <img src="./../../../assets/image/XQ-Plus.png">
                  </p>
                </div>
            </mt-cell-swipe>
       </div>
     <v-other v-show="false" :data="data"></v-other>  
    </div>
</template>

<script>
import settime from './set_times'
import tx_other from './tx_other'
export default {
  data() {
    return{
      mbyxjShow:false,
      settimeshow:false,
      settimeshowevent:1,
      time:'',
      // gettime:'',
      data:[{mc:'王利军',time:'4月15日11:00'}],
      num:'',
      id:this.$route.query.id
    }
  },
  watch:{
    settimeshowevent:'showEvent'
  },
  methods:{
    txotherShow() {        //跳转到全部人员页面
      this.$router.push({path:'./collegegoal_xg_yqcyz',query:{id:this.id}});
    },
    setTimes(index) {      
      this.settimeshowevent=2;
      this.settimeshow=true;
      this.num=index;
      this.$refs.childMethod.open('picker1')
    },
    setTimes1(mes) {
      this.settimeshowevent=mes;
    },
    showEvent() {         //判断滑动插件显示与隐藏
      if(this.settimeshowevent===2){
        this.settimeshow=true;
      }else{
        this.settimeshow=false;
      }
    },
    getTime(mes) {         //获取滑动时间
      // this.gettime=mes;
      this.data[this.num].time=mes;
      console.log(this.data[this.num].time);
    },
    cyzShow(){
      this.$router.push('./collegegoal_xg_cyz');
    }
  },
  created(){
    this.rightButtons = [
          {  
            content: '删除',  
            style: { background: 'red', color: '#fff' },  
            handler: () => {
              // this.$refs.shetuan 
            // console.log(this.$refs.shetuan)
            }//this.$messagebox('删除')
             
          }  
    ];
  },
  components:{
    'v-settime':settime,
    'v-other':tx_other
  }
  
}

</script>

<style>
.collegegoal-endtime-wrapper{
  text-align: left;
  background: #f7f7f7;
  position: fixed;
  width: 100%;
  min-height: 100%;
}
.endtime-btx{
  font-size: 15px;
  color: #333333;
  padding: .65em .8em;
  background: white;
  margin-top: .8em;
  border-bottom: 1px solid #eeeeee;
}
.endtime-btx p{
  display: inline-block;
}
.endtime-txs{
  margin: 1em .75em;
  border-radius: 6px;
  border-bottom: 1px solid #eeeeee;
}
.endtime-btx span{
  float: right;
}
.endtime-btx span img{
  width: 1em;
  margin-top: .4em;
}
.endtime-txs .mint-cell {
  border-radius: 6px;
}
.endtime-txs .mint-cell-value{
  display: block;
  text-align: left;
  width: 100%;
}
.endtime-txs .mint-cell-value>div{
  width: 100%;
  height: 2.93em;
  padding: 0 .75em;
  line-height: 2.93em;
  box-sizing: border-box;
  border-bottom:1px solid #eeeeee;
}
.endtime-txs .mint-cell-value>div>input[class=tx]{
  float: right;
  text-align: right;
  margin-top: .1em;
  height: 2.9em;
  line-height: 2.93em;
  padding-top:.9em;
  width: calc(100% - 5.6em);
  box-sizing: border-box;
  border:none;
}
.endtime-txs .mint-cell-value>div>input[class=bz]{
  margin-left: .4em;
  height: 2.93em;
  line-height: 2.93em;
  border:none;
  width: calc(100% - 8.5em);
}
 .endtime-txs .mint-cell-swipe-button{
    line-height: 8.5em !important;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
}
.endtime-txs .mint-cell-value>div>span{
  display: inline-block;
  float: right;
  width: .5em;
  height: .8em;
  vertical-align: top;
  /*margin-top:1em;*/
}
.endtime-txs .mint-cell-value>div>span>img{
  height: 100%;
  width: 100%;
}
.addtx{
  background: white;
  border-bottom: 1px solid #eeeeee;
  padding: .55em .8em;
  margin-top: .38em;
}
.addtx img{
  width: 1.5em;
  vertical-align: top;
}
.addtx p{
  display: inline-block;
  font-size: 15px;
  color: #333333;
  margin-top: .1em;
}
.txry p{
  display: inline-block;
}
.txry p>img{
  width: 1.6em;
  height: 1.6em;
  border-radius: 50%;
  vertical-align: middle;
}
</style>