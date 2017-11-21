<!-- <template>
    <div class="collegegoal-endtime-wrapper">
       <div class="endtime-btx"><p>不提醒</p></div>
         <div class="endtime-tx">
         <img src="./../../../assets/image/photo1.jpg">
         <p>6月26日11:00</p>
         <span>
             <img src="./../../../assets/image/Plus-Hook.png">
         </span>
              </div> 
       <div class="endtime-tx" v-for="(item,index) in timeDate">
          <img src="./../../../assets/image/photo1.jpg">
          <p>{{item}}</p>
          <span>
              <img src="./../../../assets/image/Plus-Hook.png">
          </span>
       </div>
       <div class="addtx" @click="showData()">
          <img src="./../../../assets/image/Invitation.png">
          <p>添加提醒</p>
       </div>
       截止时间弹框
        <div style="display:none" ref="showdata" class="slide">
          <picker v-model="show" :data-items="items" @change="onValuesChange" ref="showdatas" >
            <div class="top-content" slot="top-content">
                <div class="top-content-title">
                <button class="cancel" @click.stop="hideDatas()" >取消</button>
                  <span class="title">截止时间</span>
                  <button class="complete" @click.stop="hideData()" >完成</button>
                </div> 
            </div>
          </picker>
       </div>
    </div>
</template>

<script>
export default {
 /* props:{
    complete:{
      type:Boolean
    }
  },*/
  data() {
    return{
      mbyxjShow:false,
      show:false,
      timeDate:[],
      items: [ {
            values: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          },
          {
            values: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日', '31日'],
          },
           {
            values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
          }, {
            values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24','25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36','37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '50', '55', '56', '57', '58','59','00'],
          }
        ]
    }
  },
  methods:{
      onValuesChange(result1, result2, result3, result4) {
        this.timeshow=result1+result2+' '+result3+':'+result4;
      },
      showData() {
        this.show=true;
        this.$refs.showdata.style.display='block';
      },
      hideData() {
        this.$refs.showdata.style.display='none';
        var data=this.timeshow;
        this.timeDate.push(data);
      },
      hideDatas() {
        this.$refs.showdata.style.display='none';
      }
   
  },
 /* created() {
    console.log(this.mbyxjShow);
  },*/
  
}

</script>

<style>
.collegegoal-endtime-wrapper{
  text-align: left;
  background: #f7f7f7;
  width: 100%;
  min-height: 100%;
}
.endtime-btx{
  font-size: 15px;
  color: #333333;
  padding: .65em .8em;
  background: white;
  margin-top: .8em;
  border-bottom: 1px solid #eeeeee;
}
.endtime-tx{
  background: white;
  border-bottom: 1px solid #eeeeee;
  padding: .55em .8em;
  margin-top: .38em;
}
.endtime-tx > img{
  width: 2em;
  height: 2em;
  border-radius: 50%;
  vertical-align: top;
}
.endtime-tx > p{
  display: inline-block;
  font-size: 13px;
  color: #999999;
  margin-top: .5em;
}
.endtime-tx span{
  float: right;
}
.endtime-tx span img{
  width: 1em;
  margin-top: .6em;
}
.addtx{
  background: white;
  border-bottom: 1px solid #eeeeee;
  padding: .55em .8em;
  margin-top: .38em;
}
.addtx img{
  width: 1.5em;
  vertical-align: top;
}
.addtx p{
  display: inline-block;
  font-size: 15px;
  color: #333333;
  margin-top: .1em;
}

.picker-wrapper{
  position: relative!important;
  height:calc(100% - 100px);
}
.picker-wrapper .bottom-content{
  margin-top:-17.5em;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding:1em;
  background: white;
 }  
 .picker-wrapper .top-content{
  text-align: center;
  background: rgba(0,0,0,0);
  height:73%; 
  width: 100%;
 } 
.picker-wrapper .top-content .top-content-title{
    position: absolute;
    bottom:7.14em;
    width: 100%;
    padding:1em 1em 0;
    background: white;
    box-sizing: border-box;
    z-index: 999;
}
 .picker-wrapper .picker-backdrop{
  position: absolute;
  height: 50% !important;
  bottom: 0!important;
 }
  .picker-wrapper .cancel{
    background: transparent;
    border:none;
    color:#888888;
    float: left;
  }
.picker-wrapper .complete{
    background: transparent;
    border:none;
    color:#55b2f5;
    float: right;
}
.picker-wrapper .title{
    display: inline-block;
    font-family: PingFang-SC-Bold;
    font-size: 15px;
    font-weight: 600;
    color: #333333;
}
.slide{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
}
</style> -->