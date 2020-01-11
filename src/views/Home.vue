<template>
  <div id="home">
    <div class="main">
      <div class="list">
        <div class="list-box center" v-for="(item,i) in imgList" :key="i">
          <a class="list-item am" @click="getFile(item)">
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
          text: "图片",
          cat: "image",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABACAYAAABfl/puAAAE2ElEQVR4Xu2cXWgcVRiG32+SnW2t4oWg0GR3iTGZ2QS8EPWiF1IUCioiChWzJlsp4h/+UCio0IuIKIoogfpTrKIojWhRFBHJhUSwiK1iL2rd2baW3ZkYkUgltcbuzM58sk1W45rNnDn7U9ycXO553/d83zMfszmzyxLUX2QCFNmhDFDQJIZAQVPQJAhIWP4zaVYiNg2izRJZHWsxbfdfnBQ0gUstDI2BJxEEXwhkdqyENG260lwkaGnbHe9YIiGN5Xq7NytoEa++ghYRWEWuoCloEgQkLGrSFDQJAhIWNWkKmhgBpxfr/4A+wADrumv3n8S8mHNRteYmLZ9cdwNT8AoYg1VQBHrNsEv3iYJbU9CsROx+EL26EpzK0VD0lLNmoB2/AnHf1U8C2FhvoojoJqNY+ixs4s4LtHxSHw8CfJCecY+EFdis9R974wOexsdWz+MJ0/Z2hO3ZdmhWQn8KhF0ALJ84M1z0DocV2Yz1fCJ2DRMdWjWL8JFZdG8L26+t0HJJ/RkCnqgWxcAJjTljON43YYU2un6i/8JLy577y2o5GuiRQbu0O2yvtkGzkvqzAB5boaBCl8YjAwXv67BiG13PpfR3iXFnnZxTGwK3NzGDP8P2aQs0K6E/D8LOujdgwAGCjGGXD4QV3Mj60rS9DuCWmpxZpmBrulj+SiS/5dByqdiLxBR6cwXwMwdBJj1TbvkT4XwqfiNzsAWgHhBP+Qvee8NzOCMCrOX/3FrJ2ARAj4oWA+Y5oq4Rwz77ubDnPAhbNmm5RGw3ET0k0dMpZsqkndKUhLctlpZAy6fiLzPzgw10cDogygwVS582kNEya9OhWcn4HoCFz3H1OmNggRgZ03E/bln3ksFNhWYl43sBvkeylpVsrkYYGSy6HzYxs+GopkGzEvobIGxvuKKaAAJ8BjKm7b7f7GzZvKZAyyX1twjYJluEiI8Jd6WL7qSIVkTDgLYfoDsAX0S/XNMwNCupvw1gLOrGMnoCZw3be0fGu9xzdBh61+/6JDPoN3ZHNwmcApoGLZfQ9xEh02gTkfzM203HezOSZ5l4diMuON2tVyb21qWXPznT7Y5dHeHprfSkaQSD65/jZHsS8jH43rTt7RUSLxN9ezkuvqis72Pg5hrvFJXdUWMWv4pkSkEDsB/AVpENWqZhfsB0vD2i+bkeXIIufZKALSt7eBocGzWdhdmwTFloYbltWSeih41i6aWwzY70bbgs5lfeROj61bV0gDUaSxfOFlbT/a+hLTZGO0y7NFGvyXzv+p5ACyYJfF0Y3KX1Q+zTWPqnUt2nvB0ADSCinUax9EItlB/61qU0P6jc9DcJAlu8DMBhn5EdctzvV/J1BLSlxh43bfe5apPHE/F+n7gC7NoowKpaBo4ycXao6H1X6+8kaABjl+m4T1t9cQP+OWBXyQD720M4phFnBwveweU5nQUNFW4YJ8LtYFzZELB/zAXiIGs45S+rL3UctCaBqo2ZJWjZ6sNRBU2UMtFc5Xxd+TBZQROFtqibB2MbczAf+YvK0fbpOPUCgLsBnHtUJfyV+I7DELEhBsoEdCtoEcFV5WrSJMApaAqaBAEJi5o0BU2CgIRFTZqCJkFAwqImTUGTICBhUZPWCmgSmWvOon7MROKSK2gKmgQBCYuaNAlofwELfexf+uvM4QAAAABJRU5ErkJggg=="
        },
        {
          text: "视频",
          cat: "video",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADRklEQVR4Xu2bS0wTURSG/zMSXwuNnYUbdWPRRCPGuNOdkMhKxYWJGx+JRqvGGF1hYnwsZKVGI4UYE8GF74BEFpLASjQGQQNEYjuVBQKhoVPklZZS5popKbYKadLpTO+F2+VM7z/nfPfOOTO9/QkLfNRq7SAMbGOM7QDRbgBbFvoup8f9YKyDiLqhoEc/W9gwX5z070HXA20DCvAYwH5OE8s2rCbEcSp8sbA/VSANgFoZOMaI1WZ7BRHGEaPj+nn302SscwDUh75ipijNIiRhNUYyjBL9wtYWUycBYM3d766Clct1q8IijY9HY+rY5e3hBABXVeAJGDshUgKWYyWqCXvcJ0mtCpQxxuosCwooQESHyVXpuwFSrgsYv/WQmXGTXJX+OhCVWVcTUIGxelKrtABj2Cxg+JZDJsJPcnk1ZllJYAEJQK4AeQvIGiCLoMBF3HLosgvILiC7gOwCsgtYLqUCCzjaBS7tWofTRWvRPhRFY+8kXmvjeUfnKADd405L+F3vBCrawvCNxPIGIq8AzKyHIzOoaNNR2zOWFwh5B5DM+pV/HJ6WoOMQuAFgZt43Po0zzUG0DUUdA8EVgGTW97+N4NZnZ7YpuARggvgRjmHvyz7bVwK3AJKZ73nRZ2uX4B5A5/AU9r35ZdtK4B7Al2AUpXVpO9o5hcE9gAMNA/g4GMlp0qli3ALoMGe+vh+Gza9qXAK49ikEb+dv22ad2xUwGjNwpHEQ7cEl+CBkvguYMz85bTgy88mLcHELlLcO41H3qKOJcwGgOzSVmPUPA/ZV+UxUHV0B1cXrUbJpNQYm4mgdjODe1xGEIjOZYrT1vKMAbM0kS3EJQG6MyI0RuTFi89N2ltXJoWGyCMoiKIugLIKyCDpUcLm8jOwCLq/mE9ARlqvV5Df/Lv8MREdzpSiUDmPPSfVq5Qy4LVTgOQqWgKtkGiSZgbc50hRKhhQcmjVNebX3i9AomWkymsLnCktnAcy6Re3bgMsUSj7Ox7HRdJH+NU4uAdfo3C/BKe7RdOvsEnCPprpGTSD/macTLtJVK+4sOiMlUU08MnXFdIumbY0tdPslDJXGzE6AikihItGcZaYjjBmsC2BdpCzr1D3u+vly/QP+xolkldjwQwAAAABJRU5ErkJggg=="
        },
        {
          text: "音频",
          cat: "audio",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAYAAACjgtGkAAABvUlEQVR4Xu2ZsU7DMBRF70tB8BMw0YnPKhU7nwOUH+BPgsLAgKiox3ZkKANLk4cqUalKG7dPjpsm3Cxd7No+ufdd2xEYn8/Bgxq7tKq5WGdLICViBEIgfhNRIVQIFWIKGlqGlqFlaJk1AtypluQQHUh/NDSPYZLsjsbWEDBP1joAgZTeGIEQiN/EVAgVQoWYrhBpGVqGlqFl1jXAnWrgfQiLKosqiyqLKouqxwVMGaZMvbfujF3GLmOXscvYPeLY/Yv9TBVZkiADkF09Dpe/Wx/rNqF132V2LHAD1H8HEvzRr2sKIZBgAm3/2G2tCVZgtAwV4teMxM71ug930S0TO9e7BsRakzbaE0jk43/TlqFCgglQIYe9IKJlAi+5rYpf7UOs/fZuf6wpo4oPEYwBcUDhoL0JThau+0AEUwHSQvEOgYPm7lxPJ5dPg9m2t9oZIAp8A0gFkgqKtzyHW/QSdz26+dpbzgDaCiSF4mX55iHyejafu4vnux/Lwqvatg5IHYv2/QeBlI//sXO97pShQmITiKWQqlzv39+6A68paDh7DTHmetDsGuhcCaSuXG9gTUFDroBEy/Wg2TXQ+Rd/3uwtglGQSgAAAABJRU5ErkJggg=="
        },
        {
          text: "压缩",
          cat: "compress",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABp0lEQVR4Xu1bMU7DQBCc9Q8snkFDAW6BB1ip4DsJ36GLTI9pAwVF8gxkXnCHzgLHhyJdlb2Td9JZOmV9492Z3b1bAYCvbbOpKqwAXIXn8/58X7fv9382hq7x57V38t8/ncP2YrXbyPdL8+A9nvVeoggAxu2K4FGGrtkDuLQIAIBDAEDZBX0fg+2fjs+yBuRO72MAGQCIt1e3Oznywc0rAVi+B/jeOXk75eZV5W8NeEA5KjAqQQ4SLCAPmBwwCwDAf+afBwRVgDK48DzAfCJEFSihGsyrAsZlkLVAhACLIXvVYJBB05kgZZAyaLwfQBmkDM4RcA5TV9hIS0yz2E3bKqAjFHWDLJwLxHnAfPtDZ+JcgABEiRA9YIaAqRD4vZOwDvsPUhjO6gmAJRI07wFDdx0dgNTtR28mBOKGiLlEKJ2eaq7IkAprbi9tiwDo3w9IfxXNFfQAeoD6PUFNB0/bYggwBBgC2neF03GpuYIcQA4gB5ADlAcmNCkubYskSBIkCZIESYJprlzuCqoAVUB9dLaocDpkGJ4uB4BxeDq8ju74fBEATOPzP3kPl7xqqFKMAAAAAElFTkSuQmCC"
        },
        {
          text: "文档",
          cat: "text",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFU0lEQVR4XuWbeYgcRRTGvzc2i+xGMYQlIiKGIOI/ighCECTxjiNrvdrtoBEPPPDAA2+DRxIVDzzwwINV8YirxM7MdGbXEOO1IoKICYiIKKIiiIhkES+E3ZknFTuyrNtHVfdMZnYK5q969b2vflRVd9VUEzKUcrm8uK+vb52IHA1gBREdmKFZ3pAvAPi1Wu3LvEJJ7SlNXCl1HBFNADg4LbYF9Z8DGKnVal+3QHuPZCIA3/cXzczM/N6q5Bl1P2s0GiP1ev2bjPFWYYkAmPkZAFdYKbYmeFepVPIrlcq3RcvHAlBKLSeillBP6ISZ70fNV09EnzabTT8Mw++LhBALQGvNIlItMlmaloisIqJnARwZE/vJ9PS0PzEx8UOaVtb6pBGwgYjWZxUqIs4AEJHdpVKpAuCIGM2PPc8bCYLgxyJyxgJg5o0A7ioiSVYNAyAMw0lmPgaAgbA8pu1HRORXq9WfsmrHxSWNgLuJ6M68CWza7wVg2gwPDx/bbDbNFDw8RuPDRqPh1+v1n21yzI1NWgPuEZE78ojbtp0NwLQ17yAAqkR0WIzWB57n+UEQ/GKba2980hS4F8DtrsIu7eYCiCAcT0RmOhwao/l+9Ma42yVn0hS4j4jWuYi6tpkPgNFi5hUAtgA4ZD5tEXnHQAjD8Ffb3Ekj4H4At9kK5omPA2A0tdYniIgZCUtjcuzo7+/3x8bGfrPxkATgAQC32ojljU0CEEE4UUTMSBiMybU9WhP+yOolaRF8UERuySpURFwagGhNWElEBsKSmOmwzTwdxsfH/8riKWkEPATgpiwiRcVkARBBOJmIAgCL58tNRONTU1NrJicn/07zlrQIPkxEN6YJFFmfFUAE4TQAQcLZxNbBwUF/dHR0Oslj0gh4BMANRXYwTcsGQPR0OMNAALAoRrsWrQmNuNxJAB4FcH2a6SLrbQFEC2NZRN4A0B8zHSrVatUHIPPWx3WAmR8DcF2RHUzTcgEQQRgCsFlE9o9ZGDeGYbjBFsDjAK5NM11kvSuAaE1QRLQZQN9cTyJiD0Ap9QQRXVNkB9O08gCIIAxHEPabncsJgNb6SRG5Os10kfXGaBF6RGS28f+tb04AlFJPEdFVRRja1xpOALTWT4vIlfvafBH5nQB00IlwbgauAMzh5OW5s3eAgCuAUQCXdYD/3BZcATwH4NLc2TtAwAmA1vp5EbmkA/zntuAEgJlfAHBx7uwdIOAEQCn1IhFd1AH+c1twAsDMLwG40CZ73lfZLLmUUuZEyJwEZy6uAF4GcEHmLGa/Gf2zY9PGNrZtALTWr4jI+TYGFxQAZn4VwHk9C0ApNUZEa3sWADO/BuDcXgbwOoBzLAEUsp9Py2l7b8H1KWCOl9akmemGelcA5qTVnKZ2fXEFYM7bR7q+9/++n9gfimqtt4jIcM8CYGZzPYV7FoDWuiYiyhLApGW8a/hKm4ZOU4CZQwBnWybac8vLpo1tbNv2Asy8FYD5yylzWWh7gXEAZ2Xu/ULbDTKzuSJf7lkAWus3ReTMngXAzNsArO5ZAEqp7UR0ug0AAC19Aszy0pbH4FsAzD2cri+u7wE7AJza9b3PsRd4W0RO6VkAzPwugJN6GcB7AFb1MgDz54PVatupsFwXwbbfFm8VwFKpVK5UKua95n8l6bL0WhEZa5WpduqKyLK4z+2S7gofBGAXES1rp9mic5mL09VqNXZXm/jlqFLKXD6sFW2qnXqe5y0JgmAqLmfqx9PMbE6GzQlxt5WvPM9bHQTBd0nGUwGYxkNDQ0s9z7tZRMxXXOZ3QIfSMB967ySinQMDA+s3bdr0Z5rPfwA1zRJu9KCrdwAAAABJRU5ErkJggg=="
        },
        {
          text: "其它",
          cat: "other",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD7ElEQVR4Xu1bTWhcVRT+vjdp6KIqmZlIK0WTN64MFktpBVNQsBgRpAtJUetCu3BRMRsXZt5EOi7mTReFIlVBoSj4BwZdCMV/dKHWv1hbSBDJm4loYyHzJi5EqJB35E2c8RnvNK/lUaczZ3Yz5557zvnuufeee84Zosc/7HH7oQCoB0QQGLCfvJlI7QFkJwVbugoccoHgV+DKNzXv8EzTttYWSA9P3UUGbwHY1FWGm4wRHPOr7kRIagCQyRUmIPJM1xseMVCAp+sVt8iM7dwJ4KMI7QuCryBY+aGbAAmYGrQsGRfBeNMuIUeZzjlHKHii4Q7ENDf2H1iaLf7eTcZHbcnmnDebIBA8zrTtvEHg/nCQWDJSny/PdavxoV2DQ84tgYVTqzZylpnh/Ccg7wi/+hW3J+KCjO1I6xZQANQDdAvoGaCHoN4Ceg1qHKCBkEaCGgrrW0AfQ/oa1Oew5gO6ORvUtC2xhMjVW4vp/v4/p0RkO8jTAWV62St/HgfErF3YL8QYRK4S4HSYoY3DF45J204xrF1A+ItlcabmlV6My9vIgieREUrfmL+JAWfXCg4ou9cDIZNz3oNgbC1vnFsoqnyLn3jE99yX44KQDAB2/gTBe/4jlPKO75X3tlMmY0/tAYIPTfRmrr4db7jyBA4ZeSUYq1cPfxAHhEQAyOScsxBcZxTYx63+j6WzJlo2V3hURF5oo+jbfsW9rz0A+dcJPmCkExO+5x67fADYThXAkEngBkuuPTdfXjLR0rZzgMBxEy2sS9Q8d19773FeAvCwmc7H/Erp+csJgFkZyrO+V368vRGTOwHrayMA4EO1Sum19ryFg4A8Z6D/JpaMxq1pJLIF/j5NvwRwa0sh4SmxsLfulX6+0EoY9zLxvu+5d6+3ghk7/yrA/dFxVoDtSwvu9+vxNumJARBOmB4ujIMyAuHsxvMbTiwuFv+Io8jAsLONwC5QNoW89aprPBiN22jIGbNS2CYBz9FamYuWu+PIThSAOAI7bYwCkEQg1GmrejH6qAeoB2h1WMvjzTNDGyS0QUIbJLRBQhsktEFCGyS0QUIbJMLIKE5a+mJeXZ06Vl+D/3oN2v9kWsWS2+rz5ZOdunJJ6DWQy49aws8acwlOhv8XcAHkV3+QTxnwwdpP7q9JCOvEOaKhP4GjvOb6yYG+Ps4B3NxQmFgE+LGIVDrRgEvVicAgwNsBGWnOkRJsbpTDs7nJHSLWt5c6+ZXIJ8J99WpputUPkL3B2SIphCWre69Eg+LrzJmA8tSy57676vBrPqE3AKkdgYi57hdfUkeNJLEQBPhuueqeiSrWEx0hF1oJBaCj/PR/UKbnPeAvxyYZfG00Q2YAAAAASUVORK5CYII="
        },
        {
          text: "上传",
          cat: "upload",
          data:
            "data:image/png;base64,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"
        }
      ],
      mobile: false
    };
  },
  created() {
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      this.mobile = true;
    }
  },
  methods: {
    getFile(item) {
      if (item.cat === "upload") {
        this.$router.push({
          name: "upload"
        });
        return;
      }
      this.$router.push({
        name: "content",
        params: { cat: item.cat, item }
      });
    }
  }
};
</script>

<style lang="scss">
#home {
  width: 100%;
  height: 100%;
  .main {
    .list {
      display: flex;
      flex-wrap: wrap;
      .list-box {
        width: 33.333%;
        .list-item {
          width: 20vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 5vw 0;
          img {
            margin-bottom: 8px;
          }
        }
      }
    }
  }
}

.img {
  width: 100%;
  max-width: 80px;
  transition: all 0.4s ease 0s;
}
.am:hover .img {
  transform: scale(1.2);
}
</style>
