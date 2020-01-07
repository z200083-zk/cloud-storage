<template>
  <div id="home">
    <div class="main">
      <div class="list">
        <div class="list-box center" v-for="(item,i) in imgList" :key="i">
          <a class="list-item am" href="javascript:;" @click="getFile(item.cat)">
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
          text: "设置",
          cat: "set",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAErUlEQVR4Xu2bSc9NWRSGH0PhByAk+i4qMRAJSqKZaMOEEFSIvkyILkSCRIguTPSEVBEVNSFKM9EkukQMJERXKEkJfgCpocpbzlXnu/fsc3Z3m9x7d/KNvrXWXvvd6+y91rvX7USLj04tvn7aALQjoHoIjAGmApuAPsA7x6l6A38Bu4ArwD1HfSvx2J9AF2A9MAcYlPLgDLDIyqP/hU4DC1M6L4HfgL3AF0dbRvGYAKwD1gA9DLNtB7ZZOi65rQbZD8ABYJ+lrVyxWAAoRKdYOCQQfgXeGGT7AQtyFp9Wu5p8YhbTmkViAfAzcMjSk8/AWeA+cCfRGQuMBuYDXS3trAIOW8pW/RMYB9wKdcZRfzxw21GnQjxWBLQBaPUI0Im8NjQcHfX3A7p5gkasT0B39MAgT9yVX5XlGu4WIEotoMQkeCe8vP+WCyjx8h4xIuCr9+xxFIPWEKK8DDgWZw3BVpYDx32sFAGgDE9/z1LG5wETkwLHZ85q6ahwugGcS00wNMkWVZRljjwAVIioIGmGoUJMBVnFMAHQOdl1laTNMFSKKxr+KV+MCQDV8DubYeWpNWxOuIUOyzIB8LYBv/HQ/dAZ0dcmAmYAF0Nna1D9mcCltG9ZEXA+YXQadA1BbolRmlsEQC0Sm6cJx1fi+cQf6m9Y0PLslDtselYE6OQXHZXm4+xMF0t9ArYApwyii4EdQLdiU84SugbFSHUgZ/PygDxeznn2ZHJbTlAbYCtr44uRjyzKBGOB4FO5xaowc8nYIgBEUj524OlMuzEd+MNmq1Iy04DLjjrl4uIfh+eQsFbl8BFgRYAjL4AhnvrPgcGeulI7CqzM0y+KAOmKpv4lwAkxwLLhM0Shiyn2HT8lNLxR3waA0hOVrxNLck79Ipu6FU4WCeX8v/BJzgaAnsDfAU4U7kKO7dDo6wW8D/0EZgEXAgAQaeJ7hugbFtnhO2YDv4cCEHoIKuv7wXMFTwKzw+BDMNY16HMOhH7/wjz4GoyVCCkF7u4YBR8jpcTeiVDsdFRgyhmbEQv40lzGubNugf4JG6TDL/ZQSqwXJFNWqOxPLz7VeGTRYShW6HV6UVkA1KIcVnb4KPW6q8fVEYFZn+1mFZbD4gLFCTbjUL+RouD7yIoAERN3m3H1wI/lzVamTFAhmm5yagY8VF5XFFYmAGKfwo0AYOZ1aAJA7W46sU0dX42wIBcf1Fmmm6WivS6vGNKTt56+m2HoCT2zra6oGryWtL48TKGgu1oMTzXu6hCwFbFikNI5xkhAzVSTTYaLAMhzqJ6NEeV+eTdKhABQcqIWiVPeRgStIUg58aqejRLejRElRGMAIFv1eEzNfOx0PURiAXACUM1fyyGucGnohLEAaHeKtnqnaMtHwAZgt+X3WGqXvwk8SHRGARMc2+U3Anss5zSKxToDlDFOsnAm5g8mrudleBa+/CcSCwDZUj+BeERTZ1msn8zofV+2MtvebBceOw8o2VN73erketKzVGmIj9MjhcvQY0yal9S9r+v2YFa7m4vhtGzMCCj3Qc1W+vWY/gaUk5EWDouc/TP5pZh6ezo0N1noW4lUEwArB+ot1Aag3jtQ7/lbPgL+BWZjwEGn1GWiAAAAAElFTkSuQmCC"
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
    getFile(name) {
      this.$router.push({ name });
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
        width: 33.333vw;
        .list-item {
          width: 20vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 10vw 0;
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
