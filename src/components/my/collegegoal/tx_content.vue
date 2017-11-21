<template>
   <div class="bz-wrapper">
          <div class="zmbbz">
          <textarea placeholder="输入提醒内容" ref="textareaTxet" v-model="editText"></textarea>
            <p><span>{{editText.length}}</span>-200字</p>
          </div>
          <div class="zmb-button">
            <mt-button type="primary" size="large" class="buttom-mim" @click="back()">确定</mt-button>
          </div>
      </div> 
</template>

<script>
import settime from './set_times'
export default {
  props:['data'],
  data() {
    return{
      editText:'',
      time:this.$route.query.time,
      id:this.$route.query.id,
    }
  },
  watch:{
    settimeshowevent:'showEvent'
  },
  methods:{
    setTimes() {
      this.settimeshowevent=2;
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
    back() {
      var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_setRemind?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&time='+this.time+'&content='+this.editText+'&id='+this.id).then(res=>{
            console.log(_this.data);
            _this.data=res.data.content;
            if(res.data.code==="40001"){
                this.$router.go(-2);
            }else{

            }
        })
    }
  },
  components:{
    'v-settime':settime
  }
  
}

</script>

<style>
.bz-wrapper{
  text-align: left;
  background: #f7f7f7;
  height: 100%;
}
.zmbbz{
  height: 30%;
  background: white;
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
  padding: 0 .75em;
  margin-top: -2.5em;
  color: #999999;
  font-size: 14px;
  border-bottom: 1px solid #eeeeee;
}
.zmb-button{
  width: 98%;  
  margin: 1em 1%;
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
</style>