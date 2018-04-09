/**
 * @param {string} url 接口地址
 * @param {string} method 
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @param 调用格式：
 *      get: fetch(url, 'get', {a:1,b:1})
 *      post: fetch(url,'post',{a:1,b:1})
 * @return 返回Promise
 */

const http: string = 'https://m.gomefinance.com.cn'

const getHeaders: object = {
    header: {
        'Content-Type': "application/json;charset=UTF-8",
    },
    credentials: 'same-origin',
}

const postHeaders: object = {
    header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    credentials: 'include'
}

interface netParams {
    url: string;
    method: string;
    params: any;
}

class netWrok implements netParams{

    public url: string;
    public method: string;
    public params: any;

    constructor(url: string, method: string, params: any) {
        this.url = url;
        this.method = method.toLowerCase();
        this.params = params;
    }

    // get参数格式化
    formatGetParam(): string {

        if (!this.params) {
            return this.url;
        }
        let paramsArray: Array<any> = [];
        
        Object.keys(this.params).forEach(key => paramsArray.push(key + '=' + this.params[key]))
        if (!this.url.includes('?')) {
            this.url += '?' + paramsArray.join('&')
        } else {
            this.url += '&' + paramsArray.join('&')
        }
        return this.url;
    }

    // post参数格式化
    formatPostParam(): string {
        
        let paramsArray: Array<any> = [];
        
        Object.keys(this.params).forEach(key => paramsArray.push(key + '=' + this.params[key]))
        return paramsArray.join('&')
    }

    async request(): Promise<any> {
        let date: string;
        let headers: object;

        if (this.method == 'GET') {
            headers = getHeaders;
            date = this.formatGetParam();
        } else {
            headers = postHeaders;
            date = this.formatPostParam();
        }
        
        const symbol = this.url.includes('?') ? '&' : '?';

        const res = await fetch(http + this.url + symbol + 't=' + new Date().valueOf(), {
            method: this.method,
            headers: { ...headers },
            body: date
        });
        return res.json();
    }
}

export default netWrok;