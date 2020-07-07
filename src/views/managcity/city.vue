<template>
  <div id="city">
    <div>
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入城市"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="notice">
      <van-notice-bar left-icon="volume-o" text="该项目的数据依据官网API，部分功能暂未实现，请谅解！" />
    </div>

    <div class="show-city">
      <van-index-bar :index-list="indexList">
        <van-index-anchor index="A">热门</van-index-anchor>
        <van-cell title="北京" />
        <van-cell title="武汉" />
        <van-cell title="上海" />
        <van-cell title="深圳" />
        <van-cell title="成都" />

        <van-index-anchor index="B">标题2</van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="北京" />
        <van-cell title="北京文本" />
        <van-cell title="成都" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="值" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { Search, NoticeBar, IndexBar, IndexAnchor } from "vant";

export default {
  name: "City",
  data() {
    return {
      value: "",
      indexList: [],
      hotCity: ["北京", "上海", "深圳", "武汉"]
    };
  },
  components: { Search, NoticeBar, IndexBar, IndexAnchor },
  mounted() {},
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>

<style scoped>
</style>