<template>
  <div id="home">
    <div class="top">
      <div class="logo center">
        <img class="logo-img" :src="logoImg.data" />
        <span>{{logoImg.text}}</span>
      </div>
      <div class="user">
        <span>ZK</span>
        <!-- <img src alt="ZK" /> -->
      </div>
    </div>
    <div class="main">
      <div class="list">
        <div class="list-box center" v-for="(item,i) in imgList" :key="i">
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
      logoImg: {
        text: "云存储",
        data:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAC3ElEQVRYR9WYTUhUURTH/+c9ZSCfBtbMoCQEUTD3VUKFyygiF4GLCle1EfJjFy2CWgS1MYiIdmZBIEaIEK0igqAgioTcaDNaJEHi6HtPo2neQH7MPTHjBzo5vY8pfHPX//M/v3s47957HqGElUrptRXz8rRkagLoABHXgVEPggHQOBFPSMmjckEZ2N4Q/15CqrVQ8mtiW+IcgKtg6C48kmAMANk+LfppxIW+qMQz8M/kvp1qpdrNTO3eE/MUZ/l8dd34a++xyxGegOfndLGY5ccAGv0mzMVxVh73C+0aOA8redBlCzjuRy4thWvqP886CgsEroEzphhkoNVrguJ6GtYi8SNe/VwB26ZoA/DQq7mjnujWIvNAJWhai8RnHPVue9g2xEsQTrgx9K1hHgGoH1D6tehHo5iPY4VT03qTqvKQbxCPgURISokHisK9VeGx6cJwR+CMJbqY0eMxb8lyAiZkVl4oPE0cgdOG6CFCV8kEPg0Kj8CiwBkrVicldSoK2jl33W7hqlRJD+2IJza9OGxDbyTiawyc3ULGjakJcQKfzPX0hgqnzdhRAvUB2B0Y2BUQZtyojiaurwFnLL2FmR8BqAkabL4VCMlsSB7MA6fM2F4V9BZAOIiwq0wS1JYHzljiHjM6gwy78sE9IdvY3wySL4IOu8xHo2TP6nch+WJZADPmyDbFMwCnygKYsJAD/hrEY6xIASfJNsQvEEJlUWHwB0ob4gsR9pQDMDPuk23GXgF0rByAiZQWsi39EpjvBB6YeUSLjjXSj2TsUIVK7wLfx4zLWjRxO3/T2TPiJhRcCWyV8+OT2pwbndY9fsQQM5oCCD0LVvavznkbnpe2KThYwDSlReK71jP9MXH8+/8P/kpAoKdVkfiZwuhNR6SMpXcwowPgw/7SlRDF+EYKuqvCid7NXP46hKZN0aoArUwQzGig//G4Z7aIaFIyv1cU9fk2NfSGaodTxbb8G3qXDO7VXMoWAAAAAElFTkSuQmCC"
      },
      imgList: [
        {
          text: "全部",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABACAYAAAC5vjEqAAACAUlEQVR4Xu2cMUvDUBSFzw3o0qURxEnQH+CkTXHSzQ6Ni+giTjo5OvgfHMQ/oIujHVRSQV3U9YGDg646CC7Sduim7ZN0EBctvJvgI5xMpXBO87739dKGpoIfR6cZrdq+VCH92Z/P5/m435e7IMBDGJvTPF/HtVvSYPe8OvER2H0A665FGeTORkd626Xa/VsGXZlVDAB1kujSAkuZtToWCXBVjk3NMZ5LTDrNaNNaHObS7lAqgq1y3Rw5RHOJSDuJjgFs5NLuVtoIY7PmFs0+Je1m9AyLqeyr3Rot8DoWm0m3dPap1CCbfa2uMYzNYDb6cHgJ6J/BPMLiOlw2O+l5ENAvuyHAezk24wT0h66B4ICAhryfCYiAdCOfBtEgGqQjQIN0/KSdzC3qKoqd9uY7j6+YCWjYDPJ153w5Lxo0zKB2UrnxZbd8PA9+kh5ukH9XFH0yiQbRIJ2PNIgG0SAdARqk48cZRINokI4ADdLx4wyiQTRIR4AG6fhxBtEgGqQjQIN0/DiDaBAN0hGgQTp+nEE0iAbpCNAgHT/OIBpEg3QEaJCOH2cQDaJBOgI0SMcvveu5C4uSrqa4aekkkbFApbhL1K1MWkm0K8CerqaY6cE9q+nSBv/6YnFSzGU6rkrwEtbN9Pcv7VsX8zP2s7cSBHbBsbIQMWvxFARyW66bRrqgL3VW3YrjbK6XAAAAAElFTkSuQmCC"
        },
        {
          text: "视频",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADRklEQVR4Xu2bS0wTURSG/zMSXwuNnYUbdWPRRCPGuNOdkMhKxYWJGx+JRqvGGF1hYnwsZKVGI4UYE8GF74BEFpLASjQGQQNEYjuVBQKhoVPklZZS5popKbYKadLpTO+F2+VM7z/nfPfOOTO9/QkLfNRq7SAMbGOM7QDRbgBbFvoup8f9YKyDiLqhoEc/W9gwX5z070HXA20DCvAYwH5OE8s2rCbEcSp8sbA/VSANgFoZOMaI1WZ7BRHGEaPj+nn302SscwDUh75ipijNIiRhNUYyjBL9wtYWUycBYM3d766Clct1q8IijY9HY+rY5e3hBABXVeAJGDshUgKWYyWqCXvcJ0mtCpQxxuosCwooQESHyVXpuwFSrgsYv/WQmXGTXJX+OhCVWVcTUIGxelKrtABj2Cxg+JZDJsJPcnk1ZllJYAEJQK4AeQvIGiCLoMBF3HLosgvILiC7gOwCsgtYLqUCCzjaBS7tWofTRWvRPhRFY+8kXmvjeUfnKADd405L+F3vBCrawvCNxPIGIq8AzKyHIzOoaNNR2zOWFwh5B5DM+pV/HJ6WoOMQuAFgZt43Po0zzUG0DUUdA8EVgGTW97+N4NZnZ7YpuARggvgRjmHvyz7bVwK3AJKZ73nRZ2uX4B5A5/AU9r35ZdtK4B7Al2AUpXVpO9o5hcE9gAMNA/g4GMlp0qli3ALoMGe+vh+Gza9qXAK49ikEb+dv22ad2xUwGjNwpHEQ7cEl+CBkvguYMz85bTgy88mLcHELlLcO41H3qKOJcwGgOzSVmPUPA/ZV+UxUHV0B1cXrUbJpNQYm4mgdjODe1xGEIjOZYrT1vKMAbM0kS3EJQG6MyI0RuTFi89N2ltXJoWGyCMoiKIugLIKyCDpUcLm8jOwCLq/mE9ARlqvV5Df/Lv8MREdzpSiUDmPPSfVq5Qy4LVTgOQqWgKtkGiSZgbc50hRKhhQcmjVNebX3i9AomWkymsLnCktnAcy6Re3bgMsUSj7Ox7HRdJH+NU4uAdfo3C/BKe7RdOvsEnCPprpGTSD/macTLtJVK+4sOiMlUU08MnXFdIumbY0tdPslDJXGzE6AikihItGcZaYjjBmsC2BdpCzr1D3u+vly/QP+xolkldjwQwAAAABJRU5ErkJggg=="
        },
        {
          text: "音频",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAYAAACjgtGkAAABvUlEQVR4Xu2ZsU7DMBRF70tB8BMw0YnPKhU7nwOUH+BPgsLAgKiox3ZkKANLk4cqUalKG7dPjpsm3Cxd7No+ufdd2xEYn8/Bgxq7tKq5WGdLICViBEIgfhNRIVQIFWIKGlqGlqFlaJk1AtypluQQHUh/NDSPYZLsjsbWEDBP1joAgZTeGIEQiN/EVAgVQoWYrhBpGVqGlqFl1jXAnWrgfQiLKosqiyqLKouqxwVMGaZMvbfujF3GLmOXscvYPeLY/Yv9TBVZkiADkF09Dpe/Wx/rNqF132V2LHAD1H8HEvzRr2sKIZBgAm3/2G2tCVZgtAwV4teMxM71ug930S0TO9e7BsRakzbaE0jk43/TlqFCgglQIYe9IKJlAi+5rYpf7UOs/fZuf6wpo4oPEYwBcUDhoL0JThau+0AEUwHSQvEOgYPm7lxPJ5dPg9m2t9oZIAp8A0gFkgqKtzyHW/QSdz26+dpbzgDaCiSF4mX55iHyejafu4vnux/Lwqvatg5IHYv2/QeBlI//sXO97pShQmITiKWQqlzv39+6A68paDh7DTHmetDsGuhcCaSuXG9gTUFDroBEy/Wg2TXQ+Rd/3uwtglGQSgAAAABJRU5ErkJggg=="
        },
        {
          text: "压缩",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABp0lEQVR4Xu1bMU7DQBCc9Q8snkFDAW6BB1ip4DsJ36GLTI9pAwVF8gxkXnCHzgLHhyJdlb2Td9JZOmV9492Z3b1bAYCvbbOpKqwAXIXn8/58X7fv9382hq7x57V38t8/ncP2YrXbyPdL8+A9nvVeoggAxu2K4FGGrtkDuLQIAIBDAEDZBX0fg+2fjs+yBuRO72MAGQCIt1e3Oznywc0rAVi+B/jeOXk75eZV5W8NeEA5KjAqQQ4SLCAPmBwwCwDAf+afBwRVgDK48DzAfCJEFSihGsyrAsZlkLVAhACLIXvVYJBB05kgZZAyaLwfQBmkDM4RcA5TV9hIS0yz2E3bKqAjFHWDLJwLxHnAfPtDZ+JcgABEiRA9YIaAqRD4vZOwDvsPUhjO6gmAJRI07wFDdx0dgNTtR28mBOKGiLlEKJ2eaq7IkAprbi9tiwDo3w9IfxXNFfQAeoD6PUFNB0/bYggwBBgC2neF03GpuYIcQA4gB5ADlAcmNCkubYskSBIkCZIESYJprlzuCqoAVUB9dLaocDpkGJ4uB4BxeDq8ju74fBEATOPzP3kPl7xqqFKMAAAAAElFTkSuQmCC"
        },
        {
          text: "文档",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFU0lEQVR4XuWbeYgcRRTGvzc2i+xGMYQlIiKGIOI/ighCECTxjiNrvdrtoBEPPPDAA2+DRxIVDzzwwINV8YirxM7MdGbXEOO1IoKICYiIKKIiiIhkES+E3ZknFTuyrNtHVfdMZnYK5q969b2vflRVd9VUEzKUcrm8uK+vb52IHA1gBREdmKFZ3pAvAPi1Wu3LvEJJ7SlNXCl1HBFNADg4LbYF9Z8DGKnVal+3QHuPZCIA3/cXzczM/N6q5Bl1P2s0GiP1ev2bjPFWYYkAmPkZAFdYKbYmeFepVPIrlcq3RcvHAlBKLSeillBP6ISZ70fNV09EnzabTT8Mw++LhBALQGvNIlItMlmaloisIqJnARwZE/vJ9PS0PzEx8UOaVtb6pBGwgYjWZxUqIs4AEJHdpVKpAuCIGM2PPc8bCYLgxyJyxgJg5o0A7ioiSVYNAyAMw0lmPgaAgbA8pu1HRORXq9WfsmrHxSWNgLuJ6M68CWza7wVg2gwPDx/bbDbNFDw8RuPDRqPh1+v1n21yzI1NWgPuEZE78ojbtp0NwLQ17yAAqkR0WIzWB57n+UEQ/GKba2980hS4F8DtrsIu7eYCiCAcT0RmOhwao/l+9Ma42yVn0hS4j4jWuYi6tpkPgNFi5hUAtgA4ZD5tEXnHQAjD8Ffb3Ekj4H4At9kK5omPA2A0tdYniIgZCUtjcuzo7+/3x8bGfrPxkATgAQC32ojljU0CEEE4UUTMSBiMybU9WhP+yOolaRF8UERuySpURFwagGhNWElEBsKSmOmwzTwdxsfH/8riKWkEPATgpiwiRcVkARBBOJmIAgCL58tNRONTU1NrJicn/07zlrQIPkxEN6YJFFmfFUAE4TQAQcLZxNbBwUF/dHR0Oslj0gh4BMANRXYwTcsGQPR0OMNAALAoRrsWrQmNuNxJAB4FcH2a6SLrbQFEC2NZRN4A0B8zHSrVatUHIPPWx3WAmR8DcF2RHUzTcgEQQRgCsFlE9o9ZGDeGYbjBFsDjAK5NM11kvSuAaE1QRLQZQN9cTyJiD0Ap9QQRXVNkB9O08gCIIAxHEPabncsJgNb6SRG5Os10kfXGaBF6RGS28f+tb04AlFJPEdFVRRja1xpOALTWT4vIlfvafBH5nQB00IlwbgauAMzh5OW5s3eAgCuAUQCXdYD/3BZcATwH4NLc2TtAwAmA1vp5EbmkA/zntuAEgJlfAHBx7uwdIOAEQCn1IhFd1AH+c1twAsDMLwG40CZ73lfZLLmUUuZEyJwEZy6uAF4GcEHmLGa/Gf2zY9PGNrZtALTWr4jI+TYGFxQAZn4VwHk9C0ApNUZEa3sWADO/BuDcXgbwOoBzLAEUsp9Py2l7b8H1KWCOl9akmemGelcA5qTVnKZ2fXEFYM7bR7q+9/++n9gfimqtt4jIcM8CYGZzPYV7FoDWuiYiyhLApGW8a/hKm4ZOU4CZQwBnWybac8vLpo1tbNv2Asy8FYD5yylzWWh7gXEAZ2Xu/ULbDTKzuSJf7lkAWus3ReTMngXAzNsArO5ZAEqp7UR0ug0AAC19Aszy0pbH4FsAzD2cri+u7wE7AJza9b3PsRd4W0RO6VkAzPwugJN6GcB7AFb1MgDz54PVatupsFwXwbbfFm8VwFKpVK5UKua95n8l6bL0WhEZa5WpduqKyLK4z+2S7gofBGAXES1rp9mic5mL09VqNXZXm/jlqFLKXD6sFW2qnXqe5y0JgmAqLmfqx9PMbE6GzQlxt5WvPM9bHQTBd0nGUwGYxkNDQ0s9z7tZRMxXXOZ3QIfSMB967ySinQMDA+s3bdr0Z5rPfwA1zRJu9KCrdwAAAABJRU5ErkJggg=="
        },
        {
          text: "其它",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD7ElEQVR4Xu1bTWhcVRT+vjdp6KIqmZlIK0WTN64MFktpBVNQsBgRpAtJUetCu3BRMRsXZt5EOi7mTReFIlVBoSj4BwZdCMV/dKHWv1hbSBDJm4loYyHzJi5EqJB35E2c8RnvNK/lUaczZ3Yz5557zvnuufeee84Zosc/7HH7oQCoB0QQGLCfvJlI7QFkJwVbugoccoHgV+DKNzXv8EzTttYWSA9P3UUGbwHY1FWGm4wRHPOr7kRIagCQyRUmIPJM1xseMVCAp+sVt8iM7dwJ4KMI7QuCryBY+aGbAAmYGrQsGRfBeNMuIUeZzjlHKHii4Q7ENDf2H1iaLf7eTcZHbcnmnDebIBA8zrTtvEHg/nCQWDJSny/PdavxoV2DQ84tgYVTqzZylpnh/Ccg7wi/+hW3J+KCjO1I6xZQANQDdAvoGaCHoN4Ceg1qHKCBkEaCGgrrW0AfQ/oa1Oew5gO6ORvUtC2xhMjVW4vp/v4/p0RkO8jTAWV62St/HgfErF3YL8QYRK4S4HSYoY3DF45J204xrF1A+ItlcabmlV6My9vIgieREUrfmL+JAWfXCg4ou9cDIZNz3oNgbC1vnFsoqnyLn3jE99yX44KQDAB2/gTBe/4jlPKO75X3tlMmY0/tAYIPTfRmrr4db7jyBA4ZeSUYq1cPfxAHhEQAyOScsxBcZxTYx63+j6WzJlo2V3hURF5oo+jbfsW9rz0A+dcJPmCkExO+5x67fADYThXAkEngBkuuPTdfXjLR0rZzgMBxEy2sS9Q8d19773FeAvCwmc7H/Erp+csJgFkZyrO+V368vRGTOwHrayMA4EO1Sum19ryFg4A8Z6D/JpaMxq1pJLIF/j5NvwRwa0sh4SmxsLfulX6+0EoY9zLxvu+5d6+3ghk7/yrA/dFxVoDtSwvu9+vxNumJARBOmB4ujIMyAuHsxvMbTiwuFv+Io8jAsLONwC5QNoW89aprPBiN22jIGbNS2CYBz9FamYuWu+PIThSAOAI7bYwCkEQg1GmrejH6qAeoB2h1WMvjzTNDGyS0QUIbJLRBQhsktEFCGyS0QUIbJMLIKE5a+mJeXZ06Vl+D/3oN2v9kWsWS2+rz5ZOdunJJ6DWQy49aws8acwlOhv8XcAHkV3+QTxnwwdpP7q9JCOvEOaKhP4GjvOb6yYG+Ps4B3NxQmFgE+LGIVDrRgEvVicAgwNsBGWnOkRJsbpTDs7nJHSLWt5c6+ZXIJ8J99WpputUPkL3B2SIphCWre69Eg+LrzJmA8tSy57676vBrPqE3AKkdgYi57hdfUkeNJLEQBPhuueqeiSrWEx0hF1oJBaCj/PR/UKbnPeAvxyYZfG00Q2YAAAAASUVORK5CYII="
        },
        {
          text: "设置",
          data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAErUlEQVR4Xu2bSc9NWRSGH0PhByAk+i4qMRAJSqKZaMOEEFSIvkyILkSCRIguTPSEVBEVNSFKM9EkukQMJERXKEkJfgCpocpbzlXnu/fsc3Z3m9x7d/KNvrXWXvvd6+y91rvX7USLj04tvn7aALQjoHoIjAGmApuAPsA7x6l6A38Bu4ArwD1HfSvx2J9AF2A9MAcYlPLgDLDIyqP/hU4DC1M6L4HfgL3AF0dbRvGYAKwD1gA9DLNtB7ZZOi65rQbZD8ABYJ+lrVyxWAAoRKdYOCQQfgXeGGT7AQtyFp9Wu5p8YhbTmkViAfAzcMjSk8/AWeA+cCfRGQuMBuYDXS3trAIOW8pW/RMYB9wKdcZRfzxw21GnQjxWBLQBaPUI0Im8NjQcHfX3A7p5gkasT0B39MAgT9yVX5XlGu4WIEotoMQkeCe8vP+WCyjx8h4xIuCr9+xxFIPWEKK8DDgWZw3BVpYDx32sFAGgDE9/z1LG5wETkwLHZ85q6ahwugGcS00wNMkWVZRljjwAVIioIGmGoUJMBVnFMAHQOdl1laTNMFSKKxr+KV+MCQDV8DubYeWpNWxOuIUOyzIB8LYBv/HQ/dAZ0dcmAmYAF0Nna1D9mcCltG9ZEXA+YXQadA1BbolRmlsEQC0Sm6cJx1fi+cQf6m9Y0PLslDtselYE6OQXHZXm4+xMF0t9ArYApwyii4EdQLdiU84SugbFSHUgZ/PygDxeznn2ZHJbTlAbYCtr44uRjyzKBGOB4FO5xaowc8nYIgBEUj524OlMuzEd+MNmq1Iy04DLjjrl4uIfh+eQsFbl8BFgRYAjL4AhnvrPgcGeulI7CqzM0y+KAOmKpv4lwAkxwLLhM0Shiyn2HT8lNLxR3waA0hOVrxNLck79Ipu6FU4WCeX8v/BJzgaAnsDfAU4U7kKO7dDo6wW8D/0EZgEXAgAQaeJ7hugbFtnhO2YDv4cCEHoIKuv7wXMFTwKzw+BDMNY16HMOhH7/wjz4GoyVCCkF7u4YBR8jpcTeiVDsdFRgyhmbEQv40lzGubNugf4JG6TDL/ZQSqwXJFNWqOxPLz7VeGTRYShW6HV6UVkA1KIcVnb4KPW6q8fVEYFZn+1mFZbD4gLFCTbjUL+RouD7yIoAERN3m3H1wI/lzVamTFAhmm5yagY8VF5XFFYmAGKfwo0AYOZ1aAJA7W46sU0dX42wIBcf1Fmmm6WivS6vGNKTt56+m2HoCT2zra6oGryWtL48TKGgu1oMTzXu6hCwFbFikNI5xkhAzVSTTYaLAMhzqJ6NEeV+eTdKhABQcqIWiVPeRgStIUg58aqejRLejRElRGMAIFv1eEzNfOx0PURiAXACUM1fyyGucGnohLEAaHeKtnqnaMtHwAZgt+X3WGqXvwk8SHRGARMc2+U3Anss5zSKxToDlDFOsnAm5g8mrudleBa+/CcSCwDZUj+BeERTZ1msn8zofV+2MtvebBceOw8o2VN73erketKzVGmIj9MjhcvQY0yal9S9r+v2YFa7m4vhtGzMCCj3Qc1W+vWY/gaUk5EWDouc/TP5pZh6ezo0N1noW4lUEwArB+ot1Aag3jtQ7/lbPgL+BWZjwEGn1GWiAAAAAElFTkSuQmCC"
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
  background-color: #1e90ff;
  .top {
    height: 48px;
    padding: 0 5vw;
    line-height: 48px;
    .logo {
      width: 90px;
      height: 100%;
      float: left;
      .logo-img {
        width: 30px;
      }
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
      // justify-content: space-between;
      flex-wrap: wrap;
      .list-box {
        // flex: 1;
        width: 33.333vw;
        .list-item {
          width: 20vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 10vw 0;
          img{
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
