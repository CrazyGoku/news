<template>
  <el-container style="height: 100%">
    <el-header height="55" class="header">
      <img src="../../assets/img/logo.jpeg" alt="" />
      <router-link :class="route === '/hot' && 'active'" to="/hot"
        >热点</router-link
      >
      <router-link :class="route === '/follow' && 'active'" to="/follow"
        >跟踪</router-link
      >
    </el-header>
    <el-container class="mainContainer">
      <el-aside class="aside">
        <router-link to="/hot"
          ><i :class="`iconfont icon-home ${route === '/hot' && 'active'}`"
        /></router-link>
        <router-link to="/search">
          <i :class="`iconfont icon-search ${route === '/search' && 'active'}`"
        /></router-link>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  watch: {},
  computed: {
    route() {
      return this.$route.path;
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="less" scoped>
.active {
  color: #ff3b30 !important;
}
.el-main {
  padding: 0;
}
.header {
  height: 55px;
  display: flex;
  padding-left: 24px;
  align-items: center;
  border-bottom: 1px solid #eee;
  img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    overflow: hidden;
  }
  a {
    color: #8e8e93;
    word-break: keep-all;
    font-size: 14px;
    color: #8e8e93;
    padding-left:40px;
  }
}

.mainContainer {
  // height: 100%;
  overflow: hidden;
  .aside {
    border-right: 1px solid #eee;
    width: 79px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    i {
      display: inline-block;
      margin: 16px 0;
      font-size: 20px;
      color: #8e8e93;
    }
  }
}
</style>