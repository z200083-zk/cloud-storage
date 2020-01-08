<template>
  <div id="content">
    <div class="video">
      <div class="video-header center">视频</div>
      <div class="video-main">
        <div class="video-list" v-if="!isDownload">
          <div class="video-item" v-for="(item,i) in res" :key="i" @click="tapDown(item)">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADRklEQVR4Xu2bS0wTURSG/zMSXwuNnYUbdWPRRCPGuNOdkMhKxYWJGx+JRqvGGF1hYnwsZKVGI4UYE8GF74BEFpLASjQGQQNEYjuVBQKhoVPklZZS5popKbYKadLpTO+F2+VM7z/nfPfOOTO9/QkLfNRq7SAMbGOM7QDRbgBbFvoup8f9YKyDiLqhoEc/W9gwX5z070HXA20DCvAYwH5OE8s2rCbEcSp8sbA/VSANgFoZOMaI1WZ7BRHGEaPj+nn302SscwDUh75ipijNIiRhNUYyjBL9wtYWUycBYM3d766Clct1q8IijY9HY+rY5e3hBABXVeAJGDshUgKWYyWqCXvcJ0mtCpQxxuosCwooQESHyVXpuwFSrgsYv/WQmXGTXJX+OhCVWVcTUIGxelKrtABj2Cxg+JZDJsJPcnk1ZllJYAEJQK4AeQvIGiCLoMBF3HLosgvILiC7gOwCsgtYLqUCCzjaBS7tWofTRWvRPhRFY+8kXmvjeUfnKADd405L+F3vBCrawvCNxPIGIq8AzKyHIzOoaNNR2zOWFwh5B5DM+pV/HJ6WoOMQuAFgZt43Po0zzUG0DUUdA8EVgGTW97+N4NZnZ7YpuARggvgRjmHvyz7bVwK3AJKZ73nRZ2uX4B5A5/AU9r35ZdtK4B7Al2AUpXVpO9o5hcE9gAMNA/g4GMlp0qli3ALoMGe+vh+Gza9qXAK49ikEb+dv22ad2xUwGjNwpHEQ7cEl+CBkvguYMz85bTgy88mLcHELlLcO41H3qKOJcwGgOzSVmPUPA/ZV+UxUHV0B1cXrUbJpNQYm4mgdjODe1xGEIjOZYrT1vKMAbM0kS3EJQG6MyI0RuTFi89N2ltXJoWGyCMoiKIugLIKyCDpUcLm8jOwCLq/mE9ARlqvV5Df/Lv8MREdzpSiUDmPPSfVq5Qy4LVTgOQqWgKtkGiSZgbc50hRKhhQcmjVNebX3i9AomWkymsLnCktnAcy6Re3bgMsUSj7Ox7HRdJH+NU4uAdfo3C/BKe7RdOvsEnCPprpGTSD/macTLtJVK+4sOiMlUU08MnXFdIumbY0tdPslDJXGzE6AikihItGcZaYjjBmsC2BdpCzr1D3u+vly/QP+xolkldjwQwAAAABJRU5ErkJggg=="
            />
            <div class="video-details">
              <div>{{item.fileName}}</div>
              <div class="video-details-size">{{item.details.size | layoutSize}}</div>
            </div>
          </div>
        </div>
        <div class="video-download" v-if="isDownload">
          <div class="video-download-box">
            <div class="video-download-details">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADRklEQVR4Xu2bS0wTURSG/zMSXwuNnYUbdWPRRCPGuNOdkMhKxYWJGx+JRqvGGF1hYnwsZKVGI4UYE8GF74BEFpLASjQGQQNEYjuVBQKhoVPklZZS5popKbYKadLpTO+F2+VM7z/nfPfOOTO9/QkLfNRq7SAMbGOM7QDRbgBbFvoup8f9YKyDiLqhoEc/W9gwX5z070HXA20DCvAYwH5OE8s2rCbEcSp8sbA/VSANgFoZOMaI1WZ7BRHGEaPj+nn302SscwDUh75ipijNIiRhNUYyjBL9wtYWUycBYM3d766Clct1q8IijY9HY+rY5e3hBABXVeAJGDshUgKWYyWqCXvcJ0mtCpQxxuosCwooQESHyVXpuwFSrgsYv/WQmXGTXJX+OhCVWVcTUIGxelKrtABj2Cxg+JZDJsJPcnk1ZllJYAEJQK4AeQvIGiCLoMBF3HLosgvILiC7gOwCsgtYLqUCCzjaBS7tWofTRWvRPhRFY+8kXmvjeUfnKADd405L+F3vBCrawvCNxPIGIq8AzKyHIzOoaNNR2zOWFwh5B5DM+pV/HJ6WoOMQuAFgZt43Po0zzUG0DUUdA8EVgGTW97+N4NZnZ7YpuARggvgRjmHvyz7bVwK3AJKZ73nRZ2uX4B5A5/AU9r35ZdtK4B7Al2AUpXVpO9o5hcE9gAMNA/g4GMlp0qli3ALoMGe+vh+Gza9qXAK49ikEb+dv22ad2xUwGjNwpHEQ7cEl+CBkvguYMz85bTgy88mLcHELlLcO41H3qKOJcwGgOzSVmPUPA/ZV+UxUHV0B1cXrUbJpNQYm4mgdjODe1xGEIjOZYrT1vKMAbM0kS3EJQG6MyI0RuTFi89N2ltXJoWGyCMoiKIugLIKyCDpUcLm8jOwCLq/mE9ARlqvV5Df/Lv8MREdzpSiUDmPPSfVq5Qy4LVTgOQqWgKtkGiSZgbc50hRKhhQcmjVNebX3i9AomWkymsLnCktnAcy6Re3bgMsUSj7Ox7HRdJH+NU4uAdfo3C/BKe7RdOvsEnCPprpGTSD/macTLtJVK+4sOiMlUU08MnXFdIumbY0tdPslDJXGzE6AikihItGcZaYjjBmsC2BdpCzr1D3u+vly/QP+xolkldjwQwAAAABJRU5ErkJggg=="
              />
              <div>{{currentData.fileName}}</div>
              <div class="video-details-size">{{currentData.details.size | layoutSize}}</div>
            </div>
            <div class="video-download-btn" @click="downloadFile(currentData.fileName)">下载</div>
          </div>
          <div class="video-back" @click="isDownload=false">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAfBJREFUSMfFlM9LMkEYx5/WFX/QoajDagsieDIWYR7WTkbQIaiEEKS7Fw081f8gnUXoIHjzoocguxR2aVsPuyfdjkYQhntQQiJ0dXft4OvlDanX16XvZQ4zz3w/852ZB2DBCpaCpWBpeRlrWMPa1RUWsYjF09NZ6+lFGXMcx3Hc6qrdZrfZbdfXoIIK6sqKLuiCLpycWAbAx/k4H2cYkzVZk725GdNjekxrGoUUUri9XY/VY/VYtzurnprXOBwNR8NRv9/0mB7TIwjgAAc4Oh1XwpVwJXZ3ZVZmZXa28dwAfI7P8bnNTcNn+AzfwwOIIIL4+Njz9rw97/6+2BW7Yvf9/X+T/SIkSJBsbZERGZFRp0OapEmaFxd/zjF3kt8bIyLiwcFk/PggDdIgjfPzyezSkmXGJEMyJHN4iElMYlLTJgBnZ4v2sS66RenXruALyG89wr81/YaYxjSmX18nyVxeBrKBbCDrcPzrfnNHOG1Eht/wG/7bW3CDG9wvL868M+/MHx39tB/MHZ1UkSpS5fmZalNtqh2JgAYaaOvr/UK/0C/c3fEtvsW31tYsA5hKLstluayqw+qwOqzu7IAOOuijkSmZkind34dSoVQotbFhGcBUiqIoivL2NjAGxsDY2wMGGGCenugIHaEjx8ez6j4BlSzbwfddYf0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDEtMDhUMTU6Mzc6NTMrMDg6MDDvz2ruAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTA4VDE1OjM3OjUzKzA4OjAwnpLSUgAAAEp0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fMGhlMmZ2dW0xZ3ptL2Zhbmh1aS5zdmcVkc6uAAAAAElFTkSuQmCC" alt="">
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import { getFileList, getFileVideo } from "@/ultis/http";
export default {
  data() {
    return {
      res: [],
      isDownload: false,
      currentData: {},
      currentUrl: ''
    };
  },
  async created() {
    let res = await getFileList("video");
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
      let res = getFileVideo(cat);
      this.currentUrl = res;
      window.open(this.currentUrl);
    }
  }
};
</script>

<style lang="scss" scoped>
.video {
  width: 100%;
  height: 100%;
  .video-header {
    height: 10vh;
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
    .video-download {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      padding: 0 3vw;
      box-sizing: border-box;
      .video-download-box {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15vh 0;
        box-sizing: border-box;
        color: #000;
        .video-download-details {
          text-align: center;
          margin-bottom: 5vh;
          img {
            width: 128px;
            margin-bottom: 2vh;
          }
          div {
            margin-bottom: 2vh;
            color: #474747;
          }
        }

        .video-download-btn {
          width: 40vw;
          height: 40px;
          color: #fff;
          text-align: center;
          line-height: 40px;
          border-radius: 10px;
          background-color: #039aff;
        }
        .video-download-btn:active {
          background-color: #0370ff;
        }
      }
      .video-back{
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