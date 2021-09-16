<template>
  <div class="container">
    <div class="left">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <ul class="list">
        <li class="item">
          <img
            src="https://img-1256259474.cos.ap-shanghai.myqcloud.com/9f60e736b26511eb96b10242ac130006.jpeg"
            alt=""
          />
          <div>
            <div class="title">西安地铁保安拖拽女乘客事件</div>
            <div class="describe">
              日前，有网友发布视频称“地铁3号线一列车途径大雁塔车站时，有乘客呼喊‘救命’”的情况。视频中，一名身着黑色衣物的女子一边喊“救命”，一边试图往车厢内冲，并叫喊着“我身份证……”外侧则是地铁保安在试图控制该女子。
            </div>
            <div class="follow">
              <span class="hotValue"
                ><i class="iconfont icon-xindiantu01"></i>1</span
              >
              <router-link to="/lives">
                <time>3 小时前</time>
                <span>·</span>
                <span>西安地铁保安拖拽女乘客事件持续发酵 三大疑问待解 </span>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="right">
      <el-input
        class="searchInput"
        placeholder="搜索"
        v-model="searchKey"
        @keyup.enter.native="jumpToSearch"
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <div class="trend block">
        <h3 class="blockTitle">趋势</h3>
        <ul class="list">
          <li>
            <span>1.</span
            ><router-link to="/lives">109名在韩志愿军烈士回家</router-link>
          </li>
          <li>
            <span>2.</span
            ><router-link to="/lives">109名在韩志愿军烈士回家</router-link>
          </li>
          <li>
            <span>3.</span
            ><router-link to="/lives">109名在韩志愿军烈士回家</router-link>
          </li>
          <li>
            <span>4.</span
            ><router-link to="/lives">109名在韩志愿军烈士回家</router-link>
          </li>
          <li>
            <span>5.</span
            ><router-link to="/lives">109名在韩志愿军烈士回家</router-link>
          </li>
          <li>
            <span>6.</span
            ><router-link to="/lives">109名在韩志愿军烈士回家</router-link>
          </li>
          <li>
            <span>7.</span
            ><router-link to="/lives">109名在韩志愿军烈士回家</router-link>
          </li>
          <li>
            <span>8.</span
            ><router-link to="/lives">109名在韩志愿军烈士回家</router-link>
          </li>
        </ul>
      </div>
      <div class="follow block">
        <h3 class="blockTitle">跟踪</h3>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // item: []
      searchKey: "",
    };
  },
  methods: {
    jumpToSearch() {
      console.log(this.searchKey);
    },
  },
};
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.container {
  height: 100%;
  overflow-y: auto;
  display: flex;
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
.left {
  width: 68%;
  min-height: 100%;
  padding: 16px;
  .list {
    .item {
      border-bottom: 1px solid #eee;
      padding: 16px 0;
      display: flex;
      align-items: center;
      & > img {
        width: 180px;
        margin-right: 10px;
      }
      & > div {
        flex: 1;
        width: calc(100% - 190px);
      }
      .title {
        color: var(--text-color);
        font-size: 16px;
        font-weight: 700;
        margin: 0 0 8px;
      }
      .describe {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        color: #8e8e93;
        font-size: 14.4px;
        line-height: 26px;
        margin: 0 0 8px;
        -webkit-line-clamp: 3;
      }
      .follow {
        display: flex;
        align-items: center;

        a {
          color: #444;
          font-size: 12.8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
.right {
  padding: 16px;
  border-left: 1px solid #eee;
  min-height: 100%;
  width: 32%;
  .searchInput {
    margin-bottom: 16px;
  }
  .block {
    .blockTitle {
      font-size: 19.2px;
      font-weight: 700;
    }
  }
  .trend {
    margin-bottom: 32px;
    .list {
      margin: 8px 0;
      li {
        line-height: 25.6px;
        font-size: 14px;
        font-weight: 700;
        &:nth-child(-n + 3) {
          span {
            color: #ff3b30;
            font-size: 14px;
          }
        }
        span {
          display: inline-block;
          width: 14px;
          color: #8e8e93;
          font-size: 12px;
        }
        a {
          color: #444;
        }
      }
    }
  }
  .follow {
    ul {
      li {
        display: flex;
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
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
  }
}
</style>