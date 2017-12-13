const baseUrl = "https://51hui.xin/";
// const ak = "c80f4d1344954832ae7f15aaebcb36e1";
const ak = "7405d6fa88b343e6adc01ae9ee3d31fb";
export default {
  post: function(url, params = null) {
    if (!params) {
      params = {};
    }
    params.ak = ak;
    return new Promise((resole, reject) => {
      fetch(baseUrl + url, {
        method: "post",
        body: JSON.stringify(params)
      })
        .then(function(response) {
          let jsonData = response.json();
          resole(jsonData);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  },

  get: function(url, params = null) {
    if (!params) {
      params = {};
    }
    params.ak = ak;
    return new Promise((resolve, reject) => {
      try {
        if (params) {
          var lstParams = [];
          Object.keys(params).forEach(function(key) {
            lstParams.push(key + "=" + params[key]);
          });
          if (url.search(/\?/) === -1) {
            url += "?" + lstParams.join("&");
          } else {
            url += "&" + lstParams.join("&");
          }
        }
  console.log(baseUrl+url);
        fetch(baseUrl + url, {
          method: "get"
        })
          .then(response => {
            let jsonData = response.json();
            resolve(jsonData);
          })
          .catch(error => {
            reject(error);
          });
      } catch (error) {
        reject(error);
      }
    });
  }
};
