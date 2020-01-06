<template>
  <div id="app">
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
      }
    };
  }
};
</script>

<style lang="scss">
#app {
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
}
</style>