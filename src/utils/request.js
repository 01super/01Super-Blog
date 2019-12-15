import "whatwg-fetch";

//封装get请求
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    //拼接请求参数 url?key=value&key=value
    let paramsStr = "";
    let paramsArr = Object.entries(params);
    paramsArr.forEach(([key, value], index) => {
      paramsStr += `${key}=${encodeURIComponent(value)}`;
      if (index < paramsArr.length - 1) {
        paramsStr += "&";
      }
    });
    //发送get请求
    fetch(`${url}?${paramsStr}`, {
      //请求的配置
      method: "GET"
    })
      .then(response => response.json())
      //得到结果
      .then(data => {
        if (data.code === 0) {
          //'请求成功'
          resolve(data);
        } else {
          //请求失败
          console.log("请求失败");
        }
      })
      .catch(error => {
        //'请求失败'
        console.log("请求失败");
      });
  });
};

//封装post请求
export const post = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(data => {
        if (data.code === 0) {
          //请求成功
          resolve(data);
        } else {
          //请求失败
          console.log("请求失败");
        }
      })
      .catch(error => {
        //请求失败
        console.log("请求失败");
      });
  });
};

export default {
  get,
  post
};
