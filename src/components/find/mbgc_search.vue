<template>
  <div class="mbgc-search-wrapper">
      <div class="mbgc-search" v-if="search">
          <input type="text" name="search" placeholder="搜索" @click="searchShow()">
      </div>
      <div class="mbgc-searchs" v-else>
          <input type="text" name="search" placeholder="搜索" v-model="searchtext" >
          <span v-show="searchtext.length>0" @click="deletetext()"><img src="./../../assets/image/qk.png"></span>
          <button @click="searchHide()">取消</button>
          <!-- <v-xymb :data="data" v-show="searchtext"></v-xymb> -->
          <v-mbgc :data="data" v-show="searchtext"></v-mbgc>
      </div>
  </div>

</template>

<script>
import find_xymb_list from './find_xymb_list'
import find_mbgc_zrxq from './find_mbgc_list'
import bus from '../eventBus'
export default {
  data() {
    return {
      search:true,
      searchtext:'',
      data:'',
    }
  },
  computed:{
    
  },
  watch:{
    searchtext:{
      handler:function(curVal,oldVal){
          this.searchtext=curVal;
          this.getSchoolTarget();
          if(curVal===''){
            this.getSchoolTarget();
          }
        }
    },
    deep:true
  },
  methods:{
      searchShow() {
        this.search = false;
        bus.$emit("setSearch",this.search);
      },
      searchHide() {
        this.search = true;
        bus.$emit("setSearch",this.search);
      },
      deletetext(){
        this.searchtext='';
      },
      getSchoolTarget() {
          var _this = this;
          // this.$http.get('http://192.168.0.56:8081/discovery/getSchoolTarget?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&content='+_this.searchtext).then(res=>{
          //   _this.data=res.data.content;
          // })
          this.$http.get('http://192.168.0.56:8081/discovery/searchSquare?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&content='+_this.searchtext).then(res=>{
            _this.data=res.data.content;
          })
      },
  },
  components:{
    'v-xymb':find_xymb_list,
    'v-mbgc':find_mbgc_zrxq
  }
}
</script>

<style>
.mbgc-search-wrapper{
  padding:0 .75em;
}
.mbgc-search-wrapper .mbgc-search{
  margin-bottom: .75em;
}
.mbgc-search-wrapper .mbgc-search input{
  width: 100%;
  padding: .6em 0 .3em;
  border:1px solid #eeeeee;
  border-radius: 5px;
  margin-top: .8em;
  text-align: center;
  background: url(./../../assets/image/icons.png) no-repeat 43% center;
  background-size: 1em 1em;
  background-color: white;
  /*box-shadow: 0 0 5px rgba(0,0,0,0.3) inset;*/
 /* margin-left: 1em;*/
}
 .mbgc-search-wrapper .mbgc-searchs{
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 min-height: 100%; 
 background: #f7f7f7; 
 /*padding-left: 1em;*/
 z-index: 9;
}
.mbgc-search-wrapper .mbgc-searchs input{
  width: 82%;
  padding: .6em 2em .3em;
  border:1px solid #eeeeee;
  border-radius: 5px;
  margin-top: .8em;
  background: url(./../../assets/image/icons.png) no-repeat .6em center;
  background-size: 1em 1em;
  background-color: white;
  margin-left: .85em; 
  box-sizing: border-box;
}
.mbgc-searchs >span{
  display: inline-block;
  margin-left: -2em;
  margin-right: 1em;
  vertical-align: top;
  margin-top: .95em;
}
.mbgc-searchs >span >img{
  width: .8em;
  height: .8em;
}
.mbgc-search-wrapper .mbgc-searchs button{
  font-size: 16px;
  color: #555555;
  background:rgba(0,0,0,0);
  border:none;
  vertical-align: middle;
}
.searchs-xq>p{
  padding: 0 1.05em
}
.searchs-xq ul li{
  padding: .3em 1.05em;
  border-bottom: 1px solid #eeeeee;
  background: white;
}
.searchs-xq ul li>img{
  width: 2em;
  height: 2em;
  vertical-align: top;
  border-radius: 6px;
}
.searchs-xq ul li p{
  display: inline-block;
  font-size: 16px;
  color: #333333;
  margin-top:.5em;
}
</style>

