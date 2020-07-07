<template>
  <div class="home-center">
    <div class="center-show">
      <!-- 显示当天每小时的天气 -->
      <div class="show-wea">
        <div class="wea-item" v-for="(item,index) in currentHours" :key="index">
          <div class="item-wea">{{item.hours}}</div>
          <div class="item-wea">
            <i class="icon iconfont icon-tianqi-yu"></i>
          </div>
          <div class="item-wea">{{item.tem}}°C</div>
        </div>
      </div>

      <!-- 显示近7天的天气数据 -->
      <div class="show-week">
        <div class="show-week-wea" v-for="(item,index) in weekWea" :key="index">
          <span class="week-wea-item">{{getMonth}}{{item.day}}</span>
          <span class="week-wea-item">
            <i class="icon iconfont icon-tianqi-yu"></i>
          </span>
          <span class="week-wea-item">
            <span style="padding-right:5px">{{item.tem1}}&degc</span>
            <span>/</span>
            <span style="padding-left:5px">{{item.tem2}}&degc</span>
          </span>
        </div>

        <div class="show-week-wea">
          <span class="week-wea-item">
            <a :href="WeaSrc">查看多天预报》</a>
          </span>
        </div>
      </div>

      <!-- 显示空气质量 跟 舒适度 -->
      <div class="show-air-confort">
        <!-- 显示空气质量 -->
        <div class="show-air-item">
          <div class="air-item">
            <span>空气质量</span>
            <span>更多></span>
          </div>
          <!-- v-for="(item,index) in currentAirQuality" :key="index" -->
          <div class="air-item">
            <div class="item-charts">
              <van-circle
                v-model="getCurrentRate"
                :rate="rate"
                :speed="speed"
                :text="currentAirQuality"
              />
            </div>
            <div class="item-describle">
              <ul class="ul-describle">
                <li class="li-describle">
                  <span>PM10</span>
                  <span>{{currentPMten}}</span>
                </li>
                <li class="li-describle">
                  <span>
                    PM
                    <sub>2.5</sub>
                  </span>
                  <span>{{currentPMtf}}</span>
                </li>
                <li class="li-describle">
                  <span>
                    NO
                    <sub>2</sub>
                  </span>
                  <span>{{currentNOtwo}}</span>
                </li>
                <li class="li-describle">
                  <span>
                    SO
                    <sub>2</sub>
                  </span>
                  <span>{{currentSOtwo}}</span>
                </li>
                <li class="li-describle">
                  <span>
                    O
                    <sub>3</sub>
                  </span>
                  <span>{{currentOthree}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 显示空气舒适度 -->
        <div class="show-confort-item">
          <div class="show-air-item">
            <div class="air-item">
              <span>舒适度</span>
              <span>更多></span>
            </div>
            <div class="air-item">
              <div class="item-charts">
                <van-circle
                  v-model="getCurrentRate"
                  :rate="rate"
                  :speed="speed"
                  :text="currentAirQuality"
                />
              </div>
              <div class="item-describle">
                <ul class="ul-describle">
                  <li class="li-describle">
                    <span>体感温度：</span>
                    <span>27°C</span>
                  </li>
                  <li class="li-describle">
                    <span>紫外线指数：</span>
                    <span>2 最弱</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Tabbar,
  TabbarItem,
  Grid,
  GridItem,
  Loading,
  Icon,
  Circle
} from "vant";

export default {
  name: "HomeCenter",
  props: {
    //取最近16小时的数据
    currentHours: {
      type: Array,
      default() {
        return [];
      }
    },
    //本周的天气数据
    weekWea: {
      type: Array,
      default() {
        return [];
      }
    }, //当天的空气质量
    currentAirQuality: String,
    currentPMten: String,
    currentPMtf: String,
    currentNOtwo: String,
    currentSOtwo: String,
    currentOthree: String,
    WeaSrc: "https://www.baidu.com/s?ie=UTF-8&wd=%E5%A4%A9%E6%B0%94"
  },
  data() {
    return {
      rate: 50,
      speed: 0,
      currentRate: 50,
      currentMonth: "" //当前月份
    };
  },
  components: {
    Tabbar,
    TabbarItem,
    Grid,
    GridItem,
    Icon,
    Circle
  },
  computed: {
    getMonth() {
      return (this.currentMonth = new Date().getMonth() + 1 + "月");
    },

    getCurrentRate() {
      return Number(this.currentAirQuality);
    }
  },
  mounted() {
    //console.log(this.currentMonth);
  },
  methods: {}
};
</script>

<style scoped>
@import "../../assets/icon/iconfont.css";
.home-center {
  height: 700px;
  /* background-image: url("../../assets/gif/rain.gif"); */
}

.center-show {
  height: 110px;

  /* background-color: rgb(89, 116, 147); */
  font-size: 11px;
  color: white;
}

.show-wea {
  height: 110px;
  display: flex;

  overflow-y: hidden;
  flex-wrap: nowrap;
}

.show-wea::-webkit-scrollbar {
  display: none;
}

.wea-item {
  padding: 0px 10px;
  white-space: nowrap;
  margin-top: 10px;
  width: 70px;
  line-height: 33px;
  text-align: center;
  /* background-color: blueviolet; */
  display: flex;
  flex-direction: column;
}

.item-wea {
  flex: 1;
}

.show-week {
  width: 100%;
  /* background-color: rgb(91, 120, 152); */
}
.show-week-wea {
  width: 80%;
  height: 30px;
  margin: 0 auto;

  line-height: 30px;
  display: flex;
  text-align: center;
  border-bottom: 1px solid rgb(118, 145, 173);
}

.week-wea-item {
  flex: 1;
}

.show-air-confort {
  width: 100%;
  /* background-color: rgb(118, 145, 173); */
}

.show-air-item {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.air-item:nth-child(1) {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.air-item:nth-child(2) {
  display: flex;
  margin-top: 30px;
}

/* .item-charts {
  float: left;
}
*/
.item-describle {
  margin-left: 40px;
}

.ul-describle {
}

.li-describle {
  padding: 3px;
  display: flex;
  justify-content: space-between;
}

.li-describle span {
  padding: 0px 5px;
}
</style>