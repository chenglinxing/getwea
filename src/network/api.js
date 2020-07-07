import axios from "axios";

export function getList(config) {
  //2.创建实例http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz
  const instance = axios.create({
    baseURL: "http://www.tianqiapi.com",
    timeout: 5000,
  });
  //3.配置信息
  let con = {
    // params: {
    //   appid: "23035354",
    //   appsecret: "8YvlPNrz",
    //   version: "v9",
    // },
  };

  //     instance(config)
  //       .then((res) => {
  //         resolve(res);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });

  return instance(config);
}
