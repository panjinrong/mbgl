<template>
    <div class="all-person-wrapper">
       <div class="title"><p>所有成员</p><!-- <span @click="allSelect()">全选</span> --></div>
       <div class="person-list"  v-for="(item,index) in datas" @click="show(index)">
          <img src="./../../../assets/image/photo1.jpg">
          <p>{{item}}</p>
          <span v-if="num===index">
              <img src="./../../../assets/image/Plus-Hook.png">
          </span>
       </div>
        <div class="btn" @click="txContent()">
         <mt-button type="primary" size="large" class="buttom-mim">下一步</mt-button>
       </div>
    </div>
</template>

<script>
export default {
  props:['data'],
  data() {
    return{
      datas:['杜利亚','王杰','王利军'],
      num:''
    }
  },
  methods:{
    show(index) {
       this.num=index;    },
    txContent(){
      this.$router.push('./set_goal');
    },
  },
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
  /*display: none;*/
}
.person-list span img{
  width: 1em;
  margin-top: .6em;
}
.btn{
  margin-top: 1em;
}
</style>