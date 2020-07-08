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
};
