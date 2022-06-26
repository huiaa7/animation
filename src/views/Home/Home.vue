<template>
  <div class="home">
    <div
      class="buttonItem"
      v-for="(item, index) in Object.keys(list)"
      :key="index"
      @click="bgChange(list[item])"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { datas } from "@/utils/ButtonContent";
export default {
  name: "Home",
  data() {
    return {
      list: datas
    };
  },
  components: {},
  methods: {
    bgChange(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(225, 223, 223);
  font-size: $textSize;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .buttonItem {
    width: 200px;
    height: 200px;
    @include border(#fff);
    text-align: center;
    box-sizing: border-box;
    line-height: 200px;
    color: $textColor;
    background-color: $bgColor;
    margin: 6px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 1);
  }
}
</style>


