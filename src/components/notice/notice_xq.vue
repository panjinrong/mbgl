<template>
  <div id="notice_xq">
      <v-noticeModal v-on:closeModel="closeModel" v-on:showInput="showInput" :stus="stus"></v-noticeModal>
      <div class="xqwapper"  @click.stop="triggerout">
        <div class="content">
        <div class="pl_nr" v-if="data">
          <div class="pl_nr_header">
            <v-header v-on:showInput="showInput" v-on:openModal="openModal" :showsz="true" :data="data"></v-header>
          </div>
          <div class="notice_photos">
            <div v-if="pics.length>=3">
                    <a v-bind:class="[{photo3:pics.length>=3}]" v-for="(item,index) in pics" >
                      <img v-if="item" v-bind:src="item" @click="alert(index)">
                    </a>
            </div>
            <div v-else-if="pics.length==2">
             <a v-bind:class="[{photo2:pics.length==2}]" v-for="(item,index) in pics">
              <img v-bind:src="item" v-if="item" @click="alert(index)">
             </a>
            </div>
            <div v-else="pics.size==1">
              <a v-bind:class="[{photo1:pics.length==1}]" v-for="(item,index) in pics">
                <img v-bind:src="item" v-if="item" @click="alert(index)" >
              </a> 
            </div>
            <div style="clear:both;"></div>
          </div>
         <!--  <div class="notice_dz" v-if="showBtns">
            <div><a @click="zan" :class="{z_stus:data.zanStus}"><img v-bind:src="urls"><span>{{data.zan}}</span></a></div>
            <div><a @click="huifu"><img v-bind:src="plurl"><span>{{plNum}}</span></a></div>
          </div> -->
        </div>

        <div class="notice_pl_list" v-if="plNum>0">
            <div class="notice_pl_list_header"><span>{{plNum}}条评论</span></div>
            <v-noticenr :data="data.plList"></v-noticenr>
        </div>
      </div>
    </div>
      <v-plinput subUrl="/api/inform/comment" v-on:refresh="getData"ref="plinput"></v-plinput>
      <v-photeswipe ref="pswipe"></v-photeswipe>
  </div>
</template>

<script>
import noticenr from './notice_pl_nr'
import noticeModal from './noticeModal'
import header from './notice_header'
import swipe from './photoswipe'
import plinput from './plinput'
import axios from 'axios'
import BScroll from 'better-scroll'
import store from '../../vuex/store'

export default {
  name: 'notice_xq',
  data(){
  	return{
      stus:"",
      urls:"../../static/notice/Fabulous-N.png",
      plurl:"../../static/notice/Comment.png",
      pics:[],
      // pics:"",
      data:"",
      plNum:"",
      showBtns:false,
      pro:"",
      scroll:""
  	}
  },
  watch:{
    'data.zanStus':function(val,old){
      var _this = this;
      if(val){ 
        _this.urls = '../../static/notice/Fabulous-Y.png';
      }else{
        _this.urls = '../../static/notice/Fabulous-N.png';
      }
    }
  },
  mounted(){
    var _this = this
     _this.$nextTick(function(){
        _this.pro.then(function(res){
          _this.scroll = new BScroll(document.getElementsByClassName('xqwapper')[0],{probeType:3,hasVerticalScroll:true,click:true});
          _this.scroll.on('scroll',function(res){
            _this.triggerout();
          })
        })
      })
  },
  created:function(){
    var mbid = this.$route.query.mbid;
    this.getData();
  },
  updated(){
    //页面改变后刷新better-scroll
    if(this.scroll){
     this.scroll.refresh();
    }
  },
  methods:{
    //获取数据
    getData:function(){
          var _this = this;
         _this.pro = new Promise(function(resolve, reject) {
             axios.get('/api/inform/getNoticeDetails?userid=11203080324&function_id=20150101&ticket=7A459E71400C19A4A813994B79BC4E41&sid=2017041410190511203080324703&type=1').then(function(res){
                var d = res.data;
                if(d.code == "40001"){
                  _this.pics = d.content.pics;
                  _this.data = d.content;
                  _this.plNum = d.content.plList.length;
                  store.dispatch('set_ReplyObj', _this.data);
                  _this.$emit('showInput');
                  resolve(d);
                }
              })
           });
    },
    //input失去焦点
    triggerout:function(){
      this.$refs.plinput.triggerout()
    },
    //Swipe绑定图片（图片预览）
    alert:function(i){
      this.$refs.pswipe.openPhotoSwipe(this.pics,i);
    },
    //点赞（弃用）
    zan:function(){
      var _this = this;
      if(!_this.data.zanStus){
        _this.$set(_this.data, 'zan',Number(_this.data.zan) + 1);
        _this.$set(_this.data,'zanStus',true);
      }else{
        _this.$set(_this.data, 'zan',Number(_this.data.zan) - 1);
        _this.$set(_this.data,'zanStus',false);
      }
    },
    //聚焦input
    showInput:function(){
      this.$refs.plinput.trigger();
    },
    huifu:function(){

    },
    //打开modal
    openModal:function(mbid){
      this.mbid = mbid;
      this.stus = true;
    },
    //关闭modal
    closeModel:function(){
      this.stus = false;
    }
  },
  components:{
    'v-noticenr':noticenr,'v-header':header,'v-photeswipe':swipe,'v-noticeModal':noticeModal,'v-plinput':plinput
  }
}
</script>

