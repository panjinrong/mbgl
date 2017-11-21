<template>
  <div class="addzmb-wrapper" >
    <div class="addlst-title">
      <p>属于目标：<span>社会公益活动</span></p>
    </div> 
    <v-zmb></v-zmb>
  </div>
</template>

<script>
import add_zmb from './add_selfzmb'
export default {
  data() {
    return {
      yxj:false
    }
  },
  methods:{
    settxShow:function(index){
      this.$router.push('./set_tx');
    },
    addzmbBz:function(){
      this.$router.push('./addzmb_bz');
    },
    setYxj:function(){
      this.yxj=true;
    }
  },
  components:{
    'v-zmb':add_zmb
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
  /*padding: .8em .9em 0;*/
}
.addzmb-wrapper .addzmb-title{
  background: white;
  height: 2em;
  padding: .8em 0 0;
}
.addzmb-title input{
  width: 100%;
  height: 100%;
  font-size: 17px;
  /*padding: 0 1em;*/
  color:#e4e4e4;
  border:none;
  border-bottom: 1px solid #eeeeee;
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
</style>