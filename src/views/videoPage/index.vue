<template>
  <div id="content">
    <div class="video">
      <div class="video-header center">视频</div>
      <div class="video-main">
        <div class="video-list">
          <div class="video-item" v-for="(item,i) in res" :key="i">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADRklEQVR4Xu2bS0wTURSG/zMSXwuNnYUbdWPRRCPGuNOdkMhKxYWJGx+JRqvGGF1hYnwsZKVGI4UYE8GF74BEFpLASjQGQQNEYjuVBQKhoVPklZZS5popKbYKadLpTO+F2+VM7z/nfPfOOTO9/QkLfNRq7SAMbGOM7QDRbgBbFvoup8f9YKyDiLqhoEc/W9gwX5z070HXA20DCvAYwH5OE8s2rCbEcSp8sbA/VSANgFoZOMaI1WZ7BRHGEaPj+nn302SscwDUh75ipijNIiRhNUYyjBL9wtYWUycBYM3d766Clct1q8IijY9HY+rY5e3hBABXVeAJGDshUgKWYyWqCXvcJ0mtCpQxxuosCwooQESHyVXpuwFSrgsYv/WQmXGTXJX+OhCVWVcTUIGxelKrtABj2Cxg+JZDJsJPcnk1ZllJYAEJQK4AeQvIGiCLoMBF3HLosgvILiC7gOwCsgtYLqUCCzjaBS7tWofTRWvRPhRFY+8kXmvjeUfnKADd405L+F3vBCrawvCNxPIGIq8AzKyHIzOoaNNR2zOWFwh5B5DM+pV/HJ6WoOMQuAFgZt43Po0zzUG0DUUdA8EVgGTW97+N4NZnZ7YpuARggvgRjmHvyz7bVwK3AJKZ73nRZ2uX4B5A5/AU9r35ZdtK4B7Al2AUpXVpO9o5hcE9gAMNA/g4GMlp0qli3ALoMGe+vh+Gza9qXAK49ikEb+dv22ad2xUwGjNwpHEQ7cEl+CBkvguYMz85bTgy88mLcHELlLcO41H3qKOJcwGgOzSVmPUPA/ZV+UxUHV0B1cXrUbJpNQYm4mgdjODe1xGEIjOZYrT1vKMAbM0kS3EJQG6MyI0RuTFi89N2ltXJoWGyCMoiKIugLIKyCDpUcLm8jOwCLq/mE9ARlqvV5Df/Lv8MREdzpSiUDmPPSfVq5Qy4LVTgOQqWgKtkGiSZgbc50hRKhhQcmjVNebX3i9AomWkymsLnCktnAcy6Re3bgMsUSj7Ox7HRdJH+NU4uAdfo3C/BKe7RdOvsEnCPprpGTSD/macTLtJVK+4sOiMlUU08MnXFdIumbY0tdPslDJXGzE6AikihItGcZaYjjBmsC2BdpCzr1D3u+vly/QP+xolkldjwQwAAAABJRU5ErkJggg=="
            />
            <span>{{item.fileName}}</span>
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
    let res = await getFileList("video");
    this.res = res.data;
    console.log(this.res);
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