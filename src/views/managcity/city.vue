<template>
  <div id="city">
    <div class="city-search">
      <!-- <slot name="left">
       
      </slot>-->
      <h1 style="color:red">{{$store.state.cityName}}</h1>
      <!-- <h2>{{d}}</h2>-->
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入城市"
          @search="onSearch"
          @cancel="onCancel"
        >
          <template #left>
            <van-icon name="arrow-left" size="24px" style="padding-right:5px" @click="returnSup" />
          </template>
        </van-search>
      </form>
    </div>
    <div class="notice">
      <van-notice-bar left-icon="volume-o" text="该项目的数据依据官网API，部分功能暂未实现，请谅解！" />
    </div>

    <div class="show-city">
      <van-index-bar :index-list="indexList">
        <van-index-anchor>热门</van-index-anchor>
        <div v-for="(item,index) in hotCity" :key="index">
          <van-cell :title="item.name" @click="showCity(item.name)" />
          <!-- <van-cell title="武汉" />
          <van-cell title="上海" />
          <van-cell title="深圳" />
          <van-cell title="成都" />-->
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { Search, NoticeBar, IndexBar, IndexAnchor, Icon } from "vant";

export default {
  name: "City",
  data() {
    return {
      value: "",
      indexList: [],
      hotCity: [
        { name: "北京" },
        { name: "上海" },
        { name: "深圳" },
        { name: "武汉" }
      ],
      //当前城市名称
      cityName: String
    };
  },
  components: { Search, NoticeBar, IndexBar, IndexAnchor },
  mounted() {},
  computed: {
    // d() {
    //   return this.$store.state.cityName;
    // }
  },
  methods: {
    //搜索城市
    onSearch() {
      return this.hotCity.filter(res => res.name.indexOf(this.value) !== -1);
    },
    onCancel() {},
    //返回上一级
    returnSup() {
      this.$router.go(-1);
    },
    //点击城市后 跳转主页，显示点击城市的天气数据
    showCity(name) {
      // this.cityName = name;
      // $store.state.cityName = name;
      this.$store.commit("showCityName", name);
      this.$store.dispatch("toggleCity");
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
/* .city-return {
  display: inline-block;
}

.city-search {
  display: inline-block;
} */
</style>