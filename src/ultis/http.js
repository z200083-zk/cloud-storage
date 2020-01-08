import axios from "axios";

const http = axios.create({
    baseURL: 'http://127.0.0.1:20083'
});

export const uploadFile = (formData) => {
    return http.post('/serve/upload', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export const getFileList = (cat)=>{
    return http.get(`/serve/public?cat=${cat}`)
}
export const getFileVideo = (cat)=>{
    return (`http://127.0.0.1:20083/video/${cat}?cat=${cat}`)
}
export const getFileImage = (cat)=>{
    return (`http://127.0.0.1:20083/image/${cat}?cat=${cat}`)
}