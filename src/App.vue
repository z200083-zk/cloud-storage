<template>
  <div id="app">
    <div class="top">
      <div class="logo center" @click="toHome">
        <img class="logo-img" :src="logoImg.data" />
        <span>{{logoImg.text}}</span>
      </div>
      <div class="user center">
        <span>ZK</span>
        <!-- <img src alt="ZK" /> -->
      </div>
    </div>
    <div class="side-btn" @click="isSideShow = true" v-show="$route.path!='/'"></div>
    <transition name="sidean">
      <div class="side-page" v-show="isSideShow">
        <div class="side-page-list">
          <div class="side-page-item center" v-for="(item,i) in imgList" :key="i">
            <a class="side-page-item-a center" @click="getFile(item)">
              <img :src="item.data" />
              {{item.text}}
            </a>
          </div>
        </div>
      </div>
    </transition>
    <div class="side-show" @click="isSideShow = false" v-show="isSideShow"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoImg: {
        text: "云存储",
        data:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAC3ElEQVRYR9WYTUhUURTH/+c9ZSCfBtbMoCQEUTD3VUKFyygiF4GLCle1EfJjFy2CWgS1MYiIdmZBIEaIEK0igqAgioTcaDNaJEHi6HtPo2neQH7MPTHjBzo5vY8pfHPX//M/v3s47957HqGElUrptRXz8rRkagLoABHXgVEPggHQOBFPSMmjckEZ2N4Q/15CqrVQ8mtiW+IcgKtg6C48kmAMANk+LfppxIW+qMQz8M/kvp1qpdrNTO3eE/MUZ/l8dd34a++xyxGegOfndLGY5ccAGv0mzMVxVh73C+0aOA8redBlCzjuRy4thWvqP886CgsEroEzphhkoNVrguJ6GtYi8SNe/VwB26ZoA/DQq7mjnujWIvNAJWhai8RnHPVue9g2xEsQTrgx9K1hHgGoH1D6tehHo5iPY4VT03qTqvKQbxCPgURISokHisK9VeGx6cJwR+CMJbqY0eMxb8lyAiZkVl4oPE0cgdOG6CFCV8kEPg0Kj8CiwBkrVicldSoK2jl33W7hqlRJD+2IJza9OGxDbyTiawyc3ULGjakJcQKfzPX0hgqnzdhRAvUB2B0Y2BUQZtyojiaurwFnLL2FmR8BqAkabL4VCMlsSB7MA6fM2F4V9BZAOIiwq0wS1JYHzljiHjM6gwy78sE9IdvY3wySL4IOu8xHo2TP6nch+WJZADPmyDbFMwCnygKYsJAD/hrEY6xIASfJNsQvEEJlUWHwB0ob4gsR9pQDMDPuk23GXgF0rByAiZQWsi39EpjvBB6YeUSLjjXSj2TsUIVK7wLfx4zLWjRxO3/T2TPiJhRcCWyV8+OT2pwbndY9fsQQM5oCCD0LVvavznkbnpe2KThYwDSlReK71jP9MXH8+/8P/kpAoKdVkfiZwuhNR6SMpXcwowPgw/7SlRDF+EYKuqvCid7NXP46hKZN0aoArUwQzGig//G4Z7aIaFIyv1cU9fk2NfSGaodTxbb8G3qXDO7VXMoWAAAAAElFTkSuQmCC"
      },
      isSideShow: false,
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
      ]
    };
  },
  methods: {
    toHome() {
      if (this.$route.name === "home") {
        return;
      }
      this.$router.push({
        name: "home"
      });
    },
    getFile(item) {
      if (item.cat === this.$route.params.cat) {
        return;
      }
      if (item.cat === "upload") {
        this.$router.push({
          name: "upload"
        });
        this.isSideShow = false;
        return;
      }
      this.$router.push({
        name: "content",
        params: { cat: item.cat, item }
      });
      this.isSideShow = false;
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #1e90ff;
  box-sizing: border-box;
  padding-top: 6vh;
  position: relative;
  .top {
    width: 100%;
    height: 5vh;
    padding: 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    .logo {
      width: 90px;
      height: 100%;
      .logo-img {
        width: 30px;
      }
    }
    .user {
      height: 100%;
      img {
        width: 30px;
        height: 30px;
        border-radius: 20px;
      }
    }
  }
  .side-btn {
    width: 32px;
    height: 32px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAc0lEQVRYR2NkGGDAOMD2M4w6YFCFgAOd08MBkH3IIfCfzg4A2z2oHLCfziHgiB4CdLYfYt2gygWjITDgiXC0HBjwKBjNBaMh0EDnIADbN6iq4wEviOqhUYCrhgQ5ED3EKKlNMaKAzklgtD0wGgKjIQAJAQDuwA4ho53MBAAAAABJRU5ErkJggg==")
      no-repeat center;
    position: fixed;
    top: 8vh;
    left: 6%;
  }
  .side-page {
    width: 120px;
    height: 100%;
    position: fixed;
    background-color: #ffffffed;
    top: 0;
    left: 0;
    z-index: 3;
    .side-page-list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .side-page-item {
        width: 100%;
        height: 80px;
        .side-page-item-a {
          color: #000;
          img {
            width: 30px;
          }
        }
      }
    }
  }
  .side-show {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00000026;
    z-index: 2;
  }
  .sidean-enter,
  .sidean-leave-to {
    left: -135px;
  }
  .sidean-enter-to,
  .sidean-leave {
    left: 0;
  }
  .sidean-enter-active,
  .sidean-leave-active {
    transition: left 0.3s;
  }
}
</style>