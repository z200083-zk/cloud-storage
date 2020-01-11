import axios from "axios";

const http = axios.create({
    baseURL: 'https://m.z200083.xyz'
});

export const uploadFile = (formData) => {
    return http.post('/serve/upload', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export const getFileList = (cat) => {
    return http.get(`/serve/public?cat=${cat}`)
}
export const getFile = (cat, fileName) => {
    return (`https://m.z200083.xyz/media/${cat}/${fileName}?fileName=${fileName}`)
}