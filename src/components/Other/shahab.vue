<template>
  <div id="shahab">
    <canvas id="canvas" style="background-color: #000"></canvas>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      canvas: null,
      ctx: null,
      fontSize: 14,
      clos: 0,
      drops: [],
      str: "qwertyuiopasdfghjklzxcvbnm1234567890",
      moniterWidth: 0,
      moniterHeight: 0
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    createCanvas() {
      this.canvas = document.querySelector("#canvas");
      this.ctx = this.canvas.getContext("2d");
      const moniterObj = window.screen;
      this.moniterWidth = moniterObj.width;
      this.moniterHeight = moniterObj.height;

      this.canvas.width = this.moniterWidth;
      this.canvas.height = this.moniterHeight;

      this.clos = Math.floor(this.moniterWidth / this.fontSize);

      for (let index = 0; index < this.clos; index++) {
        this.drops.push(0);
      }
      setInterval(this.drawString, 30);
    },

    drawString() {
      this.ctx.fillStyle = "rgba(0,0,0,0.05)";
      this.ctx.fillRect(0, 0, this.moniterWidth, this.moniterHeight);
      this.ctx.font = "0" + this.fontSize + "px 微软雅黑";
      this.ctx.fillStyle = "#00ff00";

      for (let index = 0; index < this.clos; index++) {
        let x = index * this.fontSize;
        let y = this.drops[index] * this.fontSize;
        this.ctx.fillText(
          this.str[Math.floor(Math.random() * this.str.length)],
          x,
          y
        );
        console.log(y, this.moniterHeight, Math.random());
        if (y > this.moniterHeight && Math.random() > 0.99) {
          this.drops[index] = 0;
        }
        this.drops[index]++;
        // console.log(this.drops);
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.createCanvas();
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
#shahab {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>