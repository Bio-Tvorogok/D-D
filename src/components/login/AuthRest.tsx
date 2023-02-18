import axios from 'axios';
import { RegisterData, LoginData } from './AuthType';

const URL = 'http://192.168.0.77:8080';

console.log(URL);
export function sendRegisterData(data: RegisterData) {
    return axios.put(URL + '/api/v1/register/', data);
}

export function sendLoginData(data: LoginData) {
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);

    return axios.post(URL + '/api/v1/login/token', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}
