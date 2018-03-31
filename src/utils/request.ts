/**
 * @param {string} url 接口地址
 * @param {string} method 
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */

const http: string = 'https://m.gomemyc.com/';

const getHeaders: object = {
    header: {
        'Content-Type': "application/json;charset=UTF-8",
    },
    credentials: 'same-origin',
}

const postHeaders: object = {
    header: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include'
}

interface netParams {
    url: string;
    method: string;
    params?: any;
}

class netWrok implements netParams{

    public url: string;
    public method: string;
    public params?: any;

    constructor(url: string, method: string, params?: any) {
        this.url = url;
        this.method = method.toUpperCase();
        this.params = params;
    }

    formatParam(): string {
        let paramsArray: Array<any> = [];
        
        Object.keys(this.params).forEach(key => paramsArray.push(key + '=' + this.params[key]))
        if (this.url.search(/\?/) === -1) {
            this.url += '?' + paramsArray.join('&')
        } else {
            this.url += '&' + paramsArray.join('&')
        }
        return this.url;
    }

    async request(): Promise<any> {

        const date = this.method == 'GET' ? null : JSON.stringify(this.params);
        const headers = this.method == 'GET' ? getHeaders : postHeaders;
        if (this.params) {
            this.formatParam();
        }
        const symbol = this.url.includes('?') ? '&' : '?';

        return new Promise((resolve, reject) => {
            fetch(http + this.url + symbol + new Date().valueOf(), {
                method: this.method,
                headers: { ...headers },
                body: date
            })
                .then(response => response.json())
                .then(responseData => resolve(responseData))
                .catch(err => reject(err));
        })
    }
}

export { netWrok };