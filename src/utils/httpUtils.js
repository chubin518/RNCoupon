export default class httpUtils {
    post(url, params, callback) {
        fetch(url, {
            method: 'post',
            body: JSON.stringify(params)
        }).then(function (response) {
            response.json() //response => json
        }).then(function (response) {
            if (callback && typeof callback === 'function') {
                callback(response);
            }
        }).done();
    }
    get(url, params, callback) {
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
        fetch(url, {
            method: 'get'
        }).then(function (response) {
            response.json() //response => json
        }).then(function (response) {
            if (callback && typeof callback === 'function') {
                callback(response);
            }
        }).done();
    }
}