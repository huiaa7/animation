<template>
  <div id="bubbles">
    <ul class="bg-bubbles">
      <li v-for="item in 10" :key="item" class="bubble"></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
#bubbles {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #50a3a2, #53e3a6);
  .bg-bubbles {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @for $i from 0 through 10 {
      .bubble:nth-child(#{$i}) {
        position: absolute;
        bottom: -160px;
        left: #{random(100)} + "%";
        $width: random(100) + px;
        $len: round(random() * 10) / 10;
        width: $width;
        height: $width;
        background-color: rgba(255, 255, 255, $len);
        animation: square #{random(10)}s infinite #{random(5)}s;
      }
    }
  }
}
//自定义square动画
@keyframes square {
  0% {
    opacity: 0.5;
    transform: translateY(0px) rotate(45deg);
  }
  25% {
    opacity: 0.75;
    transform: translateY(-400px) rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: translateY(-600px) rotate(135deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-1000px) rotate(180deg);
  }
}
</style>