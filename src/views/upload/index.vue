<template>
  <div id="upload">
    <div class="header center">上传</div>
    <div class="file-box">
      <input type="file" id="file" ref="upload" @change="preview" />
      <img class="file-ico" :src="uploadIco" v-show="!onFile" />
      <img class="file-ico" :src="onFile" v-show="onFile" />
    </div>
    <div></div>
    <div class="warp-content" @click="fn">点击上传</div>
  </div>
</template>

<script>
import { uploadFile } from "@/ultis/http";
export default {
  data() {
    return {
      uploadIco:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEoElEQVR4Xu2djXHTQBCFnysgVEA6gA6SVAB0EjoIFZAOEjpIB5gOSAVQQqgAZm2dI8t/Z/lGOut9mmEyCdLd7dvPuyfdWjfT8riQ9ND8bP609cd3SY/7Tmj9348D55VsK7oq2d4XSb8y7Pwg6duB86pua9YM/knSxwyDv0q6yzgvTvl34LySbUVXJdu7kTTPsPNa0iHQa23rRdLbBEBy1l9J93uM/yMp/uUcIc6+o2Rb0U/J9uLTHwIdOiJyRhTYd9TU1mXzAX7XDHjWBSDCVQDAMV0F2lFrA4DccDVdeTwsSxEfADz8vWElAJg6PpkNAACwUIAUYAoCEcDU8TtTQHrocZv5BMxcv7M3P/n7Oj0HOHuLMKCfAgDQT7fJXAUAk3FlP0MAoJ9uk7kKACbjyn6GAEA/3SZzFQBMxpX9DAGAfrpN5ioAmIwr+xkCAP10m8xVCYBU15ZbwDgZAUwNSf6+6ZaEURHkQQSrgR5+3mklAADAQgEKQkxBIAKYOj6ZDQAAQApwZmAjAqTv+8UXP3O/+uUs4Lnbnvx9x5PAc3flieMHgBMFPPfLAeDcPXji+N0BuGrp95z5lfATJa/rcncA2i+xsFwHAYDXDyQA1BWcBhkNEWAQmevtBADq9c0gIwOAQWSutxMAaHyThHCbCLkCwGpgB/z41Ql+AAAAloNDAVIAc4DVDJUUYJYHiQAUhZIC3L8YwhyAOQBzgFDAtSbQNQJQE2j+HGAV9qgHoB6g3pWaAUbmmgKIAKSApQKkAFLAAIG23i5IAfX6ZpCRAcAgMtfbCQDU65tBRgYAg8hcbycAwFoAawHtdXGnogjqAagHoB6gpnqAnK3YS88m2htc527yXHIMx2x5X7LfKquCc7ZiLylCDW0ds+V9yfECQEk1T2gLAFriXUiKNDDkkV6aHH2O8aLseCHXGC/lqjICDOn41JfrcwBeE9d5/hG/Ot0CUxJmDsAq2lIP8Jp4nCIAABABlgoQAYgAY0y+q+nT9S6AFEAKIAWEAkSAaoLxOAMBgHF0r6ZXAKjGFeMMBAA6kyG3hyGuALAYZH4XAAAAsHwQWFNJ2BizAFIAc4AVd07zH1IAKYAU4PwkkAhABFiPAKk+foza+DEmf6lP10lg8vecegDqAcb8AI7et2sEoB7AfA4AAABAQYjzbSARgAhABAgF5q1p6K2kuA22OtxvA62cvc1YADBHIAFw1ejwLOnFXBMH85O/f7rXAzg4e5uNLAa5er5z92NfEeTKARHA1fNEAHPPAwAAtB+BMwcw5YE5gKnjk9kbALiWhLlyQEmYq+e7drMWYE4CAACAuQLm5hMBAMBcAXPziQAAYK6AuflEAABYKEBJmBcIlIR5+XvDWhaDAGChAMvBpiAQAUwdv3M5OBHh9KYsZwZ2RoDPkp6clTGw/VLS78bOjTlAfDkyIBhjM0MD7Uc3MTbnfJD0qQtAOP59xvCO2eq0/fqVbU2XbCvaL9lebirM2e+41rbW7gKCiEdJbw5AUFLkkm0BwLrjcsCMrXLvu4+C29upb2PhmL1uh2wrxlpybLmvy8vZ77jGtlZjYi0gI+9N+ZT/YSuTkPNRzpgAAAAASUVORK5CYII=",
      onFile: ""
    };
  },
  methods: {
    preview() {
      let file = this.$refs.upload.files[0];
      let url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      this.onFile = url;
    },
    fn() {
      if (this.$refs.upload.files.length == 0) {
        return;
      }
      let formData = new window.FormData();
      formData.append("userfile", this.$refs.upload.files[0]);
      uploadFile(formData).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    console.log(this.file);
  }
};
</script>

<style lang="scss">
#upload {
  width: 100%;
  height: 100%;
  .header {
    height: 10vh;
  }
  .file-box {
    width: 50vw;
    height: 50vw;
    max-width: 400px;
    max-height: 400px;
    border: 4px solid #fb9200;
    position: relative;
    margin: auto auto;
    #file {
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }
    .file-ico {
      width: 30vw;
      max-width: 180px;
      position: absolute;
      left: 10vw;
      top: 10vw;
      z-index: 0;
    }
  }
  .warp-content {
    width: 70vw;
    height: 5vh;
    margin: 4vh auto 0;
    // border: 1px solid #cfa6a6;
    color: #f0f0f0;
    text-align: center;
    line-height: 5vh;
    background-color: #145de6;
  }
}
</style>