<style>
#notice_xq{
  background: #f7f7f7;
  height: calc(100% - 3em);
}
.xqwapper{
  height: 100%;
}
#notice_xq div.pl_nr,#notice_xq div.notice_pl_list{
  background: white;
  padding-bottom: .1em;
}
.pl_nr_header{
  margin:0em .75em 0em .75em; 
  padding-top: 1em;
}
.notice_not_head_message{
  float: left;
  height:2.5em;
  margin-left: .5em;
  padding:.3em 0em .2em 0em;
  text-align: left;
}

/*.notice_describe{
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color:#303030;
}*/
.notice_photos{
  margin:.5em .75em;
  text-align: left;
}
.notice_photos a.photo2{
  display: block;
  position: relative;
  background: black;
  width:calc(50% - .1em);
  height: 0;
  padding-bottom: calc(50% - .1em);
  margin:0em .05em;
  overflow: hidden;
  float: left;
}
.notice_photos a.photo1{
  display: block;
  width:calc(100% - .1em);
  margin:0em .05em;
  overflow: hidden;
  float: left;
}
.notice_photos a.photo3{
  display: block;
  position: relative;
  background: black;
  width:calc(33.33% - .1em);
  height:0;
  padding-bottom: calc(33.33% - .1em);
  margin:0em .05em;
  overflow: hidden;
  float: left;
}
.notice_photos a.photo3:nth-child(n+4){
  margin-top: .1em;
}
.notice_photos a.photo3 img,.notice_photos a.photo2 img{
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  /*left:-10%;*/
  width: 100%;
  /*height:100%;*/
}
.notice_photos a.photo1 img{
  width: 100%;
  border-radius: .3em;
}
.z_stus{
  color:#55b2f5;
}
.notice_dz{
  display: flex;
  height:2em;
  margin:0em!important;
  align-items: center;
  -webkit-box-align: center;
   -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  justify-content: center;
  border-top: 1px solid #DAE0E3;
  box-shadow: 0 1.5px 0 #DAE0E3;
}
.notice_dz>div{
  height:100%;
  flex: 1;
}
.notice_dz>div:first-child{
  border-right:1px solid #DAE0E3;
}
.notice_dz>div>a{
  display: block;
  position: relative;
  width: 2em;
  height:100%;
  margin:auto;
}
.notice_dz>div>a>img{
  display: inline-block;
  position: absolute;
  width:.9em;
  top: 50%;
  left:0;
  transform: translate(0,-50%);
  /*margin-bottom: .15em;*/
  /*vertical-align: middle;*/
}
.notice_dz>div>a>span{
  display: inline-block;
  position: absolute;
  top: 50%;
  right:0;
  font-size: .75em;
  transform: translate(0,-50%);
  
  margin-left: .3em;
}
.notice_pl_list{
  text-align: left;
  margin: .625em 0em 0em 0em!important;
}
.notice_pl_list_header{
  display: inline-block;
  width: 100%;
  height:1.875em;
  line-height: 1.875em;
  
  color:#42acfa;
  border-bottom: 1px solid #DAE0E3;
}
.notice_pl_list_header > span{
  margin-left: .75em;
  font-size: .875em;
}
</style>
