<template>
  <div id="Text">
    <h1>测试页面</h1>
    <div class="content">
      <div class="btn">
        <div class="add" v-throttle="{'time':3000,'fn':add}">增加</div>
      </div>
      <div class="addContent"></div>
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
    add(){
      this.addItem()
      
    },
    addItem(){
      const addContent =document.querySelector('.addContent');
      const divItem =document.createElement('div');
      divItem.className = 'divItem';
      divItem.style.width = '50px';
      divItem.style.height = '50px';
      divItem.style.backgroundColor = 'aquamarine';
      divItem.draggable = true
      divItem.style.margin = '5px'
      divItem.setAttribute('v-on:dragstart','move()')
      addContent.appendChild(divItem)
    },
    move(){
      console.log('ssss');
    }
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
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
#Text {
  width: 100%;
  height: 100%;
  background-color: $bgAnimationColor;
  h1 {
    text-align: center;
    font-size: 25px;
    color: $textColor;
  }
  .content {
    width: 100%;
    height: calc(100vh - 37px);
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;

    .btn{
      padding: 5px;
      .add{
        width: 100px;
        height: 50px;
        border-radius: 5px;
        background-color: $bgColor;
        text-align: center;
        line-height: 50px;
        color: $textColor;
      }
    }
    .addContent{
      flex: 1;
      padding: 10px;
    }
  }
}
</style>