<template>
  <div id="home">
    <div class="top">
      <div class="logo">云备份</div>
      <div class="user">
        <span>ZK</span>
        <!-- <img src alt="ZK" /> -->
      </div>
    </div>
    <div class="main">
      <div class="list">
        <div class="list-box center"  v-for="(item,i) in imgList" :key="i">
          <a class="list-item am" href="javascript:;">
            <img :class="mobile?'':'img'" :src="item.data" />
            {{item.text}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          text: "媒体",
          data:
            "data:image/png;base64,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"
        },
        {
          text: "文件",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAmVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4znTxr1Xtxm/vrVSXfkXZoUzxr1X3zXPzy3LvrVXXs2ZPQim5kUbpq1Sie0D2zXTwrlX0ynLwrVXvrlU/NSHvrlXnwW3rxG/trFS5nFfqqVPfpE/urFbprFPjo07MmU34znTwrlX/9/L75s3+9Ov1y5PxtWTDguRMAAAALHRSTlMAAwYIDQsRFxMWFQr09J2XKBvb3MSDUxQISgrl48zIwRqvjIp5PS8gTUckCuqbpbYAAANySURBVHja7dztUtpAGMVxNsmmIATCu2AF1GrfsqLe/8V110x4pM40u+CYk+n538FvnhP4th3GGGOMMcYYYyws9a86+Km/ayVIqcvVaDvJjF/Z/DeiRSk1HmUmqMkPuLsoe415ZoK7+YVFcefYmFPK5mscirI9fDUnNlmhSJRtLI7wbr5DUJRtvTHnlH27bJ6iXHNzZpOfDf6ziGOcGen0fZ3fuZCRkc7a14d1mmOdGaCyyXa0ulQq3BGtDFzZaKyUCoWMDGDZ3C01yBFtDWQb/6OUjmhiMPv6oGwBEKhv/UgyFonHsmID22YtkrqDQEPMXLn8IDEyJBuLpHZZfQPcyBMSoUOytUjqlqUNcquoVlIt6y3kef/02HBP++ejbZ0Cedk/QrR/Ecg2Eok3BMRhJQKZ2M+4HhIdQZ4fYZJ1ZQEQuIMcnSSWbflCGv/OpacjSOQJWQ4K2AbLOPaEaL0ogFv0/SHDArhhX7ZVB5kVwM10HPtCpgVw0wAI8Lduv3bd94T0dQEdIWgRgtYrJCIEJ2+IJuRz0roGogj51ASi/htIUkCXEAKWJyRuAyQmBClC0CIELULQIgQtQtAiBC1C0CIELULQIgQtQtAiBC1C0CIELULQIgQtQtAiBC1C0CIELULQIgQtQtAiBC1C0CIELULQIgQtQtAiBC1C0CIELULQIgQtQtAiBC1C0CIELULQIgQtQtAiBC1C0CIELULQCoBgP8rqCYksBPuZ3ID3tbAfLq6HtOQpaX2AtPxx7wOk7c+tB7xlmgBva5h4QVQJyWFPMshLiPKDJHcFaHdJGGR5XUB2vQyAxBaS5lcFYFd5aiGxH6Q8SXoPKLm6T8uDeEBUBUlzuHVd52kFUQKp21ba3d1C/XYNbnfd9N2yarflJN18CEMZDPOudbxbVu22SsnFbjGcTRvWDKaz4WJ3UTqOluV7Eifp9b4A1Os5h/dBBBLrg8RSGrb0LOPg0LEfRE5SSSzFWprswjIqhxxEIPWSiuI0TeUMFSPAIRCROEyTOYQ4BBImcRaAkiTMIRKhNI5JXMIQRz1EJJaiE4C0ZYhDIH4SR3EWV0Mg7SoVluHtEIlQnMWlG6rvioUhjjCJswAURcEOkYilMVEkOYU4AihigUjVMGokCBwliSOMAljH1XpL57W2WzpvaqOowxj7oP4AhuJUaF9sN5cAAAAASUVORK5CYII="
        },
        {
          text: "设置",
          data:
            "data:image/png;base64,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"
        }
      ],
      mobile: false
    };
  },
  created() {
    console.log(navigator.userAgent);
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      this.mobile = true;
    }
  }
};
</script>

<style lang="scss">
#home {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #2559d6;
  .top {
    height: 48px;
    padding: 0 5vw;
    line-height: 48px;
    .logo {
      height: 100%;
      float: left;
    }
    .user {
      height: 100%;
      float: right;
      img {
        width: 30px;
        height: 30px;
        border-radius: 20px;
      }
    }
  }
  .main {
    .list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .list-box {
        flex: 1;
        .list-item {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 10vw 0;
          img {
            width: 70px;
          }
        }
      }
    }
  }
}

.img {
  width: 100%;
  max-width: 88px;
  transition: all 0.4s ease 0s;
}
.am:hover .img {
  transform: scale(1.2);
}
</style>
