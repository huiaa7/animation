<template>
  <div id="bgAnimations">
    <div class="bgItem">
      <div class="bgBtn atLarge">普通动画</div>
      <div class="bgBtn pulldown">下拉变色动画</div>
      <div class="bgBtn horizontal">横向变色动画</div>
      <div class="bgBtn diagonal">对角变色动画</div>
      <div class="bgBtn bilateria">两侧变色动画</div>
      <div class="bgBtn glass">光滑过玻璃</div>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {};
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
#bgAnimations {
  width: 100%;
  height: 100%;
  background-color: $bgAnimationColor;
  .bgItem {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px;

    .bgBtn {
      @include commonBg;
    }

    //普通动画
    .atLarge:hover {
      color: $bgColor;
      background-color: $textColor;
      border-color: $bgColor;
      @include allTransition(1s);
    }

    //下拉变色动画
    .pulldown {
      @include allTransition(1s);
      &:after {
        content: "";
        width: 100%;
        height: 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: $textColor;
        @include allTransition(1s);
        border-radius: 0 0 20px 20px;
      }
      &:hover {
        color: $bgColor;
        border-color: $bgColor;
        &:after {
          height: 100%;
        }
      }
    }

    //横向变色动画
    .horizontal {
      @include allTransition(1s);
      &:after {
        content: "";
        width: 0;
        height: 100%;
        background-color: $textColor;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        @include allTransition(1s);
        border-radius: 0 20px 20px 0;
      }
      &:hover {
        color: $bgColor;
        border-color: $bgColor;
        &:after {
          width: 100%;
        }
      }
    }

    //对角变色动画
    .diagonal {
      @include allTransition(1s);
      &:after,
      &:before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        @include allTransition(1s);
        background-color: $textColor;
        opacity: 0.8;
        z-index: -1;
      }
      &:after {
        left: 0;
        top: 0;
        border-bottom-right-radius: 20px;
      }
      &:before {
        bottom: 0;
        right: 0;
        border-top-left-radius: 20px;
      }
      &:hover {
        color: $bgColor;
        border-color: $bgColor;
        &:after,
        &:before {
          width: 100%;
          height: 100%;
        }
      }
    }

    //两侧变色动画
    .bilateria {
      @include allTransition(1s);
      &:after {
        content: "";
        width: 0;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: $textColor;
        z-index: -1;
        opacity: 0;
        border-radius: 20px;
        @include allTransition(1s);
      }
      &:hover {
        color: $bgColor;
        border-color: $bgColor;
        &:after {
          width: 100%;
          opacity: 1;
        }
      }
    }

    //光滑过玻璃
    .glass {
      &:after {
        content: "";
        width: 120%;
        height: 50%;
        background-image: linear-gradient(
          rgba(0, 0, 0, 0),
          rgba(255, 255, 255, 0.6),
          rgba(0, 0, 0, 0)
        );
        position: absolute;
        left: 0;
        top: 50%;
        transform: rotate(-45deg) translate(0, -250px);
      }
      &:hover:after {
        @include allTransition(1.5s);
        transform: rotate(-45deg) translate(0, 250px);
      }
    }
  }
}
</style>