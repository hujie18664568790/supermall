<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>

    <div :style="activeStyle" :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>

  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  // 父传子
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick() {
      console.log(this.path);
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex:1;/*平均分布*/
    text-align:center;
    height:49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width:24px;
    height:24px;
    margin-top: 3px;
    vertical-align: middle;/*去除图片下面默认的3px*/
  }
  .active{
    color:red;
  }
</style>
