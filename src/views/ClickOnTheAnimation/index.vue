<template>
  <div id="clickOnTheAnimation">
    <div class="clickItem">
      <div class="bgBtn bubles" v-throttle="{ time: 200, fn: pop }">
        点击泡泡
      </div>
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
  methods: {
    pop(e) {
      // 循环一次生成30个粒子
      for (let i = 0; i < 30; i++) {
        // 循环一次生成30个粒子
        this.createParticle(e.clientX, e.clientY);
      }
    },
    createParticle(x, y) {
      // 创建自定义粒子元素
      const particle = document.createElement("div");
      particle.classList.add("particle");
      // 将元素添加道body中
      // document.body.appendChild(particle);
      document.querySelector(".clickItem").appendChild(particle);
      // 计算从5px到25px的随机大小
      const size = Math.floor(Math.random() * 20 + 5);
      // console.log(size);
      // 将大小应用于每个粒子
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = "50%";
      particle.style.pointerEvents = "none";
      particle.style.position = "fixed";
      particle.style.top = "0";
      particle.style.left = "0";
      particle.style.opacity = "0";
      particle.style.zIndex = "1";

      // 在蓝色/紫色调色板中生成随机颜色
      particle.style.background = `hsl(${Math.random() * 90 + 180},70%,60%)`;
      // 在距离鼠标75像素的范围内生成随机的x和y目标
      const destinationX = x + (Math.random() - 0.5) * 2 * 75;
      const destinationY = y + (Math.random() - 0.5) * 2 * 75;
      // 将动画存储在变量中，因为稍后我们将需要它
      const animation = particle.animate(
        [
          {
            // 设置粒子的原点位置
            // 我们将粒子偏移一半大小，以使其围绕鼠标居中
            transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
            opacity: 1
          },
          {
            // 我们将最终坐标定义为第二个关键帧
            transform: `translate(${destinationX}px, ${destinationY}px)`,
            opacity: 0
          }
        ],
        {
          // 将随机持续时间设置为500到1500ms
          duration: 500 + Math.random() * 1000,
          easing: "cubic-bezier(0,.9,.57,1)",
          // 将每个粒子延迟从0ms到200ms的随机值
          delay: Math.random() * 1000
        }
      );
      // 动画结束后，从DOM中删除元素
      animation.onfinish = () => {
        particle.remove();
      };
    }
  },
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
#clickOnTheAnimation {
  width: 100%;
  height: 100%;
  background-color: $bgAnimationColor;
  // overflow: hidden;
  .clickItem {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;

    .bgBtn {
      @include commonBg;
    }
    .bubles {
      &:focus {
        outline: 0 !important;
      }
    }
  }
}
</style>