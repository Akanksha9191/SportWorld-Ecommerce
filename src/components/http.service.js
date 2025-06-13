import axios from "axios";

// create axios object with basic config
export const axiosHttp = axios.create({
    baseURL:"http://localhost:8888"
});

// create itercepter for request
axiosHttp.interceptors.request.use(
    // function that will be called for every outgoing request.
    (config)=>{
        const token = !!sessionStorage.getItem("accessToken") //removeItem('jwt').setitem('jtm'. 'sdasdasad)
        return{
            ...config, //it spread the existing config properties.
            headers: {
                ...(token && {'Authorization' : `Bearer ${sessionStorage.getItem("accessToken")}`}),
                ...config.headers, //existing headers
            }
        }
    },
    (error => {
        return Promise.reject(error)
    })
);

// glabal request for http request

export const Get = (urls, headers={})=>{
    return axiosHttp.get(urls, {headers})
}

export const Post = (urls, payload, headers={})=> axiosHttp.post(urls, payload, {headers})

export const Put = (urls, payload, headers={})=> axiosHttp.put(urls, payload, {headers})
 
export const Delete = (urls, headers={})=> axiosHttp.delete(urls, {headers})

export const Patch = (urls, payload, headers={}) => axiosHttp.patch(urls, payload, {headers})