<template>
  <div class="slide">
          <mt-datetime-picker
            ref="picker1"
            type="datetime"
            v-model="value1"
            month-format="{value} 月"
            date-format="{value} 日"
            :startDate="startDate"
            :endDate="endDate"
            @confirm="handleChange">
          </mt-datetime-picker>
       </div>
</template>
<script>
  export default {
    props:['data','num','gjdid'],
  data() {
    return {
      value: null,
      value1: null,
      date1:'',
      startDate: new Date('2014-01-01'),
      endDate: new Date(),
      startHour: new Date('0'),
      time:'',
      type:1,
      content:'修改截止时间'
    }
  },
  methods:{
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        this.date1 = value.toString();  
        var time=this.date1.split(' ');
        var m=1;
        time.forEach(function(r,i){
          switch(r){
                   case 'Jan':
                        m=1
                        break;
                   case 'Feb':
                        m=2
                        break;
                   case 'Mar':
                        m=3
                        break;
                   case 'Apr':
                        m=4
                        break;
                   case 'May':
                        m=5
                        break;
                   case 'Jun':
                        m=6
                        break;
                   case 'Jul':
                        m=7
                        break;
                   case 'Aug':
                        m=8
                        break;
                   case 'Sep':
                        m=9
                        break;
                   case 'Oct':
                        m=10
                        break;
                   case 'Nov':
                        m=11
                        break;
                   case 'Dec':
                        m=12
                        break;
                }
        })
        if(m<10){
         this.$emit('child-time',time[3]+'-'+0+m+'-'+time[2]+' '+time[4]);
         this.$emit('child-info',1);
         this.time=time[3]+'-'+0+m+'-'+time[2]+' '+time[4]
        // console.log(time[3]+'-'+0+m+'-'+time[2]+'-'+time[4])
        }else{

         this.$emit('child-time',time[3]+'-'+m+'-'+time[2]+' '+time[4]);
         this.$emit('child-info',1);
         this.time=time[3]+'-'+m+'-'+time[2]+' '+time[4]
        // console.log(time[3]+'-'+m+'-'+time[2]+'-'+time[4])
        }
        this.$http.get('http://192.168.0.101:8081/target/target_xgjzsj?userid=11204050220&function_id=20150101&ticket=7A459E71400C19A4A813994B79BC4E41&gjdid='+this.gjdid+'&jzsj='+ this.time).then(res=>{
          console.log(res.data);
          })
        this.$http.get('http://192.168.0.56:8081/target/target_czjl?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&id=fa8dc10a4b6e4212ad308a5e5eb37496&type='+this.type+'&content='+this.content).then(res=>{
          })
        },
  },
  mounted(){
  }
}
</script>
<style>
.slide{
  /*position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;*/
  /*z-index: 99;*/
}
</style> 
