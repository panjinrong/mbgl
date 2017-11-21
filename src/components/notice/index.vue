<template>
  <div id="notice" @click="hideRouter">
    <v-routers ref="noticeRouters"></v-routers>
    <v-noticeModal v-on:closeModel="closeModel" v-on:showInput="showInput" :stus="stus" footer="true"></v-noticeModal>
    <v-plinput ref="plinput" v-on:changeRouterStus="changeRouterStus" v-on:refresh="getData" v-on:showInput="showInput" subUrl="/api/inform/reply"></v-plinput>
    <div class="wrapper">
      <div class="content">
        <v-notice-not v-on:openModal="openModal" v-on:showInput="showInput" v-for="(item,index) in data" :class="{mt1:index>0}" :data="item"></v-notice-not>
        <!-- 加载更多 -->
        <div class="getmore" v-if="moreStu">
          <span  v-show="getmoreStu">查看更多</span>
          <span class="loading" v-show="!getmoreStu"><img src="../../../static/loading.gif">正在加载更多内容。。。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import con from '../../assets/config'
import notice_not from './notice_not'
import noticeModal from './noticeModal'
import routers from '../routers'
import plinput from './plinput'
import axios from 'axios'
import BScroll from 'better-scroll'

export default {
  name: 'notice',
  data(){
  	return{
      data:"",
      //设置的目标id
      mbid:"",
      //设置modal状态
      stus:"",
      scroll:"",
      pro:"",
      //无限加载参数
      page:1,
      pagesize:8,
      //无限加载-text查看更多显示状态
      moreStu:true,
      getmoreStu:true,
      info:""
  	}
  },
  props:['com'],
  components:{'v-notice-not':notice_not,'v-routers':routers,"v-noticeModal":noticeModal,'v-plinput':plinput},
  updated(){
    //页面改变后刷新better-scroll
    this.scrollRefresh()
  },
  mounted(){
    var _this = this
     _this.$nextTick(function(){
      //页面渲染完后wapper&content的高度才明确
        _this.pro.then(function(res){
          //创建无限滚动
          _this.scroll = new BScroll(document.getElementsByClassName('wrapper')[0],{probeType:3,hasVerticalScroll:true,click:true});
          if(_this.scroll.wrapperHeight>=_this.scroll.scrollerHeight){
            _this.moreStu = false
          }
          //绑定触摸结束事件
          _this.scroll.on('touchEnd', function(position) {
              //判断拖动距离是否满足加载更多条件
              if(position.y <  (this.maxScrollY - 30)){
              setTimeout(function(){
                  _this.getmoreStu = false;
              },500)
              setTimeout(function(){
                    axios({
                        methods:'post',
                        url:'/api/inform/getComment?page='+_this.page+'&pagesize='+_this.pagesize,
                        params: _this.info
                    }).then(function(res){
                      var d = res.data ;
                      if(d.code == "40001"){
                        d.content.forEach(function(r,i){
                          _this.data.push(r)
                        })
                        _this.page += 1;
                        _this.scroll.finishPullUp();
                      }else{
                        _this.scroll.finishPullUp();
                        _this.scroll.refresh();
                      }
                      _this.getmoreStu = true;
                    });
              },1000)
            }
          });
        })
      })
  },
  created(){
    this.getData();
  },
  methods:{
    //获取数据
    getData(){
      var _this =this;
      if(sessionStorage.getItem("userinfo")){
          var userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
          _this.info = userinfo;
          _this.pro = new Promise(function(resolve, reject) {
          axios({
              methods:'post',
              url:'/api/inform/getComment?page=1&pagesize='+_this.pagesize,
              params: _this.info
          }).then(function(res){
                var d = res.data
                if(d.code == "40001"){
                  _this.data = d.content;
                  resolve(_this.data)
                  _this.page += 1;
                 }
                _this.scrollRefresh();
            });
          });
      }
    },
    //scroll刷新
    scrollRefresh:function(){
      if(this.scroll){
       this.scroll.refresh();
      }
    },
    openModal:function(mbid){
      this.mbid = mbid;
      this.stus = true;
    },
    closeModel:function(){
      this.stus = false;
    },
    hideRouter:function(){
      this.$refs.plinput.triggerout(); 
    },
    showInput:function(){
      // this.inputStu = !this.inputStu;
      // document.getElementsByClassName("plinput")[0].getElementsByTagName('input')[0].focus();
       this.$refs.plinput.trigger(); 
      // this.$nextTick(function(){
       
      // })
      // this.$refs.plinput.focus();
      this.$refs.noticeRouters.changeStus(false);
    },
    changeRouterStus:function(){
      this.$refs.noticeRouters.changeStus(true);
    }
  }
}
</script>

<style>
#notice{
  background: #f7f7f7;
	margin-bottom: 3.0625em;
  height: 100%;
}
.wrapper{
  height: calc(100% - 3.0625em);
}
.mt1{
  margin-top: 1em;
}
.getmore{
  font-size: 0.75em;
  height: 2em;
  line-height: 2em;
  background: #f5f5f5;
}
.loading{
/*  height: 2em;
  line-height: 2em;*/
  font-size: 0.75em;
  color:#999999;
}
.getmore img{
  vertical-align: middle;
  height: 1.6em;
  padding: .2em 0;
}
</style>
