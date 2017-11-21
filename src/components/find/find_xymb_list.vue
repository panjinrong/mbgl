<template>
	  <div class="xymb-list" v-show="show" :style="{'-webkit-overflow-scrolling': scrollMode}">
    <mt-loadmore :bottom-method="handleBottomChange" :top-method="handleTopChange" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
      <ul>
        <li v-for="(list,index) in data">
          <h3>{{list.mc}}</h3>
          <span>
            <div class="button-wrapper">
              <a v-if="data[index].sfjr==='1'" @click="djImg(index,data[index].id)">
              <img src="./../../assets/image/yjion.png">
            </a>
            <a v-else="data[index].sfjr===''" @click="djImg(index,data[index].id)">
              <img src="./../../assets/image/ljion.png">
            </a>
            </div> 
          </span>
          <p  @click="xymbxqShow(list.id)">{{list.bz}}</p>
          <a>
            <img src="./../../assets/image/cjrs.png">
            <span>参加人数</span>
            <span>{{list.cjrs}}</span>
          </a>
        </li>
      </ul> 
      </mt-loadmore>
    </div>
</template>

<script>
import bus from '../eventBus'
export default {
  props:['data'],
  data() {
    return {
      show: true,
      allLoaded:false,
      scrollMode:"auto" ,
      page:1,
      pagesize:5,
      mbxq:'',
    }
  },
  mounted() {
    var _this=this;
     bus.$on("setSearch",function(msg){
            _this.show=msg;
            console.log('2:'+_this.show);
          });
  },
  methods:{
    xymbxqShow:function(id){
      // console.log(id)
      var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_mbxq?userid=11204050220&function_id=20150101&ticket=7A459E71400C19A4A813994B79BC4E41&id='+id).then(res=>{
            _this.mbxq=res.data.content;   
             console.log(_this.mbxq);
            this.$router.push({path:'./find_xymb_xq',query:{data:JSON.stringify(this.mbxq),id:id}});
        })
    },
    changeImg(){

    },
    djImg(index,id) {
      if(this.data[index].sfjr==='1'){
        this.data[index].sfjr='1';
      }else{
        this.data[index].sfjr='1';
        this.$http.get('http://192.168.0.56:8081/discovery/joinSchoolTarget?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&id='+id).then(res=>{
        })
      }
    },
    handleTopChange:function(status) {
      var _this = this;
      if(_this.page>1){
        _this.page=_this.page-1;
        _this.pagesize=_this.pagesize-5;
        this.$http.get('http://192.168.0.56:8081/discovery/getSchoolTarget?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&page='+this.page+'&pagesize='+this.pagesize).then(res=>{
                _this.data=res.data.content;
            this.$refs.loadmore.onTopLoaded();//加载完成
                console.log(_this.data);
            })
      }else{
          this.$refs.loadmore.onTopLoaded();//加载完成
      }
        // this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
        },
      handleBottomChange:function(status) {
        var _this = this;
      _this.page=_this.page+1;
      _this.pagesize=_this.pagesize+5;
            this.$http.get('http://192.168.0.56:8081/discovery/getSchoolTarget?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&page='+this.page+'&pagesize='+this.pagesize).then(res=>{
              if(res.data.code==='40001'){
                 _this.data=res.data.content;
            this.$refs.loadmore.onBottomLoaded();//加载完成
              }else{
                 _this.data=this.data
            this.$refs.loadmore.onBottomLoaded();//加载完成
              }
              console.log(_this.data);
          })
      },
  },
}
</script>

<style>
.xymb-list{
  text-align: left;
}
.xymb-list ul li{
  background: white;
  margin: 0 .75em .875em;
  border-radius: 5px;
  padding: .875em .625em
}
 .xymb-list ul li h3{
  display: inline-block;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #333333;
  margin-bottom: .425em; 
}
 .xymb-list ul li >span{
  display: inline-block;
  float: right;
  width: 3.6em;
  height: 1.4em;
}
 .xymb-list ul li span img{
  width: 3.6em;
  height: 1.4em;
}
 .xymb-list ul li> a>img{
  width: .8em;
  vertical-align: top;
  margin-top: .25em;
  margin-left: .1em;
}
 .xymb-list ul li a>span{
  display: inline-block;
  font-size: 11px;
  color: #999999;
}
 .xymb-list ul li p{
  font-size: 14px;
  color: #555555;
  line-height: 1.5em;
  text-indent: 1em;
}
.button-wrapper{
  display: inline-block;
  float: right;
}
.button-wrapper a{
  float: right;
}
.button-wrapper a > img{
  width: 3.6em;
  height: 1.5em;
  vertical-align: top;
   margin-top: -.25em; 
}
</style>

