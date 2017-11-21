<template>
    <div class="class-wrapper">
        <div class="mdxzb">
           <div class="title"><p>我的行政班</p></div>
          <div class="class-list"  v-for="(item,index) in wdxzb" @click="wdxzClass(item.bjbh)">
              <img src="./../../../assets/image/photo1.jpg">
              <p :data-id="item.bjbh">{{item.kcmc}}</p>
              <span>{{item.count}}人</span>
           </div>
        </div>
         <div class="mdjxb">
           <div class="title"><p>我的教学班</p></div>
           <div class="class-list"  v-for="(item,index) in wdjxb" @click="wdjxClass(item.bjbh)">
              <img src="./../../../assets/image/photo1.jpg">
              <p :data-id="item.bjbh">{{item.kcmc}}</p>
              <span>{{item.count}}人</span>
           </div>

        </div>
    </div>
</template>
<script>
export default {
  props:['data'],
  data() {
    return{
      id:this.$route.query.id,
      wdxzb:'',
      wdjxb:'',
      hyList:''
    }
  },
  methods:{
      wdjxClass(jxb){
          this.$http.get('http://192.168.0.101:8081/target/target_wdjxbtx?userid=19560004&function_id=20150101&ticket=05A4DAC8D4FE71E7C22ACB3C47832420&jxb='+jxb+'&id=fa8dc10a4b6e4212ad308a5e5eb37496111').then(res=>{
            this.hyList=res.data.content
            // console.log( this.hyList);
            this.$router.push({path:'./collegegoal_addcyz_xq',query:{hyList:JSON.stringify(this.hyList)}})
            })
      },
       wdxzClass(xzb){
          this.$http.get('http://192.168.0.101:8081/target/target_wdxzbtx?userid=19560004&function_id=20150101&ticket=fa8dc10a4b6e4212ad308a5e5eb37496111&xzb='+xzb+'&id=fa8dc10a4b6e4212ad308a5e5eb37496111').then(res=>{
            this.hyList=res.data.content
            // console.log( this.hyList);
            this.$router.push({path:'./collegegoal_addcyz_xq',query:{hyList:JSON.stringify(this.hyList)}})
            })
      }
  },
  mounted() {
      this.$http.get('http://192.168.0.101:8081/target/target_wdjxb?userid=1500655&function_id=20150101&ticket=83A4E7F70FC231AA0B43E2F7D07E1F65').then(res=>{
        this.wdjxb=res.data.content
        // console.log(this.wdjxb)
        })
      this.$http.get('http://192.168.0.101:8081/target/target_wdxzb?userid=19560004&function_id=20150101&ticket=05A4DAC8D4FE71E7C22ACB3C47832420').then(res=>{
        this.wdxzb=res.data.content
        })
  }
}

</script>

<style>
.class-wrapper{
  text-align: left;
  background: #f7f7f7;
  min-height: 100%;
}
.class-wrapper .class-list{
  height: 2.3em;
  line-height: 2.3em;
  padding:.3em .75em;
  background: white;
  border-bottom: 1px solid #eeeeee;
}
.class-wrapper .class-list>img{
    width: 2.3em;
    height: 2.3em;
    vertical-align: top;
    border-radius: 5px;
}
.class-wrapper .class-list>p{
  display: inline-block;
  font-family: PingFang-SC-Bold;
  /*font-weight: 600;*/
  font-size: 14px;
  color: #333333;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.class-wrapper .class-list>span{
  float: right;
  font-size: 12px;
  color: #999999;
}
.class-wrapper .title>p{
  height: 2.5em;
  line-height: 2.5em;
  font-family: PingFang-SC-Bold;
  font-weight: 600;
  color: #333333;
}
</style>