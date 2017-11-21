<!-- <template>
  <div class="tjmb-wrapper">
       <div class="xymb-list">
            <ul>
                <li v-for="(list,index) in mbtj">
                    <h3 @click="xymbxqShow(1)">{{list.mc}}</h3>
                    <span @click="sfjrShow(index,list.sfjr,list.id)">
                        <img v-if="list.sfjr==='1'" src="./../../assets/image/yjion.png">
                        <img  v-else="list.sfjr===''" src="./../../assets/image/ljion.png">
                    </span>
                    <p @click="xymbxqShow(1)">{{list.bz}}</p>
                    <a @click="xymbxqShow(1)">
                        <img src="./../../assets/image/cjrs.png">
                        <span>参加人数</span>
                        <span>{{list.cjrs}}</span>
                    </a>
                </li>
            </ul> 
       </div>

      
  </div>
</template>

<script>
export default {
  props:['mbtj'],
  data() {
    return {
      data: '',
      //   pulldown: true
    }
  },
  //  created() {
  //   var _this=this;
  //   this.$http.get('http://192.168.0.11:3000/mbtj').then(res=>{
  //     _this.data=res.data;
  //     // console.log( _this.data);
  //   })
  // },
  methods:{
    xymbxqShow:function(index){
      this.$router.push('./find_xymb_xq');
    },
    sfjrShow(index,sfjr,id){
      if(this.mbtj[index].sfjr!='1'){
          this.mbtj[index].sfjr==='1'
      console.log(this.mbtj[index].sfjr)
          this.$http.get('http://192.168.0.56:8081/discovery/joinTargetSquare?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&id='+id).then(res=>{
        })
      }
      this.mbtj[index].sfjr==='1'
    }
  },
  components:{
  }
}
</script>

<style>
.tjmb-wrapper{
  text-align: left;
}
.tjmb-wrapper .xymb-list ul{
  background: #f7f7f7;
}
.tjmb-wrapper .xymb-list ul li{
  background: white;
  margin: 0 .75em .875em;
  border-radius: 5px;
  padding: .875em .625em
}
.tjmb-wrapper .xymb-list ul li h3{
  display: inline-block;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #333333;
  margin-bottom: .425em;
}
.tjmb-wrapper .xymb-list ul li >span{
  display: inline-block;
  float: right;
}
.tjmb-wrapper .xymb-list ul li span img{
  width: 3.6em;
  height: 1.4em;
}
.tjmb-wrapper .xymb-list ul li a>img{
  width: .8em;
  vertical-align: top;
  margin-top: .25em;
}
.tjmb-wrapper .xymb-list ul li a>span{
  display: inline-block;
  font-size: 11px;
  color: #999999;
}
.tjmb-wrapper .xymb-list ul li p{
  font-size: 14px;
  color: #555555;
  line-height: 1.5em;
  text-indent: 2em;
}

</style>

 -->