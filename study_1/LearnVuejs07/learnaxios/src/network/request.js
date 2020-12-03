import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })
    
    // 发送真正的网络请求
    return instance(config)   //create返回的直接就是promise，所以可以直接返回
}

// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 1. 创建axios实例
//         const instance = axios.create({
//             baseURL: 'http://152.136.185.210:7878/api/m5',
//             timeout: 5000
//         })
    
//         // 发送真正的网络请求
//         instance(config)
//         .then(res => {
//             resolve(res)
//         })
//         .catch(err => {
//             reject(err)
//         })
//     })
// }

// export function request(config, success, failure) {
//     // 1. 创建axios实例
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/m5',
//         timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config)
//     .then(res => {
//         // console.log(res);
//         success(res)
//     })
//     .catch(err => {
//         // console.log(err);
//         failure(err)
//     })
// }

// export function request(config) {
//     // 1. 创建axios实例
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/m5',
//         timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config.baseConfig)
//     .then(res => {
//         // console.log(res);
//         config.success(res)
//     })
//     .catch(err => {
//         // console.log(err);
//         config.failure(err)
//     })
// }