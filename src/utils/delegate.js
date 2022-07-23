import Vue from "vue";

//设置防抖指令
Vue.directive("throttle", {
  inserted: (el, bindling) => {
    console.log(bindling.value);
    let time = bindling.value.time || 2 * 1000;
    let timer;
    el.addEventListener("click", (e) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        bindling.value.fn(e);
      }, time);
    });
  },
});
