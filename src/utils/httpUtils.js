const baseUrl = "https://51hui.xin/";
const ak = "";
export default class HttpUtils {
    post(url, params = null) {
        if (!params) {
            params = {};
        }
        params.ak = ak;
        return new Promise((resole, reject) => {
            fetch(baseUrl + url, {
                method: 'post',
                body: JSON.stringify(params)
            }).then(function (response) {
                let jsonData = response.json()
                resole(jsonData);
            }).catch(function (error) {
                console.log(error);
                reject(error);
            })
        });
    }

    get(url, params = null) {
        if (!params) {
            params = {};
        }
        params.ak = ak;
        return new Promise((resolve, reject) => {
            try {
                if (params) {
                    var lstParams = [];
                    Object.keys(params).forEach(function (key) {
                        lstParams.push(key + "=" + params[key]);
                    });
                    if (url.search(/\?/) === -1) {
                        url += "?" + lstParams.join('&');
                    } else {
                        url += "&" + lstParams.join('&');
                    }
                }
                fetch(baseUrl + url, {
                    method: 'get'
                }).then(response => {
                    let jsonData = response.json();
                    resolve(jsonData);
                }).catch(error => {
                    console.log(error);
                    reject(error);
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }
}