<template>
    <div class="collegegoal-cyz-wrapper">
      <div class="selecttime" @click.stop="setTimes()">
        <p>提醒时间<span v-if="gettime">{{gettime}}</span><span v-else>选择时间</span></p>
      </div>
      <mt-button type="primary" size="large" class="buttom-mim" @click="txContent()">下一步</mt-button>
       <v-settime :data="data" ref="childMethod" v-show="settimeshow" @child-info="setTimes1" @child-time="getTime"></v-settime>  
    </div>
</template>

<script>
import settime from './set_times'
export default {
  props:['data'],
  data() {
    return{
      settimeshow:false,
      settimeshowevent:1,
      gettime:'',
      id:this.$route.query.id,
    }
  },
  watch:{
    settimeshowevent:'showEvent'
  },
  methods:{
    setTimes() {
      this.settimeshowevent=2;
      this.$refs.childMethod.open('picker1')
    },
    setTimes1(mes) {
      this.settimeshowevent=mes;
    },
    getTime(mes) {         //获取滑动时间
      this.gettime=mes;
    },
    showEvent() {
      if(this.settimeshowevent===2){
        this.settimeshow=true;
      }else{
        this.settimeshow=false;
      }
    },
    txContent() {
      this.$router.push({path:'./tx_content',query:{time:this.gettime,id:this.id}});
    }
  },
  components:{
    'v-settime':settime
  }
  
}

</script>

<style>
.collegegoal-cyz-wrapper{
  text-align: left;
  background: #f7f7f7;
  min-height: 100%;
}
.selecttime{
  padding: 0 .75em;
  font-size: 15px;
  height: 2.93em;
  line-height: 2.93em;
  background: white;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 1em;
}
.selecttime span{
  float: right;
  color: #999999;
  font-size: 13px;
}
.mint-button{
  height: 40px!important;
  background: #55b2f5;
  margin: 0 2%;
  width: 96%;
  padding-top:.2em; 
  /*position: fixed;*/

}
</style>