<template>
  <div class="container">
    <h1 class="title">搜索</h1>
    <div class="search">
      <el-input
        placeholder="搜索新闻"
        v-model="searchKey"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <ul>
      <li>
        <div class="title">美官员称美国被新冠疫情打败 欧盟或拒绝美游客入境</div>
        <div class="describe">
          <div class="text">
            中新社记者廖攀摄美疾控官员称美国被疫情打败巴西亚马孙原住民感染情况严峻目前，美国新冠确诊病例已超234万，死亡病例超12万。据印度卫生部统计，截至当地时间24日8
          </div>
          <div class="logo">logo</div>
        </div>
        <div class="info">
          <a href="#">中国网</a>
          <span>06:12</span>
          <span>1688字</span>
        </div>
      </li>
      <li>
        <div class="title">美官员称美国被新冠疫情打败 欧盟或拒绝美游客入境</div>
        <div class="describe">
          <div class="text">
            中新社记者廖攀摄美疾控官员称美国被疫情打败巴西亚马孙原住民感染情况严峻目前，美国新冠确诊病例已超234万，死亡病例超12万。据印度卫生部统计，截至当地时间24日8
          </div>
          <div class="logo">logo</div>
        </div>
        <div class="info">
          <a href="#">中国网</a>
          <span>06:12</span>
          <span>1688字</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      searchKey: "",
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 16px;
  width: 68%;
  ul {
      padding-top: 20px;
    li {
      margin-bottom: 35.2px;
      .title {
        font-weight: 700;
        font-size: 16px;
        margin: 0 0 8px;
      }
      .describe {
        display: flex;
        align-items: center;
        .text {
          flex: 1 1;
          color: #8e8e93;
          font-size: 12.8px;
          line-height: 21.6px;
          margin-bottom: 3.2;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          margin-right: 10px;
        }
        margin-bottom: 10px;
      }
      .info {
        font-size: 12.8px;
        span {
          margin-left: 10px;
        }
      }
    }
  }
}
.title {
  font-size: 32px;
  margin-bottom: 20px;
}
.search {
  padding: 20px;
  border-bottom: 1px solid #eee;
}
</style>