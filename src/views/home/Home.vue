<template>
  <div class="home" ref="home" :style="{'backgroundImage':'url('+getWeaImg+')'}">
    <home-header
      class="home-header"
      :showCity="showCity"
      :showTep="showTep"
      :showTepHigh="showTepHigh"
      :showTepMin="showTepMin"
      :showWea="showWea"
      :showAiLlevel="showAiLlevel"
    />
    <home-center
      class="home-center"
      :currentHours="currentHours"
      :weekWea="weekWea"
      :currentAirQuality="currentAirQuality"
      :currentPMten="currentPMten"
      :currentPMtf="currentPMtf"
      :currentNOtwo="currentNOtwo"
      :currentSOtwo="currentSOtwo"
      :currentOthree="currentOthree"
    />
    <div v-for="(item, index) in weekWea" :key="index">
      <!-- <h1>{{item}}</h1> -->
    </div>
    <home-footer class="home-footer" />
  </div>
</template>

<script>
import HomeHeader from "./HomeHeader";
import HomeCenter from "./HomeCenter";
import HomeFooter from "./HomeFooter";

import { getList } from "../../network/api";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      active: 0,
      appid: "37622862",
      appsecret: "5dyU8a0q ",
      version: "v9",
      cityid: "0",
      city: "上海",
      ip: "0",
      callback: "0",

      datalists: {}, //获取的数据
      currentHours: [], //当天的小时天气
      weekWea: [], //本周的天气数据
      currentAirQuality: String, //当天的空气质量

      currentPMten: String,
      currentPMtf: String,
      currentNOtwo: String,
      currentSOtwo: String,
      currentOthree: String,
      //xue、lei、shachen、wu、bingbao、yun、yu、yin、qing
      //获取天气的图片
      WeaImg: {
        yun: require("../../assets/gif/cloudy.gif"),
        yu: require("../../assets/gif/rain.gif"),
        xue: require("../../assets/gif/snow.gif"),
        lei: require("../../assets/gif/rain.gif"),
        bingbao: require("../../assets/gif/rain.gif"),
        yin: require("../../assets/gif/cloudy.gif"),
        qing: require("../../assets/gif/sunny.jpg"),
        wu: require("../../assets/gif/rain.gif")
      },
      // { yun: require("../../assets/gif/cloudy.gif") },
      // { xue: require("../../assets/gif/snow.gif") },
      // { lei: require("../../assets/gif/rain.gif") },
      // { wu: require("../../assets/gif/rain.gif") },
      // { bingbao: require("../../assets/gif/rain.gif") },
      // { yu: require("../../assets/gif/rain.gif") },
      // { yin: require("../../assets/gif/cloudy.gif") },
      // { qing: require("../../assets/gif/sunny.gif") }
      //当天天气状态 如 yu、lei、qing
      weaStatus: String,
      rainImg: require("../../assets/gif/rain.gif"),

      showCity: String, //显示城市
      showTep: String, //显示当天温度
      showTepHigh: String, //显示当天最高温度
      showTepMin: String, //显示当天最低温度
      showWea: String, //显示当天天气（晴天、阴天、小雨）
      showAiLlevel: String, //显示当天空气状态 如（优良）
      update_time: String, //更新时间
      currentTime: String //当前时间
    };
  },
  components: {
    HomeHeader,
    HomeCenter,
    HomeFooter
  },
  created() {
    getList({
      url: "/api",
      params: {
        appid: this.appid,
        appsecret: this.appsecret,
        version: this.version,
        cityid: this.cityid,
        city: this.city,
        ip: this.ip,
        callback: this.callback
      }
    }).then(res => {
      console.log(res.data);
      //显示城市
      this.showCity = res.data.city;
      //当天的空气质量
      //console.log(typeof res.data.aqi.no2);
      //console.log(res.data.aqi.no2);
      this.currentAirQuality = res.data.aqi.air;
      //获取当天的空气指标
      this.currentPMten = res.data.aqi.pm10;
      this.currentPMtf = res.data.aqi.pm25;
      this.currentNOtwo = res.data.aqi.no2;
      this.currentSOtwo = res.data.aqi.so2;
      this.currentOthree = res.data.aqi.o3;

      //显示当天温度
      //获取当前年月日
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let M = month < 10 ? "0" + month : month;
      let D = day < 10 ? "0" + day : day;
      let currentday = year + "-" + M + "-" + D;
      //赋值更新时间
      this.update_time = res.data.update_time;
      //赋值当前时间
      let datas = res.data.data;
      this.weekWea = datas;
      //只取当天的数据
      for (let i in datas) {
        if (currentday == datas[i].date) {
          let list = datas[i];
          //console.log(list);
          this.datalists = list;
          //获取当天温度
          this.showTep = datas[i].tem;
          //获取当天最高温度
          this.showTepHigh = datas[i].tem1;
          //获取当天最低温度
          this.showTepMin = datas[i].tem2;
          //获取当天的天气
          this.showWea = datas[i].wea;
          //获取wea_day_img  通过这个动态决定背景图片
          this.weaStatus = datas[i].wea_day_img;
          //console.log(datas[i].wea_day_img);
          //获取当天空气状态
          this.showAiLlevel = datas[i].air_level;
          this.currentHours = datas[i].hours;
        }
      }
    });
  },
  methods: {},
  computed: {
    //根据当天天气动态获取背景图片
    getWeaImg() {
      let status = this.weaStatus; //yu
      return this.WeaImg[status];
    }
  }
};
</script>


<style scoped>
.home {
  height: 100%;
  background-size: cover;
  z-index: 2;
  /* background-image: url("../../assets/gif/rain.gif"); */
}

.home::-webkit-scrollbar-y {
  display: none;
}

.home-header {
  height: 250px;
}
</style>
