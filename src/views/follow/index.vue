<template>
  <div class="container">
    <div class="left">
      <ul>
        <li>
          <div class="left">
            <router-link to="/lives">
              <div class="title">
                三星Galaxy Z系列新品起售价7599元，折叠屏手机走向普及新时代？
              </div>
              <span class="info">
                <span>25分钟前·#学院改名大学</span>
                <span class="hotValue"
                  ><i class="iconfont icon-xindiantu01"></i>1</span
                >
              </span>
            </router-link>
          </div>
          <div class="right">media logo</div>
        </li>
        <li>
          <div class="left">
            <router-link to="/lives">
              <div class="title">
                三星Galaxy Z系列新品起售价7599元，折叠屏手机走向普及新时代？
              </div>
              <span class="info">
                <span>25分钟前</span>
                <span class="hotValue"
                  ><i class="iconfont icon-xindiantu01"></i>1</span
                >
              </span>
            </router-link>
          </div>
          <div class="right">img</div>
        </li>
        <li>
          <div class="left">
            <router-link to="/lives">
              <div class="title">
                三星Galaxy Z系列新品起售价7599元，折叠屏手机走向普及新时代？
              </div>
              <span class="info">
                <span>25分钟前</span>
                <span class="hotValue"
                  ><i class="iconfont icon-xindiantu01"></i>1</span
                >
              </span>
            </router-link>
          </div>
          <div class="right">img</div>
        </li>
      </ul>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "follow",
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100%;
}
.left {
  width: 68%;
  padding: 16px;
  min-height: 100%;
}
.right {
  min-height: 100%;
  border-left: 1px solid #eee;
}
.hotValue {
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 1px 8px;
  flex-shrink: 0;
  font-size: 12px;
  line-height: 17.6px;
  display: flex;
  align-items: center;
  float: left;
  margin-right: 10px;
}
ul {
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12.8px 0;
    border-bottom: 1px solid #eee;
    .left {
      padding: 0;
    }
    .right {
      border-left: none;
      width: 40px;
      margin-left: 8px;
      height: 40px;
    }
    a {
      font-size: 14.4px;
      color: #000;
      line-height: 18px;
      .title {
        margin-bottom: 8px;
      }
      .info {
        display: flex;
        align-items: center;
        color: #8e8e93;
        font-size: 12.8px;
        span {
          &:first-child {
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>