<!-- <template>
    <div id="collegedetail-xg-wrapper">
        <div class="collegedetail-mbsz">
             <div class="setTitle">
                 <img src="./../../../assets/image/photo1.jpg">
                 <h4>张晓彤</h4>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
             </div>
             <div class="setTime" @click="showData()" >
                 <img src="./../../../assets/image/Set.png">
                 <p><input type="" name="" v-model="timeshow" readonly="" placeholder="5月26日  14:24"></p>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
             </div>
             <div class="setJj"  @click="mbyxj()">
                <img v-if="lx===1"  src="./../../../assets/image/Priority1.png">
                <img v-else-if="lx===2" src="./../../../assets/image/Priority2.png">
                <img v-else="lx===3" src="./../../../assets/image/Priority.png">
                 <p v-if="lx===1">非常紧急</p>
                <p v-else-if="lx===2">紧急</p>
                <p v-else="lx===3">普通</p>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
             </div>
             <div class="setEndtime" @click="endtimeShow()">
                 <img src="./../../../assets/image/Remind.png">
                 <p>设置提醒</p>
                <span>
                    <img src="./../../../assets/image/next.png">
                </span>
             </div>
             <div class="addother" @click="cyzShow()">
                 <img src="./../../../assets/image/touxiang.png">
                 <p>
                     <img src="./../../../assets/image/photo1.jpg">
                     <img src="./../../../assets/image/photo1.jpg">
                     <img src="./../../../assets/image/photo1.jpg">
                 </p>
                 <p>
                     <img src="./../../../assets/image/XQ-Plus.png">
                 </p>
                 <span>
                     <img src="./../../../assets/image/next.png">
                 </span>
             </div>
        </div>
        <v-mbrz></v-mbrz>
       <v-mbyxj :mbyxjShow="mbyxjShow"></v-mbyxj>
        优先级
        <div id="mbyxj-wrapper" v-show="mbyxjShow">
          <div class="mbyxj-content">
            <div class="mbyxj-title">
              <button class="cancel"  @click="cancelHide()">取消</button>
              <span>优先级</span>
              <button class="complete" @click="completeHide()">完成</button>
            </div>
            <div class="mbyxj-jb"  >
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
        截止时间弹框
        <v-settime  v-show="show" @child-info="setTimes1" @child-time="getTime"></v-settime> 
    </div>
</template>

<script>
import mbyxj from './mbyxj'
import settime from './set_times'
import mbrz from './zmb_jd_xq'
export default {
 /* props:{
    complete:{
      type:Boolean
    }
  },*/
  components:{
    'v-settime':settime,
    'v-mbrz':mbrz
  },
  data() {
    return{
      mbyxjShow:false,
      elements:{},
      li:[],
      lx:'',
      show:false,
      timeshow:'',
      settimeshowevent:1,
    }
  },
  methods:{
    mbyxj() {
      this.mbyxjShow=true;
    },
    cancelHide() {
      this.mbyxjShow=false;
    },
    completeHide() {
      this.mbyxjShow=false;
    },
    endtimeShow:function(){
      this.$router.push('./set_tx');
    },
    cyzShow:function(){
      this.$router.push('./collegegoal_xg_cyz');
    },
    jjqkVal:function(flag) {
      this.li.push(flag);
      this.lx=eval("("+this.li+")")
      if(this.li.length>1){
        this.li.splice(0, 1); 
      }
       console.log(this.lx);
    },
    onValuesChange(result1, result2, result3, result4) {
      console.log(result1, result2, result3);
      this.timeshow=result1+result2+' '+result3+':'+result4;
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
    showData() {
      this.show=true;
    }
  },
  created() {
    /*var date = new Date();
    console.log(date.getDate());*/
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
  vertical-align: sub;
  margin: 0 .47em;
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
.mbyxj-content .mbyxj-jb ul li span{
  font-size: 18px;
}
.mbyxj-content .mbyxj-jb ul li img{
  width: 1.3em;
  margin-right: .87em;
  margin-top: .29em;
    vertical-align: top;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(1) span{
  color: #ff7f6d;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(2) span{
  color: #ffc107;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(3) span{
  color: #c5d2e1;
}
.mbyxj-content .mbyxj-jb ul li a{
  float: right;
}
.mbyxj-content .mbyxj-jb ul li a img{
  width: 1em;
  margin-top: .8em;
}

.picker-wrapper{
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
}
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
</style> -->