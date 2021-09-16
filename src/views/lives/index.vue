<template>
  <div class="container">
    <div class="left">
      <div class="top">
        <div class="title">西安地铁保安拖拽女乘客事件</div>
        <div class="author">王萌萌 · 1 天前</div>
        <div class="describe">
          当地时间3月30日，斯洛伐克总统选举第二轮如期举行，投票时间为早上7点至晚上22点。截至当地时间3月31日凌晨1点05分，根据斯洛伐克国家统计局对99.96%的投票统计结果，进步斯洛伐克运动副主席卡普托娃以58.38
          %的得票率赢得总统选举，成为斯洛伐克历史上首位女总统。新当选总统将于6月15日就职。
        </div>
      </div>
      <div class="buttom">
        <div class="bLeft">
          <div class="timeBlock">
            <div class="time">09/03 今天</div>
            <ul>
              <li>
                <div class="title">
                  美官员称美国被新冠疫情打败 欧盟或拒绝美游客入境
                </div>
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
                <div class="title">
                  美官员称美国被新冠疫情打败 欧盟或拒绝美游客入境
                </div>
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
          <div class="timeBlock">
            <div class="time">09/03 今天</div>
            <ul>
              <li>
                <div class="title">
                  美官员称美国被新冠疫情打败 欧盟或拒绝美游客入境
                </div>
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
        </div>

        <div class="bRight">
          <div class="line">
            <span class="dot"></span>
          </div>
          <div class="timeLine">
            <span class="year">2020</span>
            <span class="month">9月</span>
            <span class="day">10日</span>
            <span class="year">2020</span>
            <span class="month">9月</span>
            <span class="day">10日</span>
            <span class="year">2020</span>
            <span class="month">9月</span>
            <span class="day">10日</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">观点</div>
      <div class="subTitle">正方</div>
      <div class="viewpoint">
        <ul>
          <li>
            <div class="commentInfo"><span class="name">name</span><span class="time">time</span></div>
            <div>content</div>
            <div class="handle">
                <span><i class="iconfont icon-good active"></i> [1]</span>
                <span><i class="iconfont icon-bad"></i> [2]</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="subTitle">反方</div>
      <div class="viewpoint"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.container {
  display: flex;
  height: 100%;
  overflow: auto;
}
.left {
  width: 68%;
  padding: 16px;
  min-height: 100%;
  border-right: 1px solid #eee;
  .top {
    .title {
      font-size: 32px;
      color: #000;
      letter-spacing: 1px;
      margin: 32px 0 16px;
    }
    .author {
      font-size: 12.8px;
      color: #8e8e93;
      margin-bottom: 12.8px;
    }
    .describe {
      margin-bottom: 14.4px;
      font-size: 14.4px;
      line-height: 21.6px;
    }
    border-bottom: 1px solid #eee;
  }
  .buttom {
    display: flex;
    .bLeft {
      padding: 16px;
      .timeBlock {
        .time {
          position: relative;
          font-size: 12.8px;
          font-weight: 700;
          line-height: 25px;
          color: #ff3b30;
          text-indent: 0;
          margin-bottom: 8px;
          &:before {
            content: "";
            position: absolute;
            left: -15px;
            top: 42%;
            width: 6px;
            height: 6px;
            border-radius: 3px;
            background: #ff3b30;
          }
        }
        ul {
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
    }
    .bRight {
      position: relative;
      .line {
        width: 2px;
        background-image: linear-gradient(#eee 33%, hsla(0, 0%, 100%, 0) 0);
        background-position: 0;
        background-size: 2px 3px;
        background-repeat: repeat-y;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        .dot {
          position: absolute;
          display: inline-block;
          left: 50%;
          //   display: none;
          top: 100px;
          width: 8px;
          height: 8px;
          background-color: #fff;
          border: 2px solid #ff3b30;
          border-radius: 8px;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          -webkit-transition: top 0.3s ease-in-out;
          transition: top 0.3s ease-in-out;
        }
      }
      .timeLine {
        display: flex;
        flex-direction: column;
        padding: 8px 16px;
        span {
          display: inline-block;
        }
        .year {
          font-size: 19.2px;
          font-weight: bolder;
          margin: 32px 0 0;
        }
        .month {
          font-size: 12px;
          font-weight: 400;
          color: #8e8e93;
          margin: 16px 0 8px;
        }
        .day {
          padding: 3px 0;
          font-size: 12.8px;
          cursor: pointer;
        }
      }
    }
  }
}
.right {
  min-height: 100%;
  padding: 16px;
  width: 32%;
  .title {
    font-size: 20px;
  }
  .subTitle{
      font-size: 14px;
      color: #736767;
      margin: 10px 0;
  }
  .viewpoint {
    height: 500px;
    border: 1px solid #eee;
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px;
    ul{
        li{
            border-bottom: 1px solid #eee;
            padding: 10px 0;
            .commentInfo{
                font-size: 14px;
                margin-bottom: 4px;
                .name{
                    color: orangered;
                }
                .time{
                    color: #8e8e93;
                }
            }
            .handle{
                font-size: 14px;
                margin-top: 8px;
                display: flex;
                justify-content: flex-end;
                span{
                    display: flex;
                    align-items: center;
                    margin-right: 4px;
                    /deep/ .iconfont{
                        font-size: 18px;
                    }
                }
                .active{
                    color: #ff3b30;
                }
            }
        }
    }
    .subTitle {
      font-size: 16px;
    }
  }
}
</style>