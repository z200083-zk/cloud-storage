<template>
  <div id="content">
    <div class="image">
      <div class="header center">图片</div>
      <div class="main">
        <div class="img-list">
          <div class="img-item center" v-for="(item,i) in res" :key="i">
            <img :src="`http://127.0.0.1:20083/image/${item.fileName}`" />
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import { getFileList } from "@/ultis/http";
export default {
  data() {
    return {
      res: []
    };
  },
  async created() {
    // if (cat == "set") {
    //   return;
    // }
    let res = await getFileList("image");
    this.res = res.data;
    console.log(this.res);
  }
};
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 100%;
  .header {
    height: 10vh;
  }
  .main {
    height: 80vh;
    overflow: hidden;
    .img-list {
      height: 100%;
      overflow-y: scroll;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      .img-item {
        width: 50vw;
        height: 50vw;
        padding: 2vw 3vw;
        float: left;
        box-sizing: border-box;
        max-width: 300px;
        max-height: 300px;
        img {
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
  .footer {
    height: 5vh;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>