<template>
  <div id="upload">
    <div class="header center">上传</div>
    <div class="file-box center">
      <input type="file" id="file" ref="upload" @change="preview" />
      <img class="file-ico" :src="uploadIco" v-show="!onFile" />
      <img class="file-ico" :src="onFile" @error="imgError" v-show="onFile" />
    </div>
    <div></div>
    <div class="warp-content" @click="fn">点击上传</div>
    <div class="hina-box center">
      <div class="hina center" v-if="hinaShow">{{hinaText}}</div>
    </div>
  </div>
</template>

<script>
import { uploadFile } from "@/ultis/http";
export default {
  data() {
    return {
      uploadIco:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEoElEQVR4Xu2djXHTQBCFnysgVEA6gA6SVAB0EjoIFZAOEjpIB5gOSAVQQqgAZm2dI8t/Z/lGOut9mmEyCdLd7dvPuyfdWjfT8riQ9ND8bP609cd3SY/7Tmj9348D55VsK7oq2d4XSb8y7Pwg6duB86pua9YM/knSxwyDv0q6yzgvTvl34LySbUVXJdu7kTTPsPNa0iHQa23rRdLbBEBy1l9J93uM/yMp/uUcIc6+o2Rb0U/J9uLTHwIdOiJyRhTYd9TU1mXzAX7XDHjWBSDCVQDAMV0F2lFrA4DccDVdeTwsSxEfADz8vWElAJg6PpkNAACwUIAUYAoCEcDU8TtTQHrocZv5BMxcv7M3P/n7Oj0HOHuLMKCfAgDQT7fJXAUAk3FlP0MAoJ9uk7kKACbjyn6GAEA/3SZzFQBMxpX9DAGAfrpN5ioAmIwr+xkCAP10m8xVCYBU15ZbwDgZAUwNSf6+6ZaEURHkQQSrgR5+3mklAADAQgEKQkxBIAKYOj6ZDQAAQApwZmAjAqTv+8UXP3O/+uUs4Lnbnvx9x5PAc3flieMHgBMFPPfLAeDcPXji+N0BuGrp95z5lfATJa/rcncA2i+xsFwHAYDXDyQA1BWcBhkNEWAQmevtBADq9c0gIwOAQWSutxMAaHyThHCbCLkCwGpgB/z41Ql+AAAAloNDAVIAc4DVDJUUYJYHiQAUhZIC3L8YwhyAOQBzgFDAtSbQNQJQE2j+HGAV9qgHoB6g3pWaAUbmmgKIAKSApQKkAFLAAIG23i5IAfX6ZpCRAcAgMtfbCQDU65tBRgYAg8hcbycAwFoAawHtdXGnogjqAagHoB6gpnqAnK3YS88m2htc527yXHIMx2x5X7LfKquCc7ZiLylCDW0ds+V9yfECQEk1T2gLAFriXUiKNDDkkV6aHH2O8aLseCHXGC/lqjICDOn41JfrcwBeE9d5/hG/Ot0CUxJmDsAq2lIP8Jp4nCIAABABlgoQAYgAY0y+q+nT9S6AFEAKIAWEAkSAaoLxOAMBgHF0r6ZXAKjGFeMMBAA6kyG3hyGuALAYZH4XAAAAsHwQWFNJ2BizAFIAc4AVd07zH1IAKYAU4PwkkAhABFiPAKk+foza+DEmf6lP10lg8vecegDqAcb8AI7et2sEoB7AfA4AAABAQYjzbSARgAhABAgF5q1p6K2kuA22OtxvA62cvc1YADBHIAFw1ejwLOnFXBMH85O/f7rXAzg4e5uNLAa5er5z92NfEeTKARHA1fNEAHPPAwAAtB+BMwcw5YE5gKnjk9kbALiWhLlyQEmYq+e7drMWYE4CAACAuQLm5hMBAMBcAXPziQAAYK6AuflEAABYKEBJmBcIlIR5+XvDWhaDAGChAMvBpiAQAUwdv3M5OBHh9KYsZwZ2RoDPkp6clTGw/VLS78bOjTlAfDkyIBhjM0MD7Uc3MTbnfJD0qQtAOP59xvCO2eq0/fqVbU2XbCvaL9lebirM2e+41rbW7gKCiEdJbw5AUFLkkm0BwLrjcsCMrXLvu4+C29upb2PhmL1uh2wrxlpybLmvy8vZ77jGtlZjYi0gI+9N+ZT/YSuTkPNRzpgAAAAASUVORK5CYII=",
      onFile: "",
      hinaText: "",
      hinaShow: false,
      currentFileName: "",
      fileImgList: {
        video:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADRklEQVR4Xu2bS0wTURSG/zMSXwuNnYUbdWPRRCPGuNOdkMhKxYWJGx+JRqvGGF1hYnwsZKVGI4UYE8GF74BEFpLASjQGQQNEYjuVBQKhoVPklZZS5popKbYKadLpTO+F2+VM7z/nfPfOOTO9/QkLfNRq7SAMbGOM7QDRbgBbFvoup8f9YKyDiLqhoEc/W9gwX5z070HXA20DCvAYwH5OE8s2rCbEcSp8sbA/VSANgFoZOMaI1WZ7BRHGEaPj+nn302SscwDUh75ipijNIiRhNUYyjBL9wtYWUycBYM3d766Clct1q8IijY9HY+rY5e3hBABXVeAJGDshUgKWYyWqCXvcJ0mtCpQxxuosCwooQESHyVXpuwFSrgsYv/WQmXGTXJX+OhCVWVcTUIGxelKrtABj2Cxg+JZDJsJPcnk1ZllJYAEJQK4AeQvIGiCLoMBF3HLosgvILiC7gOwCsgtYLqUCCzjaBS7tWofTRWvRPhRFY+8kXmvjeUfnKADd405L+F3vBCrawvCNxPIGIq8AzKyHIzOoaNNR2zOWFwh5B5DM+pV/HJ6WoOMQuAFgZt43Po0zzUG0DUUdA8EVgGTW97+N4NZnZ7YpuARggvgRjmHvyz7bVwK3AJKZ73nRZ2uX4B5A5/AU9r35ZdtK4B7Al2AUpXVpO9o5hcE9gAMNA/g4GMlp0qli3ALoMGe+vh+Gza9qXAK49ikEb+dv22ad2xUwGjNwpHEQ7cEl+CBkvguYMz85bTgy88mLcHELlLcO41H3qKOJcwGgOzSVmPUPA/ZV+UxUHV0B1cXrUbJpNQYm4mgdjODe1xGEIjOZYrT1vKMAbM0kS3EJQG6MyI0RuTFi89N2ltXJoWGyCMoiKIugLIKyCDpUcLm8jOwCLq/mE9ARlqvV5Df/Lv8MREdzpSiUDmPPSfVq5Qy4LVTgOQqWgKtkGiSZgbc50hRKhhQcmjVNebX3i9AomWkymsLnCktnAcy6Re3bgMsUSj7Ox7HRdJH+NU4uAdfo3C/BKe7RdOvsEnCPprpGTSD/macTLtJVK+4sOiMlUU08MnXFdIumbY0tdPslDJXGzE6AikihItGcZaYjjBmsC2BdpCzr1D3u+vly/QP+xolkldjwQwAAAABJRU5ErkJggg==",
        audio:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAYAAACjgtGkAAABvUlEQVR4Xu2ZsU7DMBRF70tB8BMw0YnPKhU7nwOUH+BPgsLAgKiox3ZkKANLk4cqUalKG7dPjpsm3Cxd7No+ufdd2xEYn8/Bgxq7tKq5WGdLICViBEIgfhNRIVQIFWIKGlqGlqFlaJk1AtypluQQHUh/NDSPYZLsjsbWEDBP1joAgZTeGIEQiN/EVAgVQoWYrhBpGVqGlqFl1jXAnWrgfQiLKosqiyqLKouqxwVMGaZMvbfujF3GLmOXscvYPeLY/Yv9TBVZkiADkF09Dpe/Wx/rNqF132V2LHAD1H8HEvzRr2sKIZBgAm3/2G2tCVZgtAwV4teMxM71ug930S0TO9e7BsRakzbaE0jk43/TlqFCgglQIYe9IKJlAi+5rYpf7UOs/fZuf6wpo4oPEYwBcUDhoL0JThau+0AEUwHSQvEOgYPm7lxPJ5dPg9m2t9oZIAp8A0gFkgqKtzyHW/QSdz26+dpbzgDaCiSF4mX55iHyejafu4vnux/Lwqvatg5IHYv2/QeBlI//sXO97pShQmITiKWQqlzv39+6A68paDh7DTHmetDsGuhcCaSuXG9gTUFDroBEy/Wg2TXQ+Rd/3uwtglGQSgAAAABJRU5ErkJggg==",
        compress:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABp0lEQVR4Xu1bMU7DQBCc9Q8snkFDAW6BB1ip4DsJ36GLTI9pAwVF8gxkXnCHzgLHhyJdlb2Td9JZOmV9492Z3b1bAYCvbbOpKqwAXIXn8/58X7fv9382hq7x57V38t8/ncP2YrXbyPdL8+A9nvVeoggAxu2K4FGGrtkDuLQIAIBDAEDZBX0fg+2fjs+yBuRO72MAGQCIt1e3Oznywc0rAVi+B/jeOXk75eZV5W8NeEA5KjAqQQ4SLCAPmBwwCwDAf+afBwRVgDK48DzAfCJEFSihGsyrAsZlkLVAhACLIXvVYJBB05kgZZAyaLwfQBmkDM4RcA5TV9hIS0yz2E3bKqAjFHWDLJwLxHnAfPtDZ+JcgABEiRA9YIaAqRD4vZOwDvsPUhjO6gmAJRI07wFDdx0dgNTtR28mBOKGiLlEKJ2eaq7IkAprbi9tiwDo3w9IfxXNFfQAeoD6PUFNB0/bYggwBBgC2neF03GpuYIcQA4gB5ADlAcmNCkubYskSBIkCZIESYJprlzuCqoAVUB9dLaocDpkGJ4uB4BxeDq8ju74fBEATOPzP3kPl7xqqFKMAAAAAElFTkSuQmCC",
        text:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFU0lEQVR4XuWbeYgcRRTGvzc2i+xGMYQlIiKGIOI/ighCECTxjiNrvdrtoBEPPPDAA2+DRxIVDzzwwINV8YirxM7MdGbXEOO1IoKICYiIKKIiiIhkES+E3ZknFTuyrNtHVfdMZnYK5q969b2vflRVd9VUEzKUcrm8uK+vb52IHA1gBREdmKFZ3pAvAPi1Wu3LvEJJ7SlNXCl1HBFNADg4LbYF9Z8DGKnVal+3QHuPZCIA3/cXzczM/N6q5Bl1P2s0GiP1ev2bjPFWYYkAmPkZAFdYKbYmeFepVPIrlcq3RcvHAlBKLSeillBP6ISZ70fNV09EnzabTT8Mw++LhBALQGvNIlItMlmaloisIqJnARwZE/vJ9PS0PzEx8UOaVtb6pBGwgYjWZxUqIs4AEJHdpVKpAuCIGM2PPc8bCYLgxyJyxgJg5o0A7ioiSVYNAyAMw0lmPgaAgbA8pu1HRORXq9WfsmrHxSWNgLuJ6M68CWza7wVg2gwPDx/bbDbNFDw8RuPDRqPh1+v1n21yzI1NWgPuEZE78ojbtp0NwLQ17yAAqkR0WIzWB57n+UEQ/GKba2980hS4F8DtrsIu7eYCiCAcT0RmOhwao/l+9Ma42yVn0hS4j4jWuYi6tpkPgNFi5hUAtgA4ZD5tEXnHQAjD8Ffb3Ekj4H4At9kK5omPA2A0tdYniIgZCUtjcuzo7+/3x8bGfrPxkATgAQC32ojljU0CEEE4UUTMSBiMybU9WhP+yOolaRF8UERuySpURFwagGhNWElEBsKSmOmwzTwdxsfH/8riKWkEPATgpiwiRcVkARBBOJmIAgCL58tNRONTU1NrJicn/07zlrQIPkxEN6YJFFmfFUAE4TQAQcLZxNbBwUF/dHR0Oslj0gh4BMANRXYwTcsGQPR0OMNAALAoRrsWrQmNuNxJAB4FcH2a6SLrbQFEC2NZRN4A0B8zHSrVatUHIPPWx3WAmR8DcF2RHUzTcgEQQRgCsFlE9o9ZGDeGYbjBFsDjAK5NM11kvSuAaE1QRLQZQN9cTyJiD0Ap9QQRXVNkB9O08gCIIAxHEPabncsJgNb6SRG5Os10kfXGaBF6RGS28f+tb04AlFJPEdFVRRja1xpOALTWT4vIlfvafBH5nQB00IlwbgauAMzh5OW5s3eAgCuAUQCXdYD/3BZcATwH4NLc2TtAwAmA1vp5EbmkA/zntuAEgJlfAHBx7uwdIOAEQCn1IhFd1AH+c1twAsDMLwG40CZ73lfZLLmUUuZEyJwEZy6uAF4GcEHmLGa/Gf2zY9PGNrZtALTWr4jI+TYGFxQAZn4VwHk9C0ApNUZEa3sWADO/BuDcXgbwOoBzLAEUsp9Py2l7b8H1KWCOl9akmemGelcA5qTVnKZ2fXEFYM7bR7q+9/++n9gfimqtt4jIcM8CYGZzPYV7FoDWuiYiyhLApGW8a/hKm4ZOU4CZQwBnWybac8vLpo1tbNv2Asy8FYD5yylzWWh7gXEAZ2Xu/ULbDTKzuSJf7lkAWus3ReTMngXAzNsArO5ZAEqp7UR0ug0AAC19Aszy0pbH4FsAzD2cri+u7wE7AJza9b3PsRd4W0RO6VkAzPwugJN6GcB7AFb1MgDz54PVatupsFwXwbbfFm8VwFKpVK5UKua95n8l6bL0WhEZa5WpduqKyLK4z+2S7gofBGAXES1rp9mic5mL09VqNXZXm/jlqFLKXD6sFW2qnXqe5y0JgmAqLmfqx9PMbE6GzQlxt5WvPM9bHQTBd0nGUwGYxkNDQ0s9z7tZRMxXXOZ3QIfSMB967ySinQMDA+s3bdr0Z5rPfwA1zRJu9KCrdwAAAABJRU5ErkJggg==",
        other:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD7ElEQVR4Xu1bTWhcVRT+vjdp6KIqmZlIK0WTN64MFktpBVNQsBgRpAtJUetCu3BRMRsXZt5EOi7mTReFIlVBoSj4BwZdCMV/dKHWv1hbSBDJm4loYyHzJi5EqJB35E2c8RnvNK/lUaczZ3Yz5557zvnuufeee84Zosc/7HH7oQCoB0QQGLCfvJlI7QFkJwVbugoccoHgV+DKNzXv8EzTttYWSA9P3UUGbwHY1FWGm4wRHPOr7kRIagCQyRUmIPJM1xseMVCAp+sVt8iM7dwJ4KMI7QuCryBY+aGbAAmYGrQsGRfBeNMuIUeZzjlHKHii4Q7ENDf2H1iaLf7eTcZHbcnmnDebIBA8zrTtvEHg/nCQWDJSny/PdavxoV2DQ84tgYVTqzZylpnh/Ccg7wi/+hW3J+KCjO1I6xZQANQDdAvoGaCHoN4Ceg1qHKCBkEaCGgrrW0AfQ/oa1Oew5gO6ORvUtC2xhMjVW4vp/v4/p0RkO8jTAWV62St/HgfErF3YL8QYRK4S4HSYoY3DF45J204xrF1A+ItlcabmlV6My9vIgieREUrfmL+JAWfXCg4ou9cDIZNz3oNgbC1vnFsoqnyLn3jE99yX44KQDAB2/gTBe/4jlPKO75X3tlMmY0/tAYIPTfRmrr4db7jyBA4ZeSUYq1cPfxAHhEQAyOScsxBcZxTYx63+j6WzJlo2V3hURF5oo+jbfsW9rz0A+dcJPmCkExO+5x67fADYThXAkEngBkuuPTdfXjLR0rZzgMBxEy2sS9Q8d19773FeAvCwmc7H/Erp+csJgFkZyrO+V368vRGTOwHrayMA4EO1Sum19ryFg4A8Z6D/JpaMxq1pJLIF/j5NvwRwa0sh4SmxsLfulX6+0EoY9zLxvu+5d6+3ghk7/yrA/dFxVoDtSwvu9+vxNumJARBOmB4ujIMyAuHsxvMbTiwuFv+Io8jAsLONwC5QNoW89aprPBiN22jIGbNS2CYBz9FamYuWu+PIThSAOAI7bYwCkEQg1GmrejH6qAeoB2h1WMvjzTNDGyS0QUIbJLRBQhsktEFCGyS0QUIbJMLIKE5a+mJeXZ06Vl+D/3oN2v9kWsWS2+rz5ZOdunJJ6DWQy49aws8acwlOhv8XcAHkV3+QTxnwwdpP7q9JCOvEOaKhP4GjvOb6yYG+Ps4B3NxQmFgE+LGIVDrRgEvVicAgwNsBGWnOkRJsbpTDs7nJHSLWt5c6+ZXIJ8J99WpputUPkL3B2SIphCWre69Eg+LrzJmA8tSy57676vBrPqE3AKkdgYi57hdfUkeNJLEQBPhuueqeiSrWEx0hF1oJBaCj/PR/UKbnPeAvxyYZfG00Q2YAAAAASUVORK5CYII="
      }
    };
  },
  methods: {
    // 预览
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
      this.currentFileName = file.name;
      this.onFile = url;
    },
    // 上传
    fn() {
      if (this.$refs.upload.files.length == 0) {
        return;
      }
      let formData = new window.FormData();
      formData.append("userfile", this.$refs.upload.files[0]);
      uploadFile(formData).then(res => {
        this.hinaText = res.data;
        this.hinaShow = true;
        setTimeout(() => {
          this.hinaText = "";
          this.hinaShow = false;
        }, 1000);
      });
    },
    // 非图片加载默认
    imgError() {
      if (this.currentFileName != "") {
        let fileImg = this.fileJudge(this.currentFileName);
        this.onFile = this.fileImgList[fileImg];
      }
    },
    // 文件类型判断
    fileJudge(ext) {
      const compress = /(.*)\.(zip|rar|7z|ARJ|CAB|LZH|TAR|GZ|ACE|UUE|BZ2|JAR|ISO)$/i;
      const text = /(.*)\.(TXT|DOC|XLS|PPT|DOCX|XLSX|PPTX|WPS)$/i;
      const audio = /(.*)\.(mp3|m4a|WAV|WMA)$/i;
      const video = /(.*)\.(mp4|rmvb|flv|mpeg|avi|wmv|dat|asf|mpg|rm|ram|mp4,3gp|mov|divx|dv|vob|mkv|qt|cpk|fli|flc|f4v|m4v|mod|m2t|swf|webm|mts|m2ts|3g2|mpe|ts|div|lavf|dirac)$/i;
      if (audio.test(ext)) {
        return "audio";
      } else if (compress.test(ext)) {
        return "compress";
      } else if (video.test(ext)) {
        return "video";
      } else if (text.test(ext)) {
        return "text";
      } else {
        return "other";
      }
    }
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
  .hina-box {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 100px;
    z-index: 11;
    .hina {
      width: 200px;
      height: 24px;
      background-color: #00000059;
      color: #15ff00;
      border-radius: 10px;
    }
  }
}
</style>