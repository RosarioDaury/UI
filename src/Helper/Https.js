export const helperHttps = () => {
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept : "application/json"
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.headers = options.headers ?{...defaultHeader, ...options.headers} : defaultHeader;

        options.method = options.method || "GET";

        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;


        return fetch(endpoint, options)
            .then((res) => 
                res.ok 
                ? res.json() 
                : Promise.reject({
                    err : true,
                    status : res.status || "00",
                    statusText : res.statusText || "Error occurred"
                })
            ).catch((err) => err)
    }

    const get = (endpoint, options = {}) => customFetch(endpoint,options);
    
    const post = (endpoint, options = {}) => {
        options.method = "POST";
        return customFetch(endpoint, options);
    }

    const put = (endpoint, options = {}) => {
        options.method = "PUT";
        return customFetch(endpoint, options);
    }

    const del = (endpoint, options = {}) => {
        options.method = "DELETE";
        return customFetch(endpoint, options);
    }

    return{get, post, put, del};
}