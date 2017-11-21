<template>
  <div class="confirm-wrapper" >
    <div class="confirm-main">
      <div class="confirm_box">
          恭喜你，子目标创建成功！
      </div>
      <div class="confirm_btn">
        <!-- <button  @click="hideBox()">取消</button> -->
        <button  @click="hideBox()">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['confirmData','mxid'],
    data() {
      return {
        confirm:1,
       }
    },
    methods: {
      showBox() {
      },
      hideBox(){
        // this.confirms=false;
        this.$emit('confirmChild',this.confirm)
      }
    },
     created(){
       // console.log(this.mxid);
    }
   
  }
</script>
<style>
*{
  margin:0;
  padding:0;
}
a:hover,a:visited{
  text-decoration: none;
}
.confirm-wrapper{
  /*font-size: .16rem;*/
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  z-index: 2;
}
.confirm-main{
  width: 60%;
  height: 8em;
  background: white;
  margin: 50% auto;
  border-radius: 6px; 
  box-shadow:  0 0 8px rgba(0,0,0,0.3), 0 0 8px rgba(0,0,0,0.3) inset;
}
.confirm_box{
  height: 5em;
  line-height: 5em;
  text-align: center;
  padding-top: .8rem;
  font-size: 14px;
  color: #333333;
}
.confirm_btn{
  text-align: center;
  margin-top: .5rem;
}
.confirm_btn button{
  width: 100%;
  height: 3em;
  color:#42acfa;
  border-bottom-right-radius:6px;
  border-bottom-left-radius:6px;
  border:none;
  background: #FAFAFA;
  border-top:1px solid #ddd;
  box-shadow: 0 -4px 7px rgba(0,0,0,0.2) inset;
}

</style>


 