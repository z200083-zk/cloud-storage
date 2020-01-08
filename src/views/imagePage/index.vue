<template>
  <div id="content">
    <div class="image">
      <div class="header center">图片</div>
      <div class="main">
        <div class="img-list" v-if="!isDownload">
          <div class="img-item center" v-for="(item,i) in res" :key="i">
            <img :src="`http://127.0.0.1:20083/image/${item.fileName}`" @click="tapDown(item)" />
          </div>
        </div>
        <div class="img-download" v-if="isDownload">
          <div class="img-download-box">
            <img :src="`http://127.0.0.1:20083/image/${currentData.fileName}`" alt />
            <div class="img-download-details">
              <div>{{currentData.fileName}}</div>
              <div class="img-details-size">{{currentData.details.size | layoutSize}}</div>
            </div>
            <div class="img-download-btn" @click="downloadFile(currentData.fileName)">下载</div>
          </div>
          <div class="img-back" @click="isDownload=false">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAfBJREFUSMfFlM9LMkEYx5/WFX/QoajDagsieDIWYR7WTkbQIaiEEKS7Fw081f8gnUXoIHjzoocguxR2aVsPuyfdjkYQhntQQiJ0dXft4OvlDanX16XvZQ4zz3w/852ZB2DBCpaCpWBpeRlrWMPa1RUWsYjF09NZ6+lFGXMcx3Hc6qrdZrfZbdfXoIIK6sqKLuiCLpycWAbAx/k4H2cYkzVZk725GdNjekxrGoUUUri9XY/VY/VYtzurnprXOBwNR8NRv9/0mB7TIwjgAAc4Oh1XwpVwJXZ3ZVZmZXa28dwAfI7P8bnNTcNn+AzfwwOIIIL4+Njz9rw97/6+2BW7Yvf9/X+T/SIkSJBsbZERGZFRp0OapEmaFxd/zjF3kt8bIyLiwcFk/PggDdIgjfPzyezSkmXGJEMyJHN4iElMYlLTJgBnZ4v2sS66RenXruALyG89wr81/YaYxjSmX18nyVxeBrKBbCDrcPzrfnNHOG1Eht/wG/7bW3CDG9wvL868M+/MHx39tB/MHZ1UkSpS5fmZalNtqh2JgAYaaOvr/UK/0C/c3fEtvsW31tYsA5hKLstluayqw+qwOqzu7IAOOuijkSmZkind34dSoVQotbFhGcBUiqIoivL2NjAGxsDY2wMGGGCenugIHaEjx8ez6j4BlSzbwfddYf0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDEtMDhUMTU6Mzc6NTMrMDg6MDDvz2ruAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTA4VDE1OjM3OjUzKzA4OjAwnpLSUgAAAEp0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fMGhlMmZ2dW0xZ3ptL2Zhbmh1aS5zdmcVkc6uAAAAAElFTkSuQmCC"
            />
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import { getFileList, getFileImage } from "@/ultis/http";
export default {
  data() {
    return {
      res: [],
      isDownload: false,
      currentData: {}
    };
  },
  async created() {
    let res = await getFileList("image");
    this.res = res.data;
    console.log(this.res);
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
    downloadFile(cat){
      let res = getFileImage(cat);
      this.currentUrl = res;
      window.open(this.currentUrl);
    }
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
    .img-download {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      padding: 0 3vw;
      box-sizing: border-box;
      color: #000;
      .img-download-box {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10vh 0;
        img {
          width: 60%;
          margin-bottom: 2vh;
        }
        .img-download-details {
          text-align: center;
          margin-bottom: 5vh;
          div {
            margin-bottom: 2vh;
            color: #474747;
          }
        }
        .img-download-btn {
          width: 40vw;
          height: 40px;
          color: #fff;
          text-align: center;
          line-height: 40px;
          border-radius: 10px;
          background-color: #039aff;
        }
        .img-download-btn:active {
          background-color: #0370ff;
        }
      }
      .img-back {
        position: absolute;
        top: 20px;
        left: 25px;
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