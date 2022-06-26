<template>
  <div id="pulling">
    <ul
      id="container"
      @dragstart="AccessElements($event)"
      @dragover="allowDrop($event)"
    >
      <li class="ele" draggable="true">1</li>
      <li class="ele" draggable="true">2</li>
      <li class="ele" draggable="true">3</li>
      <li class="ele" draggable="true">4</li>
      <li class="ele" draggable="true">5</li>
      <li class="ele" draggable="true">6</li>
      <li class="ele" draggable="true">7</li>
      <li class="ele" draggable="true">8</li>
    </ul>
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
      draging: null
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    AccessElements(event) {
      event.dataTransfer.setData("te", event.target.innerText);
      this.draging = event.target;
    },
    allowDrop(event) {
      event.preventDefault();
      const target = event.target;
      if (target.nodeName === "LI" && target !== this.draging) {
        // 获取初始位置
        let targetRect = target.getBoundingClientRect();
        let dragingRect = this.draging.getBoundingClientRect();
        if (target) {
          // 判断是否动画元素
          if (target.animated) {
            return;
          }
        }
        if (this._index(this.draging) < this._index(target)) {
          // 目标比元素大，插到其后面
          // extSibling下一个兄弟元素
          target.parentNode.insertBefore(this.draging, target.nextSibling);
        } else {
          // 目标比元素小，插到其前面
          target.parentNode.insertBefore(this.draging, target);
        }
        this._animate(dragingRect, this.draging);
        this._animate(targetRect, target);
      }
    },
    // 获取元素在父元素中的index
    _index(el) {
      var index = 0;
      if (!el || !el.parentNode) {
        return -1;
      }
      // previousElementSibling：上一个兄弟元素
      while (el && (el = el.previousElementSibling)) {
        index++;
      }
      return index;
    },
    // 触发动画
    _animate(prevRect, target) {
      const ms = 100;
      if (ms) {
        var currentRect = target.getBoundingClientRect();
        if (prevRect.nodeType === 1) {
          prevRect = prevRect.getBoundingClientRect();
        }
        this._css(target, "transition", "none");
        this._css(
          target,
          "transform",
          "translate3d(" +
            (prevRect.left - currentRect.left) +
            "px," +
            (prevRect.top - currentRect.top) +
            "px,0)"
        );

        target.offsetWidth; // 触发重绘

        this._css(target, "transition", "all " + ms + "ms");
        this._css(target, "transform", "translate3d(0,0,0)");
        // 事件到了之后把transition和transform清空
        clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          // this._css(target, "transition", "");
          // this._css(target, "transform", "");
          target.animated = false;
        }, ms);
      }
    },
    _css(el, prop, val) {
      var style = el && el.style;
      if (style) {
        if (val === void 0) {
          if (document.defaultView && document.defaultView.getComputedStyle) {
            val = document.defaultView.getComputedStyle(el, "");
          } else if (el.currentStyle) {
            val = el.currentStyle;
          }
          return prop === void 0 ? val : val[prop];
        } else {
          if (!(prop in style)) {
            prop = "-webkit-" + prop;
          }
          style[prop] = val + (typeof val === "string" ? "" : "px");
        }
      }
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
#pulling {
  #container {
    list-style: none;
    margin: 200px;
    font-size: 0;
    .ele {
      font-size: 16px;
      width: 100px;
      height: 40px;
      border: 1px solid #999;
      background: #ea6e59;
      margin: 2px 0;
      border-radius: 10px;
      padding-left: 10px;
      color: white;
      cursor: move;
    }
  }
}
</style>