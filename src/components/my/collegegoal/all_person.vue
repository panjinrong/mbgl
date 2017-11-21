<template>
    <div class="all-person-wrapper">
       <v-search></v-search>
       <div class="title"><p>所有成员</p><span @click="allSelect()">全选</span></div>
       <div class="person-list"  v-for="(item,index) in data" @click="show(index,item.id)">
          <img :src="item.faceaddress">
          <p  ref="person" :data-id="item.id">{{item.username}}</p>
          <span ref="item">
              <img src="./../../../assets/image/Plus-Hook.png">
          </span>
       </div>
       <div class="btn" @click="setTime()">
         <mt-button type="primary" size="large" class="buttom-mim" >下一步</mt-button>
       </div>
    </div>
</template>

<script>
import mbgc_search from './../../find/mbgc_search'
export default {
  props:['id'],
  data() {
    return{
          data:'',
          yqr:[],
          yqry:''
    }
  },
  methods:{
    show(index) {
      if(this.$refs.item[index].style.display==='block'){
        this.$refs.item[index].style.display='none';
      } 
      else{
        this.$refs.item[index].style.display='block'
      }
    },
    allSelect() {
      var that=this;
      this.data.forEach(function(res,i){
        that.$refs.item[i].style.display='block';
      })
    },
    setTime(){
      var that=this;
      that.yqr=[];
        this.data.forEach(function(res,i){
           if(that.$refs.item[i].style.display==='block'){
              that.yqr.push(that.$refs.person[i].getAttribute("data-id"))
          }
        })
        var a='';
        that.yqr.forEach(function(r,i){
          a+=r+','
        })
         a=a.substring(0,a.length-1);
         this.$router.push('./tx_other');
         // console.log(a);
        // console.log(this.yqr);
    },
  },
  mounted(){
    // console.log('id:'+this.id);
    var _this=this;
     this.$http.get('http://192.168.0.101:8081/target/target_myfpmbdcyz?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&id=987654321').then(res=>{
      _this.data=res.data.content;
        })
  },
  components:{
    'v-search':mbgc_search,
  }
  // created() {
  //   console.log(this.data);
  // }
}

</script>

<style>
.all-person-wrapper{
  text-align: left;
  background: #f7f7f7;
  min-height: 100%;
}
.title p{
  display: inline-block;
  font-size: 11px;
  color: #999999;
  margin-top: .68em;
  margin-left: 1.35em;
}
.title span{
  float: right;
  font-size: 12px;
  color: #999999;
  padding: .5em 1em;
}
.person-list {
  background: white;
  padding: .3em 1em;
  border-bottom: 1px solid #eeeeee;
}
.person-list > img{
  width: 2.3em;
  height: 2.3em;
  border-radius: 6px;
  vertical-align: top;
}
.person-list p{
  display: inline-block;
  font-size: 16px;
  color: #333333;
  margin-top: .5em;
}
.person-list span{
  float: right; 
  display: none;
}
.person-list span img{
  width: 1em;
  margin-top: .6em;
}
.btn{
  margin: 1em 2%;
  width: 96%;
}
</style>