<template>
  <div class="content">
    <div class="header center">
      <div style="font-size:20px;">{{currentPage.text}}</div>
    </div>
    <!-- 图片 -->
    <div class="img-main" v-if="currentPage.cat === 'image'">
      <div class="img-list" v-if="!isDownload">
        <div class="img-item center" v-for="(item,i) in res" :key="i">
          <img :src="`https://m.z200083.xyz/media/image/${item.fileName}`" @click="tapDown(item)" />
        </div>
      </div>
    </div>
    <!-- 其它 -->
    <div class="video-main" v-else>
      <div class="video-list" v-if="!isDownload">
        <div class="video-item" v-for="(item,i) in res" :key="i" @click="tapDown(item)">
          <img :src="currentPage.data" />
          <div class="video-details">
            <div>{{item.fileName}}</div>
            <div class="video-details-size">{{item.details.size | layoutSize}}</div>
          </div>
        </div>
        <div v-if="res.length <= 0" class="center" style="width:100%;height:100%;color: #000;">空</div>
      </div>
    </div>
    <!-- 下载 -->
    <div class="download" v-if="isDownload">
      <div class="download-box">
        <img
          class="download-img"
          :src="`https://m.z200083.xyz/media/image/${currentData.fileName}`"
          v-if="currentPage.cat === 'image'"
        />
        <img class="download-img" :src="currentPage.data" v-else />
        <div class="download-details">
          <div>{{currentData.fileName}}</div>
          <div>{{currentData.details.size | layoutSize}}</div>
        </div>
        <div class="download-btn" @click="downloadFile(currentData.fileName)">下载</div>
        <div class="download-back" @click="isDownload=false">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAfBJREFUSMfFlM9LMkEYx5/WFX/QoajDagsieDIWYR7WTkbQIaiEEKS7Fw081f8gnUXoIHjzoocguxR2aVsPuyfdjkYQhntQQiJ0dXft4OvlDanX16XvZQ4zz3w/852ZB2DBCpaCpWBpeRlrWMPa1RUWsYjF09NZ6+lFGXMcx3Hc6qrdZrfZbdfXoIIK6sqKLuiCLpycWAbAx/k4H2cYkzVZk725GdNjekxrGoUUUri9XY/VY/VYtzurnprXOBwNR8NRv9/0mB7TIwjgAAc4Oh1XwpVwJXZ3ZVZmZXa28dwAfI7P8bnNTcNn+AzfwwOIIIL4+Njz9rw97/6+2BW7Yvf9/X+T/SIkSJBsbZERGZFRp0OapEmaFxd/zjF3kt8bIyLiwcFk/PggDdIgjfPzyezSkmXGJEMyJHN4iElMYlLTJgBnZ4v2sS66RenXruALyG89wr81/YaYxjSmX18nyVxeBrKBbCDrcPzrfnNHOG1Eht/wG/7bW3CDG9wvL868M+/MHx39tB/MHZ1UkSpS5fmZalNtqh2JgAYaaOvr/UK/0C/c3fEtvsW31tYsA5hKLstluayqw+qwOqzu7IAOOuijkSmZkind34dSoVQotbFhGcBUiqIoivL2NjAGxsDY2wMGGGCenugIHaEjx8ez6j4BlSzbwfddYf0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDEtMDhUMTU6Mzc6NTMrMDg6MDDvz2ruAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTA4VDE1OjM3OjUzKzA4OjAwnpLSUgAAAEp0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fMGhlMmZ2dW0xZ3ptL2Zhbmh1aS5zdmcVkc6uAAAAAElFTkSuQmCC"
          />
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { getFileList, getFile } from "@/ultis/http";
export default {
  data() {
    return {
      res: [],
      isDownload: false,
      currentData: {},
      currentPage: this.$route.params.item
    };
  },
  created() {
    this.onLoad();
  },
  filters: {
    layoutSize(size) {
      let newSize = 0;
      if (size / 1024 >= 1024) {
        newSize = Math.floor((size * 100) / 1024 / 1024) / 100 + "MB";
      } else {
        newSize = Math.floor((size * 100) / 1024) / 100 + "KB";
      }
      return newSize;
    }
  },
  methods: {
    tapDown(item) {
      this.currentData = item;
      this.isDownload = true;
    },
    downloadFile() {
      let res = getFile(this.currentPage.cat, this.currentData.fileName);
      this.currentUrl = res;
      window.open(this.currentUrl);
    },
    async onLoad() {
      this.res = [];
      let res = await getFileList(this.currentPage.cat);
      this.res = res.data;
    },
    refreshPage() {
      this.currentPage = this.$route.params.item;
      this.onLoad();
    }
  },
  watch: {
    $route: "refreshPage"
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  .header {
    height: 10vh;
  }
  .img-main {
    width: 100%;
    height: 80vh;
    overflow: hidden;
    padding: 0 3vw;
    box-sizing: border-box;
    position: relative;
    .img-list {
      height: 100%;
      overflow-y: scroll;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      .img-item {
        width: 46vw;
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
  .video-main {
    height: 80vh;
    overflow: hidden;
    padding: 0 3vw;
    box-sizing: border-box;
    position: relative;
    .video-list {
      height: 100%;
      overflow-y: scroll;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      background-color: #fff;
      border-radius: 10px;
      .video-item {
        width: 100%;
        float: left;
        color: #000;
        box-sizing: border-box;
        padding: 2vw 3vw 2vw 1vw;
        display: flex;
        align-items: center;
        border-top: 1px solid #c7c7c7;
        border-bottom: 1px solid #c7c7c7;
        img {
          width: 10vw;
          object-fit: contain;
          margin-right: 2vw;
        }
        .video-details {
          display: flex;
          flex-direction: column;
          .video-details-size {
            font-size: 12px;
            color: #8a8a8a;
          }
        }
      }
    }
  }
  .download {
    width: 100%;
    height: 80vh;
    box-sizing: border-box;
    padding: 0 3vw;
    position: fixed;
    top: 15vh;
    z-index: 1;
    .download-box {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      color: #000;
      .download-img {
        width: 40%;
        max-width: 400px;
        position: absolute;
        top: 10%;
      }
      .download-details {
        position: absolute;
        top: 55%;
        text-align: center;
        div {
          margin-bottom: 5px;
        }
      }
      .download-btn {
        width: 40vw;
        height: 40px;
        color: #fff;
        text-align: center;
        line-height: 40px;
        border-radius: 10px;
        background-color: #039aff;
        position: absolute;
        bottom: 20%;
      }
      .download-btn:active {
        background-color: #0370ff;
      }
      .download-back {
        position: absolute;
        top: 3%;
        left: 5%;
      }
    }
  }
  .footer {
    height: 4vh;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>