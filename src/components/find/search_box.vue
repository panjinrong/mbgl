<template>
  <div class="mbgc-search-wrapper">
      <div class="mbgc-search">
          <input type="text" name="search" placeholder="搜索" @click="searchShow()">
      </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods:{
      searchShow() {
        this.$router.push('/xymb_search');
      }
  },

}
</script>

<style>
.mbgc-search-wrapper{
  padding:0 .75em;
}
.mbgc-search-wrapper .mbgc-search input{
  width: 100%;
  padding: .6em 0 .3em;
  border:1px solid #eeeeee;
  border-radius: 5px;
  margin-top: .8em;
  text-align: center;
  background: url(./../../assets/image/icons.png) no-repeat 43% center;
  background-size: 1em 1em;
  background-color: white;
  /*box-shadow: 0 0 5px rgba(0,0,0,0.3) inset;*/
 /* margin-left: 1em;*/
}
</style>

