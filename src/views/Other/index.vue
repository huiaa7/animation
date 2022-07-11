<template>
  <div id="Other">
    <div class="otherItem">
      <div
        class="bgbtn"
        v-for="(item, index) in Object.keys(list)"
        :key="index"
        @click="pushPage(list[item])"
      >
        {{ item }}
      </div>
    </div>
    
    <div class="viewContent">
      <transition name="bounce">
        <router-view></router-view>
      </transition>
    </div>
    
  </div>
</template>

<script>
import { others } from "@/utils/ButtonContent";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      list: others
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    pushPage(path) {
      this.$router.replace(path);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$router.replace(this.list[Object.keys(this.list)[0]]);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
#Other {
  width: 100%;
  height: 100%;
  background-color: $otherBgColor;
  display: flex;
  .otherItem {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;

    .bgbtn {
      @include commonBg;
    }
  }
  .viewContent {
    flex: 1;
    background-color: aquamarine;
    position: fixed;
    z-index: 2;
    width: calc(100% - 300px);
    height: 100%;
    left: 300px;

    //切换动画
    .bounce-enter-to,.bounce-leave-to,.bounce-enter,.bounce-leave{
      opacity: 0;
    }
    .bounce-enter-active {
      animation: bounce-on 1s 0.5s;
    }
    .bounce-leave-active {
      animation: bounce-in 0.5s;
    }
    //离开
    @keyframes bounce-in {
      0% {
        transform: rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: rotate(360deg);
        opacity: 0;
      }
    }
    //进入
    @keyframes bounce-on {
      0% {
        transform:scale(0);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
}

</style>