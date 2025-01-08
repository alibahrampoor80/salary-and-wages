import axios from "axios";


let app = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 2000
})

const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch
}
export default http