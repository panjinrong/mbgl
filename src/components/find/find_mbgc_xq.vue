<template>
  <div class="xymb-xq-wrapper">
      <v-header :data="data"></v-header> 
      <v-cjry :cyzList="cyzList"></v-cjry>
      <div class="xymb-xq-dt">
      <div class="pl">
       <p>评论<span>(1)</span></p>
       <span @click="diagleShow()">发表评论</span>
       <div class="fbpl" v-show="pl">
         <textarea placeholder="发表评论"></textarea>
         <button @click="hidePl()">确定</button>
       </div>
     </div>
          <v-notice></v-notice>
      </div>
      <div class="xymb-xq-button" >
          <button>加入目标</button>
      </div>
       <div class="xymb-xq-diagle" v-show="diagle">
         <div class="xymb-xq-nr">
             <p>需要加入目标才能评论哦！</p>
             <button name="cancel" @click="diagleHide()">取消</button>
             <button name="jion" @click="diagleHide()">立即加入</button>
         </div>
     </div> 
  </div>
</template>

<script>
import header from './find_mbgc_header'
import notice from './../notice/notice_not'
import cjry from './find_mbgc_cjry'
export default {
  components:{
    'v-header':header,
    'v-cjry':cjry,
    'v-notice':notice
  },
  data() {
    return {
      diagle:false,
      pl:false,
      cyzList:'',
      data:JSON.parse(this.$route.query.data),
      id:this.$route.query.id,
    }
  },
  methods:{
    diagleShow() {
      this.diagle=true;
      if(this.diagle){
        this.pl=true;
      }else{
        this.pl=false;
      }
    },
    diagleHide() {
      this.diagle=false;
    },
    hidePl(){
      this.pl=false;
    }
  },
  created() {
      this.$http.get('http://192.168.0.101:8081/target/target_mbrycylb?userid=1500654&function_id=20150101&ticket=06707289551C6223FB9E6868658AECAE&id='+this.id).then(res=>{
        this.cyzList=res.data.content
        })
  },
}
</script>

<style>
.xymb-xq-wrapper{
  text-align: left;
	background: #f7f7f7;
	min-height: 100%;
  position: relative;
}
.xymb-xq-dt{
  background: white;
}
.xymb-xq-wrapper .xymb-xq-button{
  text-align: center;
  background: white;
  position: fixed;
  bottom:0;
  height: 3em;
  width: 100%;
  z-index:-1;
}
.xymb-xq-wrapper .xymb-xq-button button{
  width: 90%;
  background: #55b2f5;
  font-family: AdobeHeitiStd-Regular;
  font-size: 18px;
  color: #fefefe;
  padding: .6em 0 .4em;
  margin-bottom: .5em;
  border-radius: 5px;
  border:none;
/*   bottom: 0;
left: 50%; 
  margin-left: -45%;*/
}
.xymb-xq-diagle{
  position:fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  font-family: PingFang-SC-Medium;
}
.xymb-xq-diagle .xymb-xq-nr{
  background: white;
  width: 60%;
  margin: 8em auto;
  text-align: center;
  border-top-right-radius:8px;
  border-top-left-radius:8px;
}
.xymb-xq-diagle .xymb-xq-nr p{
  font-size: 14px;
  color: #333333;
  padding: 2.5em 0;
}
.xymb-xq-diagle .xymb-xq-nr button{
  width: 50%;
  font-size: 14px;
  box-sizing: border-box;
  border:none;
  padding: .5em 0;
  background: white;
  border-top:1px solid #eeeeee;
}
.xymb-xq-diagle .xymb-xq-nr button:nth-child(2){
  float: left;
  color: #999999;
  border-bottom-left-radius:8px;
  border-right: 1px solid #eeeeee;
}
.xymb-xq-diagle .xymb-xq-nr button:nth-child(3){
  float: right;
  border-bottom-right-radius:8px;
}
.pl {
  font-family: PingFang-SC-Medium;
  font-size: 14px;
  font-weight: 600;
  padding: .5em .8em;
  border-bottom: 1px solid #eeeeee;
}
.pl p{
  display: inline-block;
}
.pl > span{
  float: right;
}
.fbpl{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  background: white;
  box-sizing: border-box;
  z-index: 2;
}
.fbpl textarea{
  width: 100%;
  height: 40%;
  resize: none;
  border:none; 
  border-bottom: 1px solid #eeeeee;
  padding: 1em;
}
.fbpl button{
  width: 98%;
  font-size: 16px;
  padding:.5em 0;
  margin: 0 1%;
  background: #3da8f5;
  color: white;
  border:none;
  border-radius: .5em;
}
</style>

