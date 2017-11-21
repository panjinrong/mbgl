<template>
  <div class="mbgc-cptm-wrapper">
    <transition-group name="fade">
      <div class="mbgc-cptm-list" v-show="sum===index" v-for="(lists,index) in data" :key="'a'+index">
          <div class="mbgc-cptm-title" >
              <p>测评.<span>{{index+1}}</span>/<span>{{data.length}}</span>题</p>
          </div>
          <div class="mbgc-cptm-tm">
              <h3>{{index+1}}、{{lists.question}}</h3>
              <p v-for="(item,$index) in data[index].answer " @click.stop="selecedIf($index,index,item.zm)" :data-id="item.zm">
               <span v-if="label[index]===$index"  >
                   <img src="./../../assets/image/yxz.png">
               </span>
               <span v-else="">
                   <img src="./../../assets/image/wxz.png">
               </span> 
                {{item.result}}
            </p> 
          </div>
      </div>
      </transition-group>
     <div class="mbgc-cptm-button" @click="nextShow()" v-show="sum<1">
         <button>确认</button>
     </div> 
      <div class="mbgc-cptm-buttons" v-if="sum>0&&sum<24">
          <button @click="preShow()">返回上一题</button>
          <button @click="nextShow()">确认</button> 
      </div>
      <div class="mbgc-cptm-diagle" v-if="sum>23">
          <div class="mbgc-cptm-main">
              <img src="./../../assets/image/wccp.png">
              <p>测评完成，即将显示测评结果！</p>
              <button @click="resultShow();">确定</button>
          </div>
      </div>
  </div>
</template>

<script>
/*import span from './find_mbgc_select'*/
export default {
  data() {
    return {
      sum:0,
      selecedif:false,
      selecedelse:false,
      label:[],
      data:'',
      zd:[],
    }
  },
  methods:{
    nextShow() {
      // if((this.sum+1)===this.label.length){
      this.sum++;
      // }else{
      // }
    },
    preShow() {
      this.sum--;
      if(this.sum===-1){
        this.sum=0;
      }
    },
    selecedIf:function(index,i,zm){
      this.zd.push(zm);
       this.label.push(index);
        if(i===i){
          this.label[i]=index;
        }
        if(this.label.length>(i+1)){

          this.label.pop();
        }
    },
    selecedElse:function(index) {
      this.index=this.sum;
      this.selecedif = false;
      this.selecedelse = !this.selecedelse;
      this.sum++;
    },
    resultShow:function(){
      console.log(this.zd);
      var P=0,E=0,S=0,N=0,T=0,J=0,F=0,E=0,I=0,T=0;
      if(this.zd){
        this.zd.forEach(function(r,i){
          switch(r){
                   case 'P':
                        P++
                        break;
                   case 'J':
                        J++
                        break;
                   case 'E':
                        E++
                        break;
                   case 'I':
                        I++
                        break;
                   case 'S':
                        S++
                        break;
                   case 'N':
                        N++
                        break;
                   case 'T':
                        T++
                        break;
                   case 'F':
                        F++
                        break;
                }
        })
        var conclusion= (I>=E ? 'I':'E')+( N>=S ? 'N':'S')+( F>=T ? 'F':'T')+(P >=J ? 'P':'J') ;
        // var obj = {};
        //   obj.E = E;obj.I = I;obj.S = S;obj.N = N;obj.T = T;obj.F = F;obj.J = J;obj.P = P;
        // console.log(obj);
        console.log(conclusion);
        this.$router.push({path:'./mbgc_result',query:{answer:conclusion}});
      }
    }
  },
  created(){
    var _this=this;
    this.$http.get('http://192.168.0.56:8081/discovery/getQuestions?userid=11204050220&ticket=7A459E71400C19A4A813994B79BC4E41&function_id=20150101').then(res=>{
      _this.data=res.data.content;
      // console.log( res.data);
    })
  },
}
</script>

<style>
.mbgc-cptm-wrapper{
  background: #f7f7f7;
  height: 100%;
  position: relative;
  overflow-x: hidden;
}
.mbgc-cptm-list{
  background: white;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 16em;
  box-sizing: border-box;
}
.mbgc-cptm-list .mbgc-cptm-title p{
  font-family: PingFang-SC-Bold;
  font-size: 18px;
  padding: .83em 0;
}
.mbgc-cptm-list .mbgc-cptm-title p span{
  color:#55b2f5;
}
.mbgc-cptm-list .mbgc-cptm-tm{
  text-align: left;
  /*padding-bottom: 6.15em;*/
}
.mbgc-cptm-list .mbgc-cptm-tm h3{
  font-size: 17px;
  color: #555555; 
  margin:.8em 0 .5em .7em;
}
.mbgc-cptm-list .mbgc-cptm-tm p{
  font-size: 15px;
  color: #999999; 
  margin-left: 2.5em;
  line-height: 2.2em;
}
.mbgc-cptm-list .mbgc-cptm-tm p span{
  display: inline-block;
  margin-right: .5em;
}
.mbgc-cptm-list .mbgc-cptm-tm p span img{
  width: 1em;
}
.mbgc-cptm-wrapper .mbgc-cptm-button,.mbgc-cptm-wrapper .mbgc-cptm-buttons{
  /*margin-top: .88em;*/
  /*font-size: 0;*/
  position: absolute;
  width: 100%;
  top: 17em;
}
.mbgc-cptm-wrapper .mbgc-cptm-button button{
  width: 90%;
  padding: .5em 0;
  font-size: 18px;
  color: white;
  background: #55b2f5;
  border:none;
  margin-top: 1em;
  border-radius: 5px;
}
.mbgc-cptm-wrapper .mbgc-cptm-buttons button{
  width: calc(90%/2);
  padding: .5em 0;
  font-size: 18px;
  color: white;
  background: #E5E5E5;
  border:none;

}
 .mbgc-cptm-wrapper .mbgc-cptm-buttons button:nth-child(1){
  background: #E5E5E5;
  color: #999999;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.mbgc-cptm-wrapper .mbgc-cptm-buttons button:nth-child(2){
  background: #55b2f5;
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
} 
.mbgc-cptm-wrapper .mbgc-cptm-diagle{
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.mbgc-cptm-diagle .mbgc-cptm-main{
  width: 80%;
  background: white;
  margin: 10em auto;
  border-radius: 5px;
}
.mbgc-cptm-diagle .mbgc-cptm-main img{
  height: 4em;
  margin: 2em 0 0;
}
.mbgc-cptm-diagle .mbgc-cptm-main p{
  font-size: 14px;
  color: #333333;
  margin:1.35em 0;
}
.mbgc-cptm-diagle .mbgc-cptm-main button{
  width: 100%;
  color: white;
  padding: 1em 0;
  background: #55b2f5;
  margin-top: .1em;
  border:none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
.fade-enter-active,.fade-leave-active{
  transition: all .3s ease;
  opacity: 1;
}
.fade-enter,.fade-leave{
  opacity: 0;
  transform: translateX(100px);
}
</style>

