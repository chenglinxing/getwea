import { getList } from "../network/api";

export default {
  aupdateInfo(context, payload) {
    // setTimeout(() => {
    //   context.commit("updateInfo");
    //   console.log(payload);
    // }, 1500);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit("updateInfo");
        console.log(payload);

        resolve("11111111");
      }, 1500);
    });
  },

  toggleCity(context, payload) {
    // getList({
    //   url: "/api",
    //   params: {
    //     appid: "37622862",
    //     appsecret: "5dyU8a0q ",
    //     version: "v9",
    //     cityid: "0",
    //     city: context.state.cityName,
    //     ip: "0",
    //     callback: "0",
    //   },
    // }).then((res) => {
    //   console.log(res);
    // });
    // console.log(context.state.defaultCityName);
    getList({
      url: "/api",
      params: {
        appid: "37622862",
        appsecret: "5dyU8a0q ",
        version: "v9",
        cityid: "0",
        city: context.state.cityName,
        ip: "0",
        callback: "0",
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data.city);
      })
      .catch((err) => {
        console.log("失败");
      });
  },
};
