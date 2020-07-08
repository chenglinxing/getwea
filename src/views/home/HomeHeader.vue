<template>
  <div class="home-header-top">
    <div class="home-header-top">
      <van-icon class="top-icon" name="ellipsis" color="white" size="20px" @click="isChoose()" />
    </div>

    <div class="home-menu" ref="menu" v-show="isActive">
      <van-sidebar class="menu-sidebar" v-model="activeKey">
        <van-sidebar-item title="管理城市" @click="isShowCity()" />
        <van-sidebar-item title="桌面天气" />
        <van-sidebar-item title="反馈" />
      </van-sidebar>
    </div>

    <div class="home-header-center">
      <div class="center-item">{{showCity}}</div>
      <div class="center-item">
        <span>{{showTep}}</span>
        <sup>&degc</sup>
      </div>
      <div class="center-item">
        <span style="padding-right:5px">
          {{showTepHigh}}
          <sup>&degc</sup>
        </span>
        <span>/</span>
        <span style="padding-left:5px">
          {{showTepMin}}
          <sup>&degc</sup>
        </span>
      </div>
      <div class="center-item">
        <span>{{showWea}}</span>

        <span style="padding-left:15px">{{showAiLlevel}}</span>
      </div>
    </div>

    <div class="home-header-bottom">
      <span class="bottom-item">中国天气</span>
      <span class="bottom-item">
        <van-loading type="spinner" size="14px" style="display:inline;margin-left:195px;" />
      </span>
      <span class="bottom-item">正在刷新</span>
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
  Sidebar,
  SidebarItem
} from "vant";

export default {
  name: "HomeHeader",
  props: {
    showCity: "", //显示城市
    showTep: "", //显示当天温度
    showTepHigh: "", //显示当天最高温度
    showTepMin: "", //显示当天最低温度
    showWea: "", //显示当天天气（晴天、阴天、小雨）
    showAiLlevel: "", //显示当天空气状态 如（优良）
    update_time: "", //更新时间
    currentTime: "" //当前时间
  },
  data() {
    return {
      activeKey: 0,
      title: ["管理城市", "桌面天气", "反馈"],
      isActive: false
    };
  },
  components: {
    Tabbar,
    TabbarItem,
    Grid,
    GridItem,
    Icon,
    Sidebar,
    SidebarItem
  },
  mounted() {
    var show = document.getElementsByClassName("home-menu")[0];

    // this.$refs.menu.style.display = "none";
  },
  methods: {
    isChoose() {
      this.isActive = !this.isActive;
      //console.log(this.$route.path);
    },
    //点击管理城市 显示城市界面
    isShowCity() {
      this.$router.push("/city");
      // console.log(this.$route.path);
    }
  }
};
</script>

<style scoped>
.home-header {
  width: 100%;
  height: 250px;
  /* background-image: url("../../assets/gif/rain.gif"); */
  /* background-color: rgba(107, 122, 146); */
  color: #fff;
  font-size: 10px;
}

.home-menu {
  position: absolute;
  left: 70%;
}

.home-header-top {
  height: 40px;

  /* background-color: red; */
}

.home-header-center {
  height: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
}

.home-header-bottom {
  margin-top: 67px;
  height: 23px;
  text-align: center;
  display: flex;
  /* background-color: #f99; */
}

.top-icon {
  transform: rotate(90deg);
  float: right;
  padding: 7px;
}

.center-item {
  flex: 1;
}

.center-item:nth-child(2) {
  font-size: 30px;
}

.bottom-item {
  flex: 1;
}
</style>