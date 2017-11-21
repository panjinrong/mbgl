<template>
    <div class="collegegoal-cyz-wrapper">
  	  <v-search></v-search>
      <div class="addcyz" @click="yqcyzShow()">
          <img src="./../../../assets/image/Invitation.png">
          <p>邀请参与者</p>
      </div>
       <div class="title"><p>所有成员</p></div>
       <mt-cell-swipe  :right="[{ content: '放弃', style: { background: 'red', color: '#fff' }, handler: () =>pass(item.userid)}]" v-for="(item,index) in data" :key="item.userid">
        <div class="person-list" @click="show(index)">
          <img :src="item.username">
          <p>{{item.username}}</p>
          <span ref="item">
              <img src="./../../../assets/image/Plus-Hook.png">
          </span>
       </div>  
       </mt-cell-swipe>
    </div>
</template>

<script>
import mbgc_search from './../../find/mbgc_search'
export default {
  // props:['cyzList'],
  data() {
    return{
      sum:0,
      data:JSON.parse(this.$route.query.cyzList),
      id:this.$route.query.id
    }
  },
  methods:{
    yqcyzShow:function(){
      this.$router.push({path:'./collegegoal_addcyz',query:{id:this.id}});
    },
    show(index) {
      //this.$refs.item[index].style.display='block';
      if(this.$refs.item[index].style.display=='block'){
        this.$refs.item[index].style.display='none';
      } 
      else{
        this.$refs.item[index].style.display='block'
      }
    },
    pass(cyz){
       this.$http.get('http://192.168.0.101:8081/target/target_sccyz?userid=1500654&function_id=20150101&ticket=06707289551C6223FB9E6868658AECAE&id='+this.id+'&cyz='+cyz).then(res=>{
            console.log(res.data);
        })
    }
  },
  created() {
    console.log(this.data);
    
  },
  components:{
    'v-search':mbgc_search
  }
  
}

</script>

<style>
.collegegoal-cyz-wrapper{
  text-align: left;
  background: #f7f7f7;
  min-height: 100%;
}
.title p{
  font-size: 11px;
  color: #999999;
  margin-top: .68em;
  margin-left: 1.35em;
}
.person-list {
  height: 2.5em;
  line-height: 2.5em;
  background: white;
  padding: .5em 1em .3em;
 border-bottom: 1px solid #eeeeee;
}
.person-list > img,.mint-cell img{
  width: 2.3em;
  height: 2.3em;
  border-radius: 6px;
  vertical-align: top;
}
.person-list p{
  display: inline-block;
  font-size: 16px;
  color: #333333;
  /*margin-top: .5em;*/
}
.person-list span{
  float: right; 
  display: none;
}
.person-list span img{
    width: 1.2em;
    margin-top: .6em;
    height: 1em;
    margin-right: .5em;
}
.addcyz{
  background: white;
  border-bottom: 1px solid #eeeeee;
  padding: .55em 1.35em;
}
.addcyz img{
  width: 1.6em;
  vertical-align: top;
   margin-top: .1em;
}
.addcyz p{
    margin: 0;
    display: inline-block;
    font-size: 15px;
    color: #333333;
    margin-top: .35em;
}

.mint-cell-title{
  display: none!important;
} 
.mint-cell-wrapper{
  padding:0!important; 
  background-image:none!important; 
}
.collegegoal-cyz-wrapper .mint-cell-swipe-button {
   line-height: 54px!important;
   padding: 0 .5em;
}
.collegegoal-cyz-wrapper .mint-cell-value{
  width: 100%!important;
  display: block!important;

}
.collegegoal-cyz-wrapper .mint-cell-wrapper {
  line-height: none!important;
}
</style>