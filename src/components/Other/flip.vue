<template>
  <div id="flip">
    <el-button type="primary" v-throttle="{ time: 500, fn: addDom }"
      >新增</el-button
    >
    <div class="content"></div>
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
    addDom() {
      const faterDom = document.querySelector(".content");
      //开始字节点数
      let childrenItem = faterDom.children;

      //添加前节点位置
      let startObj = [];
      let arr = {};
      for (let index = 0; index < childrenItem.length; index++) {
        arr = {};
        let content = childrenItem[index].getBoundingClientRect();
        arr.x = content.x;
        arr.y = content.y;
        startObj.push(arr);
      }
      // console.log(startObj);
      // console.log(childrenItem[0]);
      if (childrenItem.length == 24) {
        this.$message({
          message: "以达到最大值",
          type: "warning"
        });
        return;
      }
      //创建节点
      const sonDom = document.createElement("div");
      //给节点赋予类名
      sonDom.className = "box";
      //随机0~255数字
      let RANumber1 = this.raNumber();
      let RANumber2 = this.raNumber();
      let RANumber3 = this.raNumber();
      //给节点添加内容
      const textContent = document.createTextNode(
        `rgba(${RANumber1},${RANumber2},${RANumber3})`
      );
      sonDom.appendChild(textContent);
      //设置样式
      sonDom.style.width = "180px";
      sonDom.style.height = "150px";
      sonDom.style.boxSizing = "border-box";
      sonDom.style.backgroundColor = `rgba(${RANumber1},${RANumber2},${RANumber3},0.8)`;
      sonDom.style.border = "2px solid #fff";
      sonDom.style.boxShadow = "0px 5px 10px #000";
      sonDom.style.marginTop = "10px";
      sonDom.style.marginRight = "10px";
      sonDom.style.color = "#fff";
      sonDom.style.lineHeight = "150px";
      sonDom.style.textAlign = "center";

      faterDom.insertBefore(sonDom, faterDom.firstChild);

      if (childrenItem.length === 1) {
        return;
      }
      //添加后节点位置
      let endObj = [];
      for (let index = 0; index < childrenItem.length; index++) {
        arr = {};
        let content = childrenItem[index].getBoundingClientRect();
        arr.x = content.x;
        arr.y = content.y;
        endObj.push(arr);
      }

      //计算差距
      let differentialAdd = [];
      let info = {};
      endObj.forEach((item, index) => {
        info = {};
        if (index !== 0) {
          info = {
            x: endObj[index - 1].x - item.x,
            y: endObj[index - 1].y - item.y
          };
          differentialAdd.push(info);
        }
      });
      // console.log(differentialAdd);

      for (let index = 0; index < childrenItem.length; index++) {
        if (index !== 0) {
          childrenItem[index].style.transform = `translate(${
            differentialAdd[index - 1].x
          }px,${differentialAdd[index - 1].y}px)`;
          childrenItem[index].style.transition = "";
        }
      }

      setTimeout(() => {
        for (let index = 0; index < childrenItem.length; index++) {
          if (index !== 0) {
            childrenItem[index].style.transform = "";
            childrenItem[index].style.transition = "all 0.5s";
          }
        }
      });
    },
    raNumber() {
      return Math.floor(Math.random() * 200) + 25;
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
#flip {
  padding: 10px;
}
.content {
  display: flex;
  flex-wrap: wrap;
}
</style>
