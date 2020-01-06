<template>
  <div id="upload">
    <input type="file" id="file" ref="asd" />
    <div class="warp-content" @click="fn">点击上传</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      file: ""
    };
  },
  methods: {
    fn() {
      console.log("rrr");
      let formData = new window.FormData();
      formData.append(
        "userfile",
        this.$refs.asd.files[0]
      );
      console.log(this.$refs.asd.files[0]);
      let options = {
        // 设置axios的参数
        url: "http://127.0.0.1:3001/upload",
        data: formData,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      axios(options).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss">
#upload {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #2559d6;
  input {
    width: 300px;
    height: 100px;
  }
  .warp-content {
    width: 80px;
    height: 30px;
    border: 1px solid #000;
    color: #000;
    text-align: center;
    line-height: 30px;
    background-color: #fff;
  }
}
</style>