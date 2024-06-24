import {apiGet,apiPost} from './api';
export function getCode() {
    return new Promise((resolve, reject) => {
        apiGet("index.php/index/index/login").then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
//注册
export function setAccount(obj){
    return new Promise((resolve, reject) => {
        apiPost("index.php/index/index/register",obj).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}