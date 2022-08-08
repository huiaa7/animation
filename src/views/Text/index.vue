<template>
  <div id="Text">
    <h1>测试页面</h1>
    <div class="content">
      <el-upload
        class="avatar-uploader"
        action="http://localhost:3000/api/upload"
        :data="this.avatarForm"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :on-error="handleAvatarError"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon">修改</i>
      </el-upload>
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
    return {
      imageUrl: false,
      avatarForm: {}
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleAvatarSuccess(res) {
      if (res.status === "1") return this.$message.error(res.message);
      console.log(res.srcult);
      this.imageUrl = `http://localhost:3000/public/${res.srcult}`;
      this.$message.success("修改头像成功");
    },
    beforeAvatarUpload(file) {
      // console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!(isJPG || isPNG)) {
        this.$message.error("上传的图片只能是JPG格式");
      }
      if (!isLt2M) {
        this.$message.error("上传的图片大小不能超过2MB");
      }
      return (isJPG || isPNG) && isLt2M;
    },
    handleAvatarError(err) {
      console.log(err);
    }
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    const name = "辉辉";
    const user_id = "123";
    this.avatarForm = {
      name,
      user_id
    };
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

    .avatar-uploader {
      width: 200px;
      height: 200px;
      display: block;
      background-color: rgb(216, 217, 217);
      text-align: center;
      ::v-deep .el-upload {
        box-sizing: border-box;
        width: 200px;
        height: 200px;
        border: 1px dashed $bgColor;
        line-height: 200px;
        color: $bgColor;
      }
    }
  }
}
</style>