<template>
  <div id="broderAnimation">
    <div class="broderItem">
      <div class="bgBtn ltr">左到右</div>
      <div class="bgBtn centerOut">中间两边</div>
      <div class="bgBtn hornsBorder">两角边框</div>
      <div class="bgBtn dottedLine">虚线动画</div>
      <div class="bgBtn broderDottedLine">边框换虚线</div>
      <div class="bgBtn broderSports">边框运动</div>
      <div class="bgBtn brodersSports">双边框运动</div>
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
#broderAnimation {
  width: 100%;
  height: 100%;
  background-color: $bgAnimationColor;

  .broderItem {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;

    .bgBtn {
      @include commonBg;
      border-radius: 0px;
      border: 0px;
    }

    //左到右
    .ltr {
      &:after {
        content: "";
        width: 0;
        height: 4px;
        background-color: $broderColor;
        position: absolute;
        bottom: 0;
        left: 0;
        @include allTransition(1s);
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }
    }

    //中间两边
    .centerOut {
      &:after {
        content: "";
        width: 0;
        height: 4px;
        background-color: $broderColor;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        @include allTransition(1s);
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }
    }

    //两角边框
    .hornsBorder {
      border: 2px solid $broderColor;
      overflow: visible;
      &:after,
      &:before {
        content: "";
        width: 50px;
        height: 50px;
        position: absolute;
        @include allTransition(1s);
      }
      &:after {
        top: -10px;
        left: -10px;
        border-top: 2px solid $broderColor;
        border-left: 2px solid $broderColor;
      }
      &:before {
        right: -10px;
        bottom: -10px;
        border-right: 2px solid $broderColor;
        border-bottom: 2px solid $broderColor;
      }
      &:hover {
        &:after,
        &:before {
          width: calc(100% + 18px);
          height: calc(100% + 18px);
        }
      }
    }

    //虚线动画
    .dottedLine {
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(90deg, $broderColor 50%, transparent 0)
            repeat-x,
          linear-gradient(90deg, $broderColor 50%, transparent 0) repeat-x,
          linear-gradient(0deg, $broderColor 50%, transparent 0) repeat-y,
          linear-gradient(0deg, $broderColor 50%, transparent 0) repeat-y;
        background-size: 6px 4px, 6px 4px, 4px 6px, 4px 6px;
        background-position: 0 0, 0 100%, 0 0, 100% 0;
      }
      &:hover {
        &:after {
          animation: moveDotted 1s linear infinite;
        }
      }
      @keyframes moveDotted {
        100% {
          background-position: 6px 0, -6px 100%, 0 -6px, 100% 6px;
        }
      }
    }

    //边框换虚线
    .broderDottedLine {
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        outline: 4px $broderColor solid; /* 元素周围的轮廓 */
        outline-offset: -4px; /* 设置轮廓框架在 border 边缘外的偏移 */
        background: linear-gradient(90deg, $broderColor 50%, transparent 0)
            repeat-x,
          linear-gradient(90deg, $broderColor 50%, transparent 0) repeat-x,
          linear-gradient(0deg, $broderColor 50%, transparent 0) repeat-y,
          linear-gradient(0deg, $broderColor 50%, transparent 0) repeat-y;
        background-size: 6px 4px, 6px 4px, 4px 6px, 4px 6px;
        background-position: 0 0, 0 100%, 0 0, 100% 0;
      }
      &:hover {
        &:after {
          animation: delBroderMoveDotted 1s linear infinite;
          outline: none;
        }
      }
      @keyframes delBroderMoveDotted {
        100% {
          background-position: 6px 0, -6px 100%, 0 -6px, 100% 6px;
        }
      }
    }

    //边框运动
    .broderSports {
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        animation: Motion 2s infinite linear;
        @include border(#fff);
      }
      @keyframes Motion {
        0%,
        100% {
          clip-path: inset(95% 0 0 0);
        }
        25% {
          clip-path: inset(0 0 0 95%);
        }
        50% {
          clip-path: inset(0 0 95% 0);
        }
        75% {
          clip-path: inset(0 95% 0 0);
        }
      }
    }

    //双边框运动
    .brodersSports {
      overflow: visible;
      border: 2px solid #fff;
      &:after,
      &:before {
        content: "";
        position: absolute;
        left: -10px;
        top: -10px;
        bottom: -10px;
        right: -10px;
        @include border(#fff);
      }
      &:after {
        animation: afterMotion 2s infinite linear;
      }
      &:before {
        animation: beforeMotion 2s infinite linear;
      }
      @keyframes afterMotion {
        0%,
        100% {
          clip-path: inset(0 0 95% 0);
        }
        25% {
          clip-path: inset(0 95% 0 0);
        }
        50% {
          clip-path: inset(95% 0 0 0);
        }
        75% {
          clip-path: inset(0 0 0 95%);
        }
      }
      @keyframes beforeMotion {
        0%,
        100% {
          clip-path: inset(95% 0 0 0);
        }
        25% {
          clip-path: inset(0 0 0 95%);
        }
        50% {
          clip-path: inset(0 0 95% 0);
        }
        75% {
          clip-path: inset(0 95% 0 0);
        }
      }
    }
  }
}
</style>