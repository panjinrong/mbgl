<template>
    <div class="collegegoal-cyz-wrapper">
      <v-person :id="id"></v-person>
    </div>
</template>

<script>
import all_person from './all_person'
export default {
  data() {
    return{
      id:this.$route.query.id
    }
  },
  methods:{
    // addcyzShow:function(){
    //   this.$router.push('./collegegoal_addcyz');
    // },
    // setTime() {
    //    this.$router.push('./tx_other');
    //  },
  },
   
 /* created() {
    console.log(this.mbyxjShow);
  },*/
  components:{
    'v-person':all_person
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
  background: white;
  padding: .3em 1em;
  border-bottom: 1px solid #eeeeee;
}
.collegegoal-cyz-wrapper .person-list > img{
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
}
.person-list span img{
  width: 1em;
  margin-top: .6em;
}
.addcyz{
  background: white;
  border-bottom: 1px solid #eeeeee;
  padding: .55em 1.35em;
}
.addcyz img{
  width: 1.6em;
  vertical-align: top;
}
.addcyz p{
  display: inline-block;
  font-size: 15px;
  color: #333333;
  margin-top: .1em;
}
</style